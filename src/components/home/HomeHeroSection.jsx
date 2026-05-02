import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import heroPortrait from "../../assets/danuka-photo-placeholder.png";
import DownloadCvButton from "../DownloadCvButton";
import Button from "../Button";
import Container from "../Container";
import { GitHubIcon, LinkedInIcon } from "../icons/PortfolioIcons";
import { heroSummaryCards } from "../../data/home";
import { profile } from "../../data/profile";
import { ui } from "../../lib/ui";

const heroContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.06,
    },
  },
};

const heroItemVariants = {
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

const socialIconMap = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
};

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

export default function HomeHeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const typedRole = useTypedRole(profile.role);
  const heroBadgeClass =
    "inline-flex items-center justify-center rounded-full border border-sky-300/20 bg-sky-300/10 px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.24em] text-sky-200";
  const heroEyebrowClass =
    "inline-flex items-center gap-2 rounded-full border border-sky-300/20 bg-sky-300/10 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-sky-200";
  const photoFloatAnimation = shouldReduceMotion
    ? { y: 0, rotate: 0, scale: 1 }
    : {
        y: [0, -12, 0],
        rotate: [0, 1.2, 0],
        scale: [1, 1.015, 1],
      };
  const photoFloatTransition = shouldReduceMotion
    ? { duration: 0 }
    : {
        duration: 7.5,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      };
  const orbitAnimation = shouldReduceMotion ? {} : { rotate: 360 };
  const orbitTransition = shouldReduceMotion
    ? { duration: 0 }
    : {
        duration: 22,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      };

  return (
    <section id="home" className="scroll-mt-28 pb-10">
      <Container size="wide">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-sky-300/20 bg-[linear-gradient(135deg,rgba(2,6,23,0.95)_0%,rgba(8,15,32,0.92)_42%,rgba(10,18,38,0.96)_100%)] px-5 py-8 shadow-[0_38px_120px_-46px_rgba(2,6,23,0.78)] sm:px-8 sm:py-12 lg:px-12 lg:py-14">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(96,165,250,0.18),_transparent_28%),radial-gradient(circle_at_80%_18%,_rgba(45,212,191,0.14),_transparent_24%),linear-gradient(120deg,_rgba(56,189,248,0.06),_transparent_48%)]" />
          <div className="pointer-events-none absolute -left-16 top-10 h-40 w-40 rounded-full bg-sky-400/10 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 right-0 h-52 w-52 rounded-full bg-cyan-400/10 blur-3xl" />
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-[-15%] top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent"
            animate={shouldReduceMotion ? undefined : { x: ["-12%", "12%", "-12%"] }}
            transition={shouldReduceMotion ? undefined : { duration: 11, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />

          <motion.div
            variants={heroContainerVariants}
            initial="hidden"
            animate="show"
            className="relative grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(21rem,32rem)] lg:items-center xl:gap-14"
          >
            <div className="space-y-7 lg:pr-4 xl:pr-8">
              <motion.div variants={heroItemVariants} className="space-y-4">
                <p className="font-mono text-sm uppercase tracking-[0.3em] text-slate-300">
                  Hi, my name is
                </p>
              </motion.div>

              <motion.div variants={heroItemVariants} className="space-y-5">
                <h1 className="max-w-4xl text-[clamp(3.4rem,7vw,6rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-white">
                  DANUKA
                  <br />
                  <span className={ui.gradientText}>CHATHURYA</span>
                </h1>

                <div className="flex flex-wrap items-center gap-3">
                  <span className={heroBadgeClass}>Role</span>
                  <p
                    className="text-lg font-semibold uppercase tracking-[0.18em] text-slate-100 sm:text-xl"
                    aria-label={profile.role}
                  >
                    {typedRole}
                  </p>
                </div>
              </motion.div>

              <motion.p variants={heroItemVariants} className="max-w-3xl text-lg leading-8 text-slate-300">
                {profile.intro}
              </motion.p>

              <motion.div variants={heroItemVariants} className="flex flex-wrap gap-3 sm:gap-4">
                <Button href="#projects" size="lg">
                  View Projects
                </Button>
                <DownloadCvButton
                  size="lg"
                  variant="secondary"
                  className="border-white/12 bg-white/10 text-white shadow-[0_24px_60px_-36px_rgba(2,6,23,0.9)] hover:bg-white/14 dark:border-white/12 dark:bg-white/10 dark:text-white dark:hover:bg-white/14"
                >
                  Download CV
                </DownloadCvButton>
                <Button href="#contact" size="lg" variant="secondary">
                  Contact Me
                </Button>
              </motion.div>

              <motion.div variants={heroItemVariants} className="flex flex-wrap items-center gap-3">
                {profile.socialLinks.map((link) => {
                  const Icon = socialIconMap[link.iconKey];

                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-3 rounded-full border border-sky-400/15 bg-white/10 px-4 py-3 text-slate-200 shadow-[0_30px_60px_-34px_rgba(15,23,42,0.22)] transition duration-200 hover:border-sky-400/30 hover:bg-sky-400/10 hover:text-white motion-reduce:transition-none"
                      whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.02 }}
                      whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{link.label}</span>
                    </motion.a>
                  );
                })}
              </motion.div>
            </div>

            <motion.div variants={heroItemVariants} className="lg:justify-self-end">
              <div className="mx-auto flex w-full max-w-[34rem] flex-col gap-6 lg:mx-0">
                <div className="relative">
                  <motion.div
                    animate={orbitAnimation}
                    transition={orbitTransition}
                    className="pointer-events-none absolute inset-4 rounded-[2.75rem] border border-sky-300/15 [mask-image:linear-gradient(180deg,rgba(0,0,0,0.8),transparent)]"
                  />
                  <div className="pointer-events-none absolute -inset-4 rounded-[3rem] bg-[radial-gradient(circle_at_top,_rgba(103,232,249,0.22),_transparent_38%),radial-gradient(circle_at_bottom,_rgba(45,212,191,0.18),_transparent_34%)] blur-2xl" />

                  <motion.div
                    animate={photoFloatAnimation}
                    transition={photoFloatTransition}
                    className="relative overflow-hidden rounded-[2.5rem] border border-sky-300/20 bg-white/6 p-3 shadow-[0_36px_90px_-40px_rgba(2,6,23,0.35)] backdrop-blur-2xl"
                    whileHover={shouldReduceMotion ? undefined : { y: -6, scale: 1.01 }}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.14),_transparent_34%),linear-gradient(180deg,_rgba(255,255,255,0.04),_transparent_100%)]" />
                    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80">
                      <img
                        src={heroPortrait}
                        alt={profile.portraitAlt}
                        className="aspect-[4/5] w-full object-cover sm:aspect-[4/5]"
                      />

                      <motion.div
                        variants={heroItemVariants}
                        className="absolute left-4 top-4 rounded-3xl border border-white/10 bg-slate-950/78 px-4 py-3 shadow-[0_24px_60px_-32px_rgba(2,6,23,0.72)] backdrop-blur-xl"
                      >
                        <p className="text-[0.7rem] font-bold uppercase tracking-[0.22em] text-sky-200">
                          4th Year IT
                        </p>
                        <p className="mt-2 text-sm font-medium text-slate-100">
                          SLIIT University
                        </p>
                      </motion.div>

                      <motion.div
                        variants={heroItemVariants}
                        className="absolute bottom-4 right-4 rounded-3xl border border-white/10 bg-slate-950/78 px-4 py-3 shadow-[0_24px_60px_-32px_rgba(2,6,23,0.72)] backdrop-blur-xl"
                      >
                        <p className="text-[0.7rem] font-bold uppercase tracking-[0.22em] text-cyan-200">
                          Focus
                        </p>
                        <p className="mt-2 text-sm font-medium text-slate-100">
                          Full Stack Development
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>

                <motion.div variants={heroItemVariants} className="grid gap-4 sm:grid-cols-2">
                  {heroSummaryCards.map((card) => (
                    <motion.div
                      key={card.title}
                      className={`rounded-3xl border border-white/10 bg-slate-950/70 p-5 backdrop-blur-xl ${card.className}`}
                      whileHover={shouldReduceMotion ? undefined : { y: -4, scale: 1.01 }}
                    >
                      <p className="text-sm font-semibold text-slate-200">{card.title}</p>
                      <p className="mt-3 text-lg font-semibold text-white">{card.value}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
