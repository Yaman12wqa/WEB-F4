import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { blogPosts, identity } from "@/lib/portfolio-data";

const postBodies: Record<string, string[]> = {
  "static-next-nginx": [
    "This portfolio is exported as static files because the core content is stable, public, and does not require request-time personalization. Static output reduces runtime dependencies and keeps the production image focused on serving HTML, CSS, JavaScript, and assets.",
    "Nginx is used in production because it is small, predictable, and excellent at serving immutable static assets. The container also exposes /api/health from Nginx, so orchestrators can check the service without starting a Node.js server.",
    "The operational tradeoff is intentional: dynamic form submission is handled through the user's mail client, while runtime observability comes from Nginx structured JSON access logs.",
  ],
  "devsecops-ci": [
    "The CI pipeline treats security as part of the build, not as a manual step after deployment. Semgrep scans source code patterns, Gitleaks blocks committed secrets, and Trivy scans the built image for operating-system and package vulnerabilities.",
    "The workflow fails on critical Trivy findings and on any Gitleaks detection. This is stricter than a demo setup and makes the portfolio suitable for academic evaluation of production readiness.",
    "Docker layer caching and npm caching are enabled to keep repeated builds fast while preserving reproducibility through npm ci and a committed lockfile.",
  ],
  "academic-projects-production": [
    "Academic projects become stronger portfolio evidence when they explain the problem, the architecture, and the deployment path. A reviewer should be able to understand why the project exists before reading the code.",
    "The project list in this portfolio is based on public repositories and README files from the student's GitHub profile. That keeps the content grounded in actual work rather than generic template claims.",
    "Production readiness is shown through typed source files, Docker build artifacts, health checks, environment examples, deployment instructions, and security scanning in CI.",
  ],
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

type BlogPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  return {
    title: post
      ? `${post.title} | ${identity.displayName}`
      : `${identity.displayName} Blog`,
    description: post?.summary,
  };
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <main className="section-shell grid min-h-screen content-center gap-5 py-16">
        <Badge variant="outline">Not found</Badge>
        <h1 className="text-3xl font-semibold">Blog post not found</h1>
        <Button asChild className="w-fit">
          <Link href="/">Back to portfolio</Link>
        </Button>
      </main>
    );
  }

  return (
    <main className="section-shell max-w-3xl py-12">
      <Button variant="ghost" asChild className="mb-8">
        <Link href="/#blog">
          <ArrowLeft aria-hidden="true" />
          Back
        </Link>
      </Button>
      <article className="grid gap-6">
        <div className="grid gap-3">
          <Badge variant="outline" className="w-fit">
            {post.date} | {post.readingTime}
          </Badge>
          <h1 className="text-4xl font-semibold leading-tight tracking-normal">
            {post.title}
          </h1>
          <p className="text-lg leading-8 text-muted-foreground">{post.summary}</p>
        </div>
        <div className="grid gap-5 text-base leading-8 text-muted-foreground">
          {postBodies[post.slug].map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>
    </main>
  );
}
