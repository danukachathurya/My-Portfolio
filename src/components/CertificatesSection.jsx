import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Button from "./Button";
import PageSection from "./PageSection";
import { certificates } from "../data/certificates";
import { getItemMotionProps, getSectionMotionProps } from "../lib/motion";
import { ui } from "../lib/ui";

function ExpandIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M14 5h5v5" />
      <path d="m19 5-7.5 7.5" />
      <path d="M10 19H5v-5" />
      <path d="M5 19l7.5-7.5" />
    </svg>
  );
}

function CloseIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="m6 6 12 12" />
      <path d="M18 6 6 18" />
    </svg>
  );
}

export default function CertificatesSection({ className = "", id = "certificates" }) {
  const shouldReduceMotion = useReducedMotion();
  const [activeCertificate, setActiveCertificate] = useState(null);
  const sectionMotionProps = getSectionMotionProps(shouldReduceMotion);
  const itemMotionProps = getItemMotionProps(shouldReduceMotion);

  useEffect(() => {
    if (!activeCertificate) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveCertificate(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeCertificate]);

  return (
    <>
      <PageSection
        id={id}
        className={`scroll-mt-28 ${className}`.trim()}
        eyebrow="Certificates"
        title="Verified learning, presented in a clean gallery with quick preview access"
        description="Use this section to showcase the credentials that support your portfolio story. Each card keeps the certificate image, title, issuer, and date easy to scan."
        panelClassName="border-sky-300/20 bg-[linear-gradient(180deg,rgba(240,249,255,0.94)_0%,rgba(248,250,252,0.92)_100%)] shadow-[0_36px_90px_-40px_rgba(8,47,73,0.18)] dark:bg-[linear-gradient(180deg,rgba(8,15,32,0.94)_0%,rgba(15,23,42,0.84)_100%)] dark:shadow-[0_48px_120px_-52px_rgba(2,6,23,0.82)]"
      >
        <motion.div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3" {...sectionMotionProps}>
          {certificates.map((certificate, index) => (
            <motion.button
              key={certificate.id}
              type="button"
              className="group relative flex h-full flex-col overflow-hidden rounded-[1.9rem] border border-white/60 bg-white/72 text-left shadow-[0_28px_80px_-42px_rgba(8,47,73,0.2)] backdrop-blur-2xl transition duration-300 hover:border-sky-400/20 hover:bg-white/88 hover:shadow-[0_40px_110px_-52px_rgba(14,165,233,0.24)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/40 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 motion-reduce:transform-none motion-reduce:transition-none dark:border-slate-700/60 dark:bg-slate-950/60 dark:focus-visible:ring-offset-slate-950 dark:hover:bg-slate-900/76"
              onClick={() => setActiveCertificate(certificate)}
              whileHover={shouldReduceMotion ? undefined : { y: -6 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.995 }}
              {...itemMotionProps}
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.16),_transparent_28%),linear-gradient(135deg,_rgba(14,165,233,0.08),_transparent_52%)] opacity-0 transition duration-300 group-hover:opacity-100 motion-reduce:transition-none" />

              <div className="relative aspect-[4/3] overflow-hidden border-b border-slate-200/70 bg-slate-100 dark:border-slate-700/60 dark:bg-slate-900/90">
                <img
                  src={certificate.certificateUrl}
                  alt={certificate.imageAlt}
                  className="h-full w-full object-contain p-3 transition duration-500 group-hover:scale-[1.025] motion-reduce:transition-none"
                />

                <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-full border border-slate-200/80 bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-[0_14px_34px_-24px_rgba(15,23,42,0.4)] backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-950/78 dark:text-slate-200">
                  <span>Preview</span>
                  <ExpandIcon className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5 motion-reduce:transition-none" />
                </div>
              </div>

              <div className="relative flex flex-1 flex-col p-5 sm:p-6">
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <p className={ui.eyebrowTitle}>Certificate {String(index + 1).padStart(2, "0")}</p>
                      <h3 className="text-[1.1rem] font-semibold leading-7 text-slate-950 dark:text-white">
                        {certificate.title}
                      </h3>
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-slate-200/80 bg-white/70 p-4 shadow-[0_18px_36px_-30px_rgba(15,23,42,0.16)] backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-950/55">
                      <p className="text-[0.7rem] font-bold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                        Issuer
                      </p>
                      <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">
                        {certificate.issuer}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-slate-200/80 bg-white/70 p-4 shadow-[0_18px_36px_-30px_rgba(15,23,42,0.16)] backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-950/55">
                      <p className="text-[0.7rem] font-bold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                        Date
                      </p>
                      <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">
                        {certificate.date}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </PageSection>

      <AnimatePresence>
        {activeCertificate ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/72 p-4 backdrop-blur-md"
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
            onClick={() => setActiveCertificate(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby={`${activeCertificate.id}-title`}
              className="relative w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-white shadow-[0_40px_120px_-56px_rgba(2,6,23,0.9)] dark:border-slate-700/60 dark:bg-slate-950"
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveCertificate(null)}
                className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/80 bg-white/92 text-slate-700 shadow-[0_20px_44px_-28px_rgba(15,23,42,0.45)] transition duration-200 hover:bg-white hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white motion-reduce:transition-none dark:border-slate-700/60 dark:bg-slate-950/88 dark:text-slate-200 dark:hover:bg-slate-900 dark:hover:text-white dark:focus-visible:ring-offset-slate-950"
                aria-label="Close certificate preview"
              >
                <CloseIcon className="h-5 w-5" />
              </button>

              <div className="grid max-h-[90vh] overflow-y-auto lg:grid-cols-[minmax(0,1.18fr)_minmax(20rem,0.82fr)]">
                <div className="bg-[linear-gradient(160deg,rgba(226,232,240,0.6)_0%,rgba(248,250,252,0.98)_100%)] p-4 sm:p-6 dark:bg-[linear-gradient(160deg,rgba(2,6,23,0.95)_0%,rgba(15,23,42,0.92)_100%)]">
                  <div className="flex h-full items-center justify-center overflow-hidden rounded-[1.6rem] border border-slate-200/80 bg-white shadow-[0_26px_70px_-42px_rgba(15,23,42,0.24)] dark:border-slate-700/60 dark:bg-slate-900/90">
                    <img
                      src={activeCertificate.certificateUrl}
                      alt={activeCertificate.imageAlt}
                      className="max-h-[76vh] w-full object-contain p-4"
                    />
                  </div>
                </div>

                <div className="relative overflow-hidden p-6 sm:p-8">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.12),_transparent_28%),linear-gradient(135deg,_rgba(14,165,233,0.06),_transparent_52%)]" />

                  <div className="relative flex h-full flex-col">
                    <div className="space-y-4">
                      <span className={ui.badge}>Certificate Preview</span>
                      <div className="space-y-3">
                        <h3
                          id={`${activeCertificate.id}-title`}
                          className="text-[clamp(1.8rem,3vw,2.5rem)] font-semibold leading-tight tracking-[-0.03em] text-slate-950 dark:text-white"
                        >
                          {activeCertificate.title}
                        </h3>
                        <p className={ui.body}>
                          Use this modal to present a larger certificate image while keeping the
                          main portfolio section compact and easy to scan.
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 grid gap-3">
                      <div className="rounded-3xl border border-slate-200/80 bg-white/78 p-5 shadow-[0_20px_44px_-34px_rgba(15,23,42,0.18)] backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-950/58">
                        <p className="text-[0.72rem] font-bold uppercase tracking-[0.22em] text-sky-600 dark:text-sky-300">
                          Issuer
                        </p>
                        <p className="mt-3 text-lg font-semibold text-slate-950 dark:text-white">
                          {activeCertificate.issuer}
                        </p>
                      </div>

                      <div className="rounded-3xl border border-slate-200/80 bg-white/78 p-5 shadow-[0_20px_44px_-34px_rgba(15,23,42,0.18)] backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-950/58">
                        <p className="text-[0.72rem] font-bold uppercase tracking-[0.22em] text-sky-600 dark:text-sky-300">
                          Date
                        </p>
                        <p className="mt-3 text-lg font-semibold text-slate-950 dark:text-white">
                          {activeCertificate.date}
                        </p>
                      </div>
                    </div>

                    <div className="mt-8">
                      <Button as="button" type="button" variant="secondary" onClick={() => setActiveCertificate(null)}>
                        Close Preview
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
