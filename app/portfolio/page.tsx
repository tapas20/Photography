"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import Navigation from "@/sections/Navigation";
import Footer from "@/sections/Footer";

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  aspect: string;
}

const categories = [
  "All",
  "Wedding",
  "Portrait",
  "Editorial",
  "Landscape",
  "Fashion",
  "Commercial",
];

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Golden Hour Portrait",
    category: "Portrait",
    image: "/portfolio-portrait1.jpg",
    aspect: "aspect-[3/4]",
  },
  {
    id: 2,
    title: "Urban Architecture",
    category: "Editorial",
    image: "/portfolio-urban.jpg",
    aspect: "aspect-square",
  },
  {
    id: 3,
    title: "Sacred Vows",
    category: "Wedding",
    image: "/indian-wedding-4.jpg",
    aspect: "aspect-[4/5]",
  },
  {
    id: 4,
    title: "Nature's Canvas",
    category: "Landscape",
    image: "/portfolio-nature.jpg",
    aspect: "aspect-[3/4]",
  },
  {
    id: 5,
    title: "Fashion Forward",
    category: "Fashion",
    image: "/portfolio-fashion1.jpg",
    aspect: "aspect-square",
  },
  {
    id: 6,
    title: "Brand Vision",
    category: "Commercial",
    image: "/dest-commercial.jpg",
    aspect: "aspect-[4/5]",
  },
  {
    id: 7,
    title: "Intimate Moments",
    category: "Wedding",
    image: "/indian-wedding-5.jpg",
    aspect: "aspect-[4/5]",
  },
  {
    id: 8,
    title: "Wild Elegance",
    category: "Fashion",
    image: "/dest-fashion.jpg",
    aspect: "aspect-[3/4]",
  },
  {
    id: 9,
    title: "Timeless Beauty",
    category: "Portrait",
    image: "/dest-portrait.jpg",
    aspect: "aspect-square",
  },
  {
    id: 10,
    title: "Mountain Light",
    category: "Landscape",
    image: "/dest-landscape.jpg",
    aspect: "aspect-[3/4]",
  },
  {
    id: 11,
    title: "Brand Campaign",
    category: "Commercial",
    image: "/service-commercial.jpg",
    aspect: "aspect-[4/5]",
  },
  {
    id: 12,
    title: "Editorial Story",
    category: "Editorial",
    image: "/dest-editorial.jpg",
    aspect: "aspect-square",
  },
];

export default function PortfolioPage() {
  const [scrollY, setScrollY] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

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
            Our Work
          </p>
          <h1
            className={`font-serif text-5xl md:text-6xl lg:text-7xl text-cream mb-6 transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "0.1s" }}
          >
            Portfolio
          </h1>
          <div className="w-12 h-px bg-gold/40 mx-auto mb-6" />
          <p
            className={`text-cream/50 max-w-xl mx-auto text-lg transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            A curated collection of our finest work across various genres and
            styles.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="pb-12 bg-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 text-xs uppercase tracking-[0.15em] font-medium transition-all duration-300 border ${
                  activeCategory === cat
                    ? "bg-gold text-dark border-gold"
                    : "bg-transparent text-cream/50 border-dark-border hover:border-gold/30 hover:text-cream"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid - Masonry Style */}
      <section className="pb-28 md:pb-36 bg-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className={`group relative overflow-hidden break-inside-avoid cursor-pointer transition-all duration-700 custom-expo ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                <div className={`relative ${item.aspect} overflow-hidden`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/50 transition-colors duration-500" />

                  {/* Content on hover */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-2">
                      {item.category}
                    </p>
                    <h3 className="font-serif text-xl text-cream mb-4">
                      {item.title}
                    </h3>
                    <div className="w-10 h-10 border border-cream/40 rounded-full flex items-center justify-center">
                      <ArrowUpRight className="w-4 h-4 text-cream" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
