import Icon from "./Icon";
import Section from "./Section";
import { services } from "@/data/content";

export default function Services() {
  return (
    <Section
      id="services"
      eyebrow="What we do"
      title={
        <>
          Full-stack <span className="text-gradient">software engineering</span>
        </>
      }
      intro="Mobile, backend, frontend and cloud: one team that owns your product from idea to production."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <article key={s.title} className="card p-7">
            <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-cyan/20 to-brand-violet/20 text-brand-cyan">
              <Icon name={s.icon} />
            </div>
            <h3 className="text-xl font-semibold">{s.title}</h3>
            <p className="mt-3 text-muted">{s.text}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {s.tags.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                >
                  {t}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
