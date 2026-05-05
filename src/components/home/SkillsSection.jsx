import { motion, useReducedMotion } from "motion/react";
import PageSection from "../PageSection";
import {
  CodeIcon,
  DatabaseIcon,
  ServerIcon,
  ToolingIcon,
} from "../icons/PortfolioIcons";
import { skillCategories } from "../../data/home";
import { getItemMotionProps, getSectionMotionProps } from "../../lib/motion";
import { ui } from "../../lib/ui";

const iconMap = {
  code: CodeIcon,
  server: ServerIcon,
  database: DatabaseIcon,
  tooling: ToolingIcon,
};

function SkillCountRing({ count, ringColor, shouldReduceMotion }) {
  const radius = 24;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="flex flex-col items-center gap-1.5">
      <div className="relative flex h-[4.25rem] w-[4.25rem] items-center justify-center">
        <svg className="-rotate-90" viewBox="0 0 64 64" aria-hidden="true">
        <circle
          cx="32"
          cy="32"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          className="text-slate-200/80 dark:text-slate-700/70"
        />
        <motion.circle
          cx="32"
          cy="32"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={circumference}
          className={ringColor}
          initial={
            shouldReduceMotion ? { strokeDashoffset: 0 } : { strokeDashoffset: circumference }
          }
          whileInView={{ strokeDashoffset: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        />
        </svg>

        <div className="absolute text-center">
          <p className="text-xl font-semibold leading-none tracking-[-0.03em] text-slate-950 dark:text-white">
            {count}
          </p>
        </div>
      </div>

      <p className="text-[0.58rem] font-bold uppercase leading-none tracking-[0.22em] text-slate-500 dark:text-slate-400">
        Skills
      </p>
    </div>
  );
}

function SkillBadgeIcon({ glyph, tone }) {
  return (
    <span
      className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${tone} text-[0.72rem] font-bold uppercase tracking-[0.2em] text-slate-950 shadow-[0_18px_36px_-24px_rgba(15,23,42,0.4)]`}
    >
      {glyph}
    </span>
  );
}

export default function SkillsSection() {
  const shouldReduceMotion = useReducedMotion();
  const sectionMotionProps = getSectionMotionProps(shouldReduceMotion);
  const itemMotionProps = getItemMotionProps(shouldReduceMotion);

  return (
    <PageSection
      id="skills"
      className="scroll-mt-28"
      eyebrow="Skills"
      title="A categorized toolkit built around modern full stack development"
      description="These categories organize the technologies I currently work with across interface development, backend engineering, databases, and delivery tooling."
    >
      <motion.div className="grid gap-5 xl:grid-cols-2" {...sectionMotionProps}>
        {skillCategories.map((category) => {
          const CategoryIcon = iconMap[category.iconKey];

          return (
            <motion.article
              key={category.title}
              className="group relative overflow-hidden rounded-[1.9rem] border border-slate-200/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(248,250,252,0.92)_100%)] p-6 shadow-[0_30px_70px_-40px_rgba(15,23,42,0.22)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-sky-300/30 dark:border-slate-700/60 dark:bg-[linear-gradient(180deg,rgba(15,23,42,0.88)_0%,rgba(15,23,42,0.72)_100%)] dark:shadow-[0_40px_100px_-46px_rgba(2,6,23,0.84)] motion-reduce:transform-none motion-reduce:transition-none sm:p-7"
              {...itemMotionProps}
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.12),_transparent_28%),linear-gradient(135deg,_rgba(14,165,233,0.05),_transparent_52%)]" />
              <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/35 to-transparent" />

              <div className="relative flex h-full flex-col gap-6">
                <div className="flex flex-col gap-5 border-b border-slate-200/70 pb-5 dark:border-slate-700/60 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex min-w-0 items-start gap-4">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${category.iconTone} text-slate-950 shadow-[0_22px_44px_-26px_rgba(15,23,42,0.35)]`}
                    >
                      <CategoryIcon className="h-5 w-5" />
                    </div>

                    <div className="min-w-0 space-y-2">
                      <p className={ui.eyebrowTitle}>{category.title}</p>
                      <p className={ui.body}>{category.description}</p>
                    </div>
                  </div>

                  <SkillCountRing
                    count={category.skills.length}
                    ringColor={category.ringColor}
                    shouldReduceMotion={shouldReduceMotion}
                  />
                </div>

                <div className="grid auto-rows-fr gap-3 sm:grid-cols-2">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      className="rounded-[1.4rem] border border-slate-200/80 bg-white/70 p-4 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.18)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-sky-400/20 hover:bg-white/90 motion-reduce:transform-none motion-reduce:transition-none dark:border-slate-700/60 dark:bg-slate-950/55 dark:hover:bg-slate-900/78"
                      whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                    >
                      <div className="flex h-full items-center gap-3">
                        <SkillBadgeIcon glyph={skill.glyph} tone={skill.tone} />
                        <div className="min-w-0 space-y-1">
                          <p className="text-sm font-semibold leading-tight text-slate-950 dark:text-white">
                            {skill.name}
                          </p>
                          <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                            Current toolkit
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </PageSection>
  );
}
