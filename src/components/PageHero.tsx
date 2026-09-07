export default function PageHero({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="border-b border-blue-900/20 bg-blue-800 text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        {subtitle && (
          <p className="text-base font-medium tracking-widest text-blue-200 uppercase">
            {subtitle}
          </p>
        )}
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          {title}
        </h1>
      </div>
    </section>
  );
}
