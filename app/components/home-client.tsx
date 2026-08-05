"use client";

import { motion } from "motion/react";
import HoverBubble from "./heatmap-hover";
import ContactModal from "./contact-modal";

export default function HomeClient({
    children,
}: {
    children?: React.ReactNode;
}) {
    return (
        <>
            {/* Top Fixed Header replicating the image */}
            <div className="safe-top fixed top-0 left-0 w-full z-50 bg-[#0e0e0e]/80 backdrop-blur-md">
                <div className="page-shell w-full max-w-[1260px] mx-auto py-3 sm:py-4 flex justify-between items-center gap-2">
                <div className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-full overflow-hidden border border-[#2a2a2a]">
                    <img
                        src="/pfp.jpg"
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex items-center gap-2 min-[400px]:gap-3 sm:gap-5 min-w-0">
                    {/* shrink-0: the pill clips its own overflow, so letting
                        flex compress it would silently cut the label off */}
                    <div className="flex shrink-0 items-center bg-white rounded-full shadow-lg shadow-black/20 overflow-hidden">
                        <motion.a
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            href="/cv"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="View resume (opens in new tab)"
                            className="text-black pl-3 pr-2.5 py-2 min-[400px]:pl-5 min-[400px]:pr-4 min-[400px]:py-2.5 font-bold text-[11px] min-[400px]:text-sm tracking-wide hover:bg-gray-200 transition-colors flex items-center gap-1.5 min-[400px]:gap-2 whitespace-nowrap"
                        >
                            {/* Watch-class widths cannot fit "Resume" next to
                                the contact CTA — abbreviate rather than clip */}
                            <span className="min-[240px]:hidden">CV</span>
                            <span className="hidden min-[240px]:inline">
                                Resume
                            </span>
                            {/* External-link arrow: opens in new tab, doesn't download */}
                            <svg
                                className="w-2.5 h-2.5 min-[400px]:w-3 min-[400px]:h-3"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                            >
                                <line x1="7" y1="17" x2="17" y2="7" />
                                <polyline points="8 7 17 7 17 16" />
                            </svg>
                        </motion.a>
                        {/* Separate download affordance is a nicety — dropped
                            below 480px, where the Resume link (which opens the
                            same PDF) is all that fits. */}
                        <span
                            className="hidden min-[480px]:block w-px h-5 bg-gray-300"
                            aria-hidden="true"
                        ></span>
                        <motion.a
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            href="/Deepak_Jha_Resume_jun.pdf"
                            download="Deepak_Jha_Resume.pdf"
                            aria-label="Download resume as PDF"
                            title="Download PDF"
                            className="hidden min-[480px]:flex text-black px-3.5 py-3 hover:bg-gray-200 transition-colors items-center"
                        >
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                            >
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="7 10 12 15 17 10" />
                                <line x1="12" y1="15" x2="12" y2="3" />
                            </svg>
                        </motion.a>
                    </div>
                    <ContactModal />
                </div>
                </div>
            </div>

            <motion.section
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 sm:gap-10 lg:gap-16 xl:gap-20 items-start w-full relative min-w-0"
            >
                {/* Left Column */}
                {/* min-h (not h) so a short viewport lets the column grow
                    instead of spilling its content out of the sticky box */}
                <div className="flex flex-col min-w-0 lg:sticky lg:top-24 lg:min-h-[calc(100vh-120px)] justify-between mt-8 sm:mt-10 pb-6 sm:pb-10">
                    {/* Meta details */}
                    {/*<div className="grid grid-cols-[120px_1fr] md:grid-cols-[140px_1fr] gap-x-4 gap-y-3 text-sm text-[#898989] uppercase tracking-wider font-mono">
                        <span>TIMEZONE</span>{" "}
                        <span className="text-[#e2e2e2] normal-case">
                            UTC +5:30
                        </span>
                        <span>LOCATION</span>{" "}
                        <span className="text-[#e2e2e2] normal-case">
                            India/
                        </span>
                        <span>ROLE</span>{" "}
                        <span className="text-[#e2e2e2] normal-case">
                            Android & Fullstack Dev
                        </span>
                        <span>SKILLSET</span>{" "}
                        <span className="text-[#e2e2e2] normal-case">
                            React, Next.js, Java, Python
                        </span>
                    </div>*/}
                    <div>
                        <h3 className="text-base min-[360px]:text-lg sm:text-xl font-bold font-mono tracking-wider sm:tracking-widest uppercase mb-4 sm:mb-6 text-white">
                            FIELDS OF WORK
                        </h3>
                        <p className="text-[#a0a0a0] text-sm min-[360px]:text-base md:text-lg leading-relaxed font-light">
                            I bridge the gap between complex backends and
                            intuitive mobile & web interfaces.
                        </p>
                    </div>

                    {/* Mobile: stacked two-tier layout */}
                    {/* Mobile: stacked two-tier layout */}
                    <div className="sm:hidden flex flex-col gap-4 mb-8 mt-4 items-center w-full">
                        {/* Browser screenshots row */}
                        <div className="flex gap-3 justify-center w-full">
                            <div className="w-[48%] aspect-[16/10] bg-[#1a1a1a] border border-[#2e2e2e] rounded-xl shadow-2xl flex flex-col overflow-hidden">
                                <div className="w-full h-5 flex-shrink-0 border-b border-[#2e2e2e] flex items-center px-2 gap-1 bg-[#141414]">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#3a3a3a]"></div>
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#3a3a3a]"></div>
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#3a3a3a]"></div>
                                </div>
                                <div
                                    className="w-full flex-1 bg-cover bg-top"
                                    style={{
                                        backgroundImage:
                                            "url('/proj-img/campusmap.png')",
                                    }}
                                ></div>
                            </div>
                            <div className="w-[48%] aspect-[16/10] bg-[#222222] border border-[#363636] rounded-xl shadow-2xl flex flex-col overflow-hidden">
                                <div className="w-full h-5 flex-shrink-0 border-b border-[#363636] flex items-center px-2 gap-1 bg-[#1c1c1c]">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#4a4a4a]"></div>
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#4a4a4a]"></div>
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#4a4a4a]"></div>
                                </div>
                                <div
                                    className="w-full flex-1 bg-cover bg-top"
                                    style={{
                                        backgroundImage:
                                            "url('/proj-img/gitview.png')",
                                    }}
                                ></div>
                            </div>
                        </div>

                        {/* Phone screenshots row */}
                        <div className="flex gap-3 justify-center w-full px-2">
                            <div className="w-[23%] aspect-[1/2] bg-black border-[2px] border-[#2a2a2a] rounded-[12px] shadow-2xl overflow-hidden">
                                <div
                                    className="w-full h-full bg-cover bg-center"
                                    style={{
                                        backgroundImage:
                                            "url('/proj-phone/1.jpeg')",
                                    }}
                                ></div>
                            </div>
                            <div className="w-[23%] aspect-[1/2] bg-black border-[2px] border-[#2a2a2a] rounded-[12px] shadow-2xl overflow-hidden">
                                <div
                                    className="w-full h-full bg-cover bg-center"
                                    style={{
                                        backgroundImage:
                                            "url('/proj-phone/image.png')",
                                    }}
                                ></div>
                            </div>
                            <div className="w-[23%] aspect-[1/2] bg-black border-[2px] border-[#2a2a2a] rounded-[12px] shadow-2xl overflow-hidden">
                                <div
                                    className="w-full h-full bg-cover bg-center"
                                    style={{
                                        backgroundImage:
                                            "url('/proj-phone/image copy.png')",
                                    }}
                                ></div>
                            </div>
                            <div className="w-[23%] aspect-[1/2] bg-black border-[2px] border-[#2a2a2a] rounded-[12px] shadow-2xl overflow-hidden">
                                <div
                                    className="w-full h-full bg-cover bg-center"
                                    style={{
                                        backgroundImage:
                                            "url('/proj-phone/image copy 2.png')",
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                    {/* Desktop sm+: fanned layout */}
                    {/* The fanned stack spans ~452px; the two-column lg layout
                        gives the left column less than that until xl, so it is
                        scaled rather than allowed to spill. */}
                    <div className="hidden sm:flex relative h-[260px] w-full mb-8 lg:mb-12 mt-4 justify-center items-center lg:scale-[0.85] xl:scale-100">
                        {/* Desktop Card 1 - Left/Back */}
                        <div className="group absolute w-[252px] h-[158px] transform -rotate-[12deg] -translate-x-[100px] -translate-y-9 hover:z-[60]">
                        <div className="w-full h-full bg-[#1a1a1a] border border-[#2e2e2e] rounded-xl shadow-2xl group-hover:translate-y-4 transition duration-500 ease-out flex flex-col items-center justify-start overflow-hidden">
                            <div className="w-full h-6 flex-shrink-0 border-b border-[#2e2e2e] flex items-center px-2 gap-1.5 bg-[#141414]">
                                <div className="w-2 h-2 rounded-full bg-[#3a3a3a]"></div>
                                <div className="w-2 h-2 rounded-full bg-[#3a3a3a]"></div>
                                <div className="w-2 h-2 rounded-full bg-[#3a3a3a]"></div>
                            </div>
                            <div
                                className="w-full flex-1 bg-cover bg-top"
                                style={{
                                    backgroundImage:
                                        "url('/proj-img/campusmap.png')",
                                }}
                            ></div>
                        </div>
                        </div>

                        {/* Desktop Card 2 - Right/Back */}
                        <div className="group absolute w-[252px] h-[158px] transform rotate-[12deg] translate-x-[100px] -translate-y-9 z-10 hover:z-[60]">
                        <div className="w-full h-full bg-[#222222] border border-[#363636] rounded-xl shadow-2xl group-hover:translate-y-4 transition duration-500 ease-out flex flex-col items-center justify-start overflow-hidden">
                            <div className="w-full h-6 flex-shrink-0 border-b border-[#363636] flex items-center px-2 gap-1.5 bg-[#1c1c1c]">
                                <div className="w-2 h-2 rounded-full bg-[#4a4a4a]"></div>
                                <div className="w-2 h-2 rounded-full bg-[#4a4a4a]"></div>
                                <div className="w-2 h-2 rounded-full bg-[#4a4a4a]"></div>
                            </div>
                            <div
                                className="w-full flex-1 bg-cover bg-top"
                                style={{
                                    backgroundImage:
                                        "url('/proj-img/gitview.png')",
                                }}
                            ></div>
                        </div>
                        </div>

                        {/* Mobile Card 1 */}
                        <div className="group absolute w-[95px] h-[189px] transform -rotate-[15deg] -translate-x-[105px] translate-y-12 hover:z-[60] z-20">
                        <div className="w-full h-full bg-black border-[5px] border-[#2a2a2a] rounded-[20px] shadow-2xl group-hover:-translate-y-14 transition duration-500 ease-out flex flex-col items-center justify-start overflow-hidden">
                            <div
                                className="w-full h-full bg-cover bg-center"
                                style={{
                                    backgroundImage:
                                        "url('/proj-phone/1.jpeg')",
                                }}
                            ></div>
                        </div>
                        </div>

                        {/* Mobile Card 2 */}
                        <div className="group absolute w-[95px] h-[189px] transform -rotate-[5deg] -translate-x-[35px] translate-y-6 hover:z-[60] z-30">
                        <div className="w-full h-full bg-black border-[5px] border-[#2a2a2a] rounded-[20px] shadow-2xl group-hover:-translate-y-8 transition duration-500 ease-out flex flex-col items-center justify-start overflow-hidden">
                            <div
                                className="w-full h-full bg-cover bg-center"
                                style={{
                                    backgroundImage:
                                        "url('/proj-phone/image.png')",
                                }}
                            ></div>
                        </div>
                        </div>

                        {/* Mobile Card 3 */}
                        <div className="group absolute w-[95px] h-[189px] transform rotate-[5deg] translate-x-[35px] translate-y-6 hover:z-[60] z-40">
                        <div className="w-full h-full bg-black border-[5px] border-[#2a2a2a] rounded-[20px] shadow-2xl group-hover:-translate-y-8 transition duration-500 ease-out flex flex-col items-center justify-start overflow-hidden">
                            <div
                                className="w-full h-full bg-cover bg-center"
                                style={{
                                    backgroundImage:
                                        "url('/proj-phone/image copy.png')",
                                }}
                            ></div>
                        </div>
                        </div>

                        {/* Mobile Card 4 */}
                        <div className="group absolute w-[95px] h-[189px] transform rotate-[15deg] translate-x-[105px] translate-y-12 hover:z-[60] z-30">
                        <div className="w-full h-full bg-black border-[5px] border-[#2a2a2a] rounded-[20px] shadow-2xl group-hover:-translate-y-14 transition duration-500 ease-out flex flex-col items-center justify-start overflow-hidden">
                            <div
                                className="w-full h-full bg-cover bg-center"
                                style={{
                                    backgroundImage:
                                        "url('/proj-phone/image copy 2.png')",
                                }}
                            ></div>
                        </div>
                        </div>
                    </div>
                    <div className="mt-8 sm:mt-12 mb-6 sm:mb-10 lg:mt-auto">
                        {/* Headline */}
                        <h1 className="text-lg min-[360px]:text-xl md:text-[1.5rem] font-bold tracking-tight mb-5 sm:mb-6 max-w-full md:max-w-lg leading-[1.3] text-[#f2f2f2]">
                            Crafting high-performance Android apps and scalable
                            fullstack systems with a focus on deep engineering.
                        </h1>

                        {/* Buttons */}
                        <div className="flex flex-wrap items-center gap-2.5 sm:gap-4">
                            <a
                                href="https://linkedin.com/in/deepakwork"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 bg-white text-black rounded-full font-bold text-[11px] sm:text-xs tracking-wide hover:bg-gray-200 transition uppercase whitespace-nowrap"
                            >
                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 24 24"
                                    fill="#0A66C2"
                                >
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                                LinkedIn
                            </a>
                            <a
                                href="https://github.com/deep-vinci"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 bg-white text-black rounded-full font-bold text-[11px] sm:text-xs tracking-wide hover:bg-gray-200 transition uppercase whitespace-nowrap"
                            >
                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                                GitHub
                            </a>
                            <a
                                href="mailto:deepakworkpc@gmail.com"
                                className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 bg-white text-black rounded-full font-bold text-[11px] sm:text-xs tracking-wide hover:bg-gray-200 transition uppercase whitespace-nowrap"
                            >
                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                                Mail
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col min-w-0 md:pt-16 pb-10 sm:pb-20 overflow-hidden">
                    <div className="w-full min-w-0 lg:max-w-xl lg:ml-auto">
                        {children}

                        {/* Experience - first thing recruiters see */}
                        <div className="mb-10 sm:mb-12 pt-4 sm:pt-5">
                            <h4 className="text-xs sm:text-sm font-mono tracking-wider sm:tracking-widest text-[#898989] uppercase mb-5 sm:mb-8">
                                EXPERIENCE
                            </h4>
                            <div className="flex flex-col gap-6">
                                <HoverBubble text="currently interning here, building cool industrial softwares">
                                <div className="group relative bg-[#111] border border-[#222] hover:border-[#333] rounded-2xl p-4 sm:p-6 transition-all duration-300 cursor-pointer overflow-hidden">
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <h5 className="text-white text-lg font-bold mb-1">
                                                Fullstack Developer
                                            </h5>
                                            <div className="text-[#10b981] font-mono text-xs font-bold tracking-widest uppercase mb-1 opacity-80">
                                                Cracktier Technologies •
                                                Internship
                                            </div>
                                            <div className="text-[#666] font-mono text-xs tracking-wide mb-4">
                                                May 2026 – Ongoing · Vadodara,
                                                Gujarat, India
                                            </div>
                                        </div>
                                        <div className="text-[#888] group-hover:text-white transition-colors duration-300 transform group-hover:rotate-180">
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <polyline points="6 9 12 15 18 9"></polyline>
                                            </svg>
                                        </div>
                                    </div>

                                    <p className="text-[#888] text-sm leading-relaxed mb-4">
                                        Engineering and maintaining scalable
                                        hostel management and ERP modules in
                                        Node.js, streamlining student operations
                                        and administrative workflows.
                                    </p>
                                </div>
                                </HoverBubble>
                                <HoverBubble text="worked with ar technologies in kotlin and java">
                                <div className="group relative bg-[#111] border border-[#222] hover:border-[#333] rounded-2xl p-4 sm:p-6 transition-all duration-300 cursor-pointer overflow-hidden">
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <h5 className="text-white text-lg font-bold mb-1">
                                                Android Developer
                                            </h5>
                                            <div className="text-[#10b981] font-mono text-xs font-bold tracking-widest uppercase mb-1 opacity-80">
                                                Tinkering Hub, Parul University
                                                • Internship
                                            </div>
                                            <div className="text-[#666] font-mono text-xs tracking-wide mb-4">
                                                Nov 2025 – Dec 2025 · 2 mos ·
                                                Vadodara, Gujarat, India ·
                                                On-site
                                            </div>
                                        </div>
                                        <div className="text-[#888] group-hover:text-white transition-colors duration-300 transform group-hover:rotate-180">
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <polyline points="6 9 12 15 18 9"></polyline>
                                            </svg>
                                        </div>
                                    </div>

                                    <p className="text-[#888] text-sm leading-relaxed mb-4">
                                        Worked on ARCore Cloud Anchors,
                                        Geospatial API, and automated 360°
                                        panorama pipelines for immersive AR/VR
                                        experiences.
                                    </p>

                                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                                        <div className="overflow-hidden">
                                            <div className="pt-4 border-t border-[#222] mt-2 flex flex-col gap-3">
                                                <div className="flex items-start gap-3">
                                                    <span className="text-[#10b981] mt-0.5 opacity-70">
                                                        ✦
                                                    </span>
                                                    <span className="text-[#a0a0a0] text-sm">
                                                        Worked extensively with
                                                        Google ARCore Cloud
                                                        Anchors as well as
                                                        Geospatial API, enabling
                                                        persistent and shared AR
                                                        experiences across
                                                        devices and sessions.
                                                    </span>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <span className="text-[#10b981] mt-0.5 opacity-70">
                                                        ✦
                                                    </span>
                                                    <span className="text-[#a0a0a0] text-sm">
                                                        Implemented a suite of
                                                        isolated CLI tools into
                                                        a cohesive, automated
                                                        web pipeline for
                                                        end-to-end 360° panorama
                                                        generation using Hugin
                                                        for immersive AR/VR use
                                                        cases.
                                                    </span>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <span className="text-[#10b981] mt-0.5 opacity-70">
                                                        ✦
                                                    </span>
                                                    <span className="text-[#a0a0a0] text-sm">
                                                        Built an Android
                                                        application to host,
                                                        detect, and resolve
                                                        Cloud Anchors allowing
                                                        independent validation
                                                        and debugging of
                                                        multi-user AR workflows.
                                                    </span>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <span className="text-[#10b981] mt-0.5 opacity-70">
                                                        ✦
                                                    </span>
                                                    <span className="text-[#a0a0a0] text-sm">
                                                        Conducted research and
                                                        experimentation with
                                                        HLOC (Hierarchical
                                                        Localization) as a
                                                        potential replacement
                                                        for ARCore Geospatial
                                                        API, evaluating visual
                                                        localization accuracy,
                                                        scalability, and
                                                        deployment feasibility.
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </HoverBubble>
                            </div>
                        </div>

                        {/* Achievements */}
                        <div className="mb-10 sm:mb-12 pt-4 sm:pt-5">
                            <h4 className="text-xs sm:text-sm font-mono tracking-wider sm:tracking-widest text-[#898989] uppercase mb-5 sm:mb-8">
                                ACHIEVEMENTS
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <HoverBubble
                                    text="check out linkedin post"
                                    href="https://www.linkedin.com/feed/update/urn:li:activity:7471729453610573824/"
                                >
                                <div className="relative group bg-[#111] border border-[#222] rounded-2xl p-4 sm:p-5 overflow-hidden hover:border-[#333] transition-colors">
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <svg
                                            width="40"
                                            height="40"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#facc15"
                                            strokeWidth="1"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                                            <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                                            <path d="M4 22h16"></path>
                                            <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                                            <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                                            <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                                        </svg>
                                    </div>
                                    <div className="text-[#facc15] font-mono text-[10px] sm:text-xs font-bold tracking-wider sm:tracking-widest mb-3 pr-8 uppercase flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#facc15] animate-pulse"></span>
                                        Environment Hackathon '26
                                    </div>
                                    <h5 className="text-white text-lg font-bold mb-2">
                                        1st Place · ₹25,000
                                    </h5>
                                    <p className="text-[#888] text-sm leading-relaxed max-w-[90%]">
                                        Secured 1st Place at Environment
                                        Hackathon 2026, developing an innovative
                                        technology-driven environmental
                                        solution.
                                    </p>
                                </div>
                                </HoverBubble>

                                <HoverBubble
                                    text="view certificate"
                                    href="/certificates/sih-25"
                                >
                                <div className="relative group bg-[#111] border border-[#222] rounded-2xl p-4 sm:p-5 overflow-hidden hover:border-[#333] transition-colors">
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <svg
                                            width="40"
                                            height="40"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#facc15"
                                            strokeWidth="1"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <circle
                                                cx="12"
                                                cy="8"
                                                r="6"
                                            ></circle>
                                            <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
                                        </svg>
                                    </div>
                                    <div className="text-[#facc15] font-mono text-[10px] sm:text-xs font-bold tracking-wider sm:tracking-widest mb-3 pr-8 uppercase flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#facc15] animate-pulse"></span>
                                        SIH '25
                                    </div>
                                    <h5 className="text-white text-lg font-bold mb-2">
                                        Top 10 College-wide
                                    </h5>
                                    <p className="text-[#888] text-sm leading-relaxed max-w-[90%]">
                                        Prototyped and shipped an innovative
                                        solution under high-pressure conditions
                                        among 730 competing teams.
                                    </p>
                                </div>
                                </HoverBubble>

                                <HoverBubble
                                    text="check out linkedin post"
                                    href="https://www.linkedin.com/posts/deepakwork_techexpo2026-androidapp-development-activity-7425721838833385472-Kbjt"
                                >
                                <div className="relative group bg-[#111] border border-[#222] rounded-2xl p-4 sm:p-5 overflow-hidden hover:border-[#333] transition-colors">
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <svg
                                            width="40"
                                            height="40"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#facc15"
                                            strokeWidth="1"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                        </svg>
                                    </div>
                                    <div className="text-[#facc15] font-mono text-[10px] sm:text-xs font-bold tracking-wider sm:tracking-widest mb-3 pr-8 uppercase flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#facc15] animate-pulse"></span>
                                        Tech Expo '26
                                    </div>
                                    <h5 className="text-white text-lg font-bold mb-2">
                                        9.1/10 Avg Rating
                                    </h5>
                                    <p className="text-[#888] text-sm leading-relaxed max-w-[90%]">
                                        Received overwhelmingly positive
                                        response across 341 reviews for shipped
                                        project architecture and UX.
                                    </p>
                                </div>
                                </HoverBubble>
                            </div>
                        </div>

                        {/* Stacks */}
                        <div className="mb-10 sm:mb-12 pt-8 sm:pt-12">
                            <h4 className="text-xs sm:text-sm font-mono tracking-wider sm:tracking-widest text-[#898989] uppercase mb-5 sm:mb-8">
                                STACKS
                            </h4>
                            <div className="grid grid-cols-1 min-[330px]:grid-cols-2 xl:grid-cols-3 gap-y-4 sm:gap-y-6 gap-x-3 sm:gap-x-6 text-xs sm:text-sm font-medium">
                                {[
                                    {
                                        name: "React",
                                        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
                                    },
                                    {
                                        name: "React Native",
                                        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
                                    },
                                    {
                                        name: "Next.js",
                                        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
                                        invert: true,
                                    },
                                    {
                                        name: "TypeScript",
                                        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
                                    },
                                    {
                                        name: "Java",
                                        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
                                    },
                                    {
                                        name: "Kotlin",
                                        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg",
                                    },
                                    {
                                        name: "Python",
                                        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
                                    },
                                    {
                                        name: "PostgreSQL",
                                        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
                                    },
                                    {
                                        name: "Docker",
                                        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
                                    },
                                ].map((stack) => (
                                    <div
                                        key={stack.name}
                                        className="flex items-center gap-2.5 sm:gap-3 min-w-0 text-[#d4d4d4] group cursor-default"
                                    >
                                        <div className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#141414] border border-[#262626] flex items-center justify-center shadow-sm group-hover:border-[#333] group-hover:bg-[#1a1a1a] transition-all">
                                            <img
                                                src={stack.icon}
                                                alt={stack.name}
                                                className={`w-5 h-5 object-contain ${stack.invert ? "invert opacity-90" : ""}`}
                                            />
                                        </div>
                                        <span className="min-w-0 truncate">
                                            {stack.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Domains */}
                        <div className="mb-10 sm:mb-12 pt-8 sm:pt-12">
                            <h4 className="text-xs sm:text-sm font-mono tracking-wider sm:tracking-widest text-[#898989] uppercase mb-5 sm:mb-8">
                                DOMAINS I'VE SHIPPED IN
                            </h4>
                            <div className="grid grid-cols-1 min-[330px]:grid-cols-2 xl:grid-cols-3 gap-y-4 sm:gap-y-6 gap-x-3 sm:gap-x-6 text-xs sm:text-sm font-medium">
                                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 text-[#d4d4d4]">
                                    <span className="shrink-0 text-[#888] flex items-center justify-center">
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                                            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                                            <line
                                                x1="12"
                                                y1="22.08"
                                                x2="12"
                                                y2="12"
                                            ></line>
                                        </svg>
                                    </span>
                                    AI & Systems
                                </div>
                                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 text-[#d4d4d4]">
                                    <span className="shrink-0 text-[#888] flex items-center justify-center">
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                        </svg>
                                    </span>
                                    Healthcare (MES)
                                </div>
                                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 text-[#d4d4d4]">
                                    <span className="shrink-0 text-[#888] flex items-center justify-center">
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"></polygon>
                                            <line
                                                x1="9"
                                                y1="3"
                                                x2="9"
                                                y2="21"
                                            ></line>
                                            <line
                                                x1="15"
                                                y1="3"
                                                x2="15"
                                                y2="21"
                                            ></line>
                                        </svg>
                                    </span>
                                    Navigation (GIS)
                                </div>
                                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 text-[#d4d4d4]">
                                    <span className="shrink-0 text-[#888] flex items-center justify-center">
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <line
                                                x1="18"
                                                y1="20"
                                                x2="18"
                                                y2="10"
                                            ></line>
                                            <line
                                                x1="12"
                                                y1="20"
                                                x2="12"
                                                y2="4"
                                            ></line>
                                            <line
                                                x1="6"
                                                y1="20"
                                                x2="6"
                                                y2="14"
                                            ></line>
                                        </svg>
                                    </span>
                                    Data Vizualization
                                </div>
                                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 text-[#d4d4d4]">
                                    <span className="shrink-0 text-[#888] flex items-center justify-center">
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <rect
                                                x="5"
                                                y="2"
                                                width="14"
                                                height="20"
                                                rx="2"
                                                ry="2"
                                            ></rect>
                                            <line
                                                x1="12"
                                                y1="18"
                                                x2="12.01"
                                                y2="18"
                                            ></line>
                                        </svg>
                                    </span>
                                    Mobile Platforms
                                </div>
                                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 text-[#d4d4d4]">
                                    <span className="shrink-0 text-[#888] flex items-center justify-center">
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                                        </svg>
                                    </span>
                                    Hackathons
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>
        </>
    );
}
