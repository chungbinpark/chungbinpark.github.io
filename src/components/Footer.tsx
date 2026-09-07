import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <p className="text-base font-semibold text-slate-800">{site.name}</p>
        <p className="mt-1 text-base text-slate-500">
          {site.university}, {site.department}
        </p>
        <p className="mt-1 text-base text-slate-500">
          {site.piName}, {site.piTitle}
        </p>
        <p className="mt-3 text-base text-slate-500">
          E-mail{" "}
          <a
            href={`mailto:${site.email}`}
            className="text-blue-700 hover:underline"
          >
            {site.email}
          </a>
        </p>
        <p className="mt-6 text-sm text-slate-400">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
