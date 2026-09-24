declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
// Sends a conversion event to Google Analytics when it is configured.
export function track(event: string, params: Record<string, string> = {}) {
  window.gtag?.("event", event, { page_path: location.pathname, ...params });
}
