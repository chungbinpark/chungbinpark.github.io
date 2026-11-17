export const site = {
  name: "AIMS Lab",
  nameFull: "AI-Integrated Molecular Simulation Lab",
  fullTitle: "AIMS Lab @ KNUE",
  subtitle: "AI-Integrated Molecular Simulation",
  university: "Korea National University of Education",
  universityAbbr: "KNUE",
  department: "Department of Chemistry Education",
  piName: "Chungbin Park",
  piTitle: "Professor",
  email: "cbpark@knue.ac.kr",
  github: "https://github.com/chungbinpark",
  scholarUrl: "https://scholar.google.com/citations?user=REPLACE_ME",
  tagline:
    "Exploring molecular structure, dynamics, and function through simulation and AI.",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/research", label: "Research" },
  { href: "/publications", label: "Publications" },
  { href: "/people", label: "People" },
  { href: "/notice", label: "Notice" },
  { href: "/contact", label: "Contact" },
] as const;
