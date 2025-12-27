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

export default function BlogPosts() {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch('/api/medium')
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    setError(data.error);
                } else {
                    setPosts(data.posts || []);
                }
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching blog posts:', err);
                setError('Failed to load blog posts');
                setLoading(false);
            });
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
            <h2 className="text-xl font-bold mb-4">Blogs</h2>
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
                            className="flex justify-start gap-4 my-4 cursor-pointer hover:scale-[1.01] duration-200 group relative"
                            href={post.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {post.image ? (
                                <div className="shrink-0 w-32 h-20 rounded-lg overflow-hidden bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="max-w-full max-h-full w-auto h-auto object-contain group-hover:scale-105 transition-transform duration-200"
                                    />
                                </div>
                            ) : (
                                <div className="shrink-0 w-32 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg group-hover:from-blue-600 group-hover:to-purple-700 transition-colors">
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                        />
                                    </svg>
                                </div>
                            )}
                            <div className="flex-1 min-w-0">
                                <h3 className="font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-1 line-clamp-1">
                                    {post.title}
                                </h3>
                                {post.description && (
                                    <p className="text-sm text-gray-700 dark:text-[#bcbcbc] line-clamp-2">
                                        {post.description}
                                    </p>
                                )}
                            </div>
                            <div className="shrink-0 text-gray-700 dark:text-[#bcbcbc] ml-auto mr-0 text-sm tabular-nums">
                                {formatDate(post.publishedAt)}
                            </div>
                        </Link>
                    ))
            )}
        </div>
    );
}
