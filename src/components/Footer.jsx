import { useLocation } from "react-router";
import Container from "./Container";
import { sectionLinks } from "../data/navigation";
import { ui } from "../lib/ui";

export default function Footer() {
  const location = useLocation();
  const currentYear = new Date().getFullYear();
  const isHomePage = location.pathname === "/";
  const resolveSectionHref = (sectionHref) => (isHomePage ? sectionHref : `/${sectionHref}`);

  return (
    <footer
      className="border-t border-slate-200/70 bg-white/70 backdrop-blur-xl dark:border-slate-800/60 dark:bg-slate-950/60"
      id="footer"
    >
      <Container size="wide" className="flex flex-col gap-6 py-6 sm:py-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-1">
            <p className={ui.meta}>A one-page portfolio designed to feel polished, focused, and easy to explore.</p>
            <p className={ui.body}>
              Premium visuals, anchor navigation, and clear section flow help visitors understand
              your background, strengths, and next steps quickly.
            </p>
          </div>
          <p className={ui.mono}>{`(c) ${currentYear} React + Vite + Tailwind CSS + Motion`}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {sectionLinks.map((link) => (
            <a
              key={link.label}
              href={resolveSectionHref(link.href)}
              className="rounded-full border border-slate-200/70 px-4 py-2 text-sm font-medium text-slate-600 transition duration-200 hover:bg-white/80 hover:text-slate-950 motion-reduce:transition-none dark:border-slate-700/60 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}
