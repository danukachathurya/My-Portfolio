import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";
import Button from "./Button";
import Container from "./Container";
import DownloadCvButton from "./DownloadCvButton";
import ThemeToggle from "./ThemeToggle";
import { sectionLinks } from "../data/navigation";
import { cn } from "../lib/cn";

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");
  const moreMenuRef = useRef(null);
  const isHomePage = location.pathname === "/";
  const portfolioHomeHref = isHomePage ? "#home" : "/#home";
  const contactHref = isHomePage ? "#contact" : "/#contact";
  const resolveSectionHref = (sectionHref) => (isHomePage ? sectionHref : `/${sectionHref}`);
  const primarySectionLinks = sectionLinks.filter((link) =>
    ["Home", "About", "Education", "Experience", "Skills", "Contact"].includes(link.label),
  );
  const secondarySectionLinks = sectionLinks.filter(
    (link) => !primarySectionLinks.some((primaryLink) => primaryLink.href === link.href),
  );
  const isMoreActive = secondarySectionLinks.some((link) => link.href === activeHref);

  useEffect(() => {
    if (!isHomePage) {
      setActiveHref(location.pathname === "/certificates" ? "#certificates" : "#home");
      return undefined;
    }

    const updateFromHash = () => {
      setActiveHref(window.location.hash || "#home");
    };

    const sections = sectionLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);

        if (visibleEntry?.target?.id) {
          setActiveHref(`#${visibleEntry.target.id}`);
        }
      },
      {
        rootMargin: "-28% 0px -52% 0px",
        threshold: 0.18,
      },
    );

    sections.forEach((section) => observer.observe(section));
    window.addEventListener("hashchange", updateFromHash);
    updateFromHash();

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
      window.removeEventListener("hashchange", updateFromHash);
    };
  }, [isHomePage, location.pathname]);

  useEffect(() => {
    setIsMoreOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isMoreOpen) {
      return undefined;
    }

    const handlePointerDown = (event) => {
      if (!moreMenuRef.current?.contains(event.target)) {
        setIsMoreOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMoreOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMoreOpen]);

  useEffect(() => {
    const updateNavbarVisibility = () => {
      const nextScrollY = window.scrollY;

      setHasScrolled(nextScrollY > 12);
    };

    updateNavbarVisibility();
    window.addEventListener("scroll", updateNavbarVisibility, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateNavbarVisibility);
    };
  }, []);

  const handleNavigate = (href) => {
    setIsOpen(false);
    setIsMoreOpen(false);
    setActiveHref(href);
  };

  const shouldShowNavbar = true;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-30 border-b backdrop-blur-xl transition duration-300 motion-reduce:transition-none",
        shouldShowNavbar
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0",
        hasScrolled || shouldShowNavbar
          ? "border-slate-200/70 bg-white/72 shadow-[0_18px_44px_-34px_rgba(15,23,42,0.28)] dark:border-slate-800/60 dark:bg-slate-950/74"
          : "border-transparent bg-transparent shadow-none",
      )}
    >
      <Container as="nav" size="wide" className="py-4">
        <div className="flex items-center justify-between gap-4 xl:gap-6">
          <a
            href={portfolioHomeHref}
            className="flex shrink-0 items-center gap-3"
            onClick={() => handleNavigate("#home")}
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-r from-sky-400 via-cyan-300 to-teal-300 text-sm font-semibold text-slate-950 shadow-[0_16px_30px_-16px_rgba(6,182,212,0.4)]">
              DC
            </span>
          </a>

          <div className="hidden min-w-0 flex-1 items-center justify-end gap-3 lg:flex xl:gap-4">
            <ul className="flex min-w-0 flex-1 flex-nowrap items-center justify-center gap-1 xl:gap-1.5">
              {primarySectionLinks.map((link) => {
                const isActive = activeHref === link.href;

                return (
                  <li key={link.label} className="shrink-0">
                    <a
                      href={resolveSectionHref(link.href)}
                      aria-current={isActive ? "page" : undefined}
                      onClick={() => handleNavigate(link.href)}
                      className={cn(
                        "relative inline-flex items-center justify-center overflow-hidden whitespace-nowrap rounded-full border px-3 py-2.5 text-[0.92rem] font-semibold transition duration-200 motion-reduce:transform-none motion-reduce:transition-none after:absolute after:bottom-2 after:left-3 after:right-3 after:h-0.5 after:origin-center after:scale-x-0 after:rounded-full after:bg-gradient-to-r after:from-sky-400 after:via-cyan-300 after:to-teal-300 after:transition-transform after:duration-200 hover:-translate-y-0.5 hover:after:scale-x-100 xl:px-4 xl:text-sm",
                        isActive
                          ? "border-sky-400/20 bg-sky-400/10 text-slate-950 after:scale-x-100 dark:text-white"
                          : "border-transparent text-slate-600 hover:bg-white/80 dark:text-slate-300 dark:hover:bg-white/5",
                      )}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
              <li className="relative shrink-0" ref={moreMenuRef}>
                <button
                  type="button"
                  aria-expanded={isMoreOpen}
                  aria-haspopup="menu"
                  aria-label="Open more navigation links"
                  onClick={() => setIsMoreOpen((currentState) => !currentState)}
                  className={cn(
                    "relative inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-full border px-3 py-2.5 text-[0.92rem] font-semibold transition duration-200 motion-reduce:transform-none motion-reduce:transition-none after:absolute after:bottom-2 after:left-3 after:right-3 after:h-0.5 after:origin-center after:scale-x-0 after:rounded-full after:bg-gradient-to-r after:from-sky-400 after:via-cyan-300 after:to-teal-300 after:transition-transform after:duration-200 hover:-translate-y-0.5 hover:after:scale-x-100 xl:px-4 xl:text-sm",
                    isMoreActive || isMoreOpen
                      ? "border-sky-400/20 bg-sky-400/10 text-slate-950 after:scale-x-100 dark:text-white"
                      : "border-transparent text-slate-600 hover:bg-white/80 dark:text-slate-300 dark:hover:bg-white/5",
                  )}
                >
                  <span>More</span>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    fill="none"
                    className={cn("h-4 w-4 transition-transform duration-200", isMoreOpen && "rotate-180")}
                  >
                    <path
                      d="m5.5 7.5 4.5 4.5 4.5-4.5"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <div
                  className={cn(
                    "absolute right-0 top-full z-30 mt-3 w-64 origin-top-right rounded-[1.5rem] border border-slate-200/70 bg-white/95 p-3 shadow-2xl shadow-slate-950/15 backdrop-blur-xl transition duration-200 dark:border-slate-700/60 dark:bg-slate-950/95",
                    isMoreOpen
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-2 opacity-0",
                  )}
                >
                  <ul className="grid gap-1.5">
                    {secondarySectionLinks.map((link) => {
                      const isActive = activeHref === link.href;

                      return (
                        <li key={link.label}>
                          <a
                            href={resolveSectionHref(link.href)}
                            aria-current={isActive ? "page" : undefined}
                            onClick={() => handleNavigate(link.href)}
                            className={cn(
                              "relative block overflow-hidden rounded-2xl px-4 py-3 text-sm font-semibold transition duration-200 motion-reduce:transition-none",
                              isActive
                                ? "bg-sky-400/10 text-slate-950 dark:text-white"
                                : "text-slate-600 hover:bg-slate-100/90 dark:text-slate-300 dark:hover:bg-white/5",
                            )}
                          >
                            {link.label}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </li>
            </ul>
            <div className="flex shrink-0 items-center gap-3">
              <ThemeToggle />
              <DownloadCvButton size="sm" variant="secondary">
                Download CV
              </DownloadCvButton>
            </div>
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
                {sectionLinks.map((link) => {
                  const isActive = activeHref === link.href;

                  return (
                    <li key={link.label}>
                      <a
                        href={resolveSectionHref(link.href)}
                        aria-current={isActive ? "page" : undefined}
                        onClick={() => handleNavigate(link.href)}
                        className={cn(
                          "relative block overflow-hidden rounded-full border px-4 py-3 text-sm font-semibold transition duration-200 motion-reduce:transition-none after:absolute after:bottom-2 after:left-4 after:right-4 after:h-0.5 after:origin-center after:scale-x-0 after:rounded-full after:bg-gradient-to-r after:from-sky-400 after:via-cyan-300 after:to-teal-300 after:transition-transform after:duration-200",
                          isActive
                            ? "border-sky-400/20 bg-sky-400/10 text-slate-950 after:scale-x-100 dark:text-white"
                            : "border-transparent text-slate-600 hover:bg-white dark:text-slate-300 dark:hover:bg-white/5",
                        )}
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_auto]">
                <ThemeToggle className="min-w-0 w-full justify-between" />
                <div className="grid gap-3 sm:grid-cols-2">
                  <DownloadCvButton className="w-full" size="sm" variant="secondary">
                    Download CV
                  </DownloadCvButton>
                  <Button
                    href={contactHref}
                    className="w-full sm:w-auto"
                    size="sm"
                    onClick={() => handleNavigate("#contact")}
                  >
                    Start a Conversation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
