import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Research" };

const topics = [
  {
    title: "이온성 플라스틱 결정 내 이온 수송",
    body: "이미다졸륨 기반 유기 이온성 플라스틱 결정(OIPC)의 회전·병진 동역학과 결함(vacancy)이 리튬 이온 등 알칼리 이온의 수송 메커니즘에 미치는 영향을 분자동역학 시뮬레이션으로 규명하고, 차세대 고체 전해질 설계에 필요한 미시적 원리를 탐구합니다.",
  },
  {
    title: "구속 공간 내 고분자·DNA의 포장과 방출 동역학",
    body: "바이러스 캡시드와 같은 나노 구속 공간 안에서 고분자 사슬과 DNA가 포장되고 방출되는 과정을 시뮬레이션으로 재현합니다. 매듭(knot)과 포장 이력(packaging history)이 방출 속도와 경로에 미치는 영향을 분석하여 박테리오파지의 DNA 주입 메커니즘을 설명합니다.",
  },
  {
    title: "분자 진동 및 구조 동역학",
    body: "고리형 분자의 진동 모드(ring-puckering) 등 미시적 구조 변화를 양자화학 계산과 분자동역학을 결합하여 분석합니다.",
  },
];

export default function ResearchPage() {
  return (
    <>
      <PageHero title="Research" subtitle="연구 분야" />
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <p className="text-base leading-relaxed text-slate-600">
          계산화학연구실은 분자동역학(Molecular Dynamics, MD) 시뮬레이션을 중심으로
          소프트 매터, 이온성 소재, 생체고분자의 동역학적 성질을 원자·분자 수준에서
          탐구합니다. 실험만으로는 관측하기 어려운 미시적 메커니즘을 계산을 통해
          밝히고, 에너지 소재와 생체 시스템 이해에 기여하는 것을 목표로 합니다.
        </p>

        <div className="mt-12 space-y-10">
          {topics.map((t) => (
            <div key={t.title} className="border-l-4 border-blue-700 pl-6">
              <h2 className="text-lg font-bold text-slate-900">{t.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {t.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
