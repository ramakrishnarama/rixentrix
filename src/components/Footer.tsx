import { nav } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-sm text-muted md:flex-row">
        <p>
          <span className="font-display font-bold text-foreground">Rixentric</span> · Software,
          IoT & Cloud Solutions
        </p>
        <ul className="flex flex-wrap justify-center gap-6">
          {nav.map((n) => (
            <li key={n.href}>
              <a href={n.href} className="hover:text-foreground">
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <p>© 2026 Rixentric. All rights reserved.</p>
      </div>
    </footer>
  );
}
