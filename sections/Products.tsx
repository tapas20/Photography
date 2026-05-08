"use client";
import { useEffect, useRef, useState } from "react";
import { Camera, Heart, Building2, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

interface Service {
  id: number;
  icon: React.ComponentType<{ className?: string }>;
  name: string;
  description: string;
  startingPrice: string;
  features: string[];
  image: string;
}

const services: Service[] = [
  {
    id: 1,
    icon: Heart,
    name: "Wedding Photography",
    description:
      "Capturing every heartfelt moment of your special day with an artistic, documentary approach that tells your unique love story.",
    startingPrice: "From $2,500",
    features: [
      "Full day coverage",
      "Second photographer",
      "Online gallery",
      "500+ edited images",
    ],
    image: "/indian-wedding-2.jpg",
  },
  {
    id: 2,
    icon: Camera,
    name: "Portrait Sessions",
    description:
      "Whether it's a personal branding shoot or a family portrait, we create images that reveal the real you.",
    startingPrice: "From $450",
    features: [
      "1-2 hour session",
      "Wardrobe guidance",
      "Retouched images",
      "Print-ready files",
    ],
    image: "/service-portrait.jpg",
  },
  {
    id: 3,
    icon: Building2,
    name: "Commercial & Brand",
    description:
      "Elevate your brand with compelling visual content. From product shots to lifestyle imagery that drives engagement.",
    startingPrice: "From $1,200",
    features: [
      "Creative direction",
      "Location scouting",
      "Commercial license",
      "Quick turnaround",
    ],
    image: "/service-commercial.jpg",
  },
  {
    id: 4,
    icon: Sparkles,
    name: "Editorial & Fashion",
    description:
      "High-end editorial and fashion photography for magazines, lookbooks, and creative campaigns that make a statement.",
    startingPrice: "From $1,800",
    features: [
      "Art direction",
      "Studio or location",
      "Advanced retouching",
      "Usage rights included",
    ],
    image: "/service-fashion.jpg",
  },
];

const Products = () => {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-28 md:py-36 bg-dark relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 custom-expo ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
            What We Offer
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream mb-6">
            Our Services
          </h2>
          <div className="w-12 h-px bg-gold/40 mx-auto mb-6" />
          <p className="text-cream/50 max-w-2xl mx-auto text-lg">
            Tailored photography experiences designed to capture your most
            meaningful moments with artistry and intention.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group transition-all duration-700 custom-expo ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 0.12}s` }}
            >
              <div className="relative bg-dark-card border border-dark-border overflow-hidden hover:border-gold/20 transition-all duration-500 h-full">
                {/* Image Header */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-dark-card/40 to-transparent" />

                  {/* Price badge */}
                  <div className="absolute bottom-4 left-6 bg-dark/80 backdrop-blur-sm px-4 py-2 border border-gold/20">
                    <span className="text-gold text-sm font-medium">
                      {service.startingPrice}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Icon + Title */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 border border-gold/20 flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-gold" />
                    </div>
                    <h3 className="font-serif text-xl text-cream group-hover:text-gold transition-colors duration-300">
                      {service.name}
                    </h3>
                  </div>

                  <p className="text-cream/50 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm text-cream/40"
                      >
                        <div className="w-1 h-1 bg-gold/60 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-gold text-xs uppercase tracking-[0.15em] font-medium group/btn hover:gap-3 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
