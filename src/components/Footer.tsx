import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <p className="text-sm font-semibold text-slate-800">
          {site.nameKo} ({site.nameEn})
        </p>
        <p className="mt-1 text-sm text-slate-500">
          {site.universityKo} {site.departmentKo} · {site.piNameKo} {site.piTitleKo}
        </p>
        <p className="mt-3 text-sm text-slate-500">
          E-mail{" "}
          <a
            href={`mailto:${site.email}`}
            className="text-blue-800 hover:underline"
          >
            {site.email}
          </a>
        </p>
        <p className="mt-6 text-xs text-slate-400">
          © {new Date().getFullYear()} {site.nameEn}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
