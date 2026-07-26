"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function HoverBubble({
    children,
    text = "open my github",
    href,
    className = "",
}: {
    children: React.ReactNode;
    text?: string;
    href?: string;
    className?: string;
}) {
    const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
    const [canHover, setCanHover] = useState(false);

    // Touch devices synthesise a single mousemove on tap, which would leave the
    // bubble stuck on screen with nothing to dismiss it. Only track pointers
    // that can actually hover.
    useEffect(() => {
        const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
        const sync = () => setCanHover(mq.matches);
        sync();
        mq.addEventListener("change", sync);
        return () => mq.removeEventListener("change", sync);
    }, []);

    const open = href
        ? () => window.open(href, "_blank", "noopener,noreferrer")
        : undefined;

    return (
        <div
            className={`relative ${href ? "cursor-pointer" : ""} ${className}`}
            role={href ? "link" : undefined}
            tabIndex={href ? 0 : undefined}
            onMouseMove={
                canHover
                    ? (e) => setPos({ x: e.clientX, y: e.clientY })
                    : undefined
            }
            onMouseLeave={canHover ? () => setPos(null) : undefined}
            onClick={open}
            onKeyDown={
                open
                    ? (e) => {
                          if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              open();
                          }
                      }
                    : undefined
            }
        >
            {children}

            <AnimatePresence>
                {pos && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.4, y: 6 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.6, y: 4 }}
                        transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 26,
                        }}
                        className="pointer-events-none fixed z-40 bg-[#f2f2f2] text-[#111111] text-sm font-mono font-bold tracking-wide px-3.5 py-2 shadow-lg shadow-black/50 max-w-[220px] rounded-2xl rounded-bl-none origin-bottom-left"
                        style={{
                            // Clamp so the bubble never pushes past the right
                            // edge on narrow windows
                            left: Math.min(
                                pos.x + 5,
                                window.innerWidth - 230,
                            ),
                            bottom: window.innerHeight - pos.y + 8,
                        }}
                    >
                        {text}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
