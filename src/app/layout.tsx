import type { Metadata } from "next";
import "./globals.css";
import { siteUrl, siteTitle } from "@/lib/siteMetadata";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: siteTitle, template: "%s | Fransheska Ruiz" },
  applicationName: "Portfolio Fransheska Ruiz",
  authors: [{ name: "Fransheska Ruiz Bonilla" }],
  robots: { index: true, follow: true },
  description: "Desarrollo de software, datos y automatización. Portfolio de Fransheska Ruiz.",
  icons: { icon: "/assets/favicon-fr.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body><a className="skip-link" href="#main-content">Saltar al contenido</a>{children}</body></html>;
}
