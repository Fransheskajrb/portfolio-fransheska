import Hero from "@/sections/Hero";
import About from "@/sections/About";
import WhatIDo from "@/sections/WhatIDo";
import Navbar from "@/components/Navbar";
import Experience from "@/sections/Experience";
import Skills from "@/sections/Skills";
import Education from "@/sections/Education";
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/BackToTopButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <Hero />
      <About />
      <WhatIDo />
      <Experience />
      <Skills />
      <Education />
      <Contact />
      <Footer />
      <BackToTopButton />
    </main>
  );
}