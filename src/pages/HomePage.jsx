import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import heroPortrait from "../assets/danuka-photo-placeholder.png";
import Button from "../components/Button";
import Container from "../components/Container";
import CareerDevelopmentSection from "../components/CareerDevelopmentSection";
import PageSection from "../components/PageSection";
import ReflectiveJournalSection from "../components/ReflectiveJournalSection";
import { ui } from "../lib/ui";

const ROLE = "Full Stack Developer Intern";

const aboutParagraphs = [
  "I am a 4th-year IT undergraduate at SLIIT University with a strong foundation in software engineering and backend development.",
  "I completed my internship as a Software Engineer Intern at Gamage Recruiters, gaining hands-on experience in developing and maintaining real-world applications.",
  "I am skilled in building scalable systems, working with REST APIs and databases, and motivated to contribute to backend-focused projects.",
];

const focusAreas = [
  "Software Engineering",
  "Backend Development",
  "REST APIs",
  "Databases",
  "Scalable Systems",
];

const heroSummaryCards = [
  {
    title: "Current role",
    value: "Full Stack Developer Intern",
    className: "",
  },
  {
    title: "Core strength",
    value: "Clean backend systems",
    className: "",
  },
  {
    title: "Current focus",
    value: "API-driven product development",
    className: "sm:col-span-2",
  },
];

const profileHighlights = [
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
    value: "Scalable backend systems, REST APIs, and database-driven apps",
    icon: ServerIcon,
  },
];

const educationTimeline = [
  {
    institution: "SLIIT University",
    years: "2022 - present",
    status: "Current",
    details: [
      "BSc (Hons) in Information Technology",
      "Specializing in Information Technology",
    ],
  },
  {
    institution: "Ampara D.S Senanayake National School",
    years: "2011 - 2020",
    status: "Completed",
    details: ["G.C.E Advanced Level - Physical Science stream (3Cs)"],
  },
];

const workExperience = {
  role: "Intern Software Engineer",
  company: "Gamage Recruiters",
  duration: "May 2025 - Nov 2025",
  highlights: [
    "Gained hands-on experience developing and maintaining real-world applications.",
    "Worked with backend systems, APIs, and databases.",
  ],
};

const experienceCards = [
  {
    title: "Role",
    body: "Intern Software Engineer with practical exposure to production-oriented application work.",
    icon: BriefcaseIcon,
  },
  {
    title: "Focus Areas",
    body: "Backend systems, API workflows, and database-driven development formed the core of the internship experience.",
    icon: DatabaseIcon,
  },
  {
    title: "Real-World Exposure",
    body: "The internship strengthened my understanding of how real applications are built, maintained, and improved over time.",
    icon: CodeIcon,
  },
];

const skillCategories = [
  {
    title: "Frontend",
    description: "Responsive interfaces and component-driven UI development for modern web experiences.",
    icon: CodeIcon,
    ringColor: "text-sky-400",
    iconTone: "from-sky-400 via-cyan-300 to-teal-300",
    skills: [
      { name: "HTML", glyph: "HT", tone: "from-orange-400 to-amber-300" },
      { name: "CSS", glyph: "CS", tone: "from-sky-400 to-blue-300" },
      { name: "JavaScript", glyph: "JS", tone: "from-yellow-300 to-amber-400" },
      { name: "React.js", glyph: "RE", tone: "from-cyan-300 to-sky-400" },
    ],
  },
  {
    title: "Backend",
    description: "Server-side application logic and backend frameworks centered around scalable systems.",
    icon: ServerIcon,
    ringColor: "text-emerald-400",
    iconTone: "from-emerald-400 via-teal-300 to-cyan-300",
    skills: [
      { name: "Node.js", glyph: "ND", tone: "from-emerald-400 to-lime-300" },
      { name: "Java", glyph: "JV", tone: "from-red-400 to-orange-300" },
      { name: "Spring Boot", glyph: "SB", tone: "from-lime-400 to-emerald-300" },
    ],
  },
  {
    title: "Database",
    description: "Data persistence, modeling, and day-to-day database work across document and relational systems.",
    icon: DatabaseIcon,
    ringColor: "text-amber-400",
    iconTone: "from-amber-400 via-orange-300 to-yellow-300",
    skills: [
      { name: "MongoDB", glyph: "MG", tone: "from-emerald-400 to-teal-300" },
      { name: "MySQL", glyph: "MY", tone: "from-blue-400 to-sky-300" },
    ],
  },
  {
    title: "DevOps & Tools",
    description: "Version control, delivery tooling, container workflows, and cloud-adjacent development tools.",
    icon: ToolingIcon,
    ringColor: "text-rose-400",
    iconTone: "from-rose-400 via-orange-300 to-amber-300",
    skills: [
      { name: "GitHub", glyph: "GH", tone: "from-slate-500 to-slate-300" },
      { name: "Docker", glyph: "DK", tone: "from-sky-400 to-blue-300" },
      { name: "AWS", glyph: "AW", tone: "from-amber-400 to-orange-300" },
      { name: "Jenkins", glyph: "JK", tone: "from-red-400 to-rose-300" },
    ],
  },
];

const universityProjects = [
  {
    title: "Online Vehicle Parking System",
    description:
      "A university project focused on managing parking availability, vehicle flow, and slot-based coordination through a streamlined digital system.",
    techStack: ["React.js", "Node.js", "MongoDB"],
  },
  {
    title: "Vehicle Rental System",
    description:
      "A rental management platform designed to handle bookings, vehicle listings, and operational workflows for a modern vehicle rental experience.",
    techStack: ["React.js", "Spring Boot", "MySQL"],
  },
  {
    title: "Game App & Note App",
    description:
      "A pair of application builds used to strengthen frontend interaction patterns, state handling, and practical CRUD-based feature development.",
    techStack: ["HTML", "CSS", "JavaScript", "React.js"],
  },
  {
    title: "Wooden Handmade Marketplace System",
    description:
      "A marketplace concept for showcasing handmade wooden products with product browsing, seller flows, and order-oriented features.",
    techStack: ["React.js", "Node.js", "MySQL"],
  },
  {
    title: "Social Media Application",
    description:
      "A social platform project centered on posts, profiles, interaction flows, and a full-stack structure for community-style features.",
    techStack: ["React.js", "Node.js", "MongoDB"],
  },
  {
    title: "Home-Stock System",
    description:
      "An inventory-style application for tracking household or small-scale stock data with organized records and efficient item management.",
    techStack: ["Java", "Spring Boot", "MySQL"],
  },
];

const personalProjects = [
  {
    title: "MERN Blog App",
    description:
      "A full-stack blogging platform for creating, managing, and browsing posts with a clean content-focused experience.",
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js"],
    codeUrl: "https://github.com/your-username/mern-blog-app",
    demoUrl: "https://your-mern-blog-app-demo.example.com",
    badge: "MB",
  },
  {
    title: "MERN Hotel Booking App",
    description:
      "A booking-oriented web application built around hotel listings, reservations, and user-friendly accommodation flows.",
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js"],
    codeUrl: "https://github.com/your-username/mern-hotel-booking-app",
    demoUrl: "https://your-hotel-booking-demo.example.com",
    badge: "HB",
  },
  {
    title: "MERN E-commerce Site",
    description:
      "An online store experience with product browsing, cart flows, and full-stack commerce-oriented functionality.",
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js"],
    codeUrl: "https://github.com/your-username/mern-ecommerce-site",
    demoUrl: "https://your-ecommerce-demo.example.com",
    badge: "EC",
  },
  {
    title: "Travel Site",
    description:
      "A travel-focused website designed to present destinations, inspire exploration, and deliver a polished front-facing experience.",
    techStack: ["HTML", "CSS", "JavaScript", "React.js"],
    codeUrl: "https://github.com/your-username/travel-site",
    demoUrl: "https://your-travel-site-demo.example.com",
    badge: "TR",
  },
];

const contactDetails = [
  {
    label: "Phone",
    value: "+94 xx xxx xxxx",
    helper: "Replace this placeholder with the phone number you want to share publicly.",
    href: "tel:+94000000000",
    icon: PhoneIcon,
  },
  {
    label: "Email",
    value: "your.email@example.com",
    helper: "Replace this placeholder with the email address you actively monitor.",
    href: "mailto:your.email@example.com",
    icon: MailIcon,
  },
];

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

const sectionContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const sectionItem = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.58,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

function GitHubIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="fill-current" {...props}>
      <path d="M12 1.5A10.5 10.5 0 0 0 8.68 22c.53.1.72-.22.72-.5 0-.25-.01-1.06-.02-1.91-2.96.64-3.58-1.25-3.58-1.25-.48-1.2-1.18-1.53-1.18-1.53-.96-.66.08-.65.08-.65 1.06.08 1.62 1.08 1.62 1.08.95 1.6 2.49 1.14 3.1.87.1-.67.37-1.14.67-1.4-2.36-.26-4.84-1.16-4.84-5.2 0-1.15.41-2.09 1.08-2.82-.1-.27-.47-1.35.11-2.82 0 0 .89-.28 2.92 1.08a10.3 10.3 0 0 1 5.32 0c2.03-1.36 2.92-1.08 2.92-1.08.58 1.47.22 2.55.11 2.82.68.73 1.08 1.67 1.08 2.82 0 4.05-2.49 4.93-4.86 5.18.38.32.72.94.72 1.9 0 1.37-.01 2.48-.01 2.82 0 .28.19.61.73.5A10.5 10.5 0 0 0 12 1.5Z" />
    </svg>
  );
}

function LinkedInIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="fill-current" {...props}>
      <path d="M5.37 3.5A1.87 1.87 0 1 0 5.4 7.24a1.87 1.87 0 0 0-.03-3.74ZM3.78 8.9h3.25V20.5H3.78V8.9Zm5.28 0h3.11v1.58h.05c.43-.81 1.49-1.66 3.08-1.66 3.3 0 3.9 2.13 3.9 4.9v6.79h-3.24v-6.02c0-1.44-.03-3.3-2.06-3.3-2.06 0-2.38 1.57-2.38 3.19v6.13H9.06V8.9Z" />
    </svg>
  );
}

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

function DatabaseIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <ellipse cx="12" cy="6.5" rx="7" ry="2.75" />
      <path d="M5 6.5v5c0 1.52 3.13 2.75 7 2.75s7-1.23 7-2.75v-5" />
      <path d="M5 11.5v5C5 18.02 8.13 19.25 12 19.25s7-1.23 7-2.75v-5" />
    </svg>
  );
}

function CodeIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="m8.5 8.5-4 3.5 4 3.5" />
      <path d="m15.5 8.5 4 3.5-4 3.5" />
      <path d="m13.5 5-3 14" />
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

function ToolingIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M14 5.25a3.25 3.25 0 1 0 4.6 4.6l1.45 1.45a1 1 0 0 1 0 1.42l-5.18 5.18a1 1 0 0 1-1.42 0L12 16.45a3.25 3.25 0 1 1-4.6-4.6l2.15 2.15 2.72-2.72L10.12 9.1 14 5.25Z" />
      <path d="m5.25 18.75 2.25-2.25" />
    </svg>
  );
}

function SkillCountRing({ count, ringColor, shouldReduceMotion }) {
  const radius = 34;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="relative flex h-24 w-24 items-center justify-center">
      <svg className="-rotate-90" viewBox="0 0 88 88" aria-hidden="true">
        <circle
          cx="44"
          cy="44"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          className="text-slate-200/80 dark:text-slate-700/70"
        />
        <motion.circle
          cx="44"
          cy="44"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          className={ringColor}
          initial={
            shouldReduceMotion ? { strokeDashoffset: 0 } : { strokeDashoffset: circumference }
          }
          whileInView={{ strokeDashoffset: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        />
      </svg>

      <div className="absolute text-center">
        <p className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 dark:text-white">
          {count}
        </p>
        <p className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
          Skills
        </p>
      </div>
    </div>
  );
}

function SkillBadgeIcon({ glyph, tone }) {
  return (
    <span
      className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${tone} text-[0.72rem] font-bold uppercase tracking-[0.2em] text-slate-950 shadow-[0_18px_36px_-24px_rgba(15,23,42,0.4)]`}
    >
      {glyph}
    </span>
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
  const shouldReduceMotion = useReducedMotion();
  const typedRole = useTypedRole(ROLE);
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
  const sectionMotionProps = shouldReduceMotion
    ? {}
    : {
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true, amount: 0.2 },
        variants: sectionContainer,
      };
  const itemMotionProps = shouldReduceMotion ? {} : { variants: sectionItem };

  // Replace these placeholder URLs with your real profile links.
  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com/your-username",
      icon: <GitHubIcon className="h-5 w-5" />,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/your-profile/",
      icon: <LinkedInIcon className="h-5 w-5" />,
    },
  ];

  return (
    <>
      <section id="home" className="scroll-mt-28 pb-10">
        <Container size="wide">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-sky-300/20 bg-[linear-gradient(135deg,rgba(2,6,23,0.95)_0%,rgba(8,15,32,0.92)_42%,rgba(10,18,38,0.96)_100%)] px-6 py-10 shadow-[0_38px_120px_-46px_rgba(2,6,23,0.78)] sm:px-8 sm:py-12 lg:px-12 lg:py-14">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(96,165,250,0.18),_transparent_28%),radial-gradient(circle_at_80%_18%,_rgba(45,212,191,0.14),_transparent_24%),linear-gradient(120deg,_rgba(56,189,248,0.06),_transparent_48%)]" />
            <div className="pointer-events-none absolute -left-16 top-10 h-40 w-40 rounded-full bg-sky-400/10 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 right-0 h-52 w-52 rounded-full bg-cyan-400/10 blur-3xl" />

            <motion.div
              variants={heroContainer}
              initial="hidden"
              animate="show"
              className="relative grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(21rem,32rem)] lg:items-center xl:gap-14"
            >
              <div className="space-y-7 lg:pr-4 xl:pr-8">
                <motion.div variants={heroItem} className="space-y-4">
                  <span className={heroEyebrowClass}>One Page Portfolio</span>
                  <p className="font-mono text-sm uppercase tracking-[0.3em] text-slate-300">
                    DANUKA CHATHURYA
                  </p>
                </motion.div>

                <motion.div variants={heroItem} className="space-y-5">
                  <h1 className="max-w-4xl text-[clamp(3.4rem,7vw,6rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-white">
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
                  <Button href="#projects" size="lg">
                    View Projects
                  </Button>
                  <Button href="#contact" size="lg" variant="secondary">
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

              <motion.div variants={heroItem} className="lg:justify-self-end">
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
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.14),_transparent_34%),linear-gradient(180deg,_rgba(255,255,255,0.04),_transparent_100%)]" />
                      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80">
                        <img
                          src={heroPortrait}
                          alt="Portrait placeholder for Danuka Chathurya. Replace this file with your real photo."
                          className="aspect-[4/5] w-full object-cover"
                        />

                        <motion.div
                          variants={heroItem}
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
                          variants={heroItem}
                          className="absolute bottom-4 right-4 rounded-3xl border border-white/10 bg-slate-950/78 px-4 py-3 shadow-[0_24px_60px_-32px_rgba(2,6,23,0.72)] backdrop-blur-xl"
                        >
                          <p className="text-[0.7rem] font-bold uppercase tracking-[0.22em] text-cyan-200">
                            Focus
                          </p>
                          <p className="mt-2 text-sm font-medium text-slate-100">
                            Backend Development
                          </p>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>

                  <motion.div variants={heroItem} className="grid gap-4 sm:grid-cols-2">
                    {heroSummaryCards.map((card) => (
                      <div
                        key={card.title}
                        className={`rounded-3xl border border-white/10 bg-slate-950/70 p-5 backdrop-blur-xl ${card.className}`}
                      >
                        <p className="text-sm font-semibold text-slate-200">{card.title}</p>
                        <p className="mt-3 text-lg font-semibold text-white">{card.value}</p>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>

      <PageSection
        id="about"
        className="scroll-mt-28"
        eyebrow="About"
        title="A one-page portfolio that tells a clear story about your engineering direction"
        description="This section combines your academic foundation, internship experience, and backend interests in a layout that is easy to scan for recruiters and collaborators."
      >
        <motion.div className="grid gap-4 xl:grid-cols-[1.08fr_0.92fr]" {...sectionMotionProps}>
          <motion.article className={`${ui.card} overflow-hidden p-6 sm:p-8`} {...itemMotionProps}>
            <div className="space-y-5">
              <div className="space-y-3">
                <p className={ui.eyebrowTitle}>About Me</p>
                {aboutParagraphs.map((paragraph) => (
                  <p key={paragraph} className={ui.body}>
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                {focusAreas.map((area) => (
                  <span
                    key={area}
                    className="inline-flex items-center rounded-full border border-sky-400/15 bg-sky-400/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700 dark:text-sky-200"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>

          <motion.div className="grid gap-4" {...itemMotionProps}>
            {profileHighlights.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className={`${ui.card} p-5`}>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-400/10 text-sky-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="space-y-2">
                      <p className={ui.eyebrowTitle}>{item.title}</p>
                      <p className={ui.body}>{item.value}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </PageSection>

      <PageSection
        id="education"
        className="scroll-mt-28"
        eyebrow="Education"
        title="An academic timeline that reflects both foundation and progression"
        description="This timeline highlights the key stages in your education, from school-level science studies to your current degree path in Information Technology."
      >
        <motion.div className="relative" {...sectionMotionProps}>
          <div className="pointer-events-none absolute bottom-0 left-5 top-2 w-px bg-gradient-to-b from-sky-400/70 via-cyan-300/40 to-transparent sm:left-8" />

          <div className="space-y-6">
            {educationTimeline.map((item) => (
              <motion.article
                key={item.institution}
                className="relative pl-14 sm:pl-20"
                {...itemMotionProps}
              >
                <div className="absolute left-0 top-3 flex h-10 w-10 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-400/10 text-sky-300 shadow-[0_18px_40px_-22px_rgba(14,165,233,0.55)] sm:left-3 sm:h-10 sm:w-10">
                  <EducationIcon className="h-5 w-5" />
                </div>
                <div className="absolute left-[1.05rem] top-[3.25rem] h-3 w-3 rounded-full border border-sky-300/40 bg-slate-950 shadow-[0_0_0_6px_rgba(14,165,233,0.12)] sm:left-[2rem]" />

                <div className="relative overflow-hidden rounded-[1.9rem] border border-slate-200/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(248,250,252,0.92)_100%)] p-6 shadow-[0_30px_70px_-38px_rgba(15,23,42,0.24)] backdrop-blur-xl dark:border-slate-700/60 dark:bg-[linear-gradient(180deg,rgba(15,23,42,0.9)_0%,rgba(15,23,42,0.72)_100%)] dark:shadow-[0_40px_90px_-42px_rgba(2,6,23,0.82)] sm:p-7">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.12),_transparent_28%),linear-gradient(135deg,_rgba(14,165,233,0.06),_transparent_52%)]" />

                  <div className="relative space-y-5">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div className="space-y-2">
                        <p className={ui.eyebrowTitle}>{item.years}</p>
                        <h3 className="text-xl font-semibold text-slate-950 dark:text-white sm:text-[1.35rem]">
                          {item.institution}
                        </h3>
                      </div>

                      <span className="inline-flex items-center rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-sky-700 dark:text-sky-200">
                        {item.status}
                      </span>
                    </div>

                    <ul className="grid gap-3">
                      {item.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-3">
                          <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-r from-sky-400 to-cyan-300" />
                          <p className="text-[0.98rem] leading-7 text-slate-700 dark:text-slate-300">
                            {detail}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </PageSection>

      <PageSection
        id="experience"
        className="scroll-mt-28"
        eyebrow="Work Experience"
        title="Featured internship experience at Gamage Recruiters"
        description="This section highlights the internship experience that strengthened your practical understanding of backend systems, APIs, and real-world application maintenance."
        panelClassName="border-sky-300/20 bg-[linear-gradient(180deg,rgba(240,249,255,0.94)_0%,rgba(248,250,252,0.92)_100%)] shadow-[0_36px_90px_-40px_rgba(8,47,73,0.22)] dark:bg-[linear-gradient(180deg,rgba(8,15,32,0.94)_0%,rgba(15,23,42,0.84)_100%)] dark:shadow-[0_48px_120px_-52px_rgba(2,6,23,0.82)]"
      >
        <motion.div className="grid gap-4 xl:grid-cols-[1.18fr_0.82fr]" {...sectionMotionProps}>
          <motion.article
            className="relative overflow-hidden rounded-[2rem] border border-sky-300/20 bg-[linear-gradient(135deg,rgba(8,47,73,0.08)_0%,rgba(14,165,233,0.06)_42%,rgba(45,212,191,0.08)_100%)] p-6 shadow-[0_34px_90px_-44px_rgba(8,47,73,0.26)] backdrop-blur-xl dark:bg-[linear-gradient(135deg,rgba(8,47,73,0.34)_0%,rgba(15,23,42,0.56)_52%,rgba(6,182,212,0.16)_100%)] sm:p-8"
            {...itemMotionProps}
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.14),_transparent_28%),linear-gradient(135deg,_rgba(14,165,233,0.08),_transparent_48%)]" />

            <div className="relative space-y-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[1.35rem] border border-sky-300/20 bg-slate-950 text-base font-bold uppercase tracking-[0.28em] text-sky-200 shadow-[0_20px_50px_-28px_rgba(2,6,23,0.85)]">
                    GR
                  </div>
                  <div className="space-y-2">
                    <p className={ui.eyebrowTitle}>Company Logo Placeholder</p>
                    <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">
                      {workExperience.company}
                    </h3>
                    <p className="text-base font-medium text-slate-700 dark:text-slate-200">
                      {workExperience.role}
                    </p>
                  </div>
                </div>

                <span className="inline-flex items-center rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-[0.72rem] font-bold uppercase tracking-[0.22em] text-sky-700 dark:text-sky-200">
                  {workExperience.duration}
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {workExperience.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="rounded-3xl border border-white/60 bg-white/70 p-5 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.2)] backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-950/60"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-r from-sky-400 to-cyan-300" />
                      <p className="text-[0.98rem] leading-7 text-slate-700 dark:text-slate-300">
                        {highlight}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.article>

          <motion.div className="grid gap-4" {...itemMotionProps}>
            {experienceCards.map((item) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  className={`${ui.card} p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-400/20 hover:bg-white/95 motion-reduce:transform-none motion-reduce:transition-none dark:hover:bg-slate-900/80`}
                  whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                >
                  <div className="space-y-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="space-y-3">
                      <h3 className={ui.title}>{item.title}</h3>
                      <p className={ui.body}>{item.body}</p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </motion.div>
      </PageSection>

      <PageSection
        id="skills"
        className="scroll-mt-28"
        eyebrow="Skills"
        title="A categorized toolkit built around modern web and backend development"
        description="These categories organize the technologies I currently work with across interface development, backend engineering, databases, and delivery tooling."
      >
        <motion.div className="grid gap-4 xl:grid-cols-2" {...sectionMotionProps}>
          {skillCategories.map((category) => {
            const CategoryIcon = category.icon;

            return (
              <motion.article
                key={category.title}
                className="relative overflow-hidden rounded-[1.9rem] border border-slate-200/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(248,250,252,0.92)_100%)] p-6 shadow-[0_30px_70px_-40px_rgba(15,23,42,0.22)] backdrop-blur-xl dark:border-slate-700/60 dark:bg-[linear-gradient(180deg,rgba(15,23,42,0.88)_0%,rgba(15,23,42,0.72)_100%)] dark:shadow-[0_40px_100px_-46px_rgba(2,6,23,0.84)] sm:p-7"
                {...itemMotionProps}
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.12),_transparent_28%),linear-gradient(135deg,_rgba(14,165,233,0.05),_transparent_52%)]" />

                <div className="relative space-y-6">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${category.iconTone} text-slate-950 shadow-[0_22px_44px_-26px_rgba(15,23,42,0.35)]`}
                      >
                        <CategoryIcon className="h-5 w-5" />
                      </div>

                      <div className="space-y-2">
                        <p className={ui.eyebrowTitle}>{category.title}</p>
                        <p className={ui.body}>{category.description}</p>
                      </div>
                    </div>

                    <SkillCountRing
                      count={category.skills.length}
                      ringColor={category.ringColor}
                      shouldReduceMotion={shouldReduceMotion}
                    />
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {category.skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        className="rounded-3xl border border-slate-200/80 bg-white/70 p-4 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.18)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-sky-400/20 hover:bg-white/90 motion-reduce:transform-none motion-reduce:transition-none dark:border-slate-700/60 dark:bg-slate-950/55 dark:hover:bg-slate-900/78"
                        whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                      >
                        <div className="flex items-center gap-3">
                          <SkillBadgeIcon glyph={skill.glyph} tone={skill.tone} />
                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-slate-950 dark:text-white">
                              {skill.name}
                            </p>
                            <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                              Current toolkit
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </PageSection>

      <PageSection
        id="projects"
        className="scroll-mt-28"
        eyebrow="University Projects"
        title="Selected university builds across systems, apps, and product ideas"
        description="These project cards showcase the range of systems and product concepts I have explored through university work, from operational platforms to full-stack application ideas."
      >
        <motion.div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-3" {...sectionMotionProps}>
          {universityProjects.map((project, index) => (
            <motion.article
              key={project.title}
              className="group relative overflow-hidden rounded-[1.9rem] border border-slate-200/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(248,250,252,0.92)_100%)] p-6 shadow-[0_30px_70px_-40px_rgba(15,23,42,0.22)] backdrop-blur-xl transition duration-300 hover:border-sky-400/20 hover:shadow-[0_36px_90px_-44px_rgba(8,47,73,0.22)] motion-reduce:transition-none dark:border-slate-700/60 dark:bg-[linear-gradient(180deg,rgba(15,23,42,0.88)_0%,rgba(15,23,42,0.72)_100%)] dark:shadow-[0_40px_100px_-46px_rgba(2,6,23,0.84)] dark:hover:bg-slate-900/78"
              {...itemMotionProps}
              whileHover={shouldReduceMotion ? undefined : { y: -6 }}
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.12),_transparent_28%),linear-gradient(135deg,_rgba(14,165,233,0.05),_transparent_52%)] opacity-0 transition duration-300 group-hover:opacity-100 motion-reduce:transition-none" />

              <div className="relative flex h-full flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-3">
                    <span className="inline-flex items-center rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-sky-700 dark:text-sky-200">
                      Project {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-[1.15rem] font-semibold leading-7 text-slate-950 dark:text-white">
                      {project.title}
                    </h3>
                  </div>

                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 via-cyan-300 to-teal-300 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-slate-950 shadow-[0_18px_40px_-24px_rgba(14,165,233,0.4)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-200/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600 dark:border-slate-700/60 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className={`${ui.body} mt-5 flex-1`}>{project.description}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </PageSection>

      <PageSection
        id="personal-projects"
        className="scroll-mt-28"
        eyebrow="Personal Projects"
        title="Featured personal builds with polished presentation and product-focused UI"
        description="These cards highlight personal full-stack and frontend projects, each presented with its core stack, short context, and quick links to source code and live demos."
        panelClassName="border-sky-300/20 bg-[linear-gradient(180deg,rgba(240,249,255,0.94)_0%,rgba(248,250,252,0.92)_100%)] shadow-[0_36px_90px_-40px_rgba(8,47,73,0.2)] dark:bg-[linear-gradient(180deg,rgba(8,15,32,0.94)_0%,rgba(15,23,42,0.82)_100%)] dark:shadow-[0_48px_120px_-52px_rgba(2,6,23,0.82)]"
      >
        <motion.div className="grid gap-4 md:grid-cols-2" {...sectionMotionProps}>
          {personalProjects.map((project) => (
            <motion.article
              key={project.title}
              className="group relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/58 p-6 shadow-[0_34px_90px_-44px_rgba(8,47,73,0.18)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-sky-400/20 hover:bg-white/72 hover:shadow-[0_42px_110px_-48px_rgba(14,165,233,0.24)] motion-reduce:transform-none motion-reduce:transition-none dark:border-slate-700/60 dark:bg-slate-950/58 dark:hover:bg-slate-900/76"
              {...itemMotionProps}
              whileHover={shouldReduceMotion ? undefined : { y: -6 }}
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.18),_transparent_26%),linear-gradient(135deg,_rgba(14,165,233,0.08),_transparent_48%)] opacity-0 transition duration-300 group-hover:opacity-100 motion-reduce:transition-none" />

              <div className="relative flex h-full flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-3">
                    <span className="inline-flex items-center rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-sky-700 dark:text-sky-200">
                      Featured Build
                    </span>
                    <h3 className="text-[1.2rem] font-semibold leading-7 text-slate-950 dark:text-white">
                      {project.title}
                    </h3>
                  </div>

                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 via-cyan-300 to-teal-300 text-[0.78rem] font-bold uppercase tracking-[0.18em] text-slate-950 shadow-[0_20px_44px_-24px_rgba(14,165,233,0.42)]">
                    {project.badge}
                  </span>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-200/80 bg-white/55 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600 backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-950/50 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className={`${ui.body} mt-5 flex-1`}>{project.description}</p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Button href={project.codeUrl} target="_blank" rel="noreferrer" size="sm" variant="secondary">
                    Code
                  </Button>
                  <Button href={project.demoUrl} target="_blank" rel="noreferrer" size="sm">
                    Live Demo
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </PageSection>

      <ReflectiveJournalSection />

      <CareerDevelopmentSection />

      <PageSection
        id="contact"
        className="scroll-mt-28"
        eyebrow="Contact"
        title="Let's connect for internships, backend projects, and collaboration"
        description="Keep this section simple and easy to trust. The clearer your contact details are, the easier it is for the right people to reach out."
      >
        <motion.div className="grid gap-4 xl:grid-cols-[0.95fr_1.05fr]" {...sectionMotionProps}>
          <motion.article className={`${ui.card} p-6 sm:p-8`} {...itemMotionProps}>
            <div className="space-y-6">
              <div className="space-y-3">
                <p className={ui.eyebrowTitle}>Ready for meaningful engineering work</p>
                <p className={ui.body}>
                  I am motivated to contribute to backend-focused projects where I can keep
                  learning, deliver dependable work, and grow through real product experience.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button href="mailto:your.email@example.com">Email Me</Button>
                <Button href="#home" variant="secondary">
                  Back to Top
                </Button>
              </div>

              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 rounded-full border border-slate-200/70 px-4 py-3 text-sm font-semibold text-slate-700 transition duration-200 hover:bg-white/80 hover:text-slate-950 motion-reduce:transition-none dark:border-slate-700/60 dark:text-slate-200 dark:hover:bg-white/5 dark:hover:text-white"
                  >
                    {link.icon}
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.article>

          <motion.div className="grid gap-4" {...itemMotionProps}>
            {contactDetails.map((detail) => {
              const Icon = detail.icon;

              return (
                <a
                  key={detail.label}
                  href={detail.href}
                  className={`${ui.card} block p-5 transition duration-200 hover:-translate-y-0.5 hover:border-sky-400/20 hover:bg-white/95 motion-reduce:transform-none motion-reduce:transition-none dark:hover:bg-slate-900/80`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-400/10 text-sky-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 space-y-2">
                      <p className={ui.eyebrowTitle}>{detail.label}</p>
                      <p className="text-base font-semibold text-slate-950 dark:text-white">
                        {detail.value}
                      </p>
                      <p className={ui.body}>{detail.helper}</p>
                    </div>
                  </div>
                </a>
              );
            })}
          </motion.div>
        </motion.div>
      </PageSection>
    </>
  );
}
