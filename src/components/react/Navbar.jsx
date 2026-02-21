import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#100d0bcc]/95 backdrop-blur-xl py-4 shadow-[0_14px_42px_rgba(0,0,0,0.45)] border-b border-amber-200/10"
            : "bg-gradient-to-b from-black/70 to-transparent py-7"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">

          <a href="#inicio" className="group flex flex-col leading-none">
            <span className={`font-serif uppercase tracking-[0.36em] text-2xl md:text-3xl text-[#f5e9d8] transition-all duration-500 ${isScrolled ? "tracking-[0.28em]" : ""}`}>
              Bocuze
            </span>
            <span className="mt-1 text-[9px] uppercase tracking-[0.36em] text-amber-200/75 group-hover:text-amber-100 transition-colors">
              Bistró Café
            </span>
          </a>

          <div className="hidden md:flex items-center space-x-11">

            <a href="#experiencia" className="btn-link text-[11px] text-zinc-200/90 hover:text-amber-200">
              Experiencia
            </a>

            <a href="#menu" className="btn-link text-[11px] text-zinc-200/90 hover:text-amber-200">
              Menú
            </a>

            <a href="#reseñas" className="btn-link text-[11px] text-zinc-200/90 hover:text-amber-200">
              Reseñas
            </a>

            <a href="#ubicacion" className="btn-link text-[11px] text-zinc-200/90 hover:text-amber-200">
              Ubicación
            </a>

            <a href="#contacto" className="btn-premium ml-3">
              Reservar
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-zinc-100 transition-transform duration-300 border border-amber-200/25 p-2.5 rounded-full bg-black/35"
            aria-label="Abrir menú"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 bg-[#0a0908]/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-9 text-white text-sm uppercase tracking-[0.3em] md:hidden transition-all duration-300">
          <a href="#experiencia" onClick={() => setOpen(false)} className="btn-link text-zinc-200/85">
            Experiencia
          </a>

          <a href="#menu" onClick={() => setOpen(false)} className="btn-link text-zinc-200/85">
            Menú
          </a>

          <a href="#reseñas" onClick={() => setOpen(false)} className="btn-link text-zinc-200/85">
            Reseñas
          </a>

          <a href="#ubicacion" onClick={() => setOpen(false)} className="btn-link text-zinc-200/85">
            Ubicación
          </a>

          <a href="#contacto" onClick={() => setOpen(false)} className="btn-premium mt-3">
            Reservar
          </a>
        </div>
      )}
    </>
  );
}