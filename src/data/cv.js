import { contactInfo } from "./contact";
import { profile } from "./profile";

export const cvData = {
  name: profile.name,
  role: profile.role,
  location: "Sri Lanka",
  summary: profile.aboutParagraphs.join(" "),
  contact: {
    phone: contactInfo.phone,
    email: contactInfo.email,
    github: "github.com/danukachathurya",
    linkedin: "linkedin.com/in/danukachathurya",
  },
  education: [
    {
      institution: "SLIIT University",
      years: "2022 - Present",
      title: "BSc (Hons) in Information Technology",
      details: ["Specializing in Information Technology"],
    },
    {
      institution: "Ampara D.S Senanayake National School",
      years: "2011 - 2020",
      title: "G.C.E Advanced Level - Physical Science stream",
      details: ["3Cs"],
    },
  ],
  experience: [
    {
      role: "Intern Software Engineer",
      company: "Gamage Recruiters",
      duration: "May 2025 - Nov 2025",
      highlights: [
        "Gained hands-on experience developing and maintaining real-world applications.",
        "Worked across interfaces, APIs, and databases to support complete application workflows.",
      ],
    },
  ],
  skillGroups: [
    {
      title: "Frontend",
      items: ["HTML", "CSS", "JavaScript", "React.js"],
    },
    {
      title: "Backend",
      items: ["Node.js", "Java", "Spring Boot"],
    },
    {
      title: "Database",
      items: ["MongoDB", "MySQL"],
    },
    {
      title: "DevOps & Tools",
      items: ["GitHub", "Docker", "AWS", "Jenkins"],
    },
  ],
  projects: [
    {
      title: "Online Vehicle Parking System",
      stack: ["React.js", "Node.js", "MongoDB"],
      summary: "A university system for parking availability, vehicle flow, and slot coordination.",
    },
    {
      title: "MERN E-commerce Site",
      stack: ["MongoDB", "Express.js", "React.js", "Node.js"],
      summary: "A full-stack commerce build focused on product browsing, cart workflows, and user experience.",
    },
    {
      title: "MERN Hotel Booking App",
      stack: ["MongoDB", "Express.js", "React.js", "Node.js"],
      summary: "A booking-oriented application centered on listings, reservations, and practical UI flows.",
    },
    {
      title: "Social Media Application",
      stack: ["React.js", "Node.js", "MongoDB"],
      summary: "A social platform project built around posts, profiles, and community-style interaction patterns.",
    },
  ],
};
