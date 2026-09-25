import Link from "next/link";
import MoleculePattern from "@/components/MoleculePattern";
import { site } from "@/data/site";
import { notices } from "@/data/notices";
import { publications } from "@/data/publications";

export default function Home() {
  const recentNotices = notices.slice(0, 3);
  const recentPublications = publications.slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden bg-blue-800 text-white">
        <MoleculePattern className="pointer-events-none absolute -right-16 -top-16 h-[420px] w-[420px] text-white/25 sm:h-[520px] sm:w-[520px]" />
        <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <p className="text-lg font-medium tracking-widest text-blue-200 uppercase">
            {site.university} · {site.department}
          </p>
          <h1 className="mt-3 max-w-2xl text-6xl font-bold tracking-tight sm:text-7xl">
            {site.name}
          </h1>
          <p className="mt-4 max-w-xl text-2xl leading-relaxed text-blue-100">
            {site.tagline}
          </p>
          <div className="mt-6 flex gap-4">
            <Link
              href="/research"
              className="rounded-md bg-white px-5 py-3 text-base font-semibold text-blue-800 hover:bg-blue-50"
            >
              Explore Research
            </Link>
            <Link
              href="/contact"
              className="rounded-md border border-white/50 px-5 py-3 text-base font-semibold text-white hover:border-white"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2">
        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-900">Notice</h2>
            <Link
              href="/notice"
              className="text-base font-medium text-blue-700 hover:underline"
            >
              View all →
            </Link>
          </div>
          <ul className="mt-6 divide-y divide-slate-200 border-t border-slate-900">
            {recentNotices.map((n) => (
              <li key={n.id} className="flex items-center justify-between py-4">
                <span className="text-base text-slate-700">{n.title}</span>
                <span className="ml-4 shrink-0 text-sm text-slate-400">
                  {n.date}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-900">
              Recent Publications
            </h2>
            <Link
              href="/publications"
              className="text-base font-medium text-blue-700 hover:underline"
            >
              View all →
            </Link>
          </div>
          <ul className="mt-6 divide-y divide-slate-200 border-t border-slate-900">
            {recentPublications.map((p) => (
              <li key={p.title} className="py-4">
                <p className="text-base text-slate-700">{p.title}</p>
                <p className="mt-1 text-sm text-slate-400">
                  {p.journal} · {p.year}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
