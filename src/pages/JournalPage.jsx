import { motion, useReducedMotion } from "motion/react";
import Button from "../components/Button";
import PageHero from "../components/PageHero";
import ReflectiveJournalSection from "../components/ReflectiveJournalSection";
import { reflectionThemes } from "../data/journal";
import { ui } from "../lib/ui";

export default function JournalPage() {
  const shouldReduceMotion = useReducedMotion();
  const sectionMotionProps = shouldReduceMotion
    ? {}
    : {
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true, amount: 0.2 },
        variants: {
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.12,
              delayChildren: 0.06,
            },
          },
        },
      };
  const itemMotionProps = shouldReduceMotion
    ? {}
    : {
        variants: {
          hidden: { opacity: 0, y: 22 },
          show: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.58,
              ease: [0.16, 1, 0.3, 1],
            },
          },
        },
      };

  return (
    <>
      <PageHero
        eyebrow="Reflective Journal"
        title="A learning timeline shaped by PPW, practice, and steady problem solving."
        description="This journal page reflects what I learned through PPW, the skills I developed, the challenges I faced, and the areas I want to grow into next."
        actions={
          <>
            <Button href="/">Back to Portfolio</Button>
            <Button href="/#contact" variant="secondary">
              Contact Me
            </Button>
          </>
        }
        aside={
          <motion.div className="grid gap-4" {...sectionMotionProps}>
            <div className="space-y-2">
              <p className={ui.eyebrowTitle}>Reflection Themes</p>
              <p className={ui.body}>
                The strongest growth came from linking technical learning with real debugging,
                collaboration, and day-to-day engineering habits.
              </p>
            </div>

            {reflectionThemes.map((theme) => (
              <motion.div key={theme} className={`${ui.card} p-4`} {...itemMotionProps}>
                <p className={ui.meta}>{theme}</p>
              </motion.div>
            ))}
          </motion.div>
        }
      />

      <ReflectiveJournalSection />
    </>
  );
}
