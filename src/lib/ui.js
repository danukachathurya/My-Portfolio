export const ui = {
  shell:
    "relative flex min-h-screen flex-col overflow-x-hidden bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.18),_transparent_28%),radial-gradient(circle_at_82%_18%,_rgba(6,182,212,0.16),_transparent_20%),radial-gradient(circle_at_15%_72%,_rgba(59,130,246,0.1),_transparent_26%),linear-gradient(180deg,#f8fbff_0%,#edf5ff_44%,#e5efff_100%)] text-slate-950 dark:bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.22),_transparent_26%),radial-gradient(circle_at_84%_18%,_rgba(45,212,191,0.16),_transparent_22%),radial-gradient(circle_at_18%_75%,_rgba(59,130,246,0.12),_transparent_28%),linear-gradient(180deg,#020617_0%,#081224_44%,#020617_100%)] dark:text-slate-50",
  gridOverlay:
    "pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(148,163,184,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.14)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(180deg,rgba(0,0,0,0.46),transparent_76%)] dark:bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)]",
  topGlow:
    "pointer-events-none absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.2),_transparent_54%)] blur-3xl dark:bg-[radial-gradient(circle_at_top,_rgba(103,232,249,0.16),_transparent_56%)]",
  bottomGlow:
    "pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[28rem] bg-[radial-gradient(circle_at_bottom,_rgba(20,184,166,0.12),_transparent_52%)] blur-3xl dark:bg-[radial-gradient(circle_at_bottom,_rgba(34,211,238,0.1),_transparent_56%)]",
  panel:
    "rounded-[2rem] border border-slate-200/70 bg-white/82 shadow-[0_34px_90px_-42px_rgba(15,23,42,0.22)] backdrop-blur-2xl transition duration-300 dark:border-slate-700/50 dark:bg-slate-950/70 dark:shadow-[0_40px_100px_-42px_rgba(2,6,23,0.72)]",
  panelStrong:
    "border-slate-300/70 shadow-[0_36px_90px_-40px_rgba(2,6,23,0.35)] dark:border-sky-300/20",
  card: "rounded-3xl border border-slate-200/70 bg-slate-50/90 shadow-[0_22px_54px_-38px_rgba(15,23,42,0.18)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-sky-400/20 hover:shadow-[0_32px_80px_-44px_rgba(14,165,233,0.2)] motion-reduce:transform-none motion-reduce:transition-none dark:border-slate-700/60 dark:bg-slate-900/70 dark:hover:bg-slate-900/90",
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
  interactiveCard:
    "rounded-3xl border border-slate-200/70 bg-white/72 shadow-[0_24px_60px_-38px_rgba(15,23,42,0.2)] backdrop-blur-xl transition duration-300 hover:-translate-y-1.5 hover:border-sky-400/20 hover:bg-white/90 hover:shadow-[0_36px_90px_-46px_rgba(14,165,233,0.24)] motion-reduce:transform-none motion-reduce:transition-none dark:border-slate-700/60 dark:bg-slate-950/56 dark:hover:bg-slate-900/78",
};
