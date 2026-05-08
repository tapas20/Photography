"use client";

import React, { useState, useEffect, useRef } from "react";
import { Camera, Award, Heart, Eye, ArrowRight } from "lucide-react";
import Link from "next/link";
import Navigation from "@/sections/Navigation";
import Footer from "@/sections/Footer";

const milestones = [
  {
    year: "2017",
    title: "The Beginning",
    description:
      "Started as a passion project, capturing the beauty of everyday life with a secondhand camera.",
  },
  {
    year: "2019",
    title: "Studio Founded",
    description:
      "Officially launched Lumiere Photography Studio in Portland, Oregon with a focus on wedding and portrait work.",
  },
  {
    year: "2021",
    title: "Award Recognition",
    description:
      "Received the International Photography Awards gold medal for wedding photography excellence.",
  },
  {
    year: "2023",
    title: "Editorial Expansion",
    description:
      "Expanded into commercial and editorial photography, partnering with major brands and publications.",
  },
  {
    year: "2025",
    title: "Global Reach",
    description:
      "Now serving clients worldwide with a team of creative professionals and a portfolio spanning 15+ countries.",
  },
];

const values = [
  {
    icon: Eye,
    title: "Artistic Vision",
    description:
      "Every shot is composed with intentional artistry, blending technical excellence with creative intuition.",
  },
  {
    icon: Heart,
    title: "Authentic Connection",
    description:
      "We build genuine relationships with our clients, creating a comfortable space for natural, unscripted moments.",
  },
  {
    icon: Camera,
    title: "Technical Mastery",
    description:
      "Years of experience and continuous learning ensure that every technical aspect of our work is flawless.",
  },
  {
    icon: Award,
    title: "Timeless Quality",
    description:
      "We create images that transcend trends, delivering photographs you'll treasure for generations.",
  },
];

export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set()
  );

  const storyRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.2 }
    );

    [storyRef, valuesRef, timelineRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-dark overflow-x-hidden">
      <Navigation scrollY={scrollY} />

      {/* Page Header with large image */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img
          src="/about-photographer.jpg"
          alt="Behind the scenes at Lumiere studio"
          className={`w-full h-full object-cover transition-all duration-[1.5s] ${
            isLoaded ? "scale-100" : "scale-110"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-dark/30" />

        <div className="absolute inset-0 flex items-end pb-16 md:pb-24">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <p
              className={`text-xs uppercase tracking-[0.3em] text-gold mb-4 transition-all duration-1000 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              About Lumiere
            </p>
            <h1
              className={`font-serif text-5xl md:text-6xl lg:text-7xl text-cream leading-tight transition-all duration-1000 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "0.1s" }}
            >
              The Art of
              <br />
              <span className="italic text-gold">Seeing</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section
        id="story"
        ref={storyRef}
        className="py-28 md:py-36 bg-dark-light"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div
              className={`transition-all duration-1000 custom-expo ${
                visibleSections.has("story")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="font-serif text-3xl md:text-4xl text-cream mb-8 leading-tight">
                A passion for capturing life&apos;s fleeting beauty
              </h2>
              <div className="w-12 h-px bg-gold/40 mb-8" />
            </div>

            <div
              className={`space-y-6 transition-all duration-1000 custom-expo ${
                visibleSections.has("story")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "0.2s" }}
            >
              <p className="text-cream/60 text-lg leading-relaxed">
                Lumiere was born from a simple belief: that every person, every
                moment, and every story deserves to be captured with care,
                creativity, and authenticity. What started as a solo passion
                project has grown into a full-service photography studio.
              </p>
              <p className="text-cream/50 leading-relaxed">
                We approach each project as a unique collaboration. Whether
                it&apos;s an intimate wedding, a bold fashion editorial, or a
                brand campaign, our goal remains the same &mdash; to create
                images that resonate, inspire, and endure. We don&apos;t just
                take pictures; we craft visual narratives that speak to the heart
                of who you are.
              </p>
              <p className="text-cream/50 leading-relaxed">
                Our name, Lumiere, means &ldquo;light&rdquo; in French &mdash;
                and light is at the core of everything we do. We chase it, shape
                it, and use it to reveal the extraordinary in the ordinary.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" ref={valuesRef} className="py-28 md:py-36 bg-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className={`text-center mb-20 transition-all duration-1000 custom-expo ${
              visibleSections.has("values")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
              Our Philosophy
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-cream mb-6">
              What Guides Us
            </h2>
            <div className="w-12 h-px bg-gold/40 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`bg-dark-card border border-dark-border p-8 hover:border-gold/20 transition-all duration-500 custom-expo ${
                  visibleSections.has("values")
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 border border-gold/20 flex items-center justify-center mb-6">
                  <value.icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-serif text-lg text-cream mb-3">
                  {value.title}
                </h3>
                <p className="text-cream/40 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section
        id="timeline"
        ref={timelineRef}
        className="py-28 md:py-36 bg-dark-light"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div
            className={`text-center mb-20 transition-all duration-1000 custom-expo ${
              visibleSections.has("timeline")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
              Our Journey
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-cream">
              Milestones
            </h2>
          </div>

          <div className="space-y-0">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`flex gap-8 md:gap-12 py-10 border-t border-dark-border group transition-all duration-700 custom-expo ${
                  visibleSections.has("timeline")
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-8"
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0">
                  <span className="font-serif text-2xl md:text-3xl text-gold/60 group-hover:text-gold transition-colors duration-300">
                    {milestone.year}
                  </span>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-cream mb-2 group-hover:text-gold transition-colors duration-300">
                    {milestone.title}
                  </h3>
                  <p className="text-cream/40 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 md:py-36 bg-dark text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-cream mb-6">
            Let&apos;s Create Something
            <br />
            <span className="italic text-gold">Beautiful</span> Together
          </h2>
          <p className="text-cream/50 mb-10 max-w-lg mx-auto">
            Ready to start your project? We&apos;d love to hear from you and
            discuss how we can bring your vision to life.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-4 bg-gold text-dark text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 hover:bg-gold-light hover:shadow-gold"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
