import Section from "./Section";
import { process, techStack } from "@/data/content";

export default function Process() {
  return (
    <Section
      id="process"
      eyebrow="How we work"
      title={
        <>
          A clear path from idea to <span className="text-gradient">launch</span>
        </>
      }
    >
      <ol className="grid gap-6 md:grid-cols-4">
        {process.map((p, i) => (
          <li key={p.title} className="card p-7">
            <div className="font-display text-5xl font-bold text-gradient">0{i + 1}</div>
            <h3 className="mt-4 text-xl font-semibold">{p.title}</h3>
            <p className="mt-2 text-muted">{p.text}</p>
          </li>
        ))}
      </ol>

      <div className="mt-16 text-center">
        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-muted">
          Technologies we work with
        </p>
        <ul className="flex flex-wrap justify-center gap-3">
          {techStack.map((t) => (
            <li
              key={t}
              className="rounded-full border border-border bg-surface px-4 py-2 text-sm transition-colors hover:border-brand-cyan"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
