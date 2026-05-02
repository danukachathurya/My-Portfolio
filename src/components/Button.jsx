import { motion, useReducedMotion } from "motion/react";
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
  const shouldReduceMotion = useReducedMotion();
  const Component = to ? Link : href ? "a" : as;
  const classes = cn(
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-full border font-semibold leading-none transition duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/40 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 motion-reduce:transform-none motion-reduce:transition-none dark:focus-visible:ring-offset-slate-950",
    variantClasses[variant] ?? variantClasses.primary,
    sizeClasses[size] ?? sizeClasses.md,
    className,
  );
  const shimmer = (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden rounded-full"
    >
      <span className="absolute inset-y-0 left-[-32%] w-1/3 -skew-x-12 bg-white/20 opacity-0 blur-xl transition duration-500 group-hover:left-[108%] group-hover:opacity-100 motion-reduce:hidden" />
    </span>
  );
  const content = (
    <>
      {shimmer}
      <span className="relative z-[1] inline-flex items-center justify-center gap-2">{children}</span>
    </>
  );
  const motionProps = shouldReduceMotion
    ? {}
    : {
        whileHover: { y: -3, scale: 1.01 },
        whileTap: { scale: 0.985 },
      };

  if (to) {
    const MotionLink = motion.create(Link);

    return (
      <MotionLink to={to} className={classes} {...motionProps} {...props}>
        {content}
      </MotionLink>
    );
  }

  if (Component === "a") {
    const MotionAnchor = motion.create("a");

    return (
      <MotionAnchor href={href} className={classes} {...motionProps} {...props}>
        {content}
      </MotionAnchor>
    );
  }

  const MotionComponent = motion.create(Component);

  return (
    <MotionComponent type={type ?? "button"} className={classes} {...motionProps} {...props}>
      {content}
    </MotionComponent>
  );
}
