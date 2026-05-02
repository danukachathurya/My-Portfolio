import { motion, useReducedMotion } from "motion/react";
import PageSection from "../PageSection";
import {
  BriefcaseIcon,
  CodeIcon,
  DatabaseIcon,
} from "../icons/PortfolioIcons";
import { experienceCards, workExperience } from "../../data/home";
import { getItemMotionProps, getSectionMotionProps } from "../../lib/motion";
import { ui } from "../../lib/ui";

const iconMap = {
  briefcase: BriefcaseIcon,
  database: DatabaseIcon,
  code: CodeIcon,
};

export default function ExperienceSection() {
  const shouldReduceMotion = useReducedMotion();
  const sectionMotionProps = getSectionMotionProps(shouldReduceMotion);
  const itemMotionProps = getItemMotionProps(shouldReduceMotion);

  return (
    <PageSection
      id="experience"
      className="scroll-mt-28"
      eyebrow="Work Experience"
      title="Featured internship experience at Gamage Recruiters"
      description="This section highlights the internship experience that strengthened your practical understanding of interfaces, APIs, databases, and real-world application maintenance."
      panelClassName="border-sky-300/20 bg-[linear-gradient(180deg,rgba(240,249,255,0.94)_0%,rgba(248,250,252,0.92)_100%)] shadow-[0_36px_90px_-40px_rgba(8,47,73,0.22)] dark:bg-[linear-gradient(180deg,rgba(8,15,32,0.94)_0%,rgba(15,23,42,0.84)_100%)] dark:shadow-[0_48px_120px_-52px_rgba(2,6,23,0.82)]"
    >
      <motion.div className="grid gap-4 xl:grid-cols-[1.18fr_0.82fr]" {...sectionMotionProps}>
        <motion.article
          className="relative overflow-hidden rounded-[2rem] border border-sky-300/20 bg-[linear-gradient(135deg,rgba(8,47,73,0.08)_0%,rgba(14,165,233,0.06)_42%,rgba(45,212,191,0.08)_100%)] p-6 shadow-[0_34px_90px_-44px_rgba(8,47,73,0.26)] backdrop-blur-xl dark:bg-[linear-gradient(135deg,rgba(8,47,73,0.34)_0%,rgba(15,23,42,0.56)_52%,rgba(6,182,212,0.16)_100%)] sm:p-8"
          {...itemMotionProps}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.14),_transparent_28%),linear-gradient(135deg,_rgba(14,165,233,0.08),_transparent_48%)]" />

          <div className="relative space-y-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[1.35rem] border border-sky-300/20 bg-slate-950 text-base font-bold uppercase tracking-[0.28em] text-sky-200 shadow-[0_20px_50px_-28px_rgba(2,6,23,0.85)]">
                  GR
                </div>
                <div className="space-y-2">
                  <p className={ui.eyebrowTitle}>Company Logo Placeholder</p>
                  <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">
                    {workExperience.company}
                  </h3>
                  <p className="text-base font-medium text-slate-700 dark:text-slate-200">
                    {workExperience.role}
                  </p>
                </div>
              </div>

              <span className="inline-flex items-center rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-[0.72rem] font-bold uppercase tracking-[0.22em] text-sky-700 dark:text-sky-200">
                {workExperience.duration}
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {workExperience.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="rounded-3xl border border-white/60 bg-white/70 p-5 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.2)] backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-950/60"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-r from-sky-400 to-cyan-300" />
                    <p className="text-[0.98rem] leading-7 text-slate-700 dark:text-slate-300">
                      {highlight}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.article>

        <motion.div className="grid gap-4" {...itemMotionProps}>
          {experienceCards.map((item) => {
            const Icon = iconMap[item.iconKey];

            return (
              <motion.article
                key={item.title}
                className={`${ui.card} p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-400/20 hover:bg-white/95 motion-reduce:transform-none motion-reduce:transition-none dark:hover:bg-slate-900/80`}
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              >
                <div className="space-y-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="space-y-3">
                    <h3 className={ui.title}>{item.title}</h3>
                    <p className={ui.body}>{item.body}</p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </motion.div>
    </PageSection>
  );
}
