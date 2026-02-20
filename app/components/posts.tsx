"use client"

import { useEffect, useState } from "react";
import Link from "next/link";

type BlogPost = {
    title: string;
    url: string;
    publishedAt: string;
    description: string;
    image?: string;
}

function formatDate(dateString: string): string {
    try {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) {
            return dateString;
        }
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    } catch {
        return dateString;
    }
}

function BlogSkeleton() {
    return (
        <div className="space-y-4">
            {[1, 2, 3].map((i) => (
                <div
                    key={i}
                    className="flex justify-start gap-4 my-4 animate-pulse"
                >
                    <div className="shrink-0 w-32 h-20 bg-neutral-200 dark:bg-neutral-800 rounded-lg"></div>
                    <div className="flex-1 space-y-2">
                        <div className="h-5 bg-neutral-200 dark:bg-neutral-800 rounded w-3/4"></div>
                        <div className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded w-full"></div>
                        <div className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded w-5/6"></div>
                    </div>
                    <div className="shrink-0 w-20 h-4 bg-neutral-200 dark:bg-neutral-800 rounded ml-auto"></div>
                </div>
            ))}
        </div>
    );
}

const manualBlogPosts: BlogPost[] = [
    {
        title: "Asynchronous Programming",
        url: "https://deep-vinci.github.io/asynchronous-js-demo/",
        publishedAt: "Thu, 20 Jun 2024 12:00:00 GMT",
        description: "In javascript there are mainly two different types of tasks which are blocking and non blocking, any task that takes a significant time to complete (relatively) is called blocking task in javascript (a huge while loop for an example) as that task is inserted into the call stack, javascript engine (which comprises of call stack and heap) first executes the loop then it clears of the loop off of the stack moving on to the next piece of code",
        image: ""
    }
]

export default function BlogPosts() {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;
        fetch('/api/medium')
            .then(res => res.json())
            .then(data => {
                if (!isMounted) return;

                if (data.error) {
                    setError(data.error);
                } else {
                    console.info(data.posts);
                    // Use absolute assignment instead of appending to prev 
                    // to prevent React Strict Mode duplicate render bugs
                    setPosts([
                        ...manualBlogPosts,
                        ...(data.posts ?? [])
                    ]);
                }
                setLoading(false);
            })
            .catch(err => {
                if (!isMounted) return;
                console.error('Error fetching blog posts:', err);
                setError('Failed to load blog posts');
                setLoading(false);
            });

        return () => {
            isMounted = false;
        };
    }, []);

    if (loading) {
        return (
            <div>
                <h2 className="text-xl font-bold mb-4">Blogs</h2>
                <BlogSkeleton />
            </div>
        );
    }

    if (error) {
        return (
            <div>
                <h2 className="text-xl font-bold mb-4">Blogs</h2>
                <div className="text-red-600 dark:text-red-400 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                    {error}
                </div>
            </div>
        );
    }

    return (
        <div>
            {posts.length === 0 ? (
                <p className="text-gray-700 dark:text-[#bcbcbc] py-4">No blog posts yet.</p>
            ) : (
                posts
                    .sort((a, b) => {
                        const dateA = new Date(a.publishedAt).getTime();
                        const dateB = new Date(b.publishedAt).getTime();
                        if (dateA > dateB) {
                            return -1;
                        }
                        return 1;
                    })
                    .map((post, index) => (
                        <Link
                            key={index}
                            className="flex justify-start gap-5 my-6 cursor-pointer hover:bg-[#181818] p-4 -ml-4 rounded-xl transition-all duration-300 relative group"
                            href={post.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {post.image ? (
                                <div className="shrink-0 w-24 h-16 rounded-lg overflow-hidden border border-[#2a2a2a] bg-[#0e0e0e] flex items-center justify-center">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="max-w-full max-h-full w-auto h-auto object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                                    />
                                </div>
                            ) : (
                                <div className="shrink-0 w-24 h-16 bg-[#181818] border border-[#2a2a2a] rounded-lg flex items-center justify-center text-[#555] group-hover:text-[#10b981] transition-colors">
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                                        />
                                    </svg>
                                </div>
                            )}
                            <div className="flex flex-col justify-center flex-1 min-w-0 pr-4">
                                <h3 className="font-bold text-lg text-white group-hover:text-[#10b981] transition-colors line-clamp-1">
                                    {post.title}
                                </h3>
                                {post.description && (
                                    <p className="text-sm text-[#898989] font-light mt-1 max-w-xl leading-relaxed line-clamp-2">
                                        {post.description}
                                    </p>
                                )}
                            </div>
                            <div className="shrink-0 mt-2 ml-auto text-xs font-mono font-bold tracking-widest text-[#555] group-hover:text-white transition-colors">
                                {formatDate(post.publishedAt)}
                            </div>
                        </Link>
                    ))
            )}
        </div>
    );
}
