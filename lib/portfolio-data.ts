import {
  BookOpen,
  Boxes,
  Code2,
  GraduationCap,
  Languages,
  Terminal,
} from "lucide-react";

export const identity = {
  name: "Yaman",
  displayName: "Yaman",
  role: "4th-Year Computer Engineering Student",
  location: "Türkiye",
  github: "https://github.com/Yaman12wqa",
  avatar: "/yaman-avatar.png",
};

export const hero = {
  pitch:
    "I am a fourth-year Computer Engineering student at Bitlis Eren University. My confirmed programming level is basic Python and beginner C#, and I am currently strengthening these foundations through coursework and practical exercises.",
  secondaryPitch:
    "Several repositories on this profile were created with substantial AI assistance. I am reviewing them one by one, testing the code, simplifying unclear parts, and documenting only the knowledge I can explain accurately.",
  cta: "Review learning projects",
};

export const projects = [
  {
    name: "CampuSupport",
    type: "University support-ticket learning prototype",
    summary:
      "A prototype for submitting, assigning, and tracking campus support requests. The latest version includes an API, a small browser interface, role-based flows, and automated API tests.",
    technologies: ["Python", "FastAPI", "SQLAlchemy", "SQLite", "HTML", "JavaScript"],
    github: "https://github.com/Yaman12wqa/CodeNight",
    reviewStatus:
      "Current review work covers repository hygiene, repairing the department-seeding defect, running the tests, and learning the API-to-database flow. Technologies listed here describe the repository; they are not all claimed as personal skills.",
  },
  {
    name: "BEUShareBox",
    type: "Browser-based product-sharing practice project",
    summary:
      "A single-page practice application that stores products in the browser and supports adding, searching, filtering, liking, commenting, sharing, and deleting entries.",
    technologies: ["HTML", "CSS", "JavaScript", "localStorage"],
    github: "https://github.com/Yaman12wqa/2-week-project",
    reviewStatus:
      "This is a candidate for future hands-on rebuilding because its browser-only structure is easier to study than the larger AI-assisted repositories. Its JavaScript is still being evaluated before it is presented as a confirmed skill.",
  },
];

export const skillGroups = [
  {
    title: "Confirmed programming",
    icon: Code2,
    skills: [
      {
        name: "Python",
        level: "Basic",
        note: "Programming fundamentals and continued practice.",
      },
      {
        name: "C#",
        level: "Beginner",
        note: "Currently studying a basic C# course.",
      },
    ],
  },
  {
    title: "Languages",
    icon: Languages,
    skills: [
      { name: "Arabic", level: "Native", note: "Native language." },
      { name: "Turkish", level: "C1", note: "Advanced working proficiency." },
      { name: "English", level: "B1", note: "Intermediate communication." },
    ],
  },
];

export const activities = [
  {
    role: "Code Night Competitor",
    organization: "Bitlis Eren University",
    period: "Date and challenge details to be confirmed",
    icon: GraduationCap,
    details: [
      "Participated as a competitor in a university Code Night event.",
      "The exact challenge, team structure, and individual contribution are still being documented and are not overstated here.",
    ],
  },
  {
    role: "Current Learning",
    organization: "Computer Engineering studies",
    period: "Ongoing",
    icon: BookOpen,
    details: [
      "Practicing programming fundamentals with Python and beginner-level C#.",
      "Reviewing existing AI-assisted repositories to understand their execution flow, data handling, tests, and limitations.",
    ],
  },
];

export const education = {
  university: "Bitlis Eren University",
  degree: "B.Sc. Computer Engineering",
  year: "4th-year student",
  courses: [
    "Introduction to Computer Science",
    "Algorithms and Problem Solving",
    "Basic C# course (in progress)",
  ],
};

export const metrics = [
  { label: "Computer Engineering", value: "4th Year" },
  { label: "Python level", value: "Basic" },
  { label: "C# level", value: "Beginner" },
  { label: "Spoken languages", value: "3" },
];

export const architectureHighlights = [
  {
    title: "Static portfolio",
    description:
      "This repository uses Next.js to generate static pages. This describes the implementation, not a claimed Next.js proficiency level.",
    icon: Boxes,
  },
  {
    title: "Centralized content",
    description:
      "Biography, projects, education, and confirmed skill levels are stored in one typed data file so unsupported claims are easier to find and correct.",
    icon: Code2,
  },
  {
    title: "Reproducible checks",
    description:
      "The repository provides lint, type-check, and build commands so changes can be verified before they are published.",
    icon: Terminal,
  },
];

export const values = [
  {
    title: "Accurate",
    description: "Skill claims are limited to information that has been personally confirmed.",
    icon: BookOpen,
  },
  {
    title: "Learning-focused",
    description: "Existing projects are being turned into exercises that can be understood and defended.",
    icon: GraduationCap,
  },
  {
    title: "Reviewable",
    description: "Known limitations and current review status are documented instead of hidden.",
    icon: Boxes,
  },
];

export const contactLinks = [
  {
    label: "GitHub",
    value: "github.com/Yaman12wqa",
    href: identity.github,
    icon: Terminal,
  },
];
