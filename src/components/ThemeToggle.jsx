import { useEffect, useState } from "react";
import Button from "./Button";

const STORAGE_KEY = "portfolio-theme";

function getCurrentTheme() {
  if (typeof document === "undefined") {
    return "dark";
  }

  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function applyTheme(theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getCurrentTheme);
  const nextTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    applyTheme(theme);
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  return (
    <Button
      aria-label={`Switch to ${nextTheme} mode`}
      className="min-w-[9.5rem] justify-between"
      onClick={() => setTheme(nextTheme)}
      size="sm"
      variant="secondary"
    >
      <span>Theme</span>
      <span className="theme-indicator">{theme}</span>
    </Button>
  );
}
