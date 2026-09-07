export type Publication = {
  year: number;
  title: string;
  authors: string;
  journal: string;
  link?: string;
};

// TODO(박정빈): Google Scholar 프로필로 원문 대조 후 링크(DOI) 채워 넣어주세요.
// 현재 목록은 Google Scholar 이름 검색 결과 기반 초안이며, 동명이인 결과가 섞여 있을 수 있습니다.
export const publications: Publication[] = [
  {
    year: 2025,
    title:
      "Trajectory retracing of the packaging and ejection processes of coaxially spooled DNA",
    authors: "C. B. Park, B. J. Sung",
    journal: "Journal of Chemical Theory and Computation",
  },
  {
    year: 2023,
    title:
      "AT-specific DNA visualization revisits the directionality of bacteriophage φ DNA ejection",
    authors: "S. Bong, C. B. Park, S. G. Cho, J. Bae",
    journal: "Nucleic Acids Research",
  },
  {
    year: 2023,
    title:
      "Simulation studies on the dynamic heterogeneity of organic ionic plastic crystals",
    authors: "H. Park, C. B. Park, B. J. Sung",
    journal: "Bulletin of the Korean Chemical Society",
  },
  {
    year: 2023,
    title:
      "The effects of defects on the transport mechanisms of lithium ions in organic ionic plastic crystals",
    authors: "H. Park, C. B. Park, B. J. Sung",
    journal: "Physical Chemistry Chemical Physics",
  },
  {
    year: 2022,
    title:
      "Effects of alkali ion dopants on the transport mechanisms and thermal stabilities of imidazolium-based organic ionic plastic crystals",
    authors: "C. B. Park, B. J. Sung",
    journal: "Physical Chemistry Chemical Physics",
  },
  {
    year: 2021,
    title:
      "Effects of packaging history on the ejection of a polymer chain from a small confinement",
    authors: "C. B. Park, B. J. Sung",
    journal: "Macromolecules",
  },
  {
    year: 2021,
    title:
      "The effects of vacancies and their mobility on the dynamic heterogeneity in 1,3-dimethylimidazolium hexafluorophosphate organic ionic plastic crystals",
    authors: "H. Park, C. B. Park, B. J. Sung",
    journal: "Physical Chemistry Chemical Physics",
  },
  {
    year: 2020,
    title:
      "Heterogeneous rotational dynamics of imidazolium-based organic ionic plastic crystals",
    authors: "C. B. Park, B. J. Sung",
    journal: "The Journal of Physical Chemistry B",
  },
  {
    year: 2019,
    title:
      "The effects of a knot and its conformational relaxation on the ejection of a single polymer chain from confinement",
    authors: "C. B. Park, S. Kwon, B. J. Sung",
    journal: "The Journal of Chemical Physics",
  },
  {
    year: 2017,
    title: "Observation of the ring-puckering vibrational mode in thietane cation",
    authors: "Y. R. Lee, C. B. Park, J. Hwang, B. J. Sung",
    journal: "The Journal of Physical Chemistry A",
  },
];
