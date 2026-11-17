import Link from "next/link";
import { site } from "@/data/site";
import { notices } from "@/data/notices";
import { publications } from "@/data/publications";

export default function Home() {
  const recentNotices = notices.slice(0, 3);
  const recentPublications = publications.slice(0, 3);

  return (
    <>
      <section className="bg-blue-50">
        <div className="mx-auto max-w-5xl px-4 pt-8 sm:px-6">
          <div className="relative aspect-[1920/823] w-full overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hero-banner.webp"
              alt="AIMS Lab — AI-Integrated Molecular Simulation"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center px-4">
              <div className="max-w-2xl text-center">
                <p className="text-xs font-semibold tracking-widest text-blue-700 uppercase sm:text-sm">
                  {site.university} · {site.department}
                </p>
                <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                  {site.name}
                </h1>
                <p className="mt-2 text-base font-semibold text-blue-900 italic sm:text-xl">
                  {site.subtitle}
                </p>
                <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-slate-600 sm:text-lg">
                  {site.tagline}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto flex max-w-6xl justify-center gap-4 px-4 py-8 sm:px-6">
          <Link
            href="/research"
            className="rounded-md bg-blue-800 px-5 py-3 text-base font-semibold text-white hover:bg-blue-900"
          >
            Explore Research
          </Link>
          <Link
            href="/contact"
            className="rounded-md border border-blue-800/40 px-5 py-3 text-base font-semibold text-blue-900 hover:border-blue-800"
          >
            Contact
          </Link>
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
