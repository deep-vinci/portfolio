import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "SIH 2025 Certificate",
    description:
        "Certificate from the Smart India Hackathon 2025 college round, where our team ranked in the Top 10 among 45 teams.",
};

export default function SihCertificatePage() {
    return (
        <section className="fixed inset-0 z-10 flex h-[100dvh] w-full overflow-hidden bg-[#0e0e0e] px-3 pb-24 pt-3 sm:px-6 sm:pb-28 sm:pt-6">
            <div className="mx-auto flex min-h-0 w-full max-w-5xl flex-1 flex-col overflow-hidden rounded-2xl border border-[#292929] bg-[#111] shadow-2xl shadow-black/40 sm:rounded-3xl">
                <div className="relative min-h-0 flex-1 bg-[#171717] p-2 sm:p-4 lg:p-6">
                    <Image
                        src="/20260805_220507_rotated.jpg"
                        alt="Smart India Hackathon 2025 college round certificate"
                        width={4624}
                        height={3280}
                        priority
                        sizes="(max-width: 1024px) 100vw, 960px"
                        className="h-full w-full rounded-xl object-contain sm:rounded-2xl"
                    />
                </div>

                <div className="shrink-0 border-t border-[#292929] px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
                    <h1 className="text-base font-bold tracking-tight text-white sm:text-xl">
                        Top 10 in the college round
                    </h1>
                    <p className="mt-1 max-w-3xl text-xs leading-relaxed text-[#a3a3a3] sm:text-sm">
                        At the Smart India Hackathon college round, our team
                        ranked among the Top 10 out of 45 participating teams.
                    </p>
                </div>
            </div>
        </section>
    );
}
