import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  GitBranch,
  MapPin,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  activities,
  architectureHighlights,
  contactLinks,
  education,
  hero,
  identity,
  metrics,
  projects,
  skillGroups,
  values,
} from "@/lib/portfolio-data";

const navItems = [
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#activities", label: "Activities" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Home() {
  return (
    <main>
      <header className="sticky top-0 z-50 border-b bg-background/88 backdrop-blur">
        <div className="section-shell flex h-16 items-center justify-between gap-4">
          <a href="#hero" className="focus-ring rounded-md font-semibold">
            {identity.displayName}
          </a>
          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {navItems.map((item) => (
              <Button key={item.href} variant="ghost" size="sm" asChild>
                <a href={item.href}>{item.label}</a>
              </Button>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </header>

      <section
        id="hero"
        className="border-b bg-[linear-gradient(180deg,color-mix(in_oklab,var(--secondary)_70%,transparent),transparent_78%)] py-16 md:py-24"
      >
        <div className="section-shell grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-7">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="outline">Computer Engineering</Badge>
              <Badge variant="outline">Student portfolio in progress</Badge>
            </div>
            <div className="grid gap-5">
              <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-normal sm:text-5xl lg:text-6xl">
                {identity.name}
              </h1>
              <p className="max-w-3xl text-xl font-medium text-muted-foreground">
                {identity.role}
              </p>
              <p className="max-w-3xl text-base leading-8 text-muted-foreground">
                {hero.pitch}
              </p>
              <p className="max-w-3xl text-base leading-8 text-muted-foreground">
                {hero.secondaryPitch}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <a href="#projects">
                  {hero.cta}
                  <ArrowRight aria-hidden="true" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={identity.github} target="_blank" rel="noreferrer">
                  <GitBranch aria-hidden="true" />
                  GitHub profile
                </a>
              </Button>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-lg border bg-card shadow-sm">
              <Image
                src={identity.avatar}
                alt={`${identity.displayName} GitHub avatar`}
                width={460}
                height={460}
                priority
                className="h-full w-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-lg border bg-card p-4">
                  <p className="text-2xl font-semibold">{metric.value}</p>
                  <p className="mt-1 text-sm leading-5 text-muted-foreground">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="section-shell grid gap-5 md:grid-cols-3">
          {values.map((item) => (
            <div key={item.title} className="grid gap-3">
              <item.icon className="size-6 text-primary" aria-hidden="true" />
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-sm leading-6 text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <SectionHeading
        eyebrow="Selected work"
        title="Learning projects"
        description="These repositories are being reviewed as learning material. Technologies shown on a card describe the codebase and do not automatically represent a personal skill claim."
        id="projects"
      />
      <section className="pb-16">
        <div className="section-shell grid gap-5 lg:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.name} className="flex flex-col">
              <CardHeader>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <CardTitle>{project.name}</CardTitle>
                    <CardDescription className="mt-2">{project.type}</CardDescription>
                  </div>
                  <Badge variant="outline">Under review</Badge>
                </div>
              </CardHeader>
              <CardContent className="grid flex-1 gap-5">
                <div className="grid gap-2">
                  <h3 className="text-sm font-semibold">Project summary</h3>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {project.summary}
                  </p>
                </div>
                <div className="grid gap-2">
                  <h3 className="text-sm font-semibold">Technologies present</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="grid gap-2">
                  <h3 className="text-sm font-semibold">Review status</h3>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {project.reviewStatus}
                  </p>
                </div>
                <div className="mt-auto flex flex-col gap-3 sm:flex-row">
                  <Button variant="outline" asChild>
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <GitBranch aria-hidden="true" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <SectionHeading
        eyebrow="Current capability"
        title="Confirmed skills and languages"
        description="Levels below come from information confirmed by the student, not from technologies detected in AI-assisted repositories."
        id="skills"
      />
      <section className="pb-16">
        <div className="section-shell grid gap-5 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <Card key={group.title}>
              <CardHeader>
                <group.icon className="size-6 text-primary" aria-hidden="true" />
                <CardTitle className="mt-3">{group.title}</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="grid gap-1">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-sm font-semibold">{skill.name}</h3>
                      <Badge variant="outline">{skill.level}</Badge>
                    </div>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {skill.note}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <SectionHeading
        eyebrow="Student record"
        title="Activities and current learning"
        description="This section records confirmed student activity without presenting coursework as employment."
        id="activities"
      />
      <section className="pb-16">
        <div className="section-shell grid gap-5">
          {activities.map((item) => (
            <div key={item.role} className="grid gap-4 rounded-lg border bg-card p-6 md:grid-cols-[220px_1fr]">
              <div className="grid content-start gap-3">
                <item.icon className="size-6 text-primary" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold">{item.role}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.organization}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.period}</p>
                </div>
              </div>
              <ul className="grid gap-3">
                {item.details.map((detail) => (
                  <li key={detail} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <SectionHeading
        eyebrow="Academic profile"
        title="Education"
        description="Only confirmed academic information is included. Graduation date and other coursework can be added after verification."
        id="education"
      />
      <section className="pb-16">
        <div className="section-shell grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Card>
            <CardHeader>
              <CardTitle>{education.degree}</CardTitle>
              <CardDescription>{education.university}</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3 text-sm leading-6 text-muted-foreground">
              <p>Student: {identity.name}</p>
              <p>Current level: {education.year}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Relevant courses</CardTitle>
              <CardDescription>
                Confirmed coursework and current study.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3">
              {education.courses.map((course) => (
                <div key={course} className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className="size-4 text-primary" aria-hidden="true" />
                  {course}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      <SectionHeading
        eyebrow="Repository implementation"
        title="How this portfolio is organized"
        description="These notes document the repository itself and should not be read as claims of professional experience."
        id="architecture"
      />
      <section className="pb-16">
        <div className="section-shell grid gap-5 md:grid-cols-2">
          {architectureHighlights.map((item) => (
            <div key={item.title} className="grid gap-3 rounded-lg border bg-card p-6">
              <item.icon className="size-6 text-primary" aria-hidden="true" />
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm leading-6 text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <SectionHeading
        eyebrow="Get in touch"
        title="Contact"
        description="Only the confirmed GitHub profile is published. Professional contact details can be added later after verification."
        id="contact"
      />
      <section className="pb-20">
        <div className="section-shell grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Direct links</CardTitle>
              <CardDescription className="flex items-center gap-2">
                <MapPin className="size-4" aria-hidden="true" />
                {identity.location}
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              {contactLinks.map((link) => (
                <Button key={link.label} variant="outline" className="justify-start" asChild>
                  <a href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                    <link.icon aria-hidden="true" />
                    <span className="grid text-left">
                      <span>{link.label}</span>
                      <span className="text-xs font-normal text-muted-foreground">{link.value}</span>
                    </span>
                  </a>
                </Button>
              ))}
              <Separator />
              <p className="text-sm text-muted-foreground">
                Personal contact details are intentionally omitted from this work-in-progress version.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  id,
}: {
  eyebrow: string;
  title: string;
  description: string;
  id: string;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-10">
      <div className="section-shell grid gap-3">
        <Badge variant="outline" className="w-fit">
          {eyebrow}
        </Badge>
        <h2 className="text-3xl font-semibold tracking-normal md:text-4xl">
          {title}
        </h2>
        <p className="max-w-3xl text-base leading-7 text-muted-foreground">
          {description}
        </p>
      </div>
    </section>
  );
}
