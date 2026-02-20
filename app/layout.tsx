import "./global.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
    title: {
        default: "deepvinci's Portfolio",
        template: "%s | deepvinci's Portfolio",
    },
    description: "This is my portfolio.",
    openGraph: {
        title: "deepvinci's Portfolio",
        description: "This is my portfolio.",
        url: "baseUrl",
        siteName: "deepvinci's Portfolio",
        locale: "en_US",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={cx(
                "dark text-white bg-[#0e0e0e]",
                GeistSans.variable,
                GeistMono.variable
            )}
        >
            <body className="antialiased w-full max-w-[1260px] mx-auto px-6 sm:px-8 mt-12 mb-24 overflow-x-hidden selection:bg-[#10b981] selection:text-white">
                <main className="flex-auto min-w-0 flex flex-col">
                    <Navbar />
                    {children}
                    <Analytics />
                    <SpeedInsights />
                </main>
            </body>
        </html>
    );
}
