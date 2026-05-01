import { motion, useReducedMotion } from "motion/react";
import PageSection from "./PageSection";
import { reflectionThemes, journalTimeline } from "../data/journal";
import { ui } from "../lib/ui";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.06,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.58,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function ReflectiveJournalSection({ className = "", id = "journal" }) {
  const shouldReduceMotion = useReducedMotion();
  const sectionMotionProps = shouldReduceMotion
    ? {}
    : {
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true, amount: 0.2 },
        variants: containerVariants,
      };
  const itemMotionProps = shouldReduceMotion ? {} : { variants: itemVariants };

  return (
    <PageSection
      id={id}
      className={`scroll-mt-28 ${className}`.trim()}
      eyebrow="Reflective Journal"
      title="A reflective timeline of what PPW taught me and where I want to improve next"
      description="This section captures the main lessons, skills, challenges, and next steps that came out of my PPW learning experience."
    >
      <motion.div className="space-y-8" {...sectionMotionProps}>
        <div className="grid gap-4 md:grid-cols-3">
          {reflectionThemes.map((theme) => (
            <motion.article key={theme} className={`${ui.card} p-5`} {...itemMotionProps}>
              <p className={ui.meta}>{theme}</p>
            </motion.article>
          ))}
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute bottom-0 left-5 top-2 w-px bg-gradient-to-b from-sky-400/70 via-cyan-300/40 to-transparent sm:left-8" />

          <div className="space-y-6">
            {journalTimeline.map((entry) => (
              <motion.article
                key={entry.step}
                className="relative pl-14 sm:pl-20"
                {...itemMotionProps}
              >
                <div className="absolute left-0 top-3 flex h-10 w-10 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-400/10 text-[0.72rem] font-bold tracking-[0.18em] text-sky-300 shadow-[0_18px_40px_-22px_rgba(14,165,233,0.55)] sm:left-3 sm:h-10 sm:w-10">
                  {entry.step}
                </div>
                <div className="absolute left-[1.05rem] top-[3.25rem] h-3 w-3 rounded-full border border-sky-300/40 bg-slate-950 shadow-[0_0_0_6px_rgba(14,165,233,0.12)] sm:left-[2rem]" />

                <div className="relative overflow-hidden rounded-[1.9rem] border border-slate-200/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(248,250,252,0.92)_100%)] p-6 shadow-[0_30px_70px_-38px_rgba(15,23,42,0.24)] backdrop-blur-xl dark:border-slate-700/60 dark:bg-[linear-gradient(180deg,rgba(15,23,42,0.9)_0%,rgba(15,23,42,0.72)_100%)] dark:shadow-[0_40px_90px_-42px_rgba(2,6,23,0.82)] sm:p-7">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.12),_transparent_28%),linear-gradient(135deg,_rgba(14,165,233,0.06),_transparent_52%)]" />

                  <div className="relative space-y-5">
                    <div className="space-y-3">
                      <span className="inline-flex items-center rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-sky-700 dark:text-sky-200">
                        Reflection {entry.step}
                      </span>
                      <h3 className="text-xl font-semibold text-slate-950 dark:text-white sm:text-[1.35rem]">
                        {entry.title}
                      </h3>
                      <p className={ui.body}>{entry.summary}</p>
                    </div>

                    <ul className="grid gap-3 sm:grid-cols-2">
                      {entry.points.map((point) => (
                        <li
                          key={point}
                          className="rounded-3xl border border-slate-200/70 bg-white/70 p-4 shadow-[0_18px_36px_-28px_rgba(15,23,42,0.16)] backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-950/55"
                        >
                          <div className="flex items-start gap-3">
                            <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-r from-sky-400 to-cyan-300" />
                            <p className="text-[0.96rem] leading-7 text-slate-700 dark:text-slate-300">
                              {point}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.div>
    </PageSection>
  );
}
