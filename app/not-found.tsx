import Link from "next/link"

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] w-full min-w-0 flex-col items-center justify-center text-center">
      <p className="mb-3 font-mono text-xs tracking-widest text-[#10b981] uppercase">
        404
      </p>
      <h1 className="mb-4 text-xl sm:text-3xl font-semibold tracking-tight text-balance">
        Page not found
      </h1>
      <p className="mb-8 max-w-sm text-sm sm:text-base leading-relaxed text-[#a0a0a0]">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="rounded-full bg-white px-5 py-2.5 text-[11px] sm:text-xs font-bold uppercase tracking-wide text-black transition hover:bg-gray-200"
      >
        Back home
      </Link>
    </section>
  )
}
