import BlogPosts from "../components/posts";

export const metadata = {
    title: "Blog",
    description: "View my blog posts.",
};

export default function BlogPage() {
    return (
        <section className="max-w-3xl mx-auto w-full min-h-[80vh] pt-12 pb-32">
            <div className="mb-16">
                <h1 className="text-3xl font-bold font-mono tracking-widest uppercase mb-4 text-[#f2f2f2]">
                    CRAFT
                </h1>
                <p className="text-[#a0a0a0] text-base leading-relaxed font-light">
                    Essays, tutorials, and learnings on software engineering and design.
                </p>
            </div>
            <BlogPosts />
        </section>
    );
}

