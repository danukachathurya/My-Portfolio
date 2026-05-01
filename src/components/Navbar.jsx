import Container from "./Container";
import ThemeToggle from "./ThemeToggle";
import { navigationLinks } from "../data/navigation";

export default function Navbar() {
  return (
    <header
      className="sticky top-0 z-20 border-b backdrop-blur-xl"
      style={{
        background: "color-mix(in srgb, var(--background-elevated) 90%, transparent)",
        borderColor: "var(--border)",
      }}
    >
      <Container
        as="nav"
        size="wide"
        className="flex flex-wrap items-center justify-between gap-4 py-4"
      >
        <a href="#" className="flex items-center gap-3">
          <span
            className="flex h-11 w-11 items-center justify-center rounded-2xl text-sm font-semibold"
            style={{
              background: "var(--gradient-hero)",
              color: "var(--accent-contrast)",
              boxShadow: "0 16px 30px -16px rgba(6, 182, 212, 0.4)",
            }}
          >
            DS
          </span>
          <span className="space-y-1">
            <span className="eyebrow-title block">Portfolio System</span>
            <span className="block text-sm font-semibold" style={{ color: "var(--foreground)" }}>
              Modern SaaS aesthetic
            </span>
          </span>
        </a>

        <div className="flex flex-1 flex-wrap items-center justify-end gap-3 sm:gap-5">
          <ul className="flex flex-wrap items-center justify-end gap-1 sm:gap-2">
            {navigationLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="rounded-full px-3 py-2 text-sm font-medium transition hover:bg-white/5"
                  style={{ color: "var(--muted)" }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}
