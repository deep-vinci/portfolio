export default function Skills() {
    const techs = [
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
            <h2 className="text-2xl mb-4 font-extrabold">My Skills</h2>
            <div className="flex flex-wrap gap-2">
                {techs.map((tech) => (
                    <button
                        key={tech}
                        className="border-[#4d4d4d] border px-4 py-1 rounded-lg text-sm hover:bg-white hover:text-black"
                    >
                        {tech}
                    </button>
                ))}
            </div>
        </>
    );
}
