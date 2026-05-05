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
      description="This section highlights the real project work I handled during my internship, from Figma-based planning to frontend implementation across multiple web products."
      panelClassName="border-sky-300/20 bg-[linear-gradient(180deg,rgba(240,249,255,0.94)_0%,rgba(248,250,252,0.92)_100%)] shadow-[0_36px_90px_-40px_rgba(8,47,73,0.22)] dark:bg-[linear-gradient(180deg,rgba(8,15,32,0.94)_0%,rgba(15,23,42,0.84)_100%)] dark:shadow-[0_48px_120px_-52px_rgba(2,6,23,0.82)]"
    >
      <motion.div className="space-y-6" {...sectionMotionProps}>
        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1.18fr)_minmax(17rem,0.82fr)]">
          <motion.article
            className="relative overflow-hidden rounded-[2rem] border border-sky-300/20 bg-[linear-gradient(135deg,rgba(8,47,73,0.08)_0%,rgba(14,165,233,0.06)_42%,rgba(45,212,191,0.08)_100%)] p-6 shadow-[0_34px_90px_-44px_rgba(8,47,73,0.26)] backdrop-blur-xl dark:bg-[linear-gradient(135deg,rgba(8,47,73,0.34)_0%,rgba(15,23,42,0.56)_52%,rgba(6,182,212,0.16)_100%)] sm:p-8"
            {...itemMotionProps}
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.14),_transparent_28%),linear-gradient(135deg,_rgba(14,165,233,0.08),_transparent_48%)]" />

            <div className="relative flex w-full flex-col gap-8">
              <div className="grid gap-5 md:grid-cols-[minmax(0,1fr)_auto] md:items-start">
                <div className="grid gap-4 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-start">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[1.35rem] border border-sky-300/20 bg-slate-950 text-base font-bold uppercase tracking-[0.28em] text-sky-200 shadow-[0_20px_50px_-28px_rgba(2,6,23,0.85)]">
                    GR
                  </div>
                  <div className="min-w-0 space-y-2">
                    <p className={ui.eyebrowTitle}>Internship Placement</p>
                    <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">
                      {workExperience.company}
                    </h3>
                    <p className="text-base font-medium text-slate-700 dark:text-slate-200">
                      {workExperience.role}
                    </p>
                  </div>
                </div>

                <span className="inline-flex w-fit items-center self-start rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-[0.72rem] font-bold uppercase tracking-[0.22em] text-sky-700 md:justify-self-end dark:text-sky-200">
                  {workExperience.duration}
                </span>
              </div>

              <div className="space-y-4">
                <p className={ui.eyebrowTitle}>Overview</p>
                <p className="max-w-3xl text-[1rem] leading-8 text-slate-700 dark:text-slate-300">
                  {workExperience.overview}
                </p>
              </div>

              <div className="grid auto-rows-fr gap-4 sm:grid-cols-2">
                {workExperience.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex h-full rounded-3xl border border-white/60 bg-white/70 p-5 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.2)] backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-950/60"
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

          <motion.div className="grid content-start gap-4 self-start lg:pt-2" {...itemMotionProps}>
            {experienceCards.map((item) => {
              const Icon = iconMap[item.iconKey];

              return (
                <motion.article
                  key={item.title}
                  className={`${ui.card} p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-400/20 hover:bg-white/95 motion-reduce:transform-none motion-reduce:transition-none dark:hover:bg-slate-900/80`}
                  whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                >
                  <div className="grid gap-4 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-start lg:grid-cols-1">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="space-y-2">
                      <p className={ui.eyebrowTitle}>Snapshot</p>
                      <h3 className={ui.title}>{item.title}</h3>
                      <p className={ui.body}>{item.body}</p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>

        <motion.div className="space-y-4" {...itemMotionProps}>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-2">
              <p className={ui.eyebrowTitle}>Project Highlights</p>
              <p className="max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400">
                A closer look at the products I contributed to and the kind of work I handled in each one.
              </p>
            </div>
          </div>

          <div className="grid gap-4 xl:grid-cols-3">
            {workExperience.projects.map((project, index) => (
              <article
                key={project.title}
                className="rounded-[1.75rem] border border-white/60 bg-white/75 p-5 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.2)] backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-950/60 sm:p-6"
              >
                <div className="space-y-5">
                  <div className="grid gap-4 md:grid-cols-[auto_minmax(0,1fr)] md:items-start">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-sky-300/30 bg-sky-400/10 text-[0.74rem] font-bold uppercase tracking-[0.22em] text-sky-700 dark:text-sky-200">
                      {`0${index + 1}`}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold leading-tight text-slate-950 dark:text-white">
                        {project.title}
                      </h3>
                      <p className="text-[0.98rem] leading-7 text-slate-700 dark:text-slate-300">
                        {project.summary}
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-3">
                    {project.contributions.map((contribution) => (
                      <div
                        key={contribution}
                        className="rounded-2xl border border-sky-200/50 bg-sky-50/70 p-4 dark:border-slate-700/60 dark:bg-slate-900/70"
                      >
                        <div className="flex items-start gap-3">
                          <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-r from-sky-400 to-cyan-300" />
                          <p className="text-[0.95rem] leading-7 text-slate-700 dark:text-slate-300">
                            {contribution}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </PageSection>
  );
}
