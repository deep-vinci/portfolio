const projectInfo = [
    {
        name: "Campus find",
        desc: "University campus map, with intelligent k-shortest routing, location search, dynamic event info for student/visitor navigation.",
        logo: "/campusfind.png",
        date: "2025",
    },
    {
        name: "Gitview",
        desc: "3D visualization tool that transforms your GitHub contribution graph into an interactive, visually engaging experience",
        logo: "/gitview.png",
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
                    className="flex justify-start gap-4 my-4"
                >
                    <div
                        className="shrink-0 size-12 bg-cover rounded-lg"
                        style={{ backgroundImage: `url(${project.logo})` }}
                    ></div>
                    <div>
                        <h3 className="font-bold">{project.name}</h3>
                        <p className="text-sm text-[#a3a3a3]">{project.desc}</p>
                    </div>
                    <div className=" shrink-0 text-[#a3a3a3] ml-auto mr-0">
                        {project.date}
                        {/* <button className="bg-[#0091004c] text-[#009100] font-bold px-3 py-1 text-sm rounded-full">
                            more
                        </button> */}
                    </div>
                </div>
            ))}
        </>
    );
}
