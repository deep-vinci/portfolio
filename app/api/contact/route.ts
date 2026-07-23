import { NextResponse } from "next/server";
import { Resend } from "resend";

const CONTACT_EMAIL = "deepakworkpc@gmail.com";

// Cloudflare Turnstile test secret (always passes) — replace via env in prod
const TURNSTILE_SECRET_KEY =
    process.env.TURNSTILE_SECRET_KEY ?? "1x0000000000000000000000000000000AA";

// --- Simple in-memory per-IP rate limiter ---
// Note: resets on server restart and is per-instance; fine for a portfolio.
const RATE_LIMIT = 5; // max submissions
const RATE_WINDOW_MS = 10 * 60 * 1000; // per 10 minutes
const hits = new Map<string, { count: number; windowStart: number }>();

function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const entry = hits.get(ip);

    if (!entry || now - entry.windowStart > RATE_WINDOW_MS) {
        hits.set(ip, { count: 1, windowStart: now });
        return false;
    }

    entry.count++;
    return entry.count > RATE_LIMIT;
}

// Periodically prune stale entries so the map can't grow unbounded
function pruneHits() {
    const now = Date.now();
    hits.forEach((entry, ip) => {
        if (now - entry.windowStart > RATE_WINDOW_MS) hits.delete(ip);
    });
}

async function verifyCaptcha(token: string, ip: string): Promise<boolean> {
    try {
        const res = await fetch(
            "https://challenges.cloudflare.com/turnstile/v0/siteverify",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    secret: TURNSTILE_SECRET_KEY,
                    response: token,
                    remoteip: ip,
                }),
            },
        );
        const data = await res.json();
        // Tokens are single-use: Cloudflare rejects any token seen before,
        // so a captured token can't be replayed for bulk submissions.
        return data.success === true;
    } catch {
        // Fail closed — if verification is unreachable, reject
        return false;
    }
}

export async function POST(request: Request) {
    const ip =
        request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
        "unknown";

    if (isRateLimited(ip)) {
        return NextResponse.json(
            { error: "Too many requests. Try again later." },
            { status: 429 },
        );
    }
    pruneHits();

    try {
        const body = await request.json();
        const { name, email, message, captchaToken } = body;

        if (
            typeof name !== "string" ||
            typeof email !== "string" ||
            typeof message !== "string" ||
            typeof captchaToken !== "string" ||
            !name.trim() ||
            !email.trim() ||
            !message.trim()
        ) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 },
            );
        }

        // Reject oversized payloads
        if (
            name.length > 200 ||
            email.length > 320 ||
            message.length > 5000 ||
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
        ) {
            return NextResponse.json(
                { error: "Invalid field values" },
                { status: 400 },
            );
        }

        // Captcha is mandatory — verified server-side, tokens are single-use
        if (!(await verifyCaptcha(captchaToken, ip))) {
            return NextResponse.json(
                { error: "Captcha verification failed" },
                { status: 403 },
            );
        }

        console.log("--- New contact form submission ---");
        console.log("From IP:", ip);
        console.log("Name:   ", name);
        console.log("Email:  ", email);
        console.log("Message:", message);
        console.log("-----------------------------------");

        if (!process.env.RESEND_API_KEY) {
            console.warn("RESEND_API_KEY not set — email not sent");
            return NextResponse.json({ success: true });
        }

        const resend = new Resend(process.env.RESEND_API_KEY);
        const { error: sendError } = await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: CONTACT_EMAIL,
            replyTo: email,
            subject: `Portfolio contact from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nIP: ${ip}\n\n${message}`,
        });

        if (sendError) {
            console.error("Resend error:", sendError);
            return NextResponse.json(
                { error: "Failed to send message" },
                { status: 502 },
            );
        }

        return NextResponse.json({ success: true });
    } catch {
        return NextResponse.json(
            { error: "Invalid request body" },
            { status: 400 },
        );
    }
}
