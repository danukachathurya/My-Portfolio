import { motion, useReducedMotion } from "motion/react";
import { useLocation } from "react-router";
import Button from "./Button";
import Container from "./Container";
import { contactInfo } from "../data/contact";
import { sectionLinks } from "../data/navigation";
import { profile } from "../data/profile";
import { getItemMotionProps, getSectionMotionProps } from "../lib/motion";
import { ui } from "../lib/ui";

const primaryLinks = ["About", "Experience", "Skills", "Contact"];
const secondaryLinks = ["Education", "University Projects", "Personal Projects", "Certificates"];

export default function Footer() {
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();
  const currentYear = new Date().getFullYear();
  const isHomePage = location.pathname === "/";
  const resolveSectionHref = (sectionHref) => (isHomePage ? sectionHref : `/${sectionHref}`);
  const sectionMotionProps = getSectionMotionProps(shouldReduceMotion, 0.15);
  const itemMotionProps = getItemMotionProps(shouldReduceMotion);

  const primarySectionLinks = sectionLinks.filter((link) => primaryLinks.includes(link.label));
  const secondarySectionLinks = sectionLinks.filter((link) => secondaryLinks.includes(link.label));

  return (
    <motion.footer
      className="relative mt-12 border-t border-slate-200/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.78)_0%,rgba(248,250,252,0.92)_100%)] backdrop-blur-2xl dark:border-slate-800/60 dark:bg-[linear-gradient(180deg,rgba(2,6,23,0.72)_0%,rgba(2,6,23,0.94)_100%)]"
      id="footer"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={shouldReduceMotion ? undefined : { once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/35 to-transparent" />

      <Container size="wide" className="py-10 sm:py-12">
        <motion.div
          className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-10"
          {...sectionMotionProps}
        >
          <motion.div className="space-y-5" {...itemMotionProps}>
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-[1.4rem] bg-gradient-to-r from-sky-400 via-cyan-300 to-teal-300 text-base font-semibold uppercase tracking-[0.18em] text-slate-950 shadow-[0_18px_38px_-20px_rgba(6,182,212,0.42)]">
                DC
              </span>
              <div className="space-y-1">
                <p className="text-lg font-semibold text-slate-950 dark:text-white">
                  {profile.name}
                </p>
                <p className={ui.eyebrowTitle}>{profile.role}</p>
              </div>
            </div>

            <div className="space-y-3">
              <p className="max-w-2xl text-[1.02rem] leading-8 text-slate-700 dark:text-slate-300">
                A focused portfolio crafted to present internship experience, selected builds, and
                full stack strengths with clarity and confidence.
              </p>
              <p className="max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400">
                If you are reviewing opportunities, collaborations, or project work, the quickest
                way to reach me is through email or LinkedIn.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button href={contactInfo.emailHref} size="sm">
                Email Me
              </Button>
              {profile.socialLinks.map((link) => (
                <Button
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  size="sm"
                  variant="secondary"
                >
                  {link.label}
                </Button>
              ))}
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className={`${ui.card} p-4`}>
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                  Email
                </p>
                <a
                  href={contactInfo.emailHref}
                  className="mt-2 block text-sm font-semibold text-slate-950 transition duration-200 hover:text-sky-700 dark:text-white dark:hover:text-sky-300"
                >
                  {contactInfo.email}
                </a>
              </div>

              <div className={`${ui.card} p-4`}>
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                  Response Time
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-950 dark:text-white">
                  {contactInfo.responseTime}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="grid gap-5 sm:grid-cols-2 lg:justify-self-end lg:min-w-[28rem]"
            {...itemMotionProps}
          >
            <div className={`${ui.card} p-5`}>
              <p className={ui.eyebrowTitle}>Explore</p>
              <div className="mt-4 grid gap-2">
                {primarySectionLinks.map((link) => (
                  <a
                    key={link.label}
                    href={resolveSectionHref(link.href)}
                    className="rounded-2xl px-3 py-2 text-sm font-semibold text-slate-700 transition duration-200 hover:bg-sky-400/10 hover:text-slate-950 motion-reduce:transition-none dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className={`${ui.card} p-5`}>
              <p className={ui.eyebrowTitle}>Highlights</p>
              <div className="mt-4 grid gap-2">
                {secondarySectionLinks.map((link) => (
                  <a
                    key={link.label}
                    href={resolveSectionHref(link.href)}
                    className="rounded-2xl px-3 py-2 text-sm font-semibold text-slate-700 transition duration-200 hover:bg-sky-400/10 hover:text-slate-950 motion-reduce:transition-none dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-8 flex flex-col gap-4 border-t border-slate-200/70 pt-6 dark:border-slate-800/60 sm:flex-row sm:items-center sm:justify-between"
          {...sectionMotionProps}
        >
          <motion.p className="text-sm leading-7 text-slate-600 dark:text-slate-400" {...itemMotionProps}>
            {`(c) ${currentYear} ${profile.name}. Built with React, Vite, Tailwind CSS, and Motion.`}
          </motion.p>

          <motion.a
            href={resolveSectionHref("#home")}
            className="inline-flex w-fit items-center rounded-full border border-slate-200/80 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-700 transition duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-slate-950 motion-reduce:transform-none motion-reduce:transition-none dark:border-slate-700/60 dark:bg-slate-950/60 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-white"
            whileHover={shouldReduceMotion ? undefined : { y: -2 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
            {...itemMotionProps}
          >
            Back to Top
          </motion.a>
        </motion.div>
      </Container>
    </motion.footer>
  );
}
