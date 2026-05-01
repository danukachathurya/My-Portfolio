import { Link } from "react-router";
import Container from "./Container";
import { secondaryNavigationLinks } from "../data/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t"
      id="footer"
      style={{
        background: "color-mix(in srgb, var(--background-elevated) 86%, transparent)",
        borderColor: "var(--border)",
      }}
    >
      <Container
        size="wide"
        className="flex flex-col gap-6 py-6 sm:py-8"
      >
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-1">
            <p className="meta-copy">
              Built for developer portfolios that want product-level polish.
            </p>
            <p className="body-copy">
              Shared tokens, routed pages, and a responsive navbar keep the experience cohesive
              from first glance to final call to action.
            </p>
          </div>
          <p className="mono-copy">{`© ${currentYear} React + Vite + Tailwind CSS + React Router`}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {secondaryNavigationLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="rounded-full border px-4 py-2 text-sm font-medium transition hover:bg-white/5"
              style={{ borderColor: "var(--border)", color: "var(--muted)" }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </Container>
    </footer>
  );
}
