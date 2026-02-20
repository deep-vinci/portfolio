"use client";

import { motion } from "motion/react";

export default function HomeClient({ children }: { children?: React.ReactNode }) {
    return (
        <>
            {/* Top Fixed Header replicating the image */}
            <div className="fixed top-0 left-0 w-full z-50 px-6 sm:px-8 py-4 flex justify-between items-center bg-[#0e0e0e]/80 backdrop-blur-md">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-[#2a2a2a]">
                    <img src="/pfp.jpg" alt="Profile" className="w-full h-full object-cover" />
                </div>
                <button className="bg-[#10b981] text-white px-5 py-2.5 rounded-full font-bold text-sm tracking-wide hover:bg-[#059669] transition flex items-center gap-3 shadow-lg shadow-[#10b981]/20">
                    Get in touch
                    <div className="flex items-center gap-1.5 bg-white/20 px-2 py-1 rounded-full">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                </button>
            </div>

            <motion.section
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-20 items-start w-full relative"
            >

                {/* Left Column */}
                <div className="flex flex-col pt-5 lg:sticky lg:top-24 lg:h-[calc(100vh-120px)] justify-between pb-10">
                    {/* Meta details */}
                    <div className="grid grid-cols-[120px_1fr] md:grid-cols-[140px_1fr] gap-x-4 gap-y-3 text-sm text-[#898989] uppercase tracking-wider font-mono">
                        <span>TIMEZONE</span> <span className="text-[#e2e2e2] normal-case">UTC +5:30</span>
                        <span>LOCATION</span> <span className="text-[#e2e2e2] normal-case">India/</span>
                        <span>ROLE</span> <span className="text-[#e2e2e2] normal-case">Android & Fullstack Dev</span>
                        <span>SKILLSET</span> <span className="text-[#e2e2e2] normal-case">React, Next.js, Java, Python</span>
                    </div>

                    <div className="mt-20 mb-10 lg:mt-auto">
                        {/* Headline */}
                        <h1 className="text-xl md:text-[2rem] font-bold tracking-tight mb-6 max-w-[90%] md:max-w-lg leading-[1.3] text-[#f2f2f2]">
                            Crafting high-performance Android apps and scalable fullstack systems with a focus on deep engineering.
                        </h1>

                        {/* Buttons */}
                        <div className="flex flex-wrap items-center gap-4">
                            <a
                                href="https://linkedin.com/in/deepakwork"
                                target="_blank" rel="noreferrer"
                                className="flex items-center justify-center gap-2 px-6 py-2.5 bg-white text-black rounded-full font-bold text-xs tracking-wide hover:bg-gray-200 transition uppercase"
                            >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="#0A66C2"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                LinkedIn
                            </a>
                            <span className="text-xs font-mono font-medium text-gray-500 uppercase">OR</span>
                            <a
                                href="https://cal.com/deepvinci/15min"
                                target="_blank" rel="noreferrer"
                                className="flex items-center justify-center gap-2 px-6 py-2.5 bg-white text-black rounded-full font-bold text-xs tracking-wide hover:bg-gray-200 transition uppercase"
                            >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                Book a Call
                            </a>
                        </div>

                    </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col md:pt-16 pb-20 overflow-hidden">

                    <div className="w-full lg:max-w-xl lg:ml-auto">
                        {children}

                        {/* Fields of Work */}
                        <div className="mb-12">
                            <h3 className="text-xl font-bold font-mono tracking-widest uppercase mb-6 text-white">
                                FIELDS OF WORK
                            </h3>
                            <p className="text-[#a0a0a0] text-base md:text-lg leading-relaxed font-light">
                                I bridge the gap between complex backends and intuitive mobile & web interfaces. From WebGL mapping tools to real-time Android services built securely, scaled correctly.
                            </p>
                        </div>

                        {/* Project Image Cards replacing blank divs for fanned-out effect */}
                        <div className="relative h-[200px] sm:h-[260px] w-full mb-12 mt-4 flex justify-center items-center overflow-x-visible">
                            {/* Desktop Card 1 - Left/Back */}
                            <div className="absolute w-[180px] sm:w-[280px] h-[115px] sm:h-[175px] bg-[#1a1a1a] border border-[#2e2e2e] rounded-xl shadow-2xl transform -rotate-[12deg] -translate-x-[60px] sm:-translate-x-[100px] -translate-y-5 sm:-translate-y-9 hover:-translate-y-5 hover:z-[60] transition duration-500 ease-out flex flex-col items-center justify-start overflow-hidden">
                                <div className="w-full h-5 sm:h-6 flex-shrink-0 border-b border-[#2e2e2e] flex items-center px-2 gap-1 sm:gap-1.5 bg-[#141414]">
                                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#3a3a3a]"></div>
                                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#3a3a3a]"></div>
                                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#3a3a3a]"></div>
                                </div>
                                <div className="w-full flex-1 bg-cover bg-top" style={{ backgroundImage: "url('/proj-img/campusmap.png')" }}></div>
                            </div>

                            {/* Desktop Card 2 - Right/Back */}
                            <div className="absolute w-[180px] sm:w-[280px] h-[115px] sm:h-[175px] bg-[#222222] border border-[#363636] rounded-xl shadow-2xl transform rotate-[12deg] translate-x-[60px] sm:translate-x-[100px] -translate-y-5 sm:-translate-y-9 hover:-translate-y-5 z-10 hover:z-[60] transition duration-500 ease-out flex flex-col items-center justify-start overflow-hidden">
                                <div className="w-full h-5 sm:h-6 flex-shrink-0 border-b border-[#363636] flex items-center px-2 gap-1 sm:gap-1.5 bg-[#1c1c1c]">
                                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#4a4a4a]"></div>
                                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#4a4a4a]"></div>
                                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#4a4a4a]"></div>
                                </div>
                                <div className="w-full flex-1 bg-cover bg-top" style={{ backgroundImage: "url('/proj-img/gitview.png')" }}></div>
                            </div>

                            {/* Mobile Card 1 */}
                            <div className="absolute w-[80px] sm:w-[105px] h-[160px] sm:h-[210px] bg-black border-[2px] sm:border-[5px] border-[#2a2a2a] rounded-[15px] sm:rounded-[20px] shadow-2xl transform -rotate-[15deg] -translate-x-[55px] sm:-translate-x-[105px] translate-y-7 sm:translate-y-12 hover:-translate-y-2 hover:z-[60] z-20 transition duration-500 ease-out flex flex-col items-center justify-start overflow-hidden">
                                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/proj-phone/1.jpeg')" }}></div>
                            </div>

                            {/* Mobile Card 2 */}
                            <div className="absolute w-[80px] sm:w-[105px] h-[160px] sm:h-[210px] bg-black border-[2px] sm:border-[5px] border-[#2a2a2a] rounded-[15px] sm:rounded-[20px] shadow-2xl transform -rotate-[5deg] -translate-x-[15px] sm:-translate-x-[35px] translate-y-4 sm:translate-y-6 hover:-translate-y-2 hover:z-[60] z-30 transition duration-500 ease-out flex flex-col items-center justify-start overflow-hidden">
                                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/proj-phone/image.png')" }}></div>
                            </div>

                            {/* Mobile Card 3 */}
                            <div className="absolute w-[80px] sm:w-[105px] h-[160px] sm:h-[210px] bg-black border-[2px] sm:border-[5px] border-[#2a2a2a] rounded-[15px] sm:rounded-[20px] shadow-2xl transform rotate-[5deg] translate-x-[20px] sm:translate-x-[35px] translate-y-4 sm:translate-y-6 hover:-translate-y-2 hover:z-[60] z-40 transition duration-500 ease-out flex flex-col items-center justify-start overflow-hidden">
                                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/proj-phone/image copy.png')" }}></div>
                            </div>

                            {/* Mobile Card 4 */}
                            <div className="absolute w-[80px] sm:w-[105px] h-[160px] sm:h-[210px] bg-black border-[2px] sm:border-[5px] border-[#2a2a2a] rounded-[15px] sm:rounded-[20px] shadow-2xl transform rotate-[15deg] translate-x-[55px] sm:translate-x-[105px] translate-y-7 sm:translate-y-12 hover:-translate-y-2 hover:z-[60] z-30 transition duration-500 ease-out flex flex-col items-center justify-start overflow-hidden">
                                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/proj-phone/image copy 2.png')" }}></div>
                            </div>
                        </div>

                        {/* Achievements - Highlighted & Moved Up */}
                        <div className="mb-12 pt-20">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="relative group bg-[#111] border border-[#222] rounded-2xl p-5 overflow-hidden hover:border-[#333] transition-colors cursor-default">
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>
                                    </div>
                                    <div className="text-[#10b981] font-mono text-xs font-bold tracking-widest mb-3 uppercase flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse"></span>
                                        SIH '25
                                    </div>
                                    <h5 className="text-white text-lg font-bold mb-2">Top 10 College-wide</h5>
                                    <p className="text-[#888] text-sm leading-relaxed max-w-[90%]">Prototyped and shipped an innovative solution under high-pressure conditions among 730 competing teams.</p>
                                </div>

                                <div className="relative group bg-[#111] border border-[#222] rounded-2xl p-5 overflow-hidden hover:border-[#333] transition-colors cursor-default">
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#facc15" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                    </div>
                                    <div className="text-[#facc15] font-mono text-xs font-bold tracking-widest mb-3 uppercase flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#facc15] animate-pulse"></span>
                                        Tech Expo '26
                                    </div>
                                    <h5 className="text-white text-lg font-bold mb-2">9.1/10 Avg Rating</h5>
                                    <p className="text-[#888] text-sm leading-relaxed max-w-[90%]">Received overwhelmingly positive response across 341 reviews for shipped project architecture and UX.</p>
                                </div>
                            </div>
                        </div>

                        {/* What I Build */}
                        <div className="mb-12 border-t border-[#1f1f1f] pt-12">
                            <h4 className="text-sm font-mono tracking-widest text-[#898989] uppercase mb-8">
                                WHAT I BUILD
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-6 text-sm font-medium">
                                <div className="flex items-center gap-3 text-[#d4d4d4]"><span className="text-[#888] font-light text-lg pb-[2px]">+</span> Fullstack Web Apps</div>
                                <div className="flex items-center gap-3 text-[#d4d4d4]"><span className="text-[#888] font-light text-lg pb-[2px]">+</span> Android Apps</div>
                                <div className="flex items-center gap-3 text-[#d4d4d4]"><span className="text-[#888] font-light text-lg pb-[2px]">+</span> System Architectures</div>
                                <div className="flex items-center gap-3 text-[#d4d4d4]"><span className="text-[#888] font-light text-lg pb-[2px]">+</span> 3D Visualizations</div>
                                <div className="flex items-center gap-3 text-[#d4d4d4]"><span className="text-[#888] font-light text-lg pb-[2px]">+</span> Interactive Maps</div>
                                <div className="flex items-center gap-3 text-[#d4d4d4]"><span className="text-[#888] font-light text-lg pb-[2px]">+</span> APIs & Backends</div>
                            </div>
                        </div>

                        {/* Domains */}
                        <div className="mb-12 border-t border-[#1f1f1f] pt-12">
                            <h4 className="text-sm font-mono tracking-widest text-[#898989] uppercase mb-8">
                                DOMAINS I'VE SHIPPED IN
                            </h4>
                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-6 text-sm font-medium">
                                <div className="flex items-center gap-3 text-[#d4d4d4]">
                                    <span className="text-[#888] flex items-center justify-center">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                                    </span>
                                    AI & Systems
                                </div>
                                <div className="flex items-center gap-3 text-[#d4d4d4]">
                                    <span className="text-[#888] flex items-center justify-center">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                                    </span>
                                    Healthcare (MES)
                                </div>
                                <div className="flex items-center gap-3 text-[#d4d4d4]">
                                    <span className="text-[#888] flex items-center justify-center">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"></polygon><line x1="9" y1="3" x2="9" y2="21"></line><line x1="15" y1="3" x2="15" y2="21"></line></svg>
                                    </span>
                                    Navigation (GIS)
                                </div>
                                <div className="flex items-center gap-3 text-[#d4d4d4]">
                                    <span className="text-[#888] flex items-center justify-center">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                                    </span>
                                    Data Vizualization
                                </div>
                                <div className="flex items-center gap-3 text-[#d4d4d4]">
                                    <span className="text-[#888] flex items-center justify-center">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                                    </span>
                                    Mobile Platforms
                                </div>
                                <div className="flex items-center gap-3 text-[#d4d4d4]">
                                    <span className="text-[#888] flex items-center justify-center">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                                    </span>
                                    Hackathons
                                </div>
                            </div>
                        </div>

                        {/* Stacks */}
                        <div className="mb-6 border-t border-[#1f1f1f] pt-12">
                            <h4 className="text-sm font-mono tracking-widest text-[#898989] uppercase mb-8">
                                STACKS
                            </h4>
                            <div className="flex flex-wrap gap-x-8 gap-y-4">
                                <span className="text-sm font-medium text-[#d4d4d4]">React / Next.js</span>
                                <span className="text-sm font-medium text-[#d4d4d4]">Java / Kotlin</span>
                                <span className="text-sm font-medium text-[#d4d4d4]">TypeScript</span>
                                <span className="text-sm font-medium text-[#d4d4d4]">Docker</span>
                                <span className="text-sm font-medium text-[#d4d4d4]">PostgreSQL</span>
                                <span className="text-sm font-medium text-[#d4d4d4]">Python</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>
        </>
    );
}
