"use client"

import { useState, useRef, useEffect } from "react"

type ProjectInfo = {
    id: number
    name: string
    url?: string
    desc: string
    logo: string
    date: string
    images?: string[]
}

const projectInfo: ProjectInfo[] = [
    {
        id: 1,
        name: "Campus find",
        url: "https://paruluniversity-map.vercel.app",
        desc: "University campus map with WebGL-accelerated platform built with Next.js and MapLibre GL with custom graph-based routing (Dijkstra + K-shortest paths), real-time geolocation tracking, PWA support, and OSM-to-GeoJSON data pipeline with Supabase backend integration.",
        logo: "/campusfind.png",
        date: "2025",
        images: ["/1/1.png", "/1/3.png", "/1/4.png"],
    },
    {
        id: 2,
        name: "The Hundred",
        url: "https://the-hundred-nine.vercel.app",
        desc: "GitHub-style contribution graph web app that tracks daily habits, assigns weighted scores (out of 100) to tasks, and visualizes overall daily performance.",
        logo: "/thehundred.jpeg",
        date: "2025",
    },
    {
        id: 3,
        name: "Gitview",
        url: "https://gitview.deepvinci.me/",
        desc: "3D visualization tool that transforms your GitHub contribution graph into an interactive, visually engaging experience",
        logo: "/gitview.png",
        date: "2025",
    },
    {
        id: 4,
        name: "Medical Emergency Service App",
        desc: "An Android application designed to provide immediate assistance during medical emergencies, PHC for minor issues, CHC for common ailments or District Hospital for emergencies.",
        logo: "/mes.png",
        date: "2025",
        images: ["/4/1.jpeg", "/4/2.jpeg", "/4/3.jpeg"],
    },
];

export default function Projects() {
    const [hoverState, setHoverState] = useState<{
        isHovering: boolean
        x: number
        y: number
        projectId: number | null
    }>({
        isHovering: false,
        x: 0,
        y: 0,
        projectId: null,
    })
    const hoverRef = useRef<HTMLDivElement>(null)
    const imagesRef = useRef<HTMLDivElement>(null)
    const [imagesWidth, setImagesWidth] = useState<number | null>(null)

    const handleMouseEnter = (projectId: number, project: ProjectInfo) => {
        if (project.images && project.images.length > 0) {
            setHoverState((prev) => ({ ...prev, isHovering: true, projectId }))
            // Measure images width after images are rendered
            setTimeout(() => {
                if (imagesRef.current) {
                    setImagesWidth(imagesRef.current.offsetWidth)
                }
            }, 10)
        }
    }

    const handleMouseMove = (
        e: React.MouseEvent<HTMLDivElement>,
        projectId: number,
        project: ProjectInfo
    ) => {
        if (project.images && project.images.length > 0) {
            setHoverState({
                isHovering: true,
                x: e.clientX,
                y: e.clientY,
                projectId,
            })
            // Measure images width after a brief delay to ensure images are rendered
            setTimeout(() => {
                if (imagesRef.current) {
                    setImagesWidth(imagesRef.current.offsetWidth)
                }
            }, 0)
        }
    }

    const handleMouseLeave = (projectId: number, project: ProjectInfo) => {
        if (project.images && project.images.length > 0) {
            setHoverState((prev) => ({ ...prev, isHovering: false, projectId: null }))
            setImagesWidth(null)
        }
    }

    // Measure images width when they load
    useEffect(() => {
        if (hoverState.isHovering && imagesRef.current) {
            const measureWidth = () => {
                if (imagesRef.current) {
                    setImagesWidth(imagesRef.current.offsetWidth)
                }
            }
            // Measure after a short delay to ensure images are rendered
            const timer = setTimeout(measureWidth, 50)
            return () => clearTimeout(timer)
        }
    }, [hoverState.isHovering, hoverState.projectId])

    return (
        <>
            <h2 className="text-xl font-bold">Projects</h2>
            {projectInfo.map((project) => (
                <div
                    key={project.name}
                    className="flex justify-start gap-4 my-4 cursor-pointer hover:scale-101 duration-200 relative"
                    onClick={() => {
                        if (project.url) {
                            window.open(project.url, "_blank");
                        }
                    }}
                    onMouseEnter={() => handleMouseEnter(project.id, project)}
                    onMouseMove={(e) => handleMouseMove(e, project.id, project)}
                    onMouseLeave={() => handleMouseLeave(project.id, project)}
                >
                    <div
                        className="shrink-0 size-12 bg-cover rounded-lg"
                        style={{ backgroundImage: `url(${project.logo})` }}
                    ></div>
                    <div>
                        <h3 className="font-bold">{project.name}</h3>
                        <p className="text-sm text-gray-700 dark:text-[#bcbcbc]">
                            {project.desc}
                        </p>
                    </div>
                    <div className=" shrink-0 text-gray-700 dark:text-[#bcbcbc] ml-auto mr-0">
                        {project.date}
                        {/* <button className="bg-[#0091004c] text-[#009100] font-bold px-3 py-1 text-sm rounded-full">
                            more
                        </button> */}
                    </div>
                </div>
            ))}
            {/* Hover tooltip - displays images for projects that have them */}
            {hoverState.projectId !== null && (() => {
                const hoveredProject = projectInfo.find(p => p.id === hoverState.projectId)
                return hoveredProject?.images && hoveredProject.images.length > 0 ? (
                    <div
                        ref={hoverRef}
                        className={`fixed pointer-events-none z-50 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg shadow-lg p-3 transition-opacity duration-200 ease-out ${
                            hoverState.isHovering ? "opacity-100" : "opacity-0"
                        }`}
                        style={{
                            left: `${hoverState.x + 15}px`,
                            top: `${hoverState.y - 10}px`,
                            transform: "translateY(-100%)",
                        }}
                    >
                        <div style={{ width: "fit-content" }}>
                            <div className="flex flex-col gap-2">
                                <div 
                                    className="flex flex-col gap-1"
                                    style={{ 
                                        width: imagesWidth ? `${imagesWidth}px` : "auto",
                                        maxWidth: imagesWidth ? `${imagesWidth}px` : "none"
                                    }}
                                >
                                    <h4 className="font-bold text-base break-words">{hoveredProject.name}</h4>
                                    <p className="text-sm text-gray-700 dark:text-[#bcbcbc] break-words">{hoveredProject.desc}</p>
                                </div>
                                <div 
                                    ref={imagesRef}
                                    className="flex gap-2"
                                    style={{ 
                                        width: "fit-content"
                                    }}
                                >
                                    {hoveredProject.images.map((image, index) => (
                                        <img
                                            key={index}
                                            src={image}
                                            alt={`${hoveredProject.name} image ${index + 1}`}
                                            className="rounded object-contain flex-shrink-0"
                                            style={{ 
                                                height: "300px", 
                                                width: "auto"
                                            }}
                                            onLoad={() => {
                                                if (imagesRef.current) {
                                                    setImagesWidth(imagesRef.current.offsetWidth)
                                                }
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null
            })()}
        </>
    );
}
