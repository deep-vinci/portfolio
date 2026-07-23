"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";

declare global {
    interface Window {
        turnstile?: {
            render: (el: HTMLElement, opts: Record<string, unknown>) => string;
            remove: (widgetId: string) => void;
        };
    }
}

// Cloudflare Turnstile test key (always passes) — replace via env in prod
const TURNSTILE_SITE_KEY =
    process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "1x00000000000000000000AA";

function Turnstile({ onToken }: { onToken: (token: string) => void }) {
    const ref = useRef<HTMLDivElement>(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        let widgetId: string | undefined;
        let cancelled = false;

        const render = () => {
            if (cancelled || !ref.current || !window.turnstile) return;
            widgetId = window.turnstile.render(ref.current, {
                sitekey: TURNSTILE_SITE_KEY,
                theme: "dark",
                size: "normal",
                callback: onToken,
                "expired-callback": () => onToken(""),
            });
            // Reveal only once the widget's iframe has actually loaded its
            // content. The iframe is injected asynchronously after render()
            // returns, so watch for it, then wait for its load event.
            const el = ref.current;
            const hook = (iframe: HTMLIFrameElement) => {
                iframe.addEventListener("load", () => setLoaded(true), {
                    once: true,
                });
            };
            const existing = el.querySelector("iframe");
            if (existing) {
                hook(existing);
            } else {
                const observer = new MutationObserver(() => {
                    const iframe = el.querySelector("iframe");
                    if (iframe) {
                        observer.disconnect();
                        hook(iframe);
                    }
                });
                observer.observe(el, { childList: true, subtree: true });
            }
            // Fallback so the skeleton can never get stuck
            setTimeout(() => setLoaded(true), 5000);
        };

        if (window.turnstile) {
            render();
        } else {
            const existing = document.querySelector<HTMLScriptElement>(
                "script[data-turnstile]",
            );
            const script = existing ?? document.createElement("script");
            if (!existing) {
                script.src =
                    "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
                script.async = true;
                script.dataset.turnstile = "true";
                document.head.appendChild(script);
            }
            script.addEventListener("load", render);
        }

        return () => {
            cancelled = true;
            if (widgetId && window.turnstile) {
                window.turnstile.remove(widgetId);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="origin-left scale-[0.833]">
            {/* Wrapper is slightly smaller than the 300x65 widget and clips
                overflow, hiding the widget's own border on all sides */}
            <div className="relative w-[296px] h-[57px] rounded-xl overflow-hidden">
                <div
                    ref={ref}
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[calc(50%-2px)] transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
                />
                {/* Skeleton shown while the widget loads */}
                {!loaded && (
                    <div className="absolute inset-0 bg-[#101010] rounded-xl flex items-center justify-between pl-4 pr-3 animate-pulse">
                        {/* Left: check circle + "Success!" label */}
                        <div className="flex items-center gap-2.5">
                            <div className="w-[26px] h-[26px] rounded-full bg-white/10"></div>
                            <div className="w-[52px] h-3 rounded bg-white/10"></div>
                        </div>
                        {/* Right: CLOUDFLARE wordmark + cloud, privacy/help below */}
                        <div className="flex flex-col items-end gap-[3px] -mt-1">
                            <svg
                                width="32"
                                height="17"
                                viewBox="2 36 124 56"
                                aria-hidden="true"
                                className="mr-[-2px]"
                            >
                                <path
                                    fill="#F38020"
                                    d="M87.295 89.022c.763-2.617.472-5.015-.8-6.796-1.163-1.635-3.125-2.58-5.488-2.689l-44.737-.581c-.291 0-.545-.145-.691-.363s-.182-.509-.109-.8c.145-.436.581-.763 1.054-.8l45.137-.581c5.342-.254 11.157-4.579 13.192-9.885l2.58-6.723c.109-.291.145-.581.073-.872-2.906-13.158-14.644-22.97-28.672-22.97-12.938 0-23.913 8.359-27.838 19.952a13.35 13.35 0 0 0-9.267-2.58c-6.215.618-11.193 5.597-11.811 11.811-.145 1.599-.036 3.162.327 4.615C10.104 70.051 2 78.337 2 88.549c0 .909.073 1.817.182 2.726a.895.895 0 0 0 .872.763h82.57c.472 0 .909-.327 1.054-.8l.617-2.216z"
                                />
                                <path
                                    fill="#FAAE40"
                                    d="M101.542 60.275c-.4 0-.836 0-1.236.036-.291 0-.545.218-.654.509l-1.744 6.069c-.763 2.617-.472 5.015.8 6.796 1.163 1.635 3.125 2.58 5.488 2.689l9.522.581c.291 0 .545.145.691.363.145.218.182.545.109.8-.145.436-.581.763-1.054.8l-9.924.582c-5.379.254-11.157 4.579-13.192 9.885l-.727 1.853c-.145.363.109.727.509.727h34.089c.4 0 .763-.254.872-.654.581-2.108.909-4.325.909-6.614 0-13.447-10.975-24.422-24.458-24.422"
                                />
                            </svg>
                            <div className="w-[64px] h-[15px] rounded-sm bg-white/10"></div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default function ContactModal() {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [captchaToken, setCaptchaToken] = useState("");
    const [error, setError] = useState("");
    const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    const openModal = () => {
        setCaptchaToken("");
        setError("");
        setStatus("idle");
        setOpen(true);
    };

    const closeModal = () => setOpen(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (!captchaToken) {
            setError("Please complete the captcha first.");
            return;
        }

        setStatus("sending");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name,
                    email,
                    message,
                    captchaToken,
                }),
            });
            if (!res.ok) throw new Error("Request failed");

            setStatus("sent");
            setTimeout(() => {
                closeModal();
                setName("");
                setEmail("");
                setMessage("");
            }, 1200);
        } catch {
            setStatus("idle");
            setError("Something went wrong. Please try again.");
        }
    };

    return (
        <>
            <motion.button
                layoutId="contact-morph"
                onClick={openModal}
                className="bg-[#10b981] text-white px-5 py-2.5 rounded-full font-bold text-sm tracking-wide hover:bg-[#059669] transition-colors flex items-center gap-3 shadow-lg shadow-[#10b981]/20 cursor-pointer"
                style={{ opacity: open ? 0 : 1 }}
            >
                Get in touch
                <div className="flex items-center gap-1.5 bg-white/20 px-2 py-1 rounded-full">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                </div>
            </motion.button>

            {mounted &&
                createPortal(
                    <AnimatePresence>
                        {open && (
                            <>
                                {/* Backdrop */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onClick={closeModal}
                                    className="fixed inset-0 z-[90] bg-black/60"
                                />

                                {/* Modal */}
                                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 pointer-events-none">
                                    <motion.div
                                        layoutId="contact-morph"
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 30,
                                        }}
                                        className="pointer-events-auto w-full max-w-lg bg-[#161616]/95 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black/60 overflow-hidden"
                                    >
                                        <motion.div
                                            initial={{ opacity: 0, y: 8 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ delay: 0.15 }}
                                        >
                                            <div className="flex items-center justify-between mb-6">
                                                <h3 className="text-white text-xl font-bold tracking-tight">
                                                    Get in touch
                                                </h3>
                                                <button
                                                    onClick={closeModal}
                                                    aria-label="Close"
                                                    className="text-[#888] hover:text-white transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#1e1e1e]"
                                                >
                                                    <svg
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                    >
                                                        <line
                                                            x1="18"
                                                            y1="6"
                                                            x2="6"
                                                            y2="18"
                                                        />
                                                        <line
                                                            x1="6"
                                                            y1="6"
                                                            x2="18"
                                                            y2="18"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>

                                            {status === "sent" ? (
                                                <motion.div
                                                    initial={{
                                                        opacity: 0,
                                                        scale: 0.95,
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        scale: 1,
                                                    }}
                                                    className="py-10 flex flex-col items-center gap-3 text-center"
                                                >
                                                    <div className="w-12 h-12 rounded-full bg-[#10b981]/15 flex items-center justify-center">
                                                        <svg
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="#10b981"
                                                            strokeWidth="2.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <polyline points="20 6 9 17 4 12" />
                                                        </svg>
                                                    </div>
                                                    <p className="text-white font-bold">
                                                        Message sent!
                                                    </p>
                                                    <p className="text-[#888] text-sm">
                                                        I'll get back to you
                                                        soon.
                                                    </p>
                                                </motion.div>
                                            ) : (
                                                <form
                                                    onSubmit={handleSubmit}
                                                    className="flex flex-col gap-4"
                                                >
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                        <div>
                                                            <label className="block text-[#898989] text-xs font-mono tracking-widest uppercase mb-2">
                                                                Name
                                                            </label>
                                                            <input
                                                                type="text"
                                                                required
                                                                value={name}
                                                                onChange={(e) =>
                                                                    setName(
                                                                        e.target
                                                                            .value,
                                                                    )
                                                                }
                                                                placeholder="Your name"
                                                                className="w-full appearance-none border-0 bg-[#101010] rounded-xl px-4 py-3 text-sm text-white placeholder-[#555] outline-none focus:ring-1 focus:ring-[#10b981]/50 transition"
                                                            />
                                                        </div>
                                                        <div>
                                                            <label className="block text-[#898989] text-xs font-mono tracking-widest uppercase mb-2">
                                                                Email
                                                            </label>
                                                            <input
                                                                type="email"
                                                                required
                                                                value={email}
                                                                onChange={(e) =>
                                                                    setEmail(
                                                                        e.target
                                                                            .value,
                                                                    )
                                                                }
                                                                placeholder="you@example.com"
                                                                className="w-full appearance-none border-0 bg-[#101010] rounded-xl px-4 py-3 text-sm text-white placeholder-[#555] outline-none focus:ring-1 focus:ring-[#10b981]/50 transition"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <label className="block text-[#898989] text-xs font-mono tracking-widest uppercase mb-2">
                                                            What you need to
                                                            say?
                                                        </label>
                                                        <textarea
                                                            required
                                                            rows={4}
                                                            value={message}
                                                            onChange={(e) =>
                                                                setMessage(
                                                                    e.target
                                                                        .value,
                                                                )
                                                            }
                                                            placeholder="Tell me about your project, idea, or just say hi..."
                                                            className="w-full appearance-none border-0 bg-[#101010] rounded-xl px-4 py-3 text-sm text-white placeholder-[#555] outline-none focus:ring-1 focus:ring-[#10b981]/50 transition resize-none"
                                                        />
                                                    </div>

                                                    {/* Captcha */}
                                                    <Turnstile
                                                        onToken={
                                                            setCaptchaToken
                                                        }
                                                    />

                                                    {error && (
                                                        <p className="text-red-400 text-xs">
                                                            {error}
                                                        </p>
                                                    )}

                                                    <button
                                                        type="submit"
                                                        disabled={
                                                            status === "sending"
                                                        }
                                                        className="mt-2 bg-[#10b981] text-white py-3 rounded-xl font-bold text-sm tracking-wide hover:bg-[#059669] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                                                    >
                                                        {status === "sending"
                                                            ? "Sending..."
                                                            : "Send message"}
                                                    </button>
                                                </form>
                                            )}
                                        </motion.div>
                                    </motion.div>
                                </div>
                            </>
                        )}
                    </AnimatePresence>,
                    document.body,
                )}
        </>
    );
}
