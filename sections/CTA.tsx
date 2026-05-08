"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const CTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-36 md:py-44 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/cta-dramatic.jpg"
          alt="Dramatic photography scene"
          className="w-full h-full object-cover"
        />
        {/* Dark cinematic overlay */}
        <div className="absolute inset-0 bg-dark/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div
          className={`transition-all duration-1000 custom-expo ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {/* Decorative line */}
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-10" />

          <p className="text-xs uppercase tracking-[0.3em] text-gold/80 mb-8">
            Let&apos;s Create Together
          </p>

          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream mb-8 leading-[1.1]">
            Ready to Tell
            <br />
            Your <span className="italic text-gold">Story</span>?
          </h2>

          <p className="text-lg text-cream/50 mb-12 max-w-xl mx-auto leading-relaxed">
            Every great image begins with a conversation. Let&apos;s discuss
            your vision and create something extraordinary together.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-12 py-4 bg-gold text-dark text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 hover:bg-gold-light hover:shadow-gold"
            >
              Book a Session
            </Link>
            <Link
              href="/portfolio"
              className="px-12 py-4 border border-cream/20 text-cream/70 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 hover:border-gold/50 hover:text-gold"
            >
              View Portfolio
            </Link>
          </div>

          {/* Decorative line */}
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent mx-auto mt-16" />
        </div>
      </div>
    </section>
  );
};

export default CTA;
