export default function Skills() {
    const techs = [
        "Docker",
        "Prometheus",
        "Nodejs",
        "React",
        "Nextjs",
        "Typescript",
        "Java",
        "C",
        "Python",
        "8085",
        "Postgresql",
    ];

    return (
        <>
            {" "}
            <h2 className="text-xl mb-4 font-bold">Skills</h2>
            <div className="flex flex-wrap gap-2">
                {techs.map((tech) => (
                    <button
                        key={tech}
                        className="border-[#4d4d4d] border px-4 py-1 rounded-lg text-xs font-bold cursor-pointer hover:bg-white hover:text-black"
                    >
                        {tech}
                    </button>
                ))}
            </div>
        </>
    );
}
