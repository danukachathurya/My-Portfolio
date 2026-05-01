import { motion, useReducedMotion } from "motion/react";
import PageSection from "../PageSection";
import { EducationIcon } from "../icons/PortfolioIcons";
import { educationTimeline } from "../../data/home";
import { getItemMotionProps, getSectionMotionProps } from "../../lib/motion";
import { ui } from "../../lib/ui";

export default function EducationSection() {
  const shouldReduceMotion = useReducedMotion();
  const sectionMotionProps = getSectionMotionProps(shouldReduceMotion);
  const itemMotionProps = getItemMotionProps(shouldReduceMotion);

  return (
    <PageSection
      id="education"
      className="scroll-mt-28"
      eyebrow="Education"
      title="An academic timeline that reflects both foundation and progression"
      description="This timeline highlights the key stages in your education, from school-level science studies to your current degree path in Information Technology."
    >
      <motion.div className="relative" {...sectionMotionProps}>
        <div className="pointer-events-none absolute bottom-0 left-5 top-2 w-px bg-gradient-to-b from-sky-400/70 via-cyan-300/40 to-transparent sm:left-8" />

        <div className="space-y-6">
          {educationTimeline.map((item) => (
            <motion.article
              key={item.institution}
              className="relative pl-14 sm:pl-20"
              {...itemMotionProps}
            >
              <div className="absolute left-0 top-3 flex h-10 w-10 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-400/10 text-sky-300 shadow-[0_18px_40px_-22px_rgba(14,165,233,0.55)] sm:left-3 sm:h-10 sm:w-10">
                <EducationIcon className="h-5 w-5" />
              </div>
              <div className="absolute left-[1.05rem] top-[3.25rem] h-3 w-3 rounded-full border border-sky-300/40 bg-slate-950 shadow-[0_0_0_6px_rgba(14,165,233,0.12)] sm:left-[2rem]" />

              <div className="relative overflow-hidden rounded-[1.9rem] border border-slate-200/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(248,250,252,0.92)_100%)] p-6 shadow-[0_30px_70px_-38px_rgba(15,23,42,0.24)] backdrop-blur-xl dark:border-slate-700/60 dark:bg-[linear-gradient(180deg,rgba(15,23,42,0.9)_0%,rgba(15,23,42,0.72)_100%)] dark:shadow-[0_40px_90px_-42px_rgba(2,6,23,0.82)] sm:p-7">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.12),_transparent_28%),linear-gradient(135deg,_rgba(14,165,233,0.06),_transparent_52%)]" />

                <div className="relative space-y-5">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="space-y-2">
                      <p className={ui.eyebrowTitle}>{item.years}</p>
                      <h3 className="text-xl font-semibold text-slate-950 dark:text-white sm:text-[1.35rem]">
                        {item.institution}
                      </h3>
                    </div>

                    <span className="inline-flex items-center rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-sky-700 dark:text-sky-200">
                      {item.status}
                    </span>
                  </div>

                  <ul className="grid gap-3">
                    {item.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-r from-sky-400 to-cyan-300" />
                        <p className="text-[0.98rem] leading-7 text-slate-700 dark:text-slate-300">
                          {detail}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </PageSection>
  );
}
