import Icon from "./Icon";
import Section from "./Section";
import { cloud } from "@/data/content";

export default function Cloud() {
  return (
    <Section
      id="cloud"
      eyebrow="Cloud Infrastructure"
      title={
        <>
          Built to <span className="text-gradient">scale</span>, secure by design
        </>
      }
      intro="We design, deploy and run the cloud platform behind your apps and connected devices."
      className="bg-surface/40"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {cloud.map((c) => (
          <article key={c.title} className="card p-7">
            <div className="mb-5 text-brand-violet">
              <Icon name={c.icon} className="h-9 w-9" />
            </div>
            <h3 className="text-lg font-semibold">{c.title}</h3>
            <p className="mt-2 text-sm text-muted">{c.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
