import { motion, useReducedMotion } from "motion/react";
import Container from "./Container";
import { cn } from "../lib/cn";
import { getSectionHeaderMotionProps } from "../lib/motion";
import { ui } from "../lib/ui";

export default function PageSection({
  children,
  className = "",
  description,
  eyebrow,
  id,
  panelClassName = "",
  size = "wide",
  title,
}) {
  const shouldReduceMotion = useReducedMotion();
  const sectionHeaderMotionProps = getSectionHeaderMotionProps(shouldReduceMotion);

  return (
    <motion.section
      id={id}
      className={cn("relative py-10 sm:py-12", className)}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={shouldReduceMotion ? undefined : { once: true, amount: 0.1 }}
      transition={{ duration: 0.52, ease: [0.16, 1, 0.3, 1] }}
    >
      <Container size={size}>
        <div className={cn(ui.panel, "relative overflow-hidden p-6 sm:p-8 lg:p-10", panelClassName)}>
          <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.08),_transparent_24%),radial-gradient(circle_at_bottom_left,_rgba(20,184,166,0.06),_transparent_22%)]" />

          {(eyebrow || title || description) && (
            <motion.div className="relative space-y-3" {...sectionHeaderMotionProps}>
              {eyebrow ? <p className={ui.eyebrowTitle}>{eyebrow}</p> : null}
              {title ? <h2 className={ui.sectionTitle}>{title}</h2> : null}
              {description ? <p className={`${ui.lead} max-w-4xl`}>{description}</p> : null}
            </motion.div>
          )}

          <div className={cn("relative", eyebrow || title || description ? "mt-8" : "")}>
            {children}
          </div>
        </div>
      </Container>
    </motion.section>
  );
}
