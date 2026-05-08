"use client";
import { useEffect, useRef, useState } from "react";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah & James",
    role: "Wedding Clients",
    avatar: "/avatar-female1.jpg",
    content:
      "The way Lumiere captured our wedding day was nothing short of magical. Every photo tells a story, every moment preserved with such artistry. We couldn't have asked for anything more beautiful.",
    rating: 5,
  },
  {
    id: 2,
    name: "David Chen",
    role: "Brand Founder",
    avatar: "/avatar-male1.jpg",
    content:
      "Working with Lumiere transformed our brand's visual identity completely. The attention to detail and creative vision brought our products to life in ways we never imagined possible.",
    rating: 5,
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Fashion Designer",
    avatar: "/avatar-female2.jpg",
    content:
      "I've worked with many photographers, but Lumiere brings a unique blend of technical mastery and artistic intuition. Our lookbook exceeded every expectation and drove incredible engagement.",
    rating: 5,
  },
];

const Testimonials = () => {
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
      ref={sectionRef}
      className="py-28 md:py-36 bg-dark relative overflow-hidden"
    >
      {/* Subtle radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/3 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 custom-expo ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
            Client Stories
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream mb-6">
            Kind Words
          </h2>
          <div className="w-12 h-px bg-gold/40 mx-auto" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`relative transition-all duration-700 custom-expo ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="bg-dark-card border border-dark-border p-8 md:p-10 h-full hover:border-gold/15 transition-colors duration-500">
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-gold/30" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-gold fill-gold/80"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-cream/60 leading-relaxed mb-8 text-[15px]">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-dark-border">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover ring-1 ring-gold/20"
                  />
                  <div>
                    <h4 className="font-medium text-cream text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-cream/40 mt-0.5">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div
          className={`flex flex-wrap items-center justify-center gap-12 mt-20 pt-16 border-t border-dark-border transition-all duration-1000 custom-expo ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "0.6s" }}
        >
          {[
            { value: "4.9", label: "Average Rating" },
            { value: "350+", label: "Happy Clients" },
            { value: "100%", label: "Would Recommend" },
          ].map((stat, i) => (
            <div key={stat.label} className="text-center flex items-center gap-12">
              <div>
                <div className="font-serif text-3xl text-cream">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-[0.15em] text-cream/40 mt-1">
                  {stat.label}
                </div>
              </div>
              {i < 2 && (
                <div className="w-px h-10 bg-dark-border hidden sm:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
