import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import Button from "../components/Button";
import Container from "../components/Container";
import PageSection from "../components/PageSection";
import { secondaryNavigationLinks } from "../data/navigation";
import { ui } from "../lib/ui";

const ROLE = "Full Stack Developer Intern";

const heroContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.06,
    },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.72,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

function GitHubIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M12 1.5A10.5 10.5 0 0 0 8.68 22c.53.1.72-.22.72-.5 0-.25-.01-1.06-.02-1.91-2.96.64-3.58-1.25-3.58-1.25-.48-1.2-1.18-1.53-1.18-1.53-.96-.66.08-.65.08-.65 1.06.08 1.62 1.08 1.62 1.08.95 1.6 2.49 1.14 3.1.87.1-.67.37-1.14.67-1.4-2.36-.26-4.84-1.16-4.84-5.2 0-1.15.41-2.09 1.08-2.82-.1-.27-.47-1.35.11-2.82 0 0 .89-.28 2.92 1.08a10.3 10.3 0 0 1 5.32 0c2.03-1.36 2.92-1.08 2.92-1.08.58 1.47.22 2.55.11 2.82.68.73 1.08 1.67 1.08 2.82 0 4.05-2.49 4.93-4.86 5.18.38.32.72.94.72 1.9 0 1.37-.01 2.48-.01 2.82 0 .28.19.61.73.5A10.5 10.5 0 0 0 12 1.5Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M5.37 3.5A1.87 1.87 0 1 0 5.4 7.24a1.87 1.87 0 0 0-.03-3.74ZM3.78 8.9h3.25V20.5H3.78V8.9Zm5.28 0h3.11v1.58h.05c.43-.81 1.49-1.66 3.08-1.66 3.3 0 3.9 2.13 3.9 4.9v6.79h-3.24v-6.02c0-1.44-.03-3.3-2.06-3.3-2.06 0-2.38 1.57-2.38 3.19v6.13H9.06V8.9Z" />
    </svg>
  );
}

function useTypedRole(role) {
  const shouldReduceMotion = useReducedMotion();
  const [typedRole, setTypedRole] = useState(shouldReduceMotion ? role : "");

  useEffect(() => {
    if (shouldReduceMotion) {
      setTypedRole(role);
      return undefined;
    }

    setTypedRole("");
    let index = 0;

    const typingTimer = window.setInterval(() => {
      index += 1;
      setTypedRole(role.slice(0, index));

      if (index >= role.length) {
        window.clearInterval(typingTimer);
      }
    }, 72);

    return () => window.clearInterval(typingTimer);
  }, [role, shouldReduceMotion]);

  return typedRole;
}

export default function HomePage() {
  const typedRole = useTypedRole(ROLE);
  const heroBadgeClass =
    "inline-flex items-center justify-center rounded-full border border-sky-300/20 bg-sky-300/10 px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.24em] text-sky-200";
  const heroEyebrowClass =
    "inline-flex items-center gap-2 rounded-full border border-sky-300/20 bg-sky-300/10 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-sky-200";

  // Replace these placeholder URLs with your real profile links.
  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com/your-username",
      icon: <GitHubIcon />,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/your-profile/",
      icon: <LinkedInIcon />,
    },
  ];

  return (
    <>
      <section className="pb-10">
        <Container size="wide">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-sky-300/20 bg-[linear-gradient(135deg,rgba(2,6,23,0.95)_0%,rgba(8,15,32,0.92)_42%,rgba(10,18,38,0.96)_100%)] px-6 py-10 shadow-[0_38px_120px_-46px_rgba(2,6,23,0.78)] sm:px-8 sm:py-12 lg:px-12 lg:py-14">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(96,165,250,0.18),_transparent_28%),radial-gradient(circle_at_80%_18%,_rgba(45,212,191,0.14),_transparent_24%),linear-gradient(120deg,_rgba(56,189,248,0.06),_transparent_48%)]" />
            <div className="pointer-events-none absolute -left-16 top-10 h-40 w-40 rounded-full bg-sky-400/10 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 right-0 h-52 w-52 rounded-full bg-cyan-400/10 blur-3xl" />

            <motion.div
              variants={heroContainer}
              initial="hidden"
              animate="show"
              className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center"
            >
              <div className="space-y-7">
                <motion.div variants={heroItem} className="space-y-4">
                  <span className={heroEyebrowClass}>Premium Hero Section</span>
                  <p className="font-mono text-sm uppercase tracking-[0.3em] text-slate-300">
                    DANUKA CHATHURYA
                  </p>
                </motion.div>

                <motion.div variants={heroItem} className="space-y-5">
                  <h1 className="max-w-5xl text-[clamp(3.4rem,7vw,6rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-white">
                    DANUKA
                    <br />
                    <span className={ui.gradientText}>CHATHURYA</span>
                  </h1>

                  <div className="flex flex-wrap items-center gap-3">
                    <span className={heroBadgeClass}>Role</span>
                    <p
                      className="text-lg font-semibold uppercase tracking-[0.18em] text-slate-100 sm:text-xl"
                      aria-label={ROLE}
                    >
                      {typedRole}
                      <span className="ml-1 inline-block min-w-[1ch] animate-pulse text-sky-300 motion-reduce:animate-none">
                        |
                      </span>
                    </p>
                  </div>
                </motion.div>

                <motion.p variants={heroItem} className="max-w-3xl text-lg leading-8 text-slate-300">
                  I am a 4th-year IT undergraduate at SLIIT University with a strong foundation
                  in software engineering and backend development.
                </motion.p>

                <motion.div variants={heroItem} className="flex flex-wrap gap-4">
                  <Button href="#featured-work" size="lg">
                    View Projects
                  </Button>
                  <Button to="/contact" size="lg" variant="secondary">
                    Contact Me
                  </Button>
                </motion.div>

                <motion.div variants={heroItem} className="flex flex-wrap items-center gap-3">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-3 rounded-full border border-sky-400/15 bg-white/10 px-4 py-3 text-slate-200 shadow-[0_30px_60px_-34px_rgba(15,23,42,0.22)] transition duration-200 hover:border-sky-400/30 hover:bg-sky-400/10 hover:text-white motion-reduce:transition-none"
                      whileHover={{ y: -2, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {link.icon}
                      <span>{link.label}</span>
                    </motion.a>
                  ))}
                </motion.div>
              </div>

              <motion.div variants={heroItem}>
                <div className="relative overflow-hidden rounded-[2rem] border border-sky-300/20 bg-white/5 p-6 shadow-[0_36px_90px_-40px_rgba(2,6,23,0.35)] backdrop-blur-2xl sm:p-8">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.14),_transparent_34%),linear-gradient(180deg,_rgba(255,255,255,0.04),_transparent_100%)]" />

                  <div className="relative space-y-6">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-[0.75rem] font-bold uppercase tracking-[0.24em] text-sky-200">
                          Profile Snapshot
                        </p>
                        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                          Full-stack ambition backed by backend strength
                        </h2>
                      </div>
                      <span className={heroBadgeClass}>2026</span>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <motion.div
                        variants={heroItem}
                        className="rounded-3xl border border-white/10 bg-slate-900/70 p-5"
                      >
                        <p className="text-sm font-semibold text-slate-200">Current lane</p>
                        <p className="mt-4 text-xl font-semibold text-white">
                          Full Stack Developer Intern
                        </p>
                        <p className="mt-3 text-sm leading-7 text-slate-300">
                          Building a strong portfolio around product-minded development and
                          dependable backend systems.
                        </p>
                      </motion.div>

                      <motion.div
                        variants={heroItem}
                        className="rounded-3xl border border-white/10 bg-slate-900/70 p-5"
                      >
                        <p className="text-sm font-semibold text-slate-200">Foundation</p>
                        <p className="mt-4 text-xl font-semibold text-white">
                          Software Engineering
                        </p>
                        <p className="mt-3 text-sm leading-7 text-slate-300">
                          Focused on clean implementation, maintainable structure, and systems that
                          can grow with real-world requirements.
                        </p>
                      </motion.div>
                    </div>

                    <motion.div
                      variants={heroItem}
                      className="rounded-3xl border border-white/10 bg-slate-900/70 p-5"
                    >
                      <p className="text-sm font-semibold text-slate-200">Strength zones</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {[
                          "Backend Development",
                          "API Design",
                          "System Thinking",
                          "Clean Architecture",
                        ].map((item) => (
                          <span key={item} className={heroBadgeClass}>
                            {item}
                          </span>
                        ))}
                      </div>
                    </motion.div>

                    <motion.div
                      variants={heroItem}
                      className="rounded-3xl border border-white/10 bg-slate-900/70 p-5"
                    >
                      <p className="text-sm font-semibold text-slate-200">Hero intent</p>
                      <p className="mt-3 text-sm leading-7 text-slate-300">
                        This section is designed to create a high-end first impression with motion,
                        contrast, and strong hierarchy while still feeling technical and personal.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>

      <PageSection
        id="featured-work"
        eyebrow="Featured Work"
        title="A polished placeholder area for project case studies"
        description="Use this section as the scroll target for the hero CTA, then replace these cards with your strongest portfolio pieces, screenshots, outcomes, and repository links."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {[
            {
              title: "Backend Systems",
              body: "Show API work, architecture decisions, data models, and the reliability thinking behind each build.",
            },
            {
              title: "Full-Stack Products",
              body: "Highlight projects where frontend experience and backend logic came together as one cohesive product.",
            },
            {
              title: "Engineering Process",
              body: "Document how you plan, implement, test, and refine work so visitors can see the quality of your thinking.",
            },
          ].map((item) => (
            <article key={item.title} className={`${ui.card} p-5`}>
              <p className={ui.title}>{item.title}</p>
              <p className={`${ui.body} mt-3`}>{item.body}</p>
            </article>
          ))}
        </div>
      </PageSection>

      <PageSection
        eyebrow="Navigation"
        title="Every route is ready to become a real portfolio page"
        description="Use these pages as polished starting points, then replace the template copy with your own projects, writing, credentials, and contact details."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {secondaryNavigationLinks.map((link) => (
            <article key={link.label} className={`${ui.card} flex h-full flex-col p-5`}>
              <div className="flex items-center justify-between gap-4">
                <h3 className={ui.title}>{link.label}</h3>
                <span className={ui.badge}>Route</span>
              </div>
              <p className={`${ui.body} mt-3 flex-1`}>{link.description}</p>
              <div className="mt-5">
                <Button to={link.to} variant="ghost">
                  Open {link.label}
                </Button>
              </div>
            </article>
          ))}
        </div>
      </PageSection>

      <PageSection
        eyebrow="Recommended Flow"
        title="A portfolio structure that mirrors how modern product teams present value"
        description="Guide visitors from identity, to proof, to trajectory, to next steps so the site feels intentional rather than just informational."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          <div className={`${ui.card} p-5`}>
            <p className={ui.meta}>1. Start with context</p>
            <p className={`${ui.title} mt-1`}>Home and About</p>
            <p className={`${ui.body} mt-3`}>
              Introduce who you are, what you build, and the principles that shape your decisions.
            </p>
          </div>
          <div className={`${ui.card} p-5`}>
            <p className={ui.meta}>2. Show thought process</p>
            <p className={`${ui.title} mt-1`}>Journal and Career Plan</p>
            <p className={`${ui.body} mt-3`}>
              Demonstrate how you think today and where you are investing in growth next.
            </p>
          </div>
          <div className={`${ui.card} p-5`}>
            <p className={ui.meta}>3. Close with proof</p>
            <p className={`${ui.title} mt-1`}>CV, Certificates, and Contact</p>
            <p className={`${ui.body} mt-3`}>
              Make it easy for hiring managers, clients, or collaborators to validate and respond.
            </p>
          </div>
        </div>
      </PageSection>
    </>
  );
}
