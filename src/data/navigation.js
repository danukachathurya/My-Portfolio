export const navigationLinks = [
  {
    label: "Home",
    to: "/",
    description: "A polished overview page that introduces your work, direction, and featured paths.",
  },
  {
    label: "About",
    to: "/about",
    description: "Share the story, values, and working style behind your product and engineering decisions.",
  },
  {
    label: "Journal",
    to: "/journal",
    description: "Publish essays, notes, and lightweight learnings in a space built for thoughtful writing.",
  },
  {
    label: "Career Plan",
    to: "/career-plan",
    description: "Map the capabilities, roles, and milestones you are intentionally building toward.",
  },
  {
    label: "CV",
    to: "/cv",
    description: "Present strengths, experience summaries, and the evidence behind your technical impact.",
  },
  {
    label: "Certificates",
    to: "/certificates",
    description: "Highlight verified learning, credentials, and structured proof of continuous growth.",
  },
  {
    label: "Contact",
    to: "/contact",
    description: "Offer clear channels for collaboration, consulting, speaking, or full-time opportunities.",
  },
];

export const secondaryNavigationLinks = navigationLinks.filter((link) => link.to !== "/");
