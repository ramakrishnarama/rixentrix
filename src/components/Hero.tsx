import Icon from "./Icon";
import { stats } from "@/data/content";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pb-20 pt-36">
      <div className="bg-grid absolute inset-0" />
      <div className="absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-brand-cyan/20 blur-[120px]" />
      <div className="absolute right-1/4 top-20 h-96 w-96 rounded-full bg-brand-violet/25 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-muted">
            <span className="h-2 w-2 rounded-full bg-brand-emerald" />
            Apps · IoT · Smart Buildings · Cloud
          </span>
          <h1 className="mt-6 text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
            We build software that <span className="text-gradient">connects</span> people and
            devices
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted">
            Rixentric is a software development and IoT engineering partner. From Android, iOS
            and React Native apps to backends, smart home systems, BMS analytics and cloud
            infrastructure, we ship the whole stack.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-cyan to-brand-violet px-7 py-3.5 font-semibold text-background transition-transform hover:scale-105"
            >
              Start your project <Icon name="arrow" className="h-5 w-5" />
            </a>
            <a
              href="#services"
              className="rounded-full border border-border px-7 py-3.5 font-semibold transition-colors hover:border-brand-cyan"
            >
              Explore services
            </a>
          </div>
        </div>

        <div className="animate-fade-up relative mx-auto w-full max-w-md [animation-delay:200ms]">
          <div className="animate-float card p-6">
            <div className="mb-4 flex items-center justify-between text-sm">
              <span className="font-semibold">Building Overview</span>
              <span className="flex items-center gap-1.5 text-brand-emerald">
                <span className="h-2 w-2 animate-pulse rounded-full bg-brand-emerald" /> Live
              </span>
            </div>
            <div className="grid grid-cols-3 gap-3 text-center">
              {[
                ["Energy", "42.8 kWh"],
                ["Temp", "23.4 °C"],
                ["Devices", "1,284"],
              ].map(([k, v]) => (
                <div key={k} className="rounded-xl border border-border bg-background/60 p-3">
                  <div className="text-xs text-muted">{k}</div>
                  <div className="mt-1 font-display font-semibold">{v}</div>
                </div>
              ))}
            </div>
            <svg viewBox="0 0 300 100" className="mt-5 w-full" aria-hidden="true">
              <defs>
                <linearGradient id="g" x1="0" x2="1">
                  <stop offset="0" stopColor="#22d3ee" />
                  <stop offset="1" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
              <path
                d="M0 70 C30 40 50 85 80 55 S130 20 160 50 210 90 240 40 280 30 300 20"
                fill="none"
                stroke="url(#g)"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
            <div className="mt-2 flex items-center gap-2 rounded-lg bg-brand-emerald/10 px-3 py-2 text-xs text-brand-emerald">
              <Icon name="check" className="h-4 w-4" /> All HVAC zones operating normally
            </div>
          </div>
        </div>
      </div>

      <dl className="relative mx-auto mt-20 grid max-w-5xl grid-cols-2 gap-8 border-t border-border pt-10 text-center md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col">
            <dt className="order-2 text-sm text-muted">{s.label}</dt>
            <dd className="font-display text-4xl font-bold text-gradient">{s.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
