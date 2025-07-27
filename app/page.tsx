import { BlogPosts } from "app/components/posts";
import Skills from "./components/skills";

export default function Page() {
    return (
        <section>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                deepvinci
            </h1>
            <p className="mb-4">
                {`I'm a Fullstack web devloper  and engineering student who builds, functional systems with a purpose. Currently i am deep diving
                into full stack devlopment, AI and Systems engineering.`}
            </p>
            <div className="my-8">
                {/* <Skills /> */}
                <BlogPosts />
            </div>
        </section>
    );
}
