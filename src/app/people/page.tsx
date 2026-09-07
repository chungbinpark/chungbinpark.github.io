import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "People" };

export default function PeoplePage() {
  return (
    <>
      <PageHero title="People" subtitle="Members" />
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <h2 className="text-xl font-bold text-slate-900">
          Principal Investigator
        </h2>
        <div className="mt-6 flex flex-col gap-6 rounded-lg border border-slate-200 p-6 sm:flex-row sm:items-center">
          <Image
            src="/pi-photo.jpeg"
            alt={site.piName}
            width={112}
            height={112}
            className="h-28 w-28 shrink-0 rounded-full object-cover"
          />
          <div>
            <p className="text-xl font-semibold text-slate-900">
              {site.piName}, {site.piTitle}
            </p>
            <p className="mt-2 text-base text-slate-600">
              {site.university}, {site.department}
            </p>
            <p className="mt-1 text-base text-slate-600">
              <a href={`mailto:${site.email}`} className="text-blue-700 hover:underline">
                {site.email}
              </a>
            </p>
          </div>
        </div>

        <h2 className="mt-16 text-xl font-bold text-slate-900">
          Lab Members
        </h2>
        <p className="mt-4 text-base text-slate-500">
          We are currently recruiting graduate and undergraduate researchers.
          If you are interested in joining the lab, please get in touch via
          the{" "}
          <a href="/contact" className="text-blue-700 hover:underline">
            contact page
          </a>
          .
        </p>
      </section>
    </>
  );
}
