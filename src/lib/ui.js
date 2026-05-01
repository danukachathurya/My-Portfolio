export const ui = {
  shell:
    "relative flex min-h-screen flex-col overflow-x-hidden bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.16),_transparent_32%),radial-gradient(circle_at_82%_18%,_rgba(6,182,212,0.16),_transparent_20%),linear-gradient(180deg,#f7fbff_0%,#eef4ff_52%,#e6f0ff_100%)] text-slate-950 dark:bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.2),_transparent_28%),radial-gradient(circle_at_84%_18%,_rgba(45,212,191,0.16),_transparent_22%),linear-gradient(180deg,#020617_0%,#071120_48%,#020617_100%)] dark:text-slate-50",
  gridOverlay:
    "pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(148,163,184,0.16)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.16)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(180deg,rgba(0,0,0,0.35),transparent_72%)] dark:bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)]",
  topGlow:
    "pointer-events-none absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.18),_transparent_54%)] blur-3xl dark:bg-[radial-gradient(circle_at_top,_rgba(103,232,249,0.16),_transparent_56%)]",
  panel:
    "rounded-[2rem] border border-slate-200/70 bg-white/80 shadow-[0_30px_60px_-34px_rgba(15,23,42,0.22)] backdrop-blur-2xl dark:border-slate-700/50 dark:bg-slate-950/70 dark:shadow-[0_40px_100px_-42px_rgba(2,6,23,0.72)]",
  panelStrong:
    "border-slate-300/70 shadow-[0_36px_90px_-40px_rgba(2,6,23,0.35)] dark:border-sky-300/20",
  card: "rounded-3xl border border-slate-200/70 bg-slate-50/90 dark:border-slate-700/60 dark:bg-slate-900/70",
  eyebrow:
    "inline-flex items-center gap-2 rounded-full border border-sky-400/25 bg-sky-400/10 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-sky-600 dark:text-sky-300",
  eyebrowTitle: "text-[0.75rem] font-bold uppercase tracking-[0.24em] text-sky-600 dark:text-sky-300",
  display: "text-[clamp(3.4rem,7vw,6rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-slate-950 dark:text-white",
  sectionTitle:
    "text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-slate-950 dark:text-white",
  lead: "max-w-[42rem] text-[clamp(1.05rem,1.1vw,1.18rem)] leading-[1.85] text-slate-600 dark:text-slate-300",
  body: "text-[0.98rem] leading-[1.8] text-slate-600 dark:text-slate-300",
  meta: "text-[0.92rem] font-semibold leading-[1.5] text-slate-700 dark:text-slate-200",
  mono: "font-mono text-[0.82rem] leading-[1.6] text-slate-700 dark:text-slate-200",
  gradientText: "bg-gradient-to-r from-sky-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent",
  badge:
    "inline-flex items-center justify-center rounded-full border border-sky-400/25 bg-sky-400/10 px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.24em] text-sky-600 dark:text-sky-300",
  title: "text-xl font-semibold text-slate-950 dark:text-white",
  statValue: "text-[2.2rem] font-semibold leading-none tracking-[-0.03em] text-slate-950 dark:text-white",
};
