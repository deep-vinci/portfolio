const LEVEL_COLORS = [
    "var(--heatmap-0, #161b22)", // level 0
    "var(--heatmap-1, #0e4429)", // level 1
    "var(--heatmap-2, #40c463)", // level 2
    "var(--heatmap-3, #30a14e)", // level 3
    "var(--heatmap-4, #216e39)", // level 4
] as const;

const CELL_SIZE = 12;
const GAP = 3;

type Contribution = { date: string; count: number; level: number };

async function fetchContributions(username: string): Promise<Contribution[]> {
    const res = await fetch(
        `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
        { next: { revalidate: 86400 } },
    );
    if (!res.ok) return [];
    const data = await res.json();
    return data.contributions ?? [];
}

export default async function GitHubHeatmap({
    username,
}: {
    username: string;
}) {
    const contributions = await fetchContributions(username);

    if (contributions.length === 0) {
        return (
            <div>
                <h3 className="text-sm font-mono tracking-widest text-[#898989] uppercase mb-6 ">
                    GITHUB ACTIVITY
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    Unable to load contribution data.
                </p>
            </div>
        );
    }

    const totalWeeks = Math.ceil(contributions.length / 7);
    const width = totalWeeks * (CELL_SIZE + GAP) - GAP;
    const height = 7 * (CELL_SIZE + GAP) - GAP;

    return (
        <>
            <h3 className="text-sm font-mono tracking-widest text-[#898989] uppercase mb-6">
                GITHUB ACTIVITY
            </h3>
            <div className="overflow-x-auto scrollbar-none">
                <svg
                    width={width}
                    height={height}
                    viewBox={`0 0 ${width} ${height}`}
                    className="overflow-visible"
                    aria-label="GitHub contribution graph"
                >
                    {contributions.map((c, i) => {
                        const week = Math.floor(i / 7);
                        const day = i % 7;
                        const x = week * (CELL_SIZE + GAP);
                        const y = day * (CELL_SIZE + GAP);
                        const fill = LEVEL_COLORS[Math.min(c.level, 4)];
                        return (
                            <rect
                                key={c.date}
                                x={x}
                                y={y}
                                width={CELL_SIZE}
                                height={CELL_SIZE}
                                rx={2}
                                ry={2}
                                fill={fill}
                                data-date={c.date}
                                data-count={c.count}
                            />
                        );
                    })}
                </svg>
            </div>
        </>
    );
}
