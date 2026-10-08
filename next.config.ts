import type { NextConfig } from "next";

// Next hydration and React/Motion styles require inline content on static pages.
// No eval, third-party production scripts, frames, plugins or foreign form targets.
const development = process.env.NODE_ENV === "development";
const preview = process.env.VERCEL_ENV === "preview";
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${development ? " 'unsafe-eval'" : ""}${preview ? " https://vercel.live" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  `img-src 'self' data: blob:${preview ? " https://vercel.live https://vercel.com" : ""}`,
  "font-src 'self'",
  `connect-src 'self'${preview ? " https://vercel.live https://*.pusher.com wss://*.pusher.com" : ""}`,
  `frame-src ${preview ? "https://vercel.live" : "'none'"}`,
  "frame-ancestors 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join("; ");

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: [
      { key: "Content-Security-Policy", value: csp },
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()" },
      { key: "X-Frame-Options", value: "DENY" },
    ] }];
  },
};

export default nextConfig;
