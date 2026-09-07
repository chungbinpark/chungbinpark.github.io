export const site = {
  name: "Computational Chemistry Lab",
  fullTitle: "Computational Chemistry Lab @ KNUE",
  university: "Korea National University of Education",
  universityAbbr: "KNUE",
  department: "Department of Chemistry Education",
  piName: "Chungbin Park",
  piTitle: "Professor",
  email: "cbpark@knue.ac.kr",
  github: "https://github.com/chungbinpark",
  scholarUrl: "https://scholar.google.com/citations?user=REPLACE_ME",
  tagline:
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
