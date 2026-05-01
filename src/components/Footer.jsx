import { Link } from "react-router";
import Container from "./Container";
import { secondaryNavigationLinks } from "../data/navigation";
import { ui } from "../lib/ui";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200/70 bg-white/70 backdrop-blur-xl dark:border-slate-800/60 dark:bg-slate-950/60" id="footer">
      <Container size="wide" className="flex flex-col gap-6 py-6 sm:py-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-1">
            <p className={ui.meta}>Built for developer portfolios that want product-level polish.</p>
            <p className={ui.body}>
              Shared tokens, routed pages, and a responsive navbar keep the experience cohesive
              from first glance to final call to action.
            </p>
          </div>
          <p className={ui.mono}>{`© ${currentYear} React + Vite + Tailwind CSS + React Router`}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {secondaryNavigationLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="rounded-full border border-slate-200/70 px-4 py-2 text-sm font-medium text-slate-600 transition duration-200 hover:bg-white/80 hover:text-slate-950 motion-reduce:transition-none dark:border-slate-700/60 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </Container>
    </footer>
  );
}
