"use client";

import { useState } from "react";

type Category = "website" | "app";

type Tab = "all" | "website" | "app";

type ProjectInfo = {
    id: number;
    name: string;
    url?: string;
    desc: string;
    logo: string;
    date: string;
    tags?: string[];
    inProgress?: boolean;
    category?: Category;
};

const projectInfo: ProjectInfo[] = [
    {
        id: 0,
        name: "FlushDB (LSM Tree Database)",
        url: "https://github.com/deep-vinci/FlushDB",
        desc: "A custom Log-Structured Merge (LSM) Tree database engine built from scratch. Implements an efficient Write-Ahead Logger (WAL) and MemTables and a SSTable in Java for high-performance durability and sequential writes.",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
        date: "2025",
        tags: ["Java", "Systems", "Databases"],
        inProgress: false,
    },
    {
        id: 1,
        name: "Campus find",
        url: "https://paruluniversity-map.vercel.app",
        desc: "University campus map with WebGL-accelerated platform built with Next.js and MapLibre GL with custom graph-based routing (Dijkstra + K-shortest paths), real-time geolocation tracking, PWA support, and OSM-to-GeoJSON data pipeline with Supabase backend integration.",
        logo: "/campusfind.png",
        date: "2025",
        tags: ["Next.js", "WebGL", "Supabase"],
        category: "website",
    },
    {
        id: 2,
        name: "The Hundred",
        url: "https://the-hundred-nine.vercel.app",
        desc: "GitHub-style contribution graph web app that tracks daily habits, assigns weighted scores (out of 100) to tasks, and visualizes overall daily performance.",
        logo: "/thehundred.jpeg",
        date: "2025",
        tags: ["React", "Data Viz", "Gamification"],
        category: "website",
    },
    {
        id: 3,
        name: "Gitview",
        url: "https://gitview.deepvinci.me/",
        desc: "3D visualization tool that transforms your GitHub contribution graph into an interactive, visually engaging experience.",
        logo: "/gitview.png",
        date: "2025",
        tags: ["3D", "GitHub API", "Three.js"],
        category: "website",
    },
    {
        id: 4,
        name: "Medical Emergency Service",
        desc: "An Android application designed to provide immediate assistance during medical emergencies, routing users dynamically to PHC, CHC, or District Hospitals based on severity.",
        logo: "/mes.png",
        date: "2025",
        tags: ["Android", "Java", "Maps"],
        category: "app",
    },
    {
        id: 7,
        name: "APOD App",
        url: "https://github.com/deep-vinci/Apod-app",
        desc: "An elegant Android application built with Kotlin to gracefully explore NASA's Astronomy Picture of the Day (APOD). Features an immersive UI to discover daily cosmic imagery and detailed astronomical context.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg",
        date: "2025",
        tags: ["Android", "Kotlin", "NASA API"],
        category: "app",
    },
    {
        id: 8,
        name: "Re-implement C",
        url: "https://github.com/deep-vinci/re-implement-c",
        desc: "A comprehensive deep-dive into system-level operations, reimplementing standard C library functions from scratch to explore memory management, pointer arithmetic, and low-level execution semantics.",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
        date: "2025",
        tags: ["C", "Systems", "Low-level"],
    },
];

const TABS: { id: Tab; label: string; icon: React.ReactNode }[] = [
    {
        id: "all",
        label: "All",
        icon: (
            <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
            </svg>
        ),
    },
    {
        id: "website",
        label: "Website",
        icon: (
            <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
        ),
    },
    {
        id: "app",
        label: "App",
        icon: (
            <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                <line x1="12" y1="18" x2="12.01" y2="18" />
            </svg>
        ),
    },
];

export default function Projects() {
    const [activeTab, setActiveTab] = useState<Tab>("all");

    const counts: Record<Tab, number> = {
        all: projectInfo.length,
        website: projectInfo.filter((p) => p.category === "website").length,
        app: projectInfo.filter((p) => p.category === "app").length,
    };

    const filteredProjects =
        activeTab === "all"
            ? projectInfo
            : projectInfo.filter((p) => p.category === activeTab);

    return (
        <>
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold font-mono tracking-widest uppercase mb-4 text-[#f2f2f2]">
                    WORK
                </h1>
                <p className="text-[#a0a0a0] text-base leading-relaxed font-light">
                    A collection of products, experiments, and technical
                    deep-dives.
                </p>
            </div>

            {/* Tab Selector */}
            <div className="mb-8">
                <div className="inline-flex items-center gap-1 bg-[#0c0c0c] border border-[#222] rounded-full p-1">
                    {TABS.map((tab) => {
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`
                                    relative flex items-center gap-2 px-4 py-1.5 rounded-full
                                    text-[11px] font-mono font-bold tracking-widest uppercase
                                    transition-all duration-300 select-none
                                    ${
                                        isActive
                                            ? "bg-[#1a1a1a] border border-[#2e2e2e] text-[#f2f2f2] shadow-md"
                                            : "text-[#555] hover:text-[#888] border border-transparent"
                                    }
                                `}
                            >
                                {/* Icon */}
                                <span
                                    className={`transition-colors duration-300 ${
                                        isActive
                                            ? "text-[#10b981]"
                                            : "text-current"
                                    }`}
                                >
                                    {tab.icon}
                                </span>

                                {/* Label */}
                                {tab.label}

                                {/* Count Badge */}
                                <span
                                    className={`
                                        inline-flex items-center justify-center
                                        min-w-[18px] h-[18px] px-1 rounded-full
                                        text-[9px] font-mono font-bold
                                        transition-all duration-300
                                        ${
                                            isActive
                                                ? "bg-[#10b981]/15 text-[#10b981] border border-[#10b981]/25"
                                                : "bg-[#1a1a1a] text-[#444] border border-[#2a2a2a]"
                                        }
                                    `}
                                >
                                    {counts[tab.id]}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Active tab description line */}
                <div className="mt-3 h-4">
                    <p className="text-[11px] font-mono text-[#444] tracking-wider uppercase transition-all duration-300">
                        {activeTab === "all" && (
                            <span>
                                Showing all{" "}
                                <span className="text-[#10b981]">
                                    {counts.all}
                                </span>{" "}
                                works
                            </span>
                        )}
                        {activeTab === "website" && (
                            <span>
                                Showing{" "}
                                <span className="text-[#10b981]">
                                    {counts.website}
                                </span>{" "}
                                web projects
                            </span>
                        )}
                        {activeTab === "app" && (
                            <span>
                                Showing{" "}
                                <span className="text-[#10b981]">
                                    {counts.app}
                                </span>{" "}
                                mobile apps
                            </span>
                        )}
                    </p>
                </div>
            </div>

            {/* Projects Grid */}
            <div className="columns-1 sm:columns-2 gap-5 w-full">
                {filteredProjects.map((project) => {
                    const isUpcoming =
                        project.name === "Nexus Core" ||
                        project.name === "QuantForge";

                    return (
                        <div
                            key={project.name}
                            className={`break-inside-avoid mb-5 flex flex-col justify-between bg-[#131313] border border-[#222222] rounded-2xl p-6 transition-all duration-500 hover:bg-[#1a1a1a] hover:-translate-y-1 hover:border-[#333333] hover:shadow-2xl hover:shadow-[#10b981]/5 ${!isUpcoming ? "cursor-pointer" : "cursor-default"} group relative overflow-hidden`}
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
                                {/* Header: Logo & Right Meta Column */}
                                <div
                                    className={`flex items-start justify-between mb-5 ${isUpcoming ? "opacity-50 blur-sm" : ""}`}
                                >
                                    {/* Logo */}
                                    <div
                                        className="shrink-0 size-12 bg-[#1a1a1a] bg-cover bg-center rounded-xl border border-[#2a2a2a] flex items-center justify-center font-bold text-xl text-[#555] group-hover:border-[#3a3a3a] transition-colors"
                                        style={
                                            project.logo
                                                ? {
                                                      backgroundImage: `url(${project.logo})`,
                                                  }
                                                : {}
                                        }
                                    >
                                        {!project.logo &&
                                            project.name.charAt(0)}
                                    </div>

                                    {/* Right: date + badges stacked */}
                                    <div className="flex flex-col items-end gap-2 shrink-0">
                                        {/* Date */}
                                        <div className="text-xs font-mono font-bold tracking-widest text-[#555] group-hover:text-white transition-colors">
                                            {project.date}
                                        </div>

                                        {/* Category Badge */}
                                        {project.category && !isUpcoming && (
                                            <span
                                                className={`text-[10px] font-mono font-bold tracking-[0.1em] px-2.5 py-1 rounded-full uppercase flex items-center gap-1.5 border transition-colors duration-300 ${
                                                    project.category ===
                                                    "website"
                                                        ? "text-[#60a5fa] border-[#60a5fa]/20 bg-[#60a5fa]/8 group-hover:border-[#60a5fa]/35"
                                                        : "text-[#c084fc] border-[#c084fc]/20 bg-[#c084fc]/8 group-hover:border-[#c084fc]/35"
                                                }`}
                                            >
                                                {project.category ===
                                                "website" ? (
                                                    <svg
                                                        width="9"
                                                        height="9"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <circle
                                                            cx="12"
                                                            cy="12"
                                                            r="10"
                                                        />
                                                        <line
                                                            x1="2"
                                                            y1="12"
                                                            x2="22"
                                                            y2="12"
                                                        />
                                                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                                    </svg>
                                                ) : (
                                                    <svg
                                                        width="9"
                                                        height="9"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2.5"
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
                                                        />
                                                        <line
                                                            x1="12"
                                                            y1="18"
                                                            x2="12.01"
                                                            y2="18"
                                                        />
                                                    </svg>
                                                )}
                                                {project.category}
                                            </span>
                                        )}

                                        {/* In Progress Badge */}
                                        {project.inProgress && !isUpcoming && (
                                            <span className="text-[#f59e0b] text-[10px] font-mono font-bold tracking-[0.1em] border border-[#f59e0b]/30 px-2.5 py-1 rounded-full bg-[#f59e0b]/10 uppercase shadow-sm">
                                                IN PROGRESS
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Title */}
                                <h3
                                    className={`font-bold border-b border-[#222] pb-3 mb-3 text-lg text-white ${!isUpcoming ? "group-hover:text-[#10b981]" : "opacity-50 blur-sm"} transition-colors`}
                                >
                                    {project.name}
                                </h3>

                                {/* Description */}
                                <p
                                    className={`text-sm text-[#898989] font-light leading-relaxed flex-grow ${isUpcoming ? "opacity-0" : ""}`}
                                >
                                    {project.desc}
                                </p>

                                {/* Tags */}
                                {project.tags && (
                                    <div
                                        className={`flex flex-wrap gap-2 mt-6 ${isUpcoming ? "opacity-50 blur-sm pointer-events-none" : ""}`}
                                    >
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-[10px] uppercase tracking-wider font-mono px-2 py-1 bg-[#1c1c1c] text-[#777] rounded flex items-center border border-[#2a2a2a] transition-colors"
                                            >
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

            {/* Empty state */}
            {filteredProjects.length === 0 && (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                    <div className="w-12 h-12 rounded-2xl bg-[#131313] border border-[#222] flex items-center justify-center mb-4">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#444"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                    </div>
                    <p className="text-[#444] font-mono text-xs tracking-widest uppercase">
                        No projects in this category yet
                    </p>
                </div>
            )}
        </>
    );
}
