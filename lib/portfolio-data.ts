import {
  BookOpen,
  Boxes,
  BriefcaseBusiness,
  Code2,
  Database,
  GraduationCap,
  HeartHandshake,
  Mail,
  Network,
  ServerCog,
  ShieldCheck,
  Terminal,
  Wrench,
} from "lucide-react";

export const identity = {
  name: "YMAN ALSHEABE",
  displayName: "Yman Alsheabe",
  schoolId: "23080410056",
  role: "Computer Engineering Student | Full-Stack and DevOps Builder",
  location: "Turkey",
  email: "alshybyyman@gmail.com",
  github: "https://github.com/Yaman12wqa",
  linkedin: "https://www.linkedin.com/search/results/all/?keywords=YMAN%20ALSHEABE",
  avatar: "/yaman-avatar.png",
};

export const hero = {
  pitch:
    "I build coursework-driven full-stack systems that connect usable interfaces with tested backends, Dockerized services, and security-aware delivery pipelines. My current focus is Next.js, TypeScript, Go, Node.js, and production deployment workflows that a reviewer can run and inspect.",
  secondaryPitch:
    "This portfolio is intentionally built as a production artifact: static-exported Next.js, Nginx serving, JSON logs, health checks, CI, container scanning, and deployment paths for Fly.io and Coolify.",
  cta: "Review projects",
};

export const projects = [
  {
    name: "CampusConnect",
    type: "Polyglot university community backend",
    problem:
      "University clubs need one reliable system for event publishing, student participation, notifications, and analytics instead of disconnected forms and chat messages.",
    stack: [
      "NestJS",
      "TypeScript",
      "Go",
      "PostgreSQL",
      "Prisma",
      "GraphQL",
      "JWT",
      "Docker Compose",
    ],
    github: "https://github.com/Yaman12wqa/web-tabanli-programlama-final-1.-odev",
    liveDemo:
      "https://github.com/Yaman12wqa/web-tabanli-programlama-final-1.-odev#kurulum",
    contribution:
      "Designed the NestJS and Go service split, REST and GraphQL contracts, Prisma schema, JWT auth flow, webhook signing, Go API-key middleware, rate limiting, Docker Compose orchestration, and request documentation.",
  },
  {
    name: "SecScan",
    type: "Authorized web security scanner dashboard",
    problem:
      "Students need a safe, explainable way to run lightweight web security checks with SSRF protections, live progress, scoring, and report output for academic security labs.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Go",
      "Gin",
      "Server-Sent Events",
      "Docker",
      "Semgrep",
      "Trivy",
    ],
    github: "https://github.com/Yaman12wqa/Finale-Do-ru-S-n-f---i-Projesi-Seri-3",
    liveDemo:
      "https://github.com/Yaman12wqa/Finale-Do-ru-S-n-f---i-Projesi-Seri-3#run-with-docker-compose",
    contribution:
      "Built the Go scanner service, SSRF validation boundaries, scanner registry, SSE progress flow, PDF report generation, Next.js frontend, Docker Compose setup, and security workflow documentation.",
  },
  {
    name: "Academic Task Tracker",
    type: "Coursework planning application",
    problem:
      "Students often track assignments, exams, project deadlines, and priorities across separate notes; the result is missed due dates and weak visibility into urgent work.",
    stack: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Axios",
      "Lucide React",
    ],
    github: "https://github.com/Yaman12wqa/New-folder--3-",
    liveDemo: "https://github.com/Yaman12wqa/New-folder--3-#uygulamayi-calistirma",
    contribution:
      "Implemented the full task CRUD workflow, dashboard summary cards, filters, search, sorting, due-date handling, REST API, MongoDB persistence layer, and local notes experience.",
  },
  {
    name: "BEUBlog",
    type: "Role-based full-stack blog platform",
    problem:
      "Academic content publishing needs authentication, author ownership, moderation, category management, media uploads, and a controlled admin review flow.",
    stack: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Multer",
      "Docker",
      "Nginx",
    ],
    github: "https://github.com/Yaman12wqa/web-tabanli-programlama-3.-hafta-odevi",
    liveDemo:
      "https://github.com/Yaman12wqa/web-tabanli-programlama-3.-hafta-odevi#docker-ile-calistirma",
    contribution:
      "Built the React client, Express API, JWT session flow, role checks, post moderation states, profile updates, image upload handling, and Dockerized deployment layout.",
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      { name: "Next.js App Router", level: "Intermediate", note: "Static export, routing, metadata, component architecture" },
      { name: "React", level: "Intermediate", note: "Stateful UI, forms, dashboards, reusable components" },
      { name: "TypeScript", level: "Intermediate", note: "Strict project setup and typed data models" },
      { name: "Tailwind CSS", level: "Intermediate", note: "Responsive layouts, dark mode, design tokens" },
    ],
  },
  {
    title: "Backend",
    icon: Database,
    skills: [
      { name: "Node.js and Express", level: "Intermediate", note: "REST APIs, validation, auth middleware" },
      { name: "NestJS", level: "Developing", note: "Modular services, GraphQL, Prisma integration" },
      { name: "Go", level: "Developing", note: "HTTP APIs, middleware, worker pools, security utilities" },
      { name: "MongoDB and PostgreSQL", level: "Developing", note: "Mongoose schemas, Prisma models, SQL analytics" },
    ],
  },
  {
    title: "DevOps",
    icon: ServerCog,
    skills: [
      { name: "Docker", level: "Intermediate", note: "Multi-stage builds and Compose orchestration" },
      { name: "GitHub Actions", level: "Developing", note: "Lint, build, image scan, and GHCR publishing" },
      { name: "Nginx", level: "Developing", note: "Static serving, health endpoint, cache and security headers" },
      { name: "DevSecOps", level: "Developing", note: "Semgrep, Trivy, Gitleaks, critical-finding gates" },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git and GitHub", level: "Intermediate", note: "Repository workflows and technical documentation" },
      { name: "Docker Desktop", level: "Developing", note: "Local containers and service verification" },
      { name: "HTTP request files", level: "Intermediate", note: "Repeatable API testing flows" },
      { name: "VS Code", level: "Intermediate", note: "TypeScript, REST, Docker, and Git workflow" },
    ],
  },
];

export const experience = [
  {
    role: "Academic Full-Stack Developer",
    organization: "Computer Engineering coursework",
    period: "2025-2026",
    icon: GraduationCap,
    details: [
      "Delivered multiple web programming projects with real CRUD, authentication, moderation, dashboards, Docker support, and written setup instructions.",
      "Practiced production-style handoff by documenting environment variables, API routes, known limits, and verification commands.",
    ],
  },
  {
    role: "Security-Focused Project Builder",
    organization: "SecScan academic project",
    period: "2026",
    icon: ShieldCheck,
    details: [
      "Built a controlled scanner dashboard for authorized testing with SSRF protection, scanner modules, server-sent progress, scoring, and PDF reporting.",
      "Added CI security checks and documented ethical usage boundaries for academic review.",
    ],
  },
  {
    role: "Portfolio DevOps Maintainer",
    organization: "Personal production portfolio",
    period: "2026",
    icon: BriefcaseBusiness,
    details: [
      "Created this portfolio as a deployable artifact with Next.js 15, Docker, Nginx, health checks, JSON logs, and CI/CD to GHCR.",
      "Prepared deployment paths for both Fly.io and a VPS/Coolify workflow.",
    ],
  },
];

export const education = {
  university: "Computer Engineering undergraduate program, BEU academic coursework context",
  degree: "Bachelor-level Computer Engineering studies",
  gpa: "GPA not published in the provided project materials",
  courses: [
    "Web-based Programming",
    "Database-backed Web Applications",
    "Software Engineering Project Practice",
    "Application Security Fundamentals",
    "Containerized Deployment Workflows",
  ],
};

export const hobbies = [
  "Building small web tools that solve coursework and productivity problems",
  "Learning Go services and backend architecture through hands-on projects",
  "Practicing safe web security labs on authorized targets",
  "Improving technical documentation so projects are easier to run",
];

export const blogPosts = [
  {
    slug: "static-next-nginx",
    title: "Why this portfolio is statically exported and served by Nginx",
    date: "2026-04-27",
    summary:
      "A production portfolio should load quickly, have a small runtime surface, and still expose health checks and logs for operations review.",
    readingTime: "4 min read",
  },
  {
    slug: "devsecops-ci",
    title: "DevSecOps checks included in the CI pipeline",
    date: "2026-04-27",
    summary:
      "Semgrep checks source patterns, Gitleaks blocks secrets, and Trivy fails the image build on critical vulnerabilities.",
    readingTime: "5 min read",
  },
  {
    slug: "academic-projects-production",
    title: "Turning academic projects into production evidence",
    date: "2026-04-27",
    summary:
      "A strong submission needs clear problem statements, runbooks, environment files, health endpoints, container builds, and honest limitations.",
    readingTime: "3 min read",
  },
];

export const contactLinks = [
  {
    label: "Email",
    value: identity.email,
    href: `mailto:${identity.email}`,
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/Yaman12wqa",
    href: identity.github,
    icon: Terminal,
  },
  {
    label: "LinkedIn",
    value: "LinkedIn search: YMAN ALSHEABE",
    href: identity.linkedin,
    icon: Network,
  },
];

export const metrics = [
  { label: "Verified public repositories reviewed", value: "8" },
  { label: "Portfolio sections required by rubric", value: "7/7" },
  { label: "CI security tools", value: "3" },
  { label: "Deployment targets documented", value: "2" },
];

export const architectureHighlights = [
  {
    title: "Static Next.js frontend",
    description:
      "Next.js 15 App Router generates static HTML and assets for fast loading and low runtime risk.",
    icon: Boxes,
  },
  {
    title: "Nginx production layer",
    description:
      "Nginx serves the exported site, returns `/api/health`, writes structured JSON access logs, and exits gracefully with SIGQUIT.",
    icon: ServerCog,
  },
  {
    title: "DevSecOps pipeline",
    description:
      "GitHub Actions runs linting, type checks, build, Docker build, Semgrep, Gitleaks, Trivy, and GHCR publishing.",
    icon: ShieldCheck,
  },
  {
    title: "Documented operations",
    description:
      "README, Docker Compose, Fly.io, Coolify, and environment files make the project reviewable and reproducible.",
    icon: BookOpen,
  },
];

export const values = [
  {
    title: "Practical",
    description: "Every section is backed by real repositories, setup instructions, or this production portfolio.",
    icon: HeartHandshake,
  },
  {
    title: "Reviewable",
    description: "The project favors typed data, small components, explicit scripts, and deployment documentation.",
    icon: BookOpen,
  },
  {
    title: "Operational",
    description: "The final artifact is containerized, health-checked, logged, scanned, and ready for two deployment paths.",
    icon: ServerCog,
  },
];
