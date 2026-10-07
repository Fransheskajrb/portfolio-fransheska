import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fransheska Ruiz · Software, Data, Automation",
  description: "Desarrollo de software, datos y automatización. Portfolio de Fransheska Ruiz.",
  icons: { icon: "/assets/favicon-fr.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body><a className="skip-link" href="#main-content">Saltar al contenido</a>{children}</body></html>;
}
