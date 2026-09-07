import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Research" };

const topics = [
  {
    title: "Ion Transport in Organic Ionic Plastic Crystals",
    body: "We use molecular dynamics simulations to study the rotational and translational dynamics of imidazolium-based organic ionic plastic crystals (OIPCs), and how defects such as vacancies affect the transport of alkali ions, including lithium. This work aims to uncover the microscopic principles needed to design next-generation solid-state electrolytes.",
  },
  {
    title: "Packaging and Ejection Dynamics of Confined Polymers and DNA",
    body: "We simulate how polymer chains and DNA are packaged into, and ejected from, nanoscale confinements such as viral capsids. By analyzing how knots and packaging history affect ejection rate and pathway, we explain the mechanisms underlying DNA injection by bacteriophages.",
  },
  {
    title: "Molecular Vibrational and Structural Dynamics",
    body: "We combine quantum chemical calculations with molecular dynamics to analyze microscopic structural changes, such as ring-puckering vibrational modes in cyclic molecules.",
  },
];

export default function ResearchPage() {
  return (
    <>
      <PageHero title="Research" subtitle="Research Areas" />
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <p className="text-lg leading-relaxed text-slate-600">
          The Computational Chemistry Lab uses molecular dynamics (MD)
          simulations to investigate the dynamics of soft matter, ionic
          materials, and biopolymers at the atomic and molecular scale. We aim
          to reveal microscopic mechanisms that are difficult to observe
          experimentally alone, contributing to a deeper understanding of
          energy materials and biological systems.
        </p>

        <div className="mt-12 space-y-10">
          {topics.map((t) => (
            <div key={t.title} className="border-l-4 border-blue-700 pl-6">
              <h2 className="text-xl font-bold text-slate-900">{t.title}</h2>
              <p className="mt-2 text-base leading-relaxed text-slate-600">
                {t.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
