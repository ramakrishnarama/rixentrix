import Icon from "./Icon";
import Section from "./Section";
import { bmsFeatures } from "@/data/content";

const bars = [38, 55, 42, 70, 62, 85, 58, 74, 48, 66, 80, 52];

export default function Bms() {
  return (
    <Section
      id="bms"
      eyebrow="BMS & Analytics"
      title={
        <>
          Smarter buildings, <span className="text-gradient">lower energy bills</span>
        </>
      }
      intro="Building management systems with analytics that show what is happening and what to fix next."
    >
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <ul className="space-y-4">
          {bmsFeatures.map((f) => (
            <li key={f} className="flex items-start gap-3">
              <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-emerald/15 text-brand-emerald">
                <Icon name="check" className="h-4 w-4" />
              </span>
              <span className="text-lg">{f}</span>
            </li>
          ))}
        </ul>

        <div className="card p-6">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2 font-semibold">
              <Icon name="building" className="h-5 w-5 text-brand-cyan" /> Energy usage, last 12
              months
            </div>
            <span className="rounded-full bg-brand-emerald/15 px-3 py-1 text-xs text-brand-emerald">
              -18% vs baseline
            </span>
          </div>
          <div className="flex h-48 items-end gap-2" role="img" aria-label="Monthly energy usage bar chart">
            {bars.map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-md bg-gradient-to-t from-brand-violet to-brand-cyan"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <p className="mt-4 text-xs text-muted">Illustrative dashboard preview.</p>
        </div>
      </div>
    </Section>
  );
}
