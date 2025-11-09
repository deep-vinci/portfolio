import Link from "next/link";
import Socials from "./socials";

const navItems = {
    "/": {
        name: "home",
    },
    "/projects": {
        name: "projects",
    },
    "/blog": {
        name: "blog",
    },
    "/resume.pdf": {
        name: "resume",
        external: true,
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
                            if (external) {
                                return (
                                    <a
                                        key={path}
                                        href={path}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 text-sm md:text-base"
                                    >
                                        {name}
                                    </a>
                                );
                            }
                            return (
                                <Link
                                    key={path}
                                    href={path}
                                    className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 text-sm md:text-base"
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
