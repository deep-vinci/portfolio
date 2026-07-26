import BlogPosts from "../components/posts";

export const metadata = {
    title: "Blog",
    description: "View my blog posts.",
};

export default function BlogPage() {
    return (
        <section className="max-w-3xl mx-auto w-full min-w-0 min-h-[80vh] pt-8 sm:pt-12 pb-24 sm:pb-32">
            <div className="mb-10 sm:mb-16">
                <h1 className="text-2xl sm:text-3xl font-bold font-mono tracking-wider sm:tracking-widest uppercase mb-3 sm:mb-4 text-[#f2f2f2]">
                    CRAFT
                </h1>
                <p className="text-sm sm:text-base leading-relaxed font-light text-[#a0a0a0]">
                    Essays, tutorials, and learnings on software engineering and design.
                </p>
            </div>
            <BlogPosts />
        </section>
    );
}

