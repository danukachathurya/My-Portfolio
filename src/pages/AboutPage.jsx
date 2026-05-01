import { motion, useReducedMotion } from "motion/react";
import Button from "../components/Button";
import PageHero from "../components/PageHero";
import PageSection from "../components/PageSection";
import { ui } from "../lib/ui";

const aboutParagraphs = [
  "I am a 4th-year IT undergraduate at SLIIT University with a strong foundation in software engineering and backend development.",
  "I completed my internship as a Software Engineer Intern at Gamage Recruiters, gaining hands-on experience in developing and maintaining real-world applications.",
  "I am skilled in building scalable systems, working with REST APIs and databases, and motivated to contribute to backend-focused projects.",
];

const highlightCards = [
  {
    title: "Education",
    value: "4th-year IT undergraduate at SLIIT University",
    icon: EducationIcon,
  },
  {
    title: "Internship",
    value: "Software Engineer Intern at Gamage Recruiters",
    icon: BriefcaseIcon,
  },
  {
    title: "Focus",
    value: "Scalable systems, REST APIs, and databases",
    icon: ServerIcon,
  },
];

const contactDetails = [
  {
    label: "Phone",
    value: "Add your phone number",
    helper: "Replace this with the number you want recruiters and collaborators to use.",
    icon: PhoneIcon,
  },
  {
    label: "Email",
    value: "Add your email address",
    helper: "Use the inbox you actively monitor for internship and project opportunities.",
    icon: MailIcon,
  },
];

const skills = ["Software Engineering", "Backend Development", "REST APIs", "Databases", "Scalable Systems"];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.68,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const staggerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.06,
    },
  },
};

function EducationIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M3 8.25 12 4l9 4.25L12 12.5 3 8.25Z" />
      <path d="M6.75 10.5v4.25c0 1.3 2.35 2.75 5.25 2.75s5.25-1.45 5.25-2.75V10.5" />
    </svg>
  );
}

function BriefcaseIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M8 6.75V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5v1.25" />
      <path d="M4.5 8h15A1.5 1.5 0 0 1 21 9.5v8A1.5 1.5 0 0 1 19.5 19h-15A1.5 1.5 0 0 1 3 17.5v-8A1.5 1.5 0 0 1 4.5 8Z" />
      <path d="M3 12.25h18" />
    </svg>
  );
}

function ServerIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="4" y="4.5" width="16" height="5" rx="1.5" />
      <rect x="4" y="14.5" width="16" height="5" rx="1.5" />
      <path d="M8 7h.01M8 17h.01M12 7h6M12 17h6" />
    </svg>
  );
}

function PhoneIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M6.6 4h2.1c.42 0 .79.28.91.68l.95 3.18a1 1 0 0 1-.24.98l-1.31 1.31a14.1 14.1 0 0 0 4.93 4.93l1.31-1.31a1 1 0 0 1 .98-.24l3.18.95c.4.12.68.49.68.91v2.1A1.5 1.5 0 0 1 19.5 21C10.94 21 4 14.06 4 5.5A1.5 1.5 0 0 1 5.5 4h1.1Z" />
    </svg>
  );
}

function MailIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="m5 7 7 5 7-5" />
    </svg>
  );
}

export default function AboutPage() {
  const shouldReduceMotion = useReducedMotion();
  const sectionMotionProps = shouldReduceMotion
    ? {}
    : {
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true, amount: 0.2 },
        variants: staggerVariants,
      };
  const itemMotionProps = shouldReduceMotion ? {} : { variants: cardVariants };

  return (
    <>
      <PageHero
        eyebrow="About Me"
        title="Backend-focused engineering with a strong software foundation."
        description="A portfolio should show more than tools. This page highlights your academic background, internship experience, and the kind of backend work you are motivated to keep building."
        actions={
          <>
            <Button to="/cv">View CV</Button>
            <Button to="/contact" variant="secondary">
              Contact Page
            </Button>
          </>
        }
        aside={
          <motion.div className="grid gap-4" {...sectionMotionProps}>
            {highlightCards.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div key={item.title} className={`${ui.card} p-4`} {...itemMotionProps}>
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-400/10 text-sky-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="space-y-2">
                      <p className={ui.eyebrowTitle}>{item.title}</p>
                      <p className="text-sm leading-7 text-slate-700 dark:text-slate-200">{item.value}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        }
      />

      <PageSection
        eyebrow="Profile"
        title="A concise summary of who I am and how I contribute"
        description="This section combines your story, practical focus areas, and direct contact channels in a layout that feels polished and easy to scan."
      >
        <motion.div className="grid gap-4 xl:grid-cols-[1.12fr_0.88fr]" {...sectionMotionProps}>
          <motion.article className={`${ui.card} overflow-hidden p-6 sm:p-8`} {...itemMotionProps}>
            <div className="space-y-5">
              <div className="space-y-3">
                <p className={ui.eyebrowTitle}>About Danuka Chathurya</p>
                {aboutParagraphs.map((paragraph) => (
                  <p key={paragraph} className={ui.body}>
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-full border border-sky-400/15 bg-sky-400/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700 dark:text-sky-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>

          <div className="grid gap-4">
            <motion.article className={`${ui.card} p-6`} {...itemMotionProps}>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                  <BriefcaseIcon className="h-5 w-5" />
                </div>
                <div className="space-y-3">
                  <p className={ui.eyebrowTitle}>Internship Experience</p>
                  <p className={ui.body}>
                    At Gamage Recruiters, I gained hands-on exposure to maintaining and
                    developing production-oriented applications, which strengthened both my
                    practical backend skills and my understanding of real engineering workflows.
                  </p>
                </div>
              </div>
            </motion.article>

            <motion.article className={`${ui.card} p-6`} {...itemMotionProps}>
              <div className="space-y-5">
                <div className="space-y-2">
                  <p className={ui.eyebrowTitle}>Contact Details</p>
                  <p className={ui.body}>
                    Keep these details current so recruiters, collaborators, and teams can reach
                    you easily.
                  </p>
                </div>

                <div className="grid gap-4">
                  {contactDetails.map((detail) => {
                    const Icon = detail.icon;

                    return (
                      <div
                        key={detail.label}
                        className="flex items-start gap-4 rounded-3xl border border-slate-200/70 bg-white/70 p-4 dark:border-slate-700/60 dark:bg-slate-900/70"
                      >
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-400/10 text-sky-300">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="min-w-0 space-y-1">
                          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                            {detail.label}
                          </p>
                          <p className="text-base font-semibold text-slate-900 dark:text-white">
                            {detail.value}
                          </p>
                          <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                            {detail.helper}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.article>
          </div>
        </motion.div>
      </PageSection>
    </>
  );
}
