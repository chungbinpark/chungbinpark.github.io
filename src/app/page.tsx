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
      <section className="relative overflow-hidden bg-slate-900 text-white">
        <MoleculePattern className="pointer-events-none absolute -right-16 -top-16 h-[420px] w-[420px] text-blue-400/40 sm:h-[520px] sm:w-[520px]" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
          <p className="text-sm font-medium tracking-widest text-blue-300 uppercase">
            {site.universityKo} {site.departmentKo}
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
            {site.nameKo}
          </h1>
          <p className="mt-2 text-lg text-slate-300">{site.nameEn}</p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300">
            {site.taglineEn}
          </p>
          <p className="mt-2 max-w-xl text-base leading-relaxed text-slate-400">
            {site.taglineKo}
          </p>
          <div className="mt-10 flex gap-4">
            <Link
              href="/research"
              className="rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-500"
            >
              연구 소개 보기
            </Link>
            <Link
              href="/contact"
              className="rounded-md border border-slate-500 px-5 py-3 text-sm font-semibold text-slate-100 hover:border-slate-300"
            >
              문의하기
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2">
        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900">공지사항</h2>
            <Link
              href="/notice"
              className="text-sm font-medium text-blue-800 hover:underline"
            >
              전체보기 →
            </Link>
          </div>
          <ul className="mt-6 divide-y divide-slate-200 border-t border-slate-900">
            {recentNotices.map((n) => (
              <li key={n.id} className="flex items-center justify-between py-4">
                <span className="text-sm text-slate-700">{n.title}</span>
                <span className="ml-4 shrink-0 text-xs text-slate-400">
                  {n.date}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900">최근 논문</h2>
            <Link
              href="/publications"
              className="text-sm font-medium text-blue-800 hover:underline"
            >
              전체보기 →
            </Link>
          </div>
          <ul className="mt-6 divide-y divide-slate-200 border-t border-slate-900">
            {recentPublications.map((p) => (
              <li key={p.title} className="py-4">
                <p className="text-sm text-slate-700">{p.title}</p>
                <p className="mt-1 text-xs text-slate-400">
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
