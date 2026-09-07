import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact" subtitle="Get in Touch" />
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <dl className="space-y-6 text-base">
          <div>
            <dt className="font-semibold text-slate-900">Affiliation</dt>
            <dd className="mt-1 text-slate-600">
              {site.department}, {site.university}
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-900">
              Principal Investigator
            </dt>
            <dd className="mt-1 text-slate-600">
              {site.piName}, {site.piTitle}
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-900">E-mail</dt>
            <dd className="mt-1">
              <a
                href={`mailto:${site.email}`}
                className="text-blue-700 hover:underline"
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
                className="text-blue-700 hover:underline"
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
