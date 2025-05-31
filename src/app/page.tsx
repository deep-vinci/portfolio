"use client";

import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        window.location.href = "https://github.com/deep-vinci";
    }, []);

    return <p>Redirecting to GitHub...</p>;
}
