import { motion, useReducedMotion } from "motion/react";
import Button from "../Button";
import PageSection from "../PageSection";
import { personalProjects } from "../../data/home";
import { getItemMotionProps, getSectionMotionProps } from "../../lib/motion";
import { ui } from "../../lib/ui";

export default function PersonalProjectsSection() {
  const shouldReduceMotion = useReducedMotion();
  const sectionMotionProps = getSectionMotionProps(shouldReduceMotion);
  const itemMotionProps = getItemMotionProps(shouldReduceMotion);

  return (
    <PageSection
      id="personal-projects"
      className="scroll-mt-28"
      eyebrow="Personal Projects"
      title="Featured personal builds with polished presentation and product-focused UI"
      description="These cards highlight personal full-stack and frontend projects, each presented with its core stack, short context, and quick links to source code and live demos."
      panelClassName="border-sky-300/20 bg-[linear-gradient(180deg,rgba(240,249,255,0.94)_0%,rgba(248,250,252,0.92)_100%)] shadow-[0_36px_90px_-40px_rgba(8,47,73,0.2)] dark:bg-[linear-gradient(180deg,rgba(8,15,32,0.94)_0%,rgba(15,23,42,0.82)_100%)] dark:shadow-[0_48px_120px_-52px_rgba(2,6,23,0.82)]"
    >
      <motion.div className="grid gap-4 md:grid-cols-2" {...sectionMotionProps}>
        {personalProjects.map((project) => (
          <motion.article
            key={project.title}
            className="group relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/58 p-6 shadow-[0_34px_90px_-44px_rgba(8,47,73,0.18)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-sky-400/20 hover:bg-white/72 hover:shadow-[0_42px_110px_-48px_rgba(14,165,233,0.24)] motion-reduce:transform-none motion-reduce:transition-none dark:border-slate-700/60 dark:bg-slate-950/58 dark:hover:bg-slate-900/76"
            {...itemMotionProps}
            whileHover={shouldReduceMotion ? undefined : { y: -6 }}
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.18),_transparent_26%),linear-gradient(135deg,_rgba(14,165,233,0.08),_transparent_48%)] opacity-0 transition duration-300 group-hover:opacity-100 motion-reduce:transition-none" />

            <div className="relative flex h-full flex-col">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-3">
                  <span className="inline-flex items-center rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-sky-700 dark:text-sky-200">
                    Featured Build
                  </span>
                  <h3 className="text-[1.2rem] font-semibold leading-7 text-slate-950 dark:text-white">
                    {project.title}
                  </h3>
                </div>

                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 via-cyan-300 to-teal-300 text-[0.78rem] font-bold uppercase tracking-[0.18em] text-slate-950 shadow-[0_20px_44px_-24px_rgba(14,165,233,0.42)]">
                  {project.badge}
                </span>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-200/80 bg-white/55 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600 backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-950/50 dark:text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className={`${ui.body} mt-5 flex-1`}>{project.description}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button href={project.codeUrl} target="_blank" rel="noreferrer" size="sm" variant="secondary">
                  Code
                </Button>
                <Button href={project.demoUrl} target="_blank" rel="noreferrer" size="sm">
                  Live Demo
                </Button>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </PageSection>
  );
}
