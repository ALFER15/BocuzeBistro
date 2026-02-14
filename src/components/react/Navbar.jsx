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
            ? "bg-black/80 backdrop-blur-md py-6"
            : "bg-transparent py-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-10 flex items-center justify-between">

          {/* Logo grande */}
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

            <a href="#eventos" className="text-sm uppercase tracking-[0.3em] text-zinc-300 hover:text-amber-500 transition-colors">
              Eventos
            </a>

            <a href="#ubicacion" className="text-sm uppercase tracking-[0.3em] text-zinc-300 hover:text-amber-500 transition-colors">
              Ubicación
            </a>

            {/* Botón grande */}
            <button className="bg-amber-700 hover:bg-amber-600 text-white px-8 py-3 uppercase tracking-[0.25em] text-xs font-bold transition-all duration-300 hover:scale-105 shadow-lg">
              Reservar
            </button>

          </div>

          {/* Mobile */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
          >
            {open ? <X size={32} /> : <Menu size={32} />}
          </button>

        </div>
      </nav>
    </>
  );
}
