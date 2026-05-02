import { motion, useReducedMotion } from "motion/react";
import Container from "./Container";
import {
  getItemMotionProps,
  getSectionHeaderMotionProps,
  getSectionMotionProps,
} from "../lib/motion";
import { ui } from "../lib/ui";

export default function PageHero({ actions, aside, description, eyebrow, title }) {
  const shouldReduceMotion = useReducedMotion();
  const sectionMotionProps = getSectionMotionProps(shouldReduceMotion, 0.15);
  const itemMotionProps = getItemMotionProps(shouldReduceMotion);
  const headerMotionProps = getSectionHeaderMotionProps(shouldReduceMotion);

  return (
    <section className="pb-10">
      <Container size="wide">
        <motion.div
          className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start"
          {...sectionMotionProps}
        >
          <motion.div className="space-y-6" {...headerMotionProps}>
            <span className={ui.eyebrow}>{eyebrow}</span>
            <div className="space-y-5">
              <h1 className={`${ui.display} max-w-5xl`}>{title}</h1>
              <p className={ui.lead}>{description}</p>
            </div>
            {actions ? <div className="flex flex-wrap gap-4">{actions}</div> : null}
          </motion.div>

          {aside ? (
            <motion.div className={`${ui.panel} ${ui.panelStrong} p-6 sm:p-8`} {...itemMotionProps}>
              {aside}
            </motion.div>
          ) : null}
        </motion.div>
      </Container>
    </section>
  );
}
