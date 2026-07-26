"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export function Navbar() {
    const pathname = usePathname();

    const links = [
        {
            href: "/",
            label: "HOME",
            icon: (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            ),
        },
        {
            href: "/projects",
            label: "PROJECTS",
            icon: (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
            ),
        },
        {
            href: "/blog",
            label: "BLOGS",
            icon: (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
            ),
        },
    ];

    return (
        <div className="safe-bottom fixed left-1/2 -translate-x-1/2 z-50 max-w-[calc(100vw-1rem)]">
            <nav
                aria-label="Primary"
                className="relative overflow-hidden flex items-center gap-0.5 min-[400px]:gap-1 sm:gap-2 bg-[#161616]/95 backdrop-blur-xl rounded-full px-1.5 py-1.5 sm:px-2 sm:py-2 shadow-2xl shadow-black/60"
                style={{
                    backgroundImage:
                        "radial-gradient(120% 160% at 0% 0%, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 40%, transparent 70%)",
                }}
            >
                {links.map((link) => {
                    const active = pathname === link.href;
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            aria-label={link.label}
                            aria-current={active ? "page" : undefined}
                            className={`relative flex items-center gap-1.5 min-[400px]:gap-2 text-[10px] min-[400px]:text-xs font-mono font-bold tracking-wider min-[400px]:tracking-widest uppercase px-3 min-[400px]:px-4 sm:px-5 py-2.5 rounded-full transition-colors duration-300 ${
                                active
                                    ? "text-white"
                                    : "text-white hover:text-gray-300 hover:bg-white/5"
                            }`}
                        >
                            {active && (
                                <motion.span
                                    layoutId="nav-pill"
                                    className="absolute inset-0 bg-[#10b981] rounded-full"
                                    transition={{
                                        type: "spring",
                                        stiffness: 400,
                                        damping: 32,
                                    }}
                                />
                            )}
                            <span className="relative flex items-center justify-center">
                                {link.icon}
                            </span>
                            {/* Icons alone below ~340px so the pill never
                                outgrows a watch-sized viewport */}
                            <span className="relative hidden min-[340px]:inline">
                                {link.label}
                            </span>
                        </Link>
                    );
                })}

                {/* Copyright */}
                <div className="hidden lg:flex shrink-0 whitespace-nowrap items-center gap-2 text-[10px] font-mono tracking-widest text-[#898989] uppercase font-semibold border-l border-[#2e2e2e] pl-4 pr-3 ml-1">
                    <span>2026 © deepvinci</span>
                    <span className="flex items-center justify-center text-[#10b981]">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                    </span>
                </div>
            </nav>
        </div>
    );
}
