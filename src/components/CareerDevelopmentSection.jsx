import { motion, useReducedMotion } from "motion/react";
import PageSection from "./PageSection";
import { careerMilestones, learningPriorities } from "../data/careerPlan";
import { getItemMotionProps, getSectionMotionProps } from "../lib/motion";
import { ui } from "../lib/ui";

export default function CareerDevelopmentSection({ className = "", id = "career-plan" }) {
  const shouldReduceMotion = useReducedMotion();
  const sectionMotionProps = getSectionMotionProps(shouldReduceMotion);
  const itemMotionProps = getItemMotionProps(shouldReduceMotion);

  return (
    <PageSection
      id={id}
      className={`scroll-mt-28 ${className}`.trim()}
      eyebrow="Career Development Plan"
      title="A roadmap that connects near-term growth with long-term backend ambition"
      description="This plan breaks my growth into clear phases, while also highlighting the technologies and practices I want to invest in next."
      panelClassName="border-sky-300/20 bg-[linear-gradient(180deg,rgba(240,249,255,0.94)_0%,rgba(248,250,252,0.92)_100%)] shadow-[0_36px_90px_-40px_rgba(8,47,73,0.18)] dark:bg-[linear-gradient(180deg,rgba(8,15,32,0.94)_0%,rgba(15,23,42,0.84)_100%)] dark:shadow-[0_48px_120px_-52px_rgba(2,6,23,0.82)]"
    >
      <motion.div className="grid gap-6 xl:grid-cols-[1.12fr_0.88fr]" {...sectionMotionProps}>
        <div className="relative">
          <div className="pointer-events-none absolute bottom-0 left-5 top-2 w-px bg-gradient-to-b from-sky-400/70 via-cyan-300/40 to-transparent sm:left-8" />

          <div className="space-y-6">
            {careerMilestones.map((milestone) => (
              <motion.article
                key={milestone.step}
                className="relative pl-14 sm:pl-20"
                {...itemMotionProps}
              >
                <div className="absolute left-0 top-3 flex h-10 w-10 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-400/10 text-[0.72rem] font-bold tracking-[0.18em] text-sky-300 shadow-[0_18px_40px_-22px_rgba(14,165,233,0.55)] sm:left-3 sm:h-10 sm:w-10">
                  {milestone.step}
                </div>
                <div className="absolute left-[1.05rem] top-[3.25rem] h-3 w-3 rounded-full border border-sky-300/40 bg-slate-950 shadow-[0_0_0_6px_rgba(14,165,233,0.12)] sm:left-[2rem]" />

                <div className="relative overflow-hidden rounded-[1.9rem] border border-slate-200/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(248,250,252,0.92)_100%)] p-6 shadow-[0_30px_70px_-38px_rgba(15,23,42,0.24)] backdrop-blur-xl dark:border-slate-700/60 dark:bg-[linear-gradient(180deg,rgba(15,23,42,0.9)_0%,rgba(15,23,42,0.72)_100%)] dark:shadow-[0_40px_90px_-42px_rgba(2,6,23,0.82)] sm:p-7">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.12),_transparent_28%),linear-gradient(135deg,_rgba(14,165,233,0.06),_transparent_52%)]" />

                  <div className="relative space-y-5">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="inline-flex items-center rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-sky-700 dark:text-sky-200">
                            {milestone.horizon}
                          </span>
                          <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                            {milestone.timeframe}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-slate-950 dark:text-white sm:text-[1.3rem]">
                          {milestone.title}
                        </h3>
                      </div>
                    </div>

                    <ul className="grid gap-3 sm:grid-cols-2">
                      {milestone.goals.map((goal) => (
                        <li
                          key={goal}
                          className="rounded-3xl border border-slate-200/70 bg-white/70 p-4 shadow-[0_18px_36px_-28px_rgba(15,23,42,0.16)] backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-950/55"
                        >
                          <div className="flex items-start gap-3">
                            <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-r from-sky-400 to-cyan-300" />
                            <p className="text-[0.96rem] leading-7 text-slate-700 dark:text-slate-300">
                              {goal}
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

        <motion.aside className="space-y-4" {...itemMotionProps}>
          <div className="rounded-[1.9rem] border border-slate-200/70 bg-white/72 p-6 shadow-[0_30px_70px_-38px_rgba(15,23,42,0.18)] backdrop-blur-2xl dark:border-slate-700/60 dark:bg-slate-950/58">
            <div className="space-y-3">
              <p className={ui.eyebrowTitle}>Skills To Learn</p>
              <h3 className={ui.title}>Next technical priorities</h3>
              <p className={ui.body}>
                These progress indicators represent the areas I want to prioritize as I move from
                application building into stronger delivery, infrastructure, and system thinking.
              </p>
            </div>

            <div className="mt-6 space-y-5">
              {learningPriorities.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-slate-950 dark:text-white">
                        {skill.name}
                      </p>
                      <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                        {skill.label}
                      </p>
                    </div>
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                      {skill.value}%
                    </span>
                  </div>

                  <div className="h-3 overflow-hidden rounded-full bg-slate-200/80 dark:bg-slate-800/80">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-teal-300 shadow-[0_8px_22px_-10px_rgba(14,165,233,0.55)]"
                      initial={shouldReduceMotion ? { width: `${skill.value}%` } : { width: 0 }}
                      whileInView={{ width: `${skill.value}%` }}
                      viewport={{ once: true, amount: 0.7 }}
                      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.aside>
      </motion.div>
    </PageSection>
  );
}
