import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { publications } from "@/data/publications";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Publications" };

export default function PublicationsPage() {
  const byYear = publications.reduce<Record<number, typeof publications>>(
    (acc, p) => {
      acc[p.year] = acc[p.year] ? [...acc[p.year], p] : [p];
      return acc;
    },
    {},
  );
  const years = Object.keys(byYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <>
      <PageHero title="Publications" subtitle="Peer-reviewed Articles" />
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <p className="text-base text-slate-500">
          The full list of publications is also available on{" "}
          <a
            href={site.scholarUrl}
            className="text-blue-700 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            Google Scholar
          </a>
          .
        </p>

        <div className="mt-10 space-y-12">
          {years.map((year) => (
            <div key={year}>
              <h2 className="text-3xl font-bold text-slate-900">{year}</h2>
              <ol className="mt-4 space-y-5 border-t border-slate-200 pt-4">
                {byYear[year].map((p) => (
                  <li key={p.title} className="text-base leading-relaxed">
                    <p className="text-slate-800">{p.title}</p>
                    <p className="mt-1 text-slate-500">
                      {p.authors} — <em>{p.journal}</em> ({p.year})
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
