"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "Sobre mí", href: "#about", id: "about" },
  { label: "Experiencia", href: "#experience", id: "experience" },
  { label: "Proyectos", href: "#projects", id: "projects" },
  { label: "Habilidades", href: "#skills", id: "skills" },
  { label: "Contacto", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 20);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0,
      }
    );

    navLinks.forEach((link) => {
      const section = document.getElementById(link.id);

      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur"
          : "border-b border-transparent bg-white/70 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="font-semibold text-slate-950">
          Fransheska Ruiz Bonilla
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm transition ${
                activeSection === link.id
                  ? "font-semibold text-[#0F4C5C]"
                  : "font-medium text-slate-600 hover:text-[#0F4C5C]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <button className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-[#0F4C5C] hover:text-[#0F4C5C]">
            ES
          </button>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
          aria-label="Abrir menú de navegación"
          className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-[#0F4C5C] hover:text-[#0F4C5C] md:hidden"
        >
          {isMenuOpen ? "Cerrar" : "Menú"}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-4 md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-sm transition ${
                  activeSection === link.id
                    ? "font-semibold text-[#0F4C5C]"
                    : "font-medium text-slate-600"
                }`}
              >
                {link.label}
              </a>
            ))}

            <button className="w-fit rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700">
              ES
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}