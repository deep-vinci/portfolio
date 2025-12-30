"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const GitHubCalendar = dynamic(
    () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
    { ssr: false }
);

export default function GitHubHeatmap({ username }: { username: string }) {
    return (
        <div>
            <h2 className="text-xl mb-4 font-bold">GitHub Activity</h2>
            <GitHubCalendar username={username} />
        </div>
    );
}

