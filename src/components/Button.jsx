import { Link } from "react-router";
import { cn } from "../lib/cn";

const variantClasses = {
  primary:
    "border-transparent bg-gradient-to-r from-sky-400 via-cyan-300 to-teal-300 text-slate-950 shadow-[0_22px_48px_-24px_rgba(6,182,212,0.55)] hover:saturate-110",
  secondary:
    "border-slate-300/70 bg-white/80 text-slate-950 shadow-[0_30px_60px_-34px_rgba(15,23,42,0.22)] hover:bg-white dark:border-sky-300/20 dark:bg-slate-950/70 dark:text-white dark:hover:bg-slate-900",
  ghost:
    "border-slate-200/70 bg-transparent text-slate-700 hover:border-sky-400/20 hover:bg-sky-400/10 hover:text-slate-950 dark:border-slate-700/60 dark:text-slate-200 dark:hover:bg-sky-400/10 dark:hover:text-white",
};

const sizeClasses = {
  sm: "px-4 py-3 text-[0.8rem]",
  md: "px-[1.35rem] py-[0.96rem] text-[0.95rem]",
  lg: "px-[1.55rem] py-[1.05rem] text-base",
};

export default function Button({
  as = "button",
  children,
  className = "",
  href,
  to,
  size = "md",
  type,
  variant = "primary",
  ...props
}) {
  const Component = to ? Link : href ? "a" : as;
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full border font-semibold leading-none transition duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/40 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 motion-reduce:transform-none motion-reduce:transition-none dark:focus-visible:ring-offset-slate-950",
    variantClasses[variant] ?? variantClasses.primary,
    sizeClasses[size] ?? sizeClasses.md,
    className,
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (Component === "a") {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Component type={type ?? "button"} className={classes} {...props}>
      {children}
    </Component>
  );
}
