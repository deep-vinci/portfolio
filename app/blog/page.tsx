import BlogPosts from "../components/posts";

export const metadata = {
    title: "Blog",
    description: "View my blog posts.",
};

export default function BlogPage() {
    return (
        <section>
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Blog</h1>
            <BlogPosts />
        </section>
    );
}

