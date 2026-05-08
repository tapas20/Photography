"use client";

import { useState, useEffect, useRef } from "react";
import {
  Camera,
  Heart,
  Building2,
  Sparkles,
  ArrowRight,
  Check,
} from "lucide-react";
import Link from "next/link";
import Navigation from "@/sections/Navigation";
import Footer from "@/sections/Footer";

const services = [
  {
    id: 1,
    icon: Heart,
    name: "Wedding Photography",
    tagline: "Your love story, beautifully told",
    description:
      "From the nervous excitement of getting ready to the last dance of the evening, we capture every heartfelt moment with a blend of fine art and documentary style that feels both timeless and deeply personal.",
    image: "/indian-wedding-1.jpg",
    packages: [
      {
        name: "Elopement",
        price: "$2,500",
        features: [
          "Up to 4 hours",
          "1 photographer",
          "200+ edited images",
          "Online gallery",
          "Print-ready files",
        ],
      },
      {
        name: "Classic",
        price: "$4,500",
        popular: true,
        features: [
          "Full day (up to 10 hours)",
          "2 photographers",
          "500+ edited images",
          "Engagement session included",
          "Premium online gallery",
          "USB drive delivery",
        ],
      },
      {
        name: "Luxury",
        price: "$7,500",
        features: [
          "Full weekend coverage",
          "2 photographers + assistant",
          "800+ edited images",
          "Engagement session",
          "Fine art album included",
          "Canvas prints included",
          "Same-day preview images",
        ],
      },
    ],
  },
  {
    id: 2,
    icon: Camera,
    name: "Portrait Sessions",
    tagline: "Revealing the real you",
    description:
      "Whether it's a personal branding shoot, family portraits, or a creative headshot session, we create a relaxed environment where your authentic personality shines through every frame.",
    image: "/service-portrait.jpg",
    packages: [
      {
        name: "Mini",
        price: "$350",
        features: [
          "30-minute session",
          "1 location",
          "15 edited images",
          "Online gallery",
          "Wardrobe guidance",
        ],
      },
      {
        name: "Standard",
        price: "$650",
        popular: true,
        features: [
          "1-hour session",
          "2 locations",
          "30 edited images",
          "Outfit changes",
          "Professional retouching",
          "Print-ready files",
        ],
      },
      {
        name: "Premium",
        price: "$1,200",
        features: [
          "2-hour session",
          "Multiple locations",
          "50+ edited images",
          "Hair & makeup coordination",
          "Advanced retouching",
          "5 fine art prints",
        ],
      },
    ],
  },
  {
    id: 3,
    icon: Building2,
    name: "Commercial & Brand",
    tagline: "Elevate your visual identity",
    description:
      "From product photography to lifestyle brand imagery, we create compelling visual content that tells your brand's story and drives engagement across all platforms.",
    image: "/service-commercial.jpg",
    packages: [
      {
        name: "Starter",
        price: "$1,200",
        features: [
          "Half-day shoot",
          "15 edited images",
          "Basic retouching",
          "Commercial license",
          "2-week turnaround",
        ],
      },
      {
        name: "Business",
        price: "$2,800",
        popular: true,
        features: [
          "Full-day shoot",
          "40 edited images",
          "Advanced retouching",
          "Creative direction",
          "Location scouting",
          "1-week turnaround",
        ],
      },
      {
        name: "Enterprise",
        price: "Custom",
        features: [
          "Multi-day production",
          "Unlimited images",
          "Full post-production",
          "Art direction team",
          "Video add-on available",
          "Priority delivery",
        ],
      },
    ],
  },
  {
    id: 4,
    icon: Sparkles,
    name: "Editorial & Fashion",
    tagline: "Where art meets fashion",
    description:
      "High-end editorial and fashion photography for magazines, lookbooks, and creative campaigns. We bring bold artistic vision to every shoot, creating images that command attention.",
    image: "/service-fashion.jpg",
    packages: [
      {
        name: "Lookbook",
        price: "$1,800",
        features: [
          "Half-day studio shoot",
          "20 edited images",
          "Professional retouching",
          "Usage rights",
          "Mood board creation",
        ],
      },
      {
        name: "Campaign",
        price: "$4,000",
        popular: true,
        features: [
          "Full-day shoot",
          "40+ edited images",
          "Advanced retouching",
          "Creative art direction",
          "Styling consultation",
          "Multiple looks/setups",
        ],
      },
      {
        name: "Editorial",
        price: "Custom",
        features: [
          "Multi-day production",
          "Full creative team",
          "Unlimited images",
          "Publication-ready",
          "BTS content included",
          "Priority turnaround",
        ],
      },
    ],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description:
      "We start with a conversation to understand your vision, needs, and timeline. This is where the creative journey begins.",
  },
  {
    step: "02",
    title: "Planning",
    description:
      "From location scouting to mood boards, we carefully plan every detail to ensure a smooth and inspired shoot day.",
  },
  {
    step: "03",
    title: "The Shoot",
    description:
      "On the day, we bring our expertise, creativity, and positive energy to capture authentic, stunning images.",
  },
  {
    step: "04",
    title: "Delivery",
    description:
      "Each image is carefully edited and delivered through a beautiful online gallery, ready to print and share.",
  },
];

export default function ServicesPage() {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set()
  );
  const processRef = useRef<HTMLDivElement>(null);

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
      { threshold: 0.15 }
    );

    if (processRef.current) observer.observe(processRef.current);

    // Observe each service section
    services.forEach((s) => {
      const el = document.getElementById(`service-${s.id}`);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-dark overflow-x-hidden">
      <Navigation scrollY={scrollY} />

      {/* Page Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-dark relative">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p
            className={`text-xs uppercase tracking-[0.3em] text-gold mb-4 transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            What We Offer
          </p>
          <h1
            className={`font-serif text-5xl md:text-6xl lg:text-7xl text-cream mb-6 transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "0.1s" }}
          >
            Services & Pricing
          </h1>
          <div className="w-12 h-px bg-gold/40 mx-auto mb-6" />
          <p
            className={`text-cream/50 max-w-xl mx-auto text-lg transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            Tailored photography experiences designed to capture your most
            meaningful moments.
          </p>
        </div>
      </section>

      {/* Services */}
      {services.map((service, serviceIndex) => (
        <section
          key={service.id}
          id={`service-${service.id}`}
          className={`py-24 md:py-32 ${
            serviceIndex % 2 === 0 ? "bg-dark" : "bg-dark-light"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            {/* Service Header */}
            <div
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16 transition-all duration-1000 custom-expo ${
                visibleSections.has(`service-${service.id}`)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div
                className={
                  serviceIndex % 2 === 0 ? "order-1" : "order-1 lg:order-2"
                }
              >
                <div className="w-10 h-10 border border-gold/20 flex items-center justify-center mb-6">
                  <service.icon className="w-5 h-5 text-gold" />
                </div>
                <h2 className="font-serif text-3xl md:text-4xl text-cream mb-3">
                  {service.name}
                </h2>
                <p className="text-gold/80 text-sm uppercase tracking-[0.15em] mb-6">
                  {service.tagline}
                </p>
                <p className="text-cream/50 leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div
                className={`relative overflow-hidden ${
                  serviceIndex % 2 === 0 ? "order-2" : "order-2 lg:order-1"
                }`}
              >
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 border border-gold/10" />
              </div>
            </div>

            {/* Pricing Packages */}
            <div className="grid md:grid-cols-3 gap-5">
              {service.packages.map((pkg, pkgIndex) => (
                <div
                  key={pkg.name}
                  className={`relative bg-dark-card border transition-all duration-700 custom-expo ${
                    pkg.popular
                      ? "border-gold/30"
                      : "border-dark-border hover:border-gold/15"
                  } ${
                    visibleSections.has(`service-${service.id}`)
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${0.2 + pkgIndex * 0.1}s` }}
                >
                  {pkg.popular && (
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
                  )}

                  <div className="p-8">
                    {pkg.popular && (
                      <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-[10px] uppercase tracking-[0.2em] mb-4">
                        Most Popular
                      </span>
                    )}
                    <h3 className="font-serif text-xl text-cream mb-2">
                      {pkg.name}
                    </h3>
                    <div className="mb-6">
                      <span className="font-serif text-3xl text-gold">
                        {pkg.price}
                      </span>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-sm text-cream/50"
                        >
                          <Check className="w-4 h-4 text-gold/60 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className={`w-full flex items-center justify-center gap-2 py-3 text-xs uppercase tracking-[0.15em] font-medium transition-all duration-300 ${
                        pkg.popular
                          ? "bg-gold text-dark hover:bg-gold-light"
                          : "border border-gold/30 text-gold hover:bg-gold hover:text-dark"
                      }`}
                    >
                      Book Now
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Process Section */}
      <section id="process" ref={processRef} className="py-28 md:py-36 bg-dark">
        <div className="max-w-5xl mx-auto px-6">
          <div
            className={`text-center mb-20 transition-all duration-1000 custom-expo ${
              visibleSections.has("process")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
              How It Works
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-cream">
              Our Process
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={step.step}
                className={`text-center transition-all duration-700 custom-expo ${
                  visibleSections.has("process")
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <span className="font-serif text-4xl text-gold/20 block mb-4">
                  {step.step}
                </span>
                <h3 className="font-serif text-lg text-cream mb-3">
                  {step.title}
                </h3>
                <p className="text-cream/40 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
