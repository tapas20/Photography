"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface PortfolioItem {
  title: string;
  category: string;
  image: string;
  span: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    title: "Golden Hour Portrait",
    category: "Portrait",
    image: "/portfolio-portrait1.jpg",
    span: "col-span-1 row-span-2",
  },
  {
    title: "Urban Architecture",
    category: "Editorial",
    image: "/portfolio-urban.jpg",
    span: "col-span-1 row-span-1",
  },
  {
    title: "Wedding Day",
    category: "Wedding",
    image: "/indian-wedding-3.jpg",
    span: "col-span-1 row-span-1",
  },
  {
    title: "Nature's Canvas",
    category: "Landscape",
    image: "/portfolio-nature.jpg",
    span: "col-span-1 row-span-2",
  },
  {
    title: "Fashion Editorial",
    category: "Fashion",
    image: "/portfolio-fashion1.jpg",
    span: "col-span-1 row-span-1",
  },
  {
    title: "Intimate Moments",
    category: "Lifestyle",
    image: "/portfolio-lifestyle.jpg",
    span: "col-span-1 row-span-1",
  },
];

const Categories = () => {
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
      id="portfolio"
      ref={sectionRef}
      className="py-28 md:py-36 bg-dark relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div
          className={`flex flex-col md:flex-row md:items-end md:justify-between mb-16 transition-all duration-1000 custom-expo ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
              Selected Work
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream leading-tight">
              Portfolio
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-gold text-sm hover:gap-3 transition-all duration-300 group"
          >
            View All Work
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 auto-rows-[280px]">
          {portfolioItems.map((item, index) => (
            <Link
              key={item.title}
              href="/portfolio"
              className={`group relative overflow-hidden cursor-pointer ${item.span} transition-all duration-700 custom-expo ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content on hover */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-2">
                  {item.category}
                </p>
                <h3 className="font-serif text-xl text-cream">{item.title}</h3>
              </div>

              {/* Corner accent */}
              <div className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <ArrowUpRight className="w-5 h-5 text-gold" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
