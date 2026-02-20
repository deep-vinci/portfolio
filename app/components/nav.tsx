"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
    const pathname = usePathname();

    const isHome = pathname === "/";
    // We only want to show the bottom styled fixed nav on the home page for a clean replication
    // For other pages, we can just render the original styled top nav or adapt it.
    // Given the prompt "replicate the ui of this site in my portfolio", let's apply this new bottom nav across the whole app or just leave it at the bottom.

    return (
        <div className="fixed bottom-0 left-0 w-full bg-[#181818]/60 backdrop-blur-md border-t border-[#2a2a2a] z-50">
            <div className="max-w-[1260px] mx-auto px-6 sm:px-8 py-3 lg:py-4 flex items-center justify-between">

                {/* Left Side Links */}
                <div className="flex items-center gap-6 lg:gap-10">
                    <Link href="/" className={`flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase transition-colors ${pathname === "/" ? "text-[#10b981]" : "text-white hover:text-gray-300"}`}>
                        <span className="flex items-center justify-center">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                        </span>
                        HOME
                    </Link>
                    <Link href="/projects" className={`flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase transition-colors ${pathname === "/projects" ? "text-[#10b981]" : "text-white hover:text-gray-300"}`}>
                        <span className="flex items-center justify-center">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                        </span>
                        WORK
                    </Link>
                    <Link href="/blog" className={`flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase transition-colors ${pathname === "/blog" ? "text-[#10b981]" : "text-white hover:text-gray-300"}`}>
                        <span className="flex items-center justify-center">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
                        </span>
                        CRAFT
                    </Link>
                </div>

                {/* Right Side Copyright */}
                <div className="hidden sm:flex items-center gap-2 text-[10px] sm:text-xs font-mono tracking-widest text-[#898989] uppercase font-semibold">
                    <span>2026 © deepvinci .</span>
                    <span className="flex items-center justify-center text-[#10b981]">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                    </span>
                    <span>THANKS FOR ATTENTION!</span>
                </div>
            </div>
        </div>
    );
}
