export function trackPortfolioEvent(
  event: string,
  metadata: Record<string, string> = {},
) {
  if (typeof window === "undefined") {
    return;
  }

  const payload = {
    event,
    metadata,
    timestamp: new Date().toISOString(),
    storage: "none",
  };

  window.dispatchEvent(
    new CustomEvent("portfolio:analytics", {
      detail: payload,
    }),
  );
}
