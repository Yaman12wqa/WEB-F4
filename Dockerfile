# syntax=docker/dockerfile:1.7

FROM node:22-alpine AS deps
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
COPY package.json package-lock.json* ./
RUN npm ci

FROM node:22-alpine AS builder
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM nginx:1.29-alpine AS runner
LABEL org.opencontainers.image.title="YMAN ALSHEABE Portfolio"
LABEL org.opencontainers.image.description="Static Next.js 15 portfolio served by Nginx with health checks and JSON logs."
LABEL org.opencontainers.image.source="https://github.com/Yaman12wqa/WEB-F4"

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/out /usr/share/nginx/html

RUN chown -R nginx:nginx /usr/share/nginx/html /var/cache/nginx /var/run /tmp

USER nginx
EXPOSE 8080
STOPSIGNAL SIGQUIT

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://127.0.0.1:8080/api/health | grep -q '"status":"ok"' || exit 1

CMD ["nginx", "-g", "daemon off;"]
