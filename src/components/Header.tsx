"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site } from "@/data/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="text-sm font-bold tracking-tight text-slate-900">
            {site.name}
          </span>
          <span className="text-[11px] text-slate-500">{site.universityAbbr}</span>
        </Link>

        <nav className="hidden gap-8 md:flex">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-base font-medium transition-colors ${
                  active
                    ? "text-blue-700"
                    : "text-slate-600 hover:text-blue-700"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="flex flex-col gap-1.5 p-2 md:hidden"
          aria-label="메뉴 열기"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="h-0.5 w-5 bg-slate-800" />
          <span className="h-0.5 w-5 bg-slate-800" />
          <span className="h-0.5 w-5 bg-slate-800" />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-slate-200 bg-white px-4 py-2 md:hidden">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-slate-100 py-3 text-base font-medium text-slate-700 last:border-none"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
