import { useEffect } from "react";
import { useLocation } from "react-router";

export default function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  }, [location.pathname]);

  return null;
}
