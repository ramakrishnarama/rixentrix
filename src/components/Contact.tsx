"use client";

import { useState, type FormEvent } from "react";
import Icon from "./Icon";
import Section from "./Section";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "w-full rounded-xl border border-border bg-background/60 px-4 py-3 outline-none transition-colors placeholder:text-muted focus:border-brand-cyan";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      if (!res.ok) throw new Error();
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={
        <>
          Let&apos;s build something <span className="text-gradient">great</span>
        </>
      }
      intro="Tell us about your app, IoT or smart building project and we will reply within one business day."
    >
      <div className="card mx-auto max-w-3xl p-8 hover:!translate-y-0">
        <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
          <input name="name" required placeholder="Your name" aria-label="Your name" className={field} />
          <input name="email" type="email" required placeholder="Email address" aria-label="Email address" className={field} />
          <select name="service" aria-label="Service" defaultValue="" className={`${field} sm:col-span-2`}>
            <option value="" disabled>
              What do you need?
            </option>
            <option>Mobile app (Android / iOS / React Native)</option>
            <option>Backend or frontend development</option>
            <option>IoT or smart home solution</option>
            <option>BMS & analytics</option>
            <option>Cloud infrastructure</option>
            <option>Something else</option>
          </select>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Tell us about your project"
            aria-label="Project details"
            className={`${field} sm:col-span-2`}
          />
          <button
            disabled={status === "sending"}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-cyan to-brand-violet px-7 py-3.5 font-semibold text-background transition-opacity hover:opacity-90 disabled:opacity-60 sm:col-span-2"
          >
            <Icon name="mail" className="h-5 w-5" />
            {status === "sending" ? "Sending..." : "Send message"}
          </button>
          <p role="status" className="text-center text-sm sm:col-span-2">
            {status === "sent" && <span className="text-brand-emerald">Thanks! We will be in touch shortly.</span>}
            {status === "error" && <span className="text-red-400">Something went wrong. Please try again.</span>}
          </p>
        </form>
      </div>
    </Section>
  );
}
