import { BlogPosts } from "app/components/posts";
import Skills from "./components/skills";
import Education from "./components/education";
import Projects from "./components/projects";

export default function Page() {
    return (
        <section>
            <h1 className="mb-8 text-5xl font-extrabold tracking-tighter">
                Hi, deepvinci here
            </h1>
            <p className="mb-4 text-md text-[#bcbcbc]">
                {`I'm a Fullstack web devloper  and engineering student who builds, functional systems with a purpose. Currently i am deep diving
                into full stack devlopment, AI and Systems engineering.`}
            </p>

            <div className="my-8">
                <Projects />
            </div>

            <div className="my-8">
                <Skills />
            </div>

            <div className="my-8">
                <BlogPosts />
            </div>

            <div className="my-8">
                <Education />
            </div>
        </section>
    );
}
