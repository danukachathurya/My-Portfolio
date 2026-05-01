export const palette = [
  {
    name: "Canvas",
    token: "--background",
    description: "Base page background used for the primary app shell and open breathing space.",
    style: { background: "var(--background)" },
  },
  {
    name: "Glass Surface",
    token: "--background-elevated",
    description: "Elevated panels and sticky navigation with a soft glass-like finish.",
    style: { background: "var(--background-elevated)" },
  },
  {
    name: "Foreground Ink",
    token: "--foreground",
    description: "Primary heading and high-contrast UI text for the strongest emphasis.",
    style: { background: "var(--foreground)" },
  },
  {
    name: "Muted Copy",
    token: "--muted",
    description: "Secondary paragraphs, supporting labels, and layout descriptions.",
    style: { background: "var(--muted)" },
  },
  {
    name: "Signal Accent",
    token: "--accent",
    description: "Buttons, highlights, and focus states that need immediate attention.",
    style: { background: "linear-gradient(135deg, var(--accent), var(--accent-strong))" },
  },
  {
    name: "Aurora Gradient",
    token: "--gradient-hero",
    description: "Hero emphasis, showcase bars, and expressive product-marketing moments.",
    style: {
      background: "var(--gradient-hero)",
      boxShadow: "0 18px 40px -24px rgba(6, 182, 212, 0.6)",
    },
  },
];

export const typographyScale = [
  {
    name: "Display",
    token: "display-hero",
    usage: "Landing headers and case-study intros.",
    sample: "Build portfolio experiences with product clarity.",
    previewClassName: "display-hero",
  },
  {
    name: "Section Title",
    token: "section-title",
    usage: "Primary section headings and feature intros.",
    sample: "Structure your story like a modern product page.",
    previewClassName: "section-title",
  },
  {
    name: "Lead Copy",
    token: "lead-copy",
    usage: "Intro paragraphs and high-level positioning statements.",
    sample: "Use relaxed spacing and clear language to make technical work feel understandable and premium.",
    previewClassName: "lead-copy max-w-none",
  },
  {
    name: "Mono Meta",
    token: "mono-copy",
    usage: "Commands, annotations, labels, and technical snippets.",
    sample: "npm run dev",
    previewClassName: "mono-copy text-base uppercase tracking-[0.2em]",
  },
];

export const buttonVariants = [
  {
    variant: "primary",
    name: "Primary Action",
    label: "Launch Project",
    description: "Use for the main call to action that should lead the section.",
  },
  {
    variant: "secondary",
    name: "Secondary Action",
    label: "Read Case Study",
    description: "Use for important follow-up actions that need weight without dominating.",
  },
  {
    variant: "ghost",
    name: "Ghost Action",
    label: "View Source",
    description: "Use for lower-emphasis navigation, utility actions, and tertiary links.",
  },
];

export const containerSystem = [
  {
    name: "wide",
    maxWidth: "80rem",
    previewWidth: "100%",
    usage: "Best for hero sections, feature grids, and large showcases.",
  },
  {
    name: "default",
    maxWidth: "72rem",
    previewWidth: "88%",
    usage: "The standard choice for most portfolio sections and page layouts.",
  },
  {
    name: "narrow",
    maxWidth: "64rem",
    previewWidth: "76%",
    usage: "Ideal for writing-heavy sections, case-study details, and long-form content.",
  },
];
