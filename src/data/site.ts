export const site = {
  nameKo: "계산화학연구실",
  nameEn: "Computational Chemistry Lab",
  fullTitle: "계산화학연구실 @ KNUE",
  universityKo: "한국교원대학교",
  universityEn: "Korea National University of Education",
  departmentKo: "화학교육과",
  departmentEn: "Department of Chemistry Education",
  piNameKo: "박정빈",
  piTitleKo: "교수",
  piNameEn: "Chungbin Park",
  piTitleEn: "Professor",
  email: "cbpark@knue.ac.kr",
  github: "https://github.com/chungbinpark",
  scholarUrl: "https://scholar.google.com/citations?user=REPLACE_ME",
  taglineKo: "분자동역학 시뮬레이션으로 소프트 매터와 생체고분자의 동역학을 탐구합니다",
  taglineEn:
    "Molecular dynamics simulations of soft matter, ionic materials, and biopolymers",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/research", label: "Research" },
  { href: "/publications", label: "Publications" },
  { href: "/people", label: "People" },
  { href: "/notice", label: "Notice" },
  { href: "/contact", label: "Contact" },
] as const;
