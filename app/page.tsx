"use client";

import { useState, useEffect } from "react";
import Navigation from "@/sections/Navigation";
import Hero from "@/sections/Hero";
import Categories from "@/sections/Categories";
import About from "@/sections/About";
import Products from "@/sections/Products";
import Destinations from "@/sections/Destinations";
import Testimonials from "@/sections/Testimonials";
import CTA from "@/sections/CTA";
import Footer from "@/sections/Footer";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-dark overflow-x-hidden">
      <Navigation scrollY={scrollY} />
      <Hero />
      <Categories />
      <About />
      <Products />
      <Destinations />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
