import { writeJsonLog } from "@/lib/logger";

export const dynamic = "force-static";

export function GET() {
  const payload = {
    status: "ok",
    service: "yaman-portfolio",
    version: "1.0.0",
    runtime: "next-static-route",
  };

  writeJsonLog("info", "health_check", {
    status: payload.status,
    runtime: payload.runtime,
  });

  return Response.json(payload, {
    headers: {
      "Cache-Control": "no-store",
    },
  });
}
