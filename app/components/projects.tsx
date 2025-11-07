"use client"

type ProjectInfo = {
    name: string
    url?: string
    desc: string
    logo: string
    date: string
}

const projectInfo: ProjectInfo[] = [
    {
        name: "Campus find",
        url: "https://paruluniversity-map.vercel.app",
        desc: "University campus map, with intelligent k-shortest routing, location search, dynamic event info for student/visitor navigation.",
        logo: "/campusfind.png",
        date: "2025",
    },
    {
        name: "The Hundred",
        url: "https://the-hundred-nine.vercel.app",
        desc: "GitHub-style contribution graph web app that tracks daily habits, assigns weighted scores (out of 100) to tasks, and visualizes overall daily performance.",
        logo: "/thehundred.jpeg",
        date: "2025",
    },
    {
        name: "Gitview",
        url: "https://gitview.deepvinci.me/",
        desc: "3D visualization tool that transforms your GitHub contribution graph into an interactive, visually engaging experience",
        logo: "/gitview.png",
        date: "2025",
    },
    {
        name: "Medical Emergency Service App",
        desc: "An Android application designed to provide immediate assistance during medical emergencies, PHC for minor issues, CHC for common ailments or District Hospital for emergencies.",
        logo: "/mes.png",
        date: "2025",
    },
];

export default function Projects() {
    return (
        <>
            <h2 className="text-xl font-bold">Projects</h2>
            {projectInfo.map((project) => (
                <div
                    key={project.name}
                    className="flex justify-start gap-4 my-4 cursor-pointer hover:scale-101 duration-200    "
                    onClick={() => {
                        if (project.url) {
                            window.open(project.url, "_blank");
                        }
                    }}

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
            ))
            }
        </>
    );
}
