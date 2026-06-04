import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 flex justify-between items-center px-6 md:px-12 py-4 md:py-6 border-b border-ink/10 ${
        scrolled ? "bg-[var(--color-bg-primary)]/90 backdrop-blur-md shadow-sm" : "bg-[var(--color-bg-primary)]"
      }`}
    >
      <div className="flex items-center gap-2 cursor-pointer w-48 md:w-66" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <Logo className="w-full h-auto text-ink" />
      </div>
      <div className="flex items-center gap-4 md:gap-12">
        <div className="hidden md:flex gap-12 text-[11px] uppercase tracking-widest font-bold text-ink">
          <a href="#nosotros" className="hover:text-[var(--color-accent)] transition-colors">Nosotros</a>
          <a href="#impacto" className="hover:text-[var(--color-accent)] transition-colors">Impacto Dual</a>
          <a href="#servicios" className="hover:text-[var(--color-accent)] transition-colors">Servicios</a>
        </div>
        <a href="https://wa.me/56974897392" target="_blank" rel="noopener noreferrer" className="text-[9px] md:text-[11px] tracking-widest uppercase font-bold border border-ink text-ink px-3 py-2 md:px-6 md:py-3 hover:bg-[var(--color-brand)] hover:border-[var(--color-brand)] hover:text-white transition-colors flex items-center gap-2">
          Contacto
        </a>
        <button className="md:hidden ml-2">
          <Menu className="w-5 h-5" />
        </button>
      </div>
    </nav>
  );
}
