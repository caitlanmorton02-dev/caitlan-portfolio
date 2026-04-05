export const GA_ID = "G-LN0JFSM94B";

export const trackEvent = (action: string, params?: Record<string, any>) => {
  if (typeof window === "undefined") return;

  // @ts-ignore
  window.gtag?.("event", action, params);
};