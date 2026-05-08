"use client";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        if (rect.bottom > 0) {
          setScrollY(window.scrollY);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.3;
  const opacityFade = Math.max(0, 1 - scrollY / 600);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden grain-overlay"
    >
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 w-full h-[120%] hero-parallax"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <img
          src="/hero-studio.jpg"
          alt="Professional photography by Lumiere Studio"
          className={`w-full h-full object-cover transition-all duration-[1.5s] ${
            isLoaded ? "scale-100 blur-0" : "scale-110 blur-sm"
          }`}
        />
        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/30 to-dark/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/40 via-transparent to-dark/40" />
      </div>

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center"
        style={{ opacity: opacityFade }}
      >
        <div className="max-w-5xl mx-auto">
          {/* Decorative line */}
          <div
            className={`mx-auto mb-8 transition-all duration-[1.5s] ${
              isLoaded ? "opacity-100 w-16" : "opacity-0 w-0"
            }`}
            style={{ transitionDelay: "0.3s" }}
          >
            <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
          </div>

          {/* Subtitle */}
          <p
            className={`text-xs md:text-sm uppercase tracking-[0.3em] text-gold/80 mb-6 transition-all duration-1000 custom-expo ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "0.5s" }}
          >
            Photography Studio
          </p>

          {/* Main Headline */}
          <h1
            className={`font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white mb-8 leading-[0.95] tracking-tight transition-all duration-[1.2s] custom-expo ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "0.7s" }}
          >
            Capturing
            <br />
            <span className="text-gradient-gold italic">Timeless</span>
            <br />
            Moments
          </h1>

          {/* Description */}
          <p
            className={`text-base md:text-lg text-white/60 max-w-xl mx-auto mb-12 leading-relaxed font-light transition-all duration-1000 custom-expo ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "0.9s" }}
          >
            We tell your story through the art of light and shadow.
            <br className="hidden sm:block" />
            Every frame, a masterpiece waiting to be revealed.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 custom-expo ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "1.1s" }}
          >
            <Link
              href="/portfolio"
              className="group px-10 py-4 bg-gold text-dark text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 hover:bg-gold-light hover:shadow-gold"
            >
              View Portfolio
            </Link>
            <Link
              href="/contact"
              className="px-10 py-4 border border-white/20 text-white/80 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 hover:border-gold/50 hover:text-gold"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "1.5s" }}
        >
          <a
            href="#portfolio"
            className="flex flex-col items-center text-white/40 hover:text-gold/60 transition-colors duration-300"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] mb-3">
              Scroll
            </span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>

      {/* Side text decorations */}
      <div className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 z-10">
        <p
          className="text-[10px] uppercase tracking-[0.3em] text-white/20 -rotate-90 whitespace-nowrap"
          style={{ transformOrigin: "center" }}
        >
          Est. 2019 &mdash; Photography Studio
        </p>
      </div>
    </section>
  );
};

export default Hero;
