import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import Button from "./Button";
import Container from "./Container";
import ThemeToggle from "./ThemeToggle";
import { navigationLinks } from "../data/navigation";

function navLinkStyles(isActive) {
  return {
    color: isActive ? "var(--foreground)" : "var(--muted)",
    background: isActive ? "color-mix(in srgb, var(--accent) 10%, transparent)" : "transparent",
    borderColor: isActive ? "color-mix(in srgb, var(--accent) 20%, transparent)" : "transparent",
  };
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className="sticky top-0 z-20 border-b backdrop-blur-xl"
      style={{
        background: "color-mix(in srgb, var(--background-elevated) 90%, transparent)",
        borderColor: "var(--border)",
      }}
    >
      <Container as="nav" size="wide" className="py-4">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3">
            <span
              className="flex h-11 w-11 items-center justify-center rounded-2xl text-sm font-semibold"
              style={{
                background: "var(--gradient-hero)",
                color: "var(--accent-contrast)",
                boxShadow: "0 16px 30px -16px rgba(6, 182, 212, 0.4)",
              }}
            >
              DP
            </span>
            <span className="space-y-1">
              <span className="eyebrow-title block">Developer Portfolio</span>
              <span className="block text-sm font-semibold" style={{ color: "var(--foreground)" }}>
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
                      `nav-link ${isActive ? "nav-link-active" : ""}`
                    }
                    style={({ isActive }) => navLinkStyles(isActive)}
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
              className="flex h-11 w-11 items-center justify-center rounded-2xl border transition hover:bg-white/5"
              onClick={() => setIsOpen((currentState) => !currentState)}
              style={{
                borderColor: "var(--border)",
                background: "color-mix(in srgb, var(--background-elevated) 90%, transparent)",
              }}
            >
              <span className="relative h-4 w-5">
                <span
                  className={`menu-line absolute left-0 top-0 h-0.5 w-5 rounded-full ${
                    isOpen ? "translate-y-[7px] rotate-45" : ""
                  }`}
                  style={{ background: "var(--foreground)" }}
                />
                <span
                  className={`menu-line absolute left-0 top-[7px] h-0.5 w-5 rounded-full ${
                    isOpen ? "opacity-0" : ""
                  }`}
                  style={{ background: "var(--foreground)" }}
                />
                <span
                  className={`menu-line absolute left-0 top-[14px] h-0.5 w-5 rounded-full ${
                    isOpen ? "-translate-y-[7px] -rotate-45" : ""
                  }`}
                  style={{ background: "var(--foreground)" }}
                />
              </span>
            </button>
          </div>
        </div>

        <div className="mobile-nav-shell lg:hidden" data-open={isOpen}>
          <div className="mobile-nav-panel">
            <div
              className="mt-4 rounded-[1.75rem] border p-4 shadow-2xl shadow-slate-950/15"
              style={{
                borderColor: "var(--border)",
                background: "color-mix(in srgb, var(--background-elevated) 94%, transparent)",
              }}
            >
              <ul className="grid gap-2">
                {navigationLinks.map((link) => (
                  <li key={link.label}>
                    <NavLink
                      to={link.to}
                      end={link.to === "/"}
                      className={({ isActive }) =>
                        `nav-link block ${isActive ? "nav-link-active" : ""}`
                      }
                      style={({ isActive }) => navLinkStyles(isActive)}
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_auto]">
                <ThemeToggle className="w-full justify-between min-w-0" />
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
