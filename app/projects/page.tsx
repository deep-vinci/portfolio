import Projects from "../components/projects";

export const metadata = {
    title: "Projects",
    description: "View my projects.",
};

export default function Page() {
    return (
        <section className="max-w-3xl mx-auto w-full min-w-0 min-h-[80vh] pb-16">
            {/* <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Blog</h1> */}
            <Projects />
        </section>
    );
}
