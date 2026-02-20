"use client"

type ProjectInfo = {
    id: number
    name: string
    url?: string
    desc: string
    logo: string
    date: string
    tags?: string[]
}

const projectInfo: ProjectInfo[] = [
    {
        id: 1,
        name: "Campus find",
        url: "https://paruluniversity-map.vercel.app",
        desc: "University campus map with WebGL-accelerated platform built with Next.js and MapLibre GL with custom graph-based routing (Dijkstra + K-shortest paths), real-time geolocation tracking, PWA support, and OSM-to-GeoJSON data pipeline with Supabase backend integration.",
        logo: "/campusfind.png",
        date: "2025",
        tags: ["Next.js", "WebGL", "Supabase"]
    },
    {
        id: 2,
        name: "The Hundred",
        url: "https://the-hundred-nine.vercel.app",
        desc: "GitHub-style contribution graph web app that tracks daily habits, assigns weighted scores (out of 100) to tasks, and visualizes overall daily performance.",
        logo: "/thehundred.jpeg",
        date: "2025",
        tags: ["React", "Data Viz", "Gamification"]
    },
    {
        id: 3,
        name: "Gitview",
        url: "https://gitview.deepvinci.me/",
        desc: "3D visualization tool that transforms your GitHub contribution graph into an interactive, visually engaging experience.",
        logo: "/gitview.png",
        date: "2025",
        tags: ["3D", "GitHub API", "Three.js"]
    },
    {
        id: 4,
        name: "Medical Emergency Service",
        desc: "An Android application designed to provide immediate assistance during medical emergencies, routing users dynamically to PHC, CHC, or District Hospitals based on severity.",
        logo: "/mes.png",
        date: "2025",
        tags: ["Android", "Java", "Maps"]
    },
    {
        id: 5,
        name: "Nexus Core",
        desc: "A distributed system architecture for autonomous task delegation, featuring real-time websocket state synchronization and robust microservices.",
        logo: "",
        date: "2024",
        tags: ["Go", "WebSockets", "Docker"]
    },
    {
        id: 6,
        name: "QuantForge",
        desc: "High-frequency algorithmic trading simulation pipeline. Processes historical tick data at high throughput to elegantly backtest sophisticated quantitative strategies.",
        logo: "",
        date: "2024",
        tags: ["Python", "Pandas", "Finance"]
    },
];

export default function Projects() {
    return (
        <>
            <div className="mb-12">
                <h1 className="text-3xl font-bold font-mono tracking-widest uppercase mb-4 text-[#f2f2f2]">
                    WORK
                </h1>
                <p className="text-[#a0a0a0] text-base leading-relaxed font-light">
                    A collection of products, experiments, and technical deep-dives.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {projectInfo.map((project, idx) => {
                    // Creating a masonry/bento style layout
                    // Making indices 0, 3, and 5 span double width conditionally
                    const isLarge = idx === 0 || idx === 3 || idx === 5;
                    const spanClass = isLarge ? "md:col-span-2 lg:col-span-2" : "col-span-1";
                    const isUpcoming = project.name === "Nexus Core" || project.name === "QuantForge";

                    return (
                        <div
                            key={project.name}
                            className={`${spanClass} flex flex-col justify-between bg-[#131313] border border-[#222222] rounded-2xl p-6 transition-all duration-500 hover:bg-[#1a1a1a] hover:-translate-y-1 hover:border-[#333333] hover:shadow-2xl hover:shadow-[#10b981]/5 ${!isUpcoming ? "cursor-pointer" : "cursor-default"} group relative overflow-hidden`}
                            onClick={() => {
                                if (project.url && !isUpcoming) {
                                    window.open(project.url, "_blank");
                                }
                            }}
                        >
                            {/* Subtle Emerald Gradient Overlay on Hover */}
                            {!isUpcoming && (
                                <div className="absolute inset-0 bg-gradient-to-br from-[#10b981]/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none"></div>
                            )}

                            {/* Upcoming Overlay */}
                            {isUpcoming && (
                                <div className="absolute inset-0 z-20 backdrop-blur-sm bg-[#131313]/50 flex items-center justify-center">
                                    <span className="text-white font-mono font-bold tracking-[0.2em] border border-[#333] px-4 py-2 rounded-full bg-[#1a1a1a]/80 shadow-2xl uppercase">
                                        UPCOMING
                                    </span>
                                </div>
                            )}

                            <div className="z-10 flex flex-col h-full">
                                {/* Header: Logo & Date */}
                                <div className={`flex items-start justify-between mb-5 ${isUpcoming ? "opacity-50 blur-sm" : ""}`}>
                                    <div
                                        className="shrink-0 size-12 bg-[#1a1a1a] bg-cover bg-center rounded-xl border border-[#2a2a2a] flex items-center justify-center font-bold text-xl text-[#555] group-hover:border-[#3a3a3a] transition-colors"
                                        style={project.logo ? { backgroundImage: `url(${project.logo})` } : {}}
                                    >
                                        {!project.logo && project.name.charAt(0)}
                                    </div>
                                    <div className="shrink-0 text-xs font-mono font-bold tracking-widest text-[#555] group-hover:text-white transition-colors">
                                        {project.date}
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className={`font-bold border-b border-[#222] pb-3 mb-3 text-lg text-white ${!isUpcoming ? "group-hover:text-[#10b981]" : "opacity-50 blur-sm"} transition-colors`}>
                                    {project.name}
                                </h3>

                                {/* Description (hidden visually for upcoming, but leaves DOM footprint for inspect element) */}
                                <p className={`text-sm text-[#898989] font-light leading-relaxed flex-grow ${isUpcoming ? "opacity-0" : ""}`}>
                                    {project.desc}
                                </p>

                                {/* Tags Block */}
                                {project.tags && (
                                    <div className={`flex flex-wrap gap-2 mt-6 ${isUpcoming ? "opacity-50 blur-sm pointer-events-none" : ""}`}>
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-[10px] uppercase tracking-wider font-mono px-2 py-1 bg-[#1c1c1c] text-[#777] rounded flex items-center border border-[#2a2a2a] transition-colors">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
