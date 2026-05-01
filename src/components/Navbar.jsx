import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import Button from "./Button";
import Container from "./Container";
import ThemeToggle from "./ThemeToggle";
import { navigationLinks } from "../data/navigation";
import { cn } from "../lib/cn";
import { ui } from "../lib/ui";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/70 bg-white/70 backdrop-blur-xl dark:border-slate-800/60 dark:bg-slate-950/70">
      <Container as="nav" size="wide" className="py-4">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-r from-sky-400 via-cyan-300 to-teal-300 text-sm font-semibold text-slate-950 shadow-[0_16px_30px_-16px_rgba(6,182,212,0.4)]">
              DP
            </span>
            <span className="space-y-1">
              <span className={`${ui.eyebrowTitle} block`}>Developer Portfolio</span>
              <span className="block text-sm font-semibold text-slate-950 dark:text-white">
                Modern SaaS-style navigation
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-3 lg:flex">
            <ul className="flex flex-wrap items-center gap-2">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    className={({ isActive }) =>
                      cn(
                        "relative inline-flex items-center justify-center overflow-hidden rounded-full border px-4 py-3 text-sm font-semibold transition duration-200 motion-reduce:transform-none motion-reduce:transition-none after:absolute after:bottom-2 after:left-4 after:right-4 after:h-0.5 after:origin-center after:scale-x-0 after:rounded-full after:bg-gradient-to-r after:from-sky-400 after:via-cyan-300 after:to-teal-300 after:transition-transform after:duration-200 hover:-translate-y-0.5 hover:after:scale-x-100",
                        isActive
                          ? "border-sky-400/20 bg-sky-400/10 text-slate-950 after:scale-x-100 dark:text-white"
                          : "border-transparent text-slate-600 hover:bg-white/80 dark:text-slate-300 dark:hover:bg-white/5",
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <ThemeToggle />
            <Button to="/contact" size="sm">
              Let&apos;s Talk
            </Button>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <button
              type="button"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200/70 bg-white/80 transition duration-200 hover:bg-white motion-reduce:transition-none dark:border-slate-700/60 dark:bg-slate-950/70 dark:hover:bg-white/5"
              onClick={() => setIsOpen((currentState) => !currentState)}
            >
              <span className="relative h-4 w-5">
                <span
                  className={cn(
                    "absolute left-0 top-0 h-0.5 w-5 rounded-full bg-slate-950 transition duration-200 dark:bg-white",
                    isOpen && "translate-y-[7px] rotate-45",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-slate-950 transition duration-200 dark:bg-white",
                    isOpen && "opacity-0",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-slate-950 transition duration-200 dark:bg-white",
                    isOpen && "-translate-y-[7px] -rotate-45",
                  )}
                />
              </span>
            </button>
          </div>
        </div>

        <div
          className={cn(
            "grid overflow-hidden transition-all duration-300 motion-reduce:transition-none lg:hidden",
            isOpen ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
          )}
        >
          <div className="overflow-hidden">
            <div className="rounded-[1.75rem] border border-slate-200/70 bg-white/90 p-4 shadow-2xl shadow-slate-950/15 backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-950/90">
              <ul className="grid gap-2">
                {navigationLinks.map((link) => (
                  <li key={link.label}>
                    <NavLink
                      to={link.to}
                      end={link.to === "/"}
                      className={({ isActive }) =>
                        cn(
                          "relative block overflow-hidden rounded-full border px-4 py-3 text-sm font-semibold transition duration-200 motion-reduce:transition-none after:absolute after:bottom-2 after:left-4 after:right-4 after:h-0.5 after:origin-center after:scale-x-0 after:rounded-full after:bg-gradient-to-r after:from-sky-400 after:via-cyan-300 after:to-teal-300 after:transition-transform after:duration-200",
                          isActive
                            ? "border-sky-400/20 bg-sky-400/10 text-slate-950 after:scale-x-100 dark:text-white"
                            : "border-transparent text-slate-600 hover:bg-white dark:text-slate-300 dark:hover:bg-white/5",
                        )
                      }
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_auto]">
                <ThemeToggle className="min-w-0 w-full justify-between" />
                <Button to="/contact" className="w-full sm:w-auto" size="sm">
                  Start a Conversation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
