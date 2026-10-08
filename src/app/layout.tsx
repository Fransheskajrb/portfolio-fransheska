import type { Metadata } from "next";
import "./globals.css";
import { siteUrl, siteTitle, pageMetadata } from "@/lib/siteMetadata";

export const metadata: Metadata = {
  ...pageMetadata(siteTitle, "Desarrollo de software, datos y automatización. Portfolio de Fransheska Ruiz.", "/"),
  metadataBase: new URL(siteUrl),
  title: { default: siteTitle, template: "%s | Fransheska Ruiz" },
  applicationName: "Portfolio Fransheska Ruiz",
  authors: [{ name: "Fransheska Ruiz Bonilla" }],
  robots: { index: true, follow: true },
  description: "Desarrollo de software, datos y automatización. Portfolio de Fransheska Ruiz.",
  icons: { icon: "/assets/favicon-fr.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body><link rel="preload" as="image" fetchPriority="high" href="/assets/graphite-depth-v2.webp" type="image/webp" media="(width > 900px)" /><link rel="preload" as="image" fetchPriority="high" href="/assets/graphite-depth-mobile.webp" type="image/webp" media="(width <= 900px)" /><a className="skip-link" href="#main-content">Saltar al contenido</a>{children}</body></html>;
}
