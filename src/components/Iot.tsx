import Icon from "./Icon";
import Section from "./Section";
import { iotFeatures, pipeline } from "@/data/content";

export default function Iot() {
  return (
    <Section
      id="iot"
      eyebrow="IoT & Smart Home"
      title={
        <>
          From sensor to <span className="text-gradient">smart decision</span>
        </>
      }
      intro="We connect devices from different vendors, collect their data reliably and turn it into control and insight."
      className="bg-surface/40"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {iotFeatures.map((f) => (
          <article key={f.title} className="card flex gap-5 p-7">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-cyan/10 text-brand-cyan">
              <Icon name={f.icon} />
            </div>
            <div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-muted">{f.text}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="card mt-14 p-8">
        <h3 className="mb-8 text-center text-xl font-semibold">
          Data collection pipeline for IoT-enabled devices
        </h3>
        <ol className="grid items-start gap-8 md:grid-cols-4">
          {pipeline.map((p, i) => (
            <li key={p.title} className="relative text-center">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-brand-cyan to-brand-violet text-background">
                <Icon name={p.icon} className="h-8 w-8" />
              </div>
              <div className="mt-4 font-display text-lg font-semibold">{p.title}</div>
              <p className="mt-1 text-sm text-muted">{p.text}</p>
              {i < pipeline.length - 1 && (
                <svg
                  className="absolute left-[calc(50%+2.5rem)] top-8 hidden h-1 w-[calc(100%-5rem+2rem)] md:block"
                  aria-hidden="true"
                >
                  <line
                    x1="0"
                    y1="2"
                    x2="100%"
                    y2="2"
                    stroke="#22d3ee"
                    strokeWidth="2"
                    className="flow-line"
                  />
                </svg>
              )}
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
