import { pageMetadata, siteTitle } from "@/lib/siteMetadata";
import { hasCvPdf } from "@/lib/cvAvailability";
import ContactChannels from "@/components/campo/ContactChannels";
import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import SelectedWork from "@/sections/SelectedWork";
import Process from "@/sections/Process";
import CatchGame from "@/components/campo/CatchGame";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer";

export const metadata = pageMetadata(siteTitle, "Desarrollo de software, datos y automatización. Portfolio de Fransheska Ruiz.", "/");

export default function Home() {
  return <><Navbar /><main id="main-content" tabIndex={-1}><div className="trajectory" aria-hidden="true" /><Hero /><SelectedWork /><Process /><CatchGame /><About /><Contact channels={<ContactChannels cvAvailable={hasCvPdf()} />} /></main><Footer /></>;
}
