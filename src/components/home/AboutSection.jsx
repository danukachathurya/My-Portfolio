import { motion, useReducedMotion } from "motion/react";
import PageSection from "../PageSection";
import {
  BriefcaseIcon,
  EducationIcon,
  ServerIcon,
} from "../icons/PortfolioIcons";
import { focusAreas, profileHighlights } from "../../data/home";
import { profile } from "../../data/profile";
import { getItemMotionProps, getSectionMotionProps } from "../../lib/motion";
import { ui } from "../../lib/ui";

const iconMap = {
  education: EducationIcon,
  briefcase: BriefcaseIcon,
  server: ServerIcon,
};

export default function AboutSection() {
  const shouldReduceMotion = useReducedMotion();
  const sectionMotionProps = getSectionMotionProps(shouldReduceMotion);
  const itemMotionProps = getItemMotionProps(shouldReduceMotion);

  return (
    <PageSection
      id="about"
      className="scroll-mt-28"
      eyebrow="About"
      title="A one-page portfolio that tells a clear story about your engineering direction"
      description="This section combines your academic foundation, internship experience, and full stack interests in a layout that is easy to scan for recruiters and collaborators."
    >
      <motion.div className="grid gap-4 xl:grid-cols-[1.08fr_0.92fr]" {...sectionMotionProps}>
        <motion.article className={`${ui.card} overflow-hidden p-6 sm:p-8`} {...itemMotionProps}>
          <div className="space-y-5">
            <div className="space-y-3">
              <p className={ui.eyebrowTitle}>About Me</p>
              {profile.aboutParagraphs.map((paragraph) => (
                <p key={paragraph} className={ui.body}>
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              {focusAreas.map((area) => (
                <span
                  key={area}
                  className="inline-flex items-center rounded-full border border-sky-400/15 bg-sky-400/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700 dark:text-sky-200"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </motion.article>

        <motion.div className="grid gap-4" {...itemMotionProps}>
          {profileHighlights.map((item) => {
            const Icon = iconMap[item.iconKey];

            return (
              <div key={item.title} className={`${ui.card} p-5`}>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-400/10 text-sky-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="space-y-2">
                    <p className={ui.eyebrowTitle}>{item.title}</p>
                    <p className={ui.body}>{item.value}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </PageSection>
  );
}
