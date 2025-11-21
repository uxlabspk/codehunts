export const config = {
  app: {
    name: import.meta.env.VITE_APP_NAME || "CodeHunts",
    url: import.meta.env.VITE_APP_URL || "https://codehunts.com",
  },
  api: {
    baseUrl: import.meta.env.VITE_API_URL || "https://api.codehunts.com",
  },
  contact: {
    email: import.meta.env.VITE_CONTACT_EMAIL || "contact@codehuntspk.com",
    phone: import.meta.env.VITE_CONTACT_PHONE || "+92 123 4567890",
  },
  analytics: {
    gaTrackingId: import.meta.env.VITE_GA_TRACKING_ID,
    hotjarId: import.meta.env.VITE_HOTJAR_ID,
  },
  features: {
    enableAnalytics: import.meta.env.VITE_ENABLE_ANALYTICS === "true",
    enableChat: import.meta.env.VITE_ENABLE_CHAT === "true",
  },
} as const;
