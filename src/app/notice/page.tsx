import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { notices } from "@/data/notices";

export const metadata: Metadata = { title: "Notice" };

export default function NoticePage() {
  const sorted = [...notices].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <>
      <PageHero title="Notice" subtitle="Announcements" />
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <table className="w-full border-t border-slate-900 text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-slate-500">
              <th className="w-16 py-3 text-left font-medium">No.</th>
              <th className="py-3 text-left font-medium">Title</th>
              <th className="w-28 py-3 text-right font-medium">Date</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((n, i) => (
              <tr key={n.id} className="border-b border-slate-100 align-top">
                <td className="py-4 text-slate-400">{sorted.length - i}</td>
                <td className="py-4">
                  <details>
                    <summary className="cursor-pointer text-slate-800 marker:text-blue-700">
                      {n.title}
                    </summary>
                    <p className="mt-3 leading-relaxed text-slate-600">
                      {n.body}
                    </p>
                  </details>
                </td>
                <td className="py-4 text-right text-slate-400">{n.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}
