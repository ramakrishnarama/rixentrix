import type { ReactNode } from "react";

export default function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = "",
}: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative px-6 py-24 ${className}`}>
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-cyan">
            {eyebrow}
          </p>
          <h2 className="text-3xl font-bold sm:text-5xl">{title}</h2>
          {intro && <p className="mt-5 text-lg text-muted">{intro}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
