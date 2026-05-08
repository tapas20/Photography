"use client";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface FeaturedWork {
  id: number;
  title: string;
  category: string;
  year: string;
  image: string;
}

const featuredWorks: FeaturedWork[] = [
  {
    id: 1,
    title: "Eternal Bond",
    category: "Wedding",
    year: "2025",
    image: "/indian-wedding-1.jpg",
  },
  {
    id: 2,
    title: "Timeless Beauty",
    category: "Portrait",
    year: "2025",
    image: "/dest-portrait.jpg",
  },
  {
    id: 3,
    title: "Haute Couture",
    category: "Fashion",
    year: "2024",
    image: "/dest-fashion.jpg",
  },
  {
    id: 4,
    title: "Editorial Story",
    category: "Editorial",
    year: "2024",
    image: "/dest-editorial.jpg",
  },
  {
    id: 5,
    title: "Mountain Light",
    category: "Landscape",
    year: "2024",
    image: "/dest-landscape.jpg",
  },
  {
    id: 6,
    title: "Brand Vision",
    category: "Commercial",
    year: "2025",
    image: "/dest-commercial.jpg",
  },
];

const Destinations = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

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

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 420;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(checkScrollButtons, 300);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollButtons);
      checkScrollButtons();
      return () => container.removeEventListener("scroll", checkScrollButtons);
    }
  }, []);

  return (
    <section
      id="featured"
      ref={sectionRef}
      className="py-28 md:py-36 bg-dark-light relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 0.5px, transparent 0)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div
          className={`flex flex-col md:flex-row md:items-end md:justify-between mb-14 transition-all duration-1000 custom-expo ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
              Featured Stories
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream">
              Recent Projects
            </h2>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-3 mt-6 md:mt-0">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`w-12 h-12 border flex items-center justify-center transition-all duration-300 ${
                canScrollLeft
                  ? "border-gold/30 text-gold hover:bg-gold hover:text-dark"
                  : "border-dark-border text-cream/20 cursor-not-allowed"
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`w-12 h-12 border flex items-center justify-center transition-all duration-300 ${
                canScrollRight
                  ? "border-gold/30 text-gold hover:bg-gold hover:text-dark"
                  : "border-dark-border text-cream/20 cursor-not-allowed"
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scrolling Gallery */}
      <div
        ref={scrollContainerRef}
        className="flex gap-5 overflow-x-auto pb-4 px-6 horizontal-scroll"
      >
        {/* Spacer for left alignment */}
        <div className="flex-shrink-0 w-0 md:w-[calc((100vw-1280px)/2)]" />

        {featuredWorks.map((work, index) => (
          <div
            key={work.id}
            className={`flex-shrink-0 w-[340px] md:w-[400px] transition-all duration-700 custom-expo ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <Link href="/portfolio" className="block group">
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden mb-5">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/30 transition-colors duration-500" />

                {/* View button on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="w-14 h-14 border border-cream/50 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <ArrowUpRight className="w-5 h-5 text-cream" />
                  </div>
                </div>

                {/* Category tag */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 bg-dark/60 backdrop-blur-sm text-[10px] uppercase tracking-[0.2em] text-cream/80 border border-cream/10">
                    {work.category}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-lg text-cream group-hover:text-gold transition-colors duration-300">
                    {work.title}
                  </h3>
                  <p className="text-xs text-cream/40 mt-1">{work.year}</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-cream/30 group-hover:text-gold transition-colors duration-300" />
              </div>
            </Link>
          </div>
        ))}

        {/* Spacer for right */}
        <div className="flex-shrink-0 w-6" />
      </div>
    </section>
  );
};

export default Destinations;
