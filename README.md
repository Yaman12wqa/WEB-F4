Öğrenci: YMAN ALSHEABE
Okul No: 23080410056

[![CI/CD](https://github.com/Yaman12wqa/WEB-F4/actions/workflows/ci.yml/badge.svg)](https://github.com/Yaman12wqa/WEB-F4/actions/workflows/ci.yml)

# YMAN ALSHEABE Production Portfolio

Production-ready personal portfolio built for academic evaluation with Next.js 15, TypeScript, Tailwind CSS, shadcn/ui-style components, Docker, Nginx, GitHub Actions, and DevSecOps scanning.

## Project Description

This project is a complete portfolio website and deployment package. It presents YMAN ALSHEABE's real public GitHub coursework projects, skill categories, academic experience, education context, hobbies, contact links, blog notes, and production architecture details. The production container serves a static Next.js export through Nginx, exposes `/api/health`, writes structured JSON logs, and shuts down gracefully with `SIGQUIT`.

## Tech Stack

- Next.js 15 App Router
- TypeScript strict mode
- Tailwind CSS 4
- shadcn/ui-style reusable primitives
- Docker multi-stage build
- Nginx static serving
- GitHub Actions CI/CD
- Semgrep, Trivy, and Gitleaks
- Fly.io and VPS/Coolify deployment paths

## Folder Structure

```text
.
|-- app/
|   |-- api/health/route.ts
|   |-- blog/[slug]/page.tsx
|   |-- globals.css
|   |-- layout.tsx
|   `-- page.tsx
|-- components/
|   |-- ui/
|   |-- contact-form.tsx
|   |-- theme-provider.tsx
|   `-- theme-toggle.tsx
|-- lib/
|   |-- analytics.ts
|   |-- logger.ts
|   |-- portfolio-data.ts
|   `-- utils.ts
|-- public/
|-- Dockerfile
|-- docker-compose.yml
|-- nginx.conf
|-- fly.toml
|-- .github/workflows/ci.yml
|-- .env.example
`-- README.md
```

## Architecture

The website is built as a static Next.js artifact because the portfolio content is public and does not require request-time personalization. Nginx serves the generated `out/` folder, handles the production health endpoint, emits JSON logs to stdout, caches static assets, and provides security headers.

```mermaid
flowchart LR
  Dev[Developer] --> GitHub[GitHub Repository]
  GitHub --> Actions[GitHub Actions CI/CD]
  Actions --> Lint[ESLint + TypeScript]
  Actions --> Build[Next.js Static Build]
  Actions --> Security[Semgrep + Gitleaks + Trivy]
  Build --> Docker[Multi-stage Docker Image]
  Security --> Docker
  Docker --> GHCR[GitHub Container Registry]
  GHCR --> Fly[Fly.io]
  GHCR --> Coolify[VPS + Coolify]
  Fly --> Nginx[Nginx Static Runtime]
  Coolify --> Nginx
  Nginx --> Health[/api/health]
  Nginx --> Logs[Structured JSON Logs]
```

## Local Development

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run lint
npm run typecheck
npm run build
npm start
```

`npm start` serves the exported static site from `out/` on port `3000`.

## Docker

```bash
docker build -t yaman-portfolio:local .
docker run --rm -p 8080:8080 yaman-portfolio:local
```

Health check:

```bash
curl http://localhost:8080/api/health
```

Expected response:

```json
{"status":"ok","service":"yaman-portfolio","version":"1.0.0","runtime":"nginx"}
```

## Docker Compose

```bash
docker compose up --build
```

Open `http://localhost:8080`.

The Compose service includes a required healthcheck against `/api/health`.

## CI/CD

The GitHub Actions workflow performs:

- npm dependency installation with cache
- ESLint
- TypeScript type checking
- Next.js production build
- Semgrep SAST scan
- Gitleaks secret scan
- Docker build with BuildKit cache
- Trivy image scan, failing on CRITICAL vulnerabilities
- GHCR push on `main`

Image name:

```text
ghcr.io/yaman12wqa/web-f4:latest
```

## Environment Variables

Copy `.env.example` to `.env.local` for local edits:

```bash
cp .env.example .env.local
```

Variables:

| Variable | Purpose |
| --- | --- |
| `NODE_ENV` | Runtime mode |
| `NEXT_TELEMETRY_DISABLED` | Disables Next.js telemetry |
| `NEXT_PUBLIC_SITE_URL` | Public site URL |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Contact email |
| `NEXT_PUBLIC_GITHUB_URL` | GitHub profile URL |
| `NEXT_PUBLIC_LINKEDIN_URL` | LinkedIn profile URL |

## Fly.io Deployment

Install and authenticate Fly.io CLI:

```bash
fly auth login
```

Create the app once:

```bash
fly apps create yaman-portfolio
```

Deploy:

```bash
fly deploy
```

Check health:

```bash
fly status
fly logs
```

`fly.toml` is configured for the Dockerfile, HTTPS, port `8080`, and a small shared VM.

## VPS + Coolify Deployment

1. Push the repository to GitHub.
2. In Coolify, create a new Docker-based application from the repository.
3. Select the included `Dockerfile`.
4. Set internal port to `8080`.
5. Add the public domain and enable HTTPS.
6. Configure healthcheck path as `/api/health`.
7. Deploy from Coolify.

Alternative GHCR flow:

```text
Image: ghcr.io/yaman12wqa/web-f4:latest
Port: 8080
Health path: /api/health
```

## Performance Targets

- Lighthouse target: 90 or higher in Performance, Accessibility, Best Practices, and SEO.
- Static export avoids server render latency.
- Nginx caches immutable Next.js assets for one year.
- Avatar is served locally from `public/yaman-avatar.png`.
- CSS uses system fonts to avoid remote font blocking.
- Layout is mobile responsive and supports dark mode.

Run Lighthouse locally after the Docker container is up:

```bash
npx lighthouse http://localhost:8080 --view
```

## Production Hygiene

- `/api/health` exists in both Next.js source and production Nginx runtime.
- Nginx logs use JSON format for structured log collectors.
- Docker uses a multi-stage build and Nginx final runtime.
- Container shutdown uses `STOPSIGNAL SIGQUIT` for graceful Nginx termination.
- Security headers are configured in `nginx.conf`.

## AI Usage Declaration

This project was generated with AI assistance under the student's provided identity and project requirements. Public repository information from the student's GitHub profile was used to avoid fake portfolio content. The student remains responsible for reviewing the code, understanding the architecture, verifying the deployment, and updating any personal links that need correction before submission.

## Academic Integrity Notes

- No lorem ipsum text is used.
- Portfolio projects are based on public repositories under `github.com/Yaman12wqa`.
- Skill levels are intentionally conservative.
- GPA is not invented because it was not provided in the project materials.
