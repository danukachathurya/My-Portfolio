import { motion, useReducedMotion } from "motion/react";
import { useLocation } from "react-router";
import Container from "./Container";
import { sectionLinks } from "../data/navigation";
import { getItemMotionProps, getSectionMotionProps } from "../lib/motion";
import { ui } from "../lib/ui";

export default function Footer() {
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();
  const currentYear = new Date().getFullYear();
  const isHomePage = location.pathname === "/";
  const resolveSectionHref = (sectionHref) => (isHomePage ? sectionHref : `/${sectionHref}`);
  const sectionMotionProps = getSectionMotionProps(shouldReduceMotion, 0.15);
  const itemMotionProps = getItemMotionProps(shouldReduceMotion);

  return (
    <motion.footer
      className="border-t border-slate-200/70 bg-white/70 backdrop-blur-xl dark:border-slate-800/60 dark:bg-slate-950/60"
      id="footer"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={shouldReduceMotion ? undefined : { once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
    >
      <Container size="wide" className="flex flex-col gap-6 py-6 sm:py-8">
        <motion.div
          className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
          {...sectionMotionProps}
        >
          <motion.div className="space-y-1" {...itemMotionProps}>
            <p className={ui.meta}>A one-page portfolio designed to feel polished, focused, and easy to explore.</p>
            <p className={ui.body}>
              Premium visuals, anchor navigation, and clear section flow help visitors understand
              your background, strengths, and next steps quickly.
            </p>
          </motion.div>
          <motion.p className={ui.mono} {...itemMotionProps}>
            {`(c) ${currentYear} React + Vite + Tailwind CSS + Motion`}
          </motion.p>
        </motion.div>

        <motion.div className="flex flex-wrap gap-2" {...sectionMotionProps}>
          {sectionLinks.map((link) => (
            <motion.a
              key={link.label}
              href={resolveSectionHref(link.href)}
              className="rounded-full border border-slate-200/70 px-4 py-2 text-sm font-medium text-slate-600 transition duration-200 hover:bg-white/80 hover:text-slate-950 motion-reduce:transition-none dark:border-slate-700/60 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white"
              whileHover={shouldReduceMotion ? undefined : { y: -3 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
            >
              {link.label}
            </motion.a>
          ))}
        </motion.div>
      </Container>
    </motion.footer>
  );
}
