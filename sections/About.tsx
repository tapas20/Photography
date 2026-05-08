"use client";
import { useEffect, useRef, useState } from "react";
import { Camera, Award, Heart, Eye } from "lucide-react";
import Link from "next/link";

const stats = [
  { icon: Camera, value: "500+", label: "Projects Completed" },
  { icon: Award, value: "12", label: "Awards Won" },
  { icon: Heart, value: "350+", label: "Happy Clients" },
  { icon: Eye, value: "8+", label: "Years Experience" },
];

const About = () => {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-28 md:py-36 bg-dark-light relative overflow-hidden"
    >
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/3 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Side */}
          <div
            className={`relative transition-all duration-1000 custom-expo ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative overflow-hidden">
                <img
                  src="/about-photographer.jpg"
                  alt="Photographer at work"
                  className="w-full aspect-[3/4] object-cover"
                />
                {/* Gold border accent */}
                <div className="absolute inset-0 border border-gold/10" />
              </div>

              {/* Floating experience badge */}
              <div className="absolute -bottom-8 -right-4 md:-right-8 bg-dark-card border border-dark-border px-8 py-6 shadow-card">
                <div className="text-center">
                  <span className="text-4xl font-serif text-gold block">
                    8+
                  </span>
                  <span className="text-xs uppercase tracking-[0.2em] text-cream/60 mt-1 block">
                    Years of
                  </span>
                  <span className="text-xs uppercase tracking-[0.2em] text-cream/60">
                    Excellence
                  </span>
                </div>
              </div>

              {/* Decorative corner lines */}
              <div className="absolute -top-3 -left-3 w-16 h-16 border-t border-l border-gold/20" />
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b border-r border-gold/20 hidden md:block" />
            </div>
          </div>

          {/* Content Side */}
          <div
            className={`transition-all duration-1000 custom-expo ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
              About the Artist
            </p>

            <h2 className="font-serif text-4xl md:text-5xl text-cream mb-8 leading-tight">
              Where Vision
              <br />
              Meets <span className="italic text-gold">Artistry</span>
            </h2>

            <div className="w-12 h-px bg-gold/40 mb-8" />

            <p className="text-cream/60 text-lg leading-relaxed mb-6">
              With over eight years behind the lens, I&apos;ve dedicated my
              craft to capturing the raw, unscripted beauty of life. My approach
              blends fine art sensibility with documentary storytelling, creating
              images that feel both timeless and deeply personal.
            </p>

            <p className="text-cream/50 leading-relaxed mb-10">
              From intimate weddings in the countryside to high-fashion
              editorials in the city, every project is an opportunity to create
              something extraordinary. I believe the best photographs happen when
              people feel comfortable, authentic, and free to be themselves.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-3 px-8 py-4 border border-gold/50 text-gold text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 hover:bg-gold hover:text-dark"
            >
              Read Full Story
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Stats Row */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-16 border-t border-dark-border transition-all duration-1000 custom-expo ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
          style={{ transitionDelay: "0.4s" }}
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center group"
              style={{ transitionDelay: `${0.5 + index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 border border-dark-border mb-4 group-hover:border-gold/30 transition-colors duration-300">
                <stat.icon className="w-5 h-5 text-gold/70 group-hover:text-gold transition-colors" />
              </div>
              <div className="font-serif text-3xl md:text-4xl text-cream mb-1">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-[0.15em] text-cream/40">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
