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
            ? "bg-black/80 backdrop-blur-xl py-5 shadow-lg shadow-black/40"
            : "bg-gradient-to-b from-black/70 to-transparent py-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-10 flex items-center justify-between">

          {/* Logo */}
          <div className="text-3xl md:text-4xl font-serif text-white tracking-[0.4em] uppercase">
            Bocuze
            <span className="text-amber-600 ml-1">.</span>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-14">

            <a href="#experiencia" className="text-sm uppercase tracking-[0.3em] text-zinc-300 hover:text-amber-500 transition-colors">
              Experiencia
            </a>

            <a href="#menu" className="text-sm uppercase tracking-[0.3em] text-zinc-300 hover:text-amber-500 transition-colors">
              Menú
            </a>

            <a href="#reseñas" className="text-sm uppercase tracking-[0.3em] text-zinc-300 hover:text-amber-500 transition-colors">
              Reseñas
            </a>

            <a href="#ubicacion" className="text-sm uppercase tracking-[0.3em] text-zinc-300 hover:text-amber-500 transition-colors">
              Ubicación
            </a>

            {/* CTA principal */}
            <a
              href="#contacto"
              className={`
                ml-8 px-8 py-3 text-xs uppercase tracking-widest
                transition-all duration-300 ease-out
                ${
                  isScrolled
                    ? "bg-amber-600 text-white shadow-lg shadow-amber-600/30 hover:bg-amber-500 hover:scale-105"
                    : "border border-amber-500 text-amber-400 hover:bg-amber-600 hover:text-white"
                }
              `}
            >
              Reservar
            </a>

          </div>

          {/* Mobile button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white transition-transform duration-300"
          >
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 bg-black/95 z-40 flex flex-col items-center justify-center space-y-10 text-white text-lg uppercase tracking-widest md:hidden transition-all duration-300">

          <a href="#experiencia" onClick={() => setOpen(false)} className="hover:text-amber-500 transition">
            Experiencia
          </a>

          <a href="#menu" onClick={() => setOpen(false)} className="hover:text-amber-500 transition">
            Menú
          </a>

          <a href="#reseñas" onClick={() => setOpen(false)} className="hover:text-amber-500 transition">
            Reseñas
          </a>

          <a href="#ubicacion" onClick={() => setOpen(false)} className="hover:text-amber-500 transition">
            Ubicación
          </a>

          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-6 px-8 py-3 bg-amber-600 text-white text-sm hover:bg-amber-500 transition"
          >
            Reservar
          </a>
        </div>
      )}
    </>
  );
}