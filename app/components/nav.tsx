import Link from "next/link";
import Socials from "./socials";

const navItems = {
    "/": {
        name: "home",
        external: false,
    },
    "/projects": {
        name: "projects",
        external: false,
    },
    "/blog": {
        name: "blog",
        external: false,
    },
    "/resume": {
        name: "resume",
        external: false,
    },
};

export function Navbar() {
    return (
        <aside className="min-h-[60px] mb-10 sticky top-0 dark:bg-black bg-white tracking-tight z-10">
            <div className="lg:sticky lg:top-20 ">
                <nav
                    className="flex flex-row items-center justify-between relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative gap-2 md:gap-4"
                    id="nav"
                >
                    <div className="flex flex-row flex-wrap items-center gap-1 md:gap-0 md:space-x-0 pr-2 md:pr-10">
                        {Object.entries(navItems).map(([path, { name, external }]) => {
                            if (external === true) {
                                return (
                                    <a
                                        key={path}
                                        href={path}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex items-center justify-center relative py-1.5 px-3 text-sm md:text-base rounded-md border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 font-medium"
                                    >
                                        {name}
                                    </a>
                                );
                            }
                            const isResume = path === "/resume";
                            return (
                                <Link
                                    key={path}
                                    href={path}
                                    className={`transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative text-sm md:text-base ${
                                        isResume
                                            ? "items-center justify-center py-1.5 px-3 rounded-md border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 font-medium"
                                            : "py-1 px-2"
                                    }`}
                                >
                                    {name}
                                </Link>
                            );
                        })}
                    </div>
                    <div className="flex-shrink-0">
                        <Socials />
                    </div>
                </nav>
            </div>
        </aside>
    );
}
