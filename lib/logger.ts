type LogLevel = "info" | "warn" | "error";

type LogEvent = {
  level: LogLevel;
  event: string;
  service: string;
  timestamp: string;
  metadata?: Record<string, string | number | boolean>;
};

export function writeJsonLog(
  level: LogLevel,
  event: string,
  metadata?: LogEvent["metadata"],
) {
  const payload: LogEvent = {
    level,
    event,
    service: "yaman-portfolio",
    timestamp: new Date().toISOString(),
    metadata,
  };

  const line = JSON.stringify(payload);

  if (level === "error") {
    console.error(line);
    return;
  }

  if (level === "warn") {
    console.warn(line);
    return;
  }

  console.info(line);
}
