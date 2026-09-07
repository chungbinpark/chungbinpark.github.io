export default function PageHero({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="border-b border-slate-200 bg-slate-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        {subtitle && (
          <p className="text-sm font-medium tracking-widest text-blue-300 uppercase">
            {subtitle}
          </p>
        )}
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h1>
      </div>
    </section>
  );
}
