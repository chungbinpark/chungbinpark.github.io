import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact" subtitle="문의" />
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <dl className="space-y-6 text-sm">
          <div>
            <dt className="font-semibold text-slate-900">소속</dt>
            <dd className="mt-1 text-slate-600">
              {site.universityKo} {site.departmentKo} ({site.universityEn})
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-900">담당교수</dt>
            <dd className="mt-1 text-slate-600">
              {site.piNameKo} {site.piTitleKo} ({site.piNameEn}, {site.piTitleEn})
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-900">E-mail</dt>
            <dd className="mt-1">
              <a
                href={`mailto:${site.email}`}
                className="text-blue-800 hover:underline"
              >
                {site.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-900">GitHub</dt>
            <dd className="mt-1">
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer"
                className="text-blue-800 hover:underline"
              >
                {site.github}
              </a>
            </dd>
          </div>
        </dl>
      </section>
    </>
  );
}
