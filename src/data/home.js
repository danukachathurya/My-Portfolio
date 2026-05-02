export const heroSummaryCards = [
  {
    title: "Current role",
    value: "Full Stack Developer Intern",
    className: "",
  },
  {
    title: "Core strength",
    value: "Frontend to backend delivery",
    className: "",
  },
  {
    title: "Current focus",
    value: "Full stack product development",
    className: "sm:col-span-2",
  },
];

export const focusAreas = [
  "Software Engineering",
  "Full Stack Development",
  "Frontend Engineering",
  "REST APIs",
  "Databases",
  "Scalable Applications",
];

export const profileHighlights = [
  {
    title: "Education",
    value: "4th-year IT undergraduate at SLIIT University",
    iconKey: "education",
  },
  {
    title: "Internship",
    value: "Software Engineer Intern at Gamage Recruiters",
    iconKey: "briefcase",
  },
  {
    title: "Focus",
    value: "Responsive interfaces, REST APIs, and database-driven full stack apps",
    iconKey: "server",
  },
];

export const educationTimeline = [
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

export const workExperience = {
  role: "Intern Software Engineer",
  company: "Gamage Recruiters",
  duration: "May 2025 - Nov 2025",
  highlights: [
    "Gained hands-on experience developing and maintaining real-world applications.",
    "Worked across interfaces, APIs, and databases to support complete application workflows.",
  ],
};

export const experienceCards = [
  {
    title: "Role",
    body: "Intern Software Engineer with practical exposure to production-oriented application work.",
    iconKey: "briefcase",
  },
  {
    title: "Focus Areas",
    body: "Frontend interfaces, API workflows, and database-driven development formed the core of the internship experience.",
    iconKey: "database",
  },
  {
    title: "Real-World Exposure",
    body: "The internship strengthened my understanding of how real applications are built, maintained, and improved over time.",
    iconKey: "code",
  },
];

export const skillCategories = [
  {
    title: "Frontend",
    description: "Responsive interfaces and component-driven UI development for modern web experiences.",
    iconKey: "code",
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
    iconKey: "server",
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
    iconKey: "database",
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
    iconKey: "tooling",
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

export const universityProjects = [
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

export const personalProjects = [
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
