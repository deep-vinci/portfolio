"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function HoverBubble({
    children,
    text = "open my github",
    href = "https://github.com/deep-vinci",
    className = "",
}: {
    children: React.ReactNode;
    text?: string;
    href?: string;
    className?: string;
}) {
    const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

    return (
        <div
            className={`relative cursor-pointer ${className}`}
            onMouseMove={(e) => {
                setPos({ x: e.clientX, y: e.clientY });
            }}
            onMouseLeave={() => setPos(null)}
            onClick={() => window.open(href, "_blank", "noopener,noreferrer")}
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
                        className="pointer-events-none fixed z-40 bg-[#f2f2f2] text-[#111111] text-xs font-mono font-bold tracking-wide px-3.5 py-2 shadow-lg shadow-black/50 whitespace-nowrap rounded-2xl rounded-bl-none origin-bottom-left"
                        style={{ left: pos.x + 5, top: pos.y - 40 }}
                    >
                        {text}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
