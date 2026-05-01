import { motion, useReducedMotion } from "motion/react";
import PageSection from "../PageSection";
import { universityProjects } from "../../data/home";
import { getItemMotionProps, getSectionMotionProps } from "../../lib/motion";
import { ui } from "../../lib/ui";

export default function UniversityProjectsSection() {
  const shouldReduceMotion = useReducedMotion();
  const sectionMotionProps = getSectionMotionProps(shouldReduceMotion);
  const itemMotionProps = getItemMotionProps(shouldReduceMotion);

  return (
    <PageSection
      id="projects"
      className="scroll-mt-28"
      eyebrow="University Projects"
      title="Selected university builds across systems, apps, and product ideas"
      description="These project cards showcase the range of systems and product concepts I have explored through university work, from operational platforms to full-stack application ideas."
    >
      <motion.div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-3" {...sectionMotionProps}>
        {universityProjects.map((project, index) => (
          <motion.article
            key={project.title}
            className="group relative overflow-hidden rounded-[1.9rem] border border-slate-200/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(248,250,252,0.92)_100%)] p-6 shadow-[0_30px_70px_-40px_rgba(15,23,42,0.22)] backdrop-blur-xl transition duration-300 hover:border-sky-400/20 hover:shadow-[0_36px_90px_-44px_rgba(8,47,73,0.22)] motion-reduce:transition-none dark:border-slate-700/60 dark:bg-[linear-gradient(180deg,rgba(15,23,42,0.88)_0%,rgba(15,23,42,0.72)_100%)] dark:shadow-[0_40px_100px_-46px_rgba(2,6,23,0.84)] dark:hover:bg-slate-900/78"
            {...itemMotionProps}
            whileHover={shouldReduceMotion ? undefined : { y: -6 }}
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.12),_transparent_28%),linear-gradient(135deg,_rgba(14,165,233,0.05),_transparent_52%)] opacity-0 transition duration-300 group-hover:opacity-100 motion-reduce:transition-none" />

            <div className="relative flex h-full flex-col">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-3">
                  <span className="inline-flex items-center rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-sky-700 dark:text-sky-200">
                    Project {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-[1.15rem] font-semibold leading-7 text-slate-950 dark:text-white">
                    {project.title}
                  </h3>
                </div>

                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 via-cyan-300 to-teal-300 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-slate-950 shadow-[0_18px_40px_-24px_rgba(14,165,233,0.4)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-200/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600 dark:border-slate-700/60 dark:text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className={`${ui.body} mt-5 flex-1`}>{project.description}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </PageSection>
  );
}
