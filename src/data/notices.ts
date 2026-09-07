export type Notice = {
  id: number;
  title: string;
  date: string; // YYYY-MM-DD
  body: string;
};

// To add a notice, insert a new entry at the top of the array and increment id.
export const notices: Notice[] = [
  {
    id: 1,
    title: "Computational Chemistry Lab website launched",
    date: "2026-09-07",
    body: "The Computational Chemistry Lab website is now live. Research updates and publication news will be posted here going forward.",
  },
];
