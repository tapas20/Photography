"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

interface NavigationProps {
  scrollY: number;
}

const Navigation = ({ scrollY }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isScrolled = scrollY > 50;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 custom-expo ${
        isScrolled ? "nav-glass py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group">
          <span
            className={`font-serif text-2xl tracking-widest-custom transition-colors duration-300 ${
              isScrolled ? "text-cream" : "text-white"
            }`}
          >
            LUMIERE
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-xs font-medium uppercase tracking-[0.2em] transition-all duration-300 hover:text-gold relative group ${
                isScrolled ? "text-cream/70" : "text-white/70"
              }`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Book Now + Mobile Menu */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden md:inline-flex px-6 py-2.5 border border-gold/50 text-gold text-xs uppercase tracking-[0.15em] font-medium hover:bg-gold hover:text-dark transition-all duration-300"
          >
            Book a Session
          </Link>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 transition-colors duration-300 ${
              isScrolled ? "text-cream" : "text-white"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-dark/98 backdrop-blur-xl transition-all duration-500 custom-expo ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ top: 0 }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-2xl font-serif text-cream/80 hover:text-gold transition-all duration-500 ${
                isMenuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 0.08}s` }}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-4 px-8 py-3 border border-gold/50 text-gold text-sm uppercase tracking-[0.15em] font-medium hover:bg-gold hover:text-dark transition-all duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Book a Session
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
