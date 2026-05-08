"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Instagram,
  Send,
} from "lucide-react";
import Navigation from "@/sections/Navigation";
import Footer from "@/sections/Footer";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@lumiere.studio",
    href: "mailto:hello@lumiere.studio",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(503) 123-4567",
    href: "tel:+15031234567",
  },
  {
    icon: MapPin,
    label: "Studio",
    value: "Portland, Oregon",
    href: "#",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon-Fri, 9am-6pm PST",
    href: "#",
  },
];

const serviceOptions = [
  "Wedding Photography",
  "Portrait Session",
  "Commercial & Brand",
  "Editorial & Fashion",
  "Other",
];

export default function ContactPage() {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    date: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", service: "", date: "", message: "" });
    }, 4000);
  };

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
            Get in Touch
          </p>
          <h1
            className={`font-serif text-5xl md:text-6xl lg:text-7xl text-cream mb-6 transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "0.1s" }}
          >
            Contact Us
          </h1>
          <div className="w-12 h-px bg-gold/40 mx-auto mb-6" />
          <p
            className={`text-cream/50 max-w-xl mx-auto text-lg transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            Every great image begins with a conversation. We&apos;d love to hear
            about your project.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="pb-28 md:pb-36 bg-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2">
              <div className="space-y-8 mb-12">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 border border-dark-border flex items-center justify-center flex-shrink-0 group-hover:border-gold/30 transition-colors">
                      <info.icon className="w-4 h-4 text-gold/60 group-hover:text-gold transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.15em] text-cream/40 mb-1">
                        {info.label}
                      </p>
                      <p className="text-cream/80 group-hover:text-gold transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social */}
              <div className="pt-8 border-t border-dark-border">
                <p className="text-xs uppercase tracking-[0.15em] text-cream/40 mb-4">
                  Follow Our Work
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-3 text-cream/60 hover:text-gold transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  <span className="text-sm">@lumiere.studio</span>
                </a>
              </div>

              {/* Availability note */}
              <div className="mt-10 bg-dark-card border border-dark-border p-6">
                <h4 className="font-serif text-lg text-cream mb-2">
                  Currently Booking
                </h4>
                <p className="text-cream/40 text-sm leading-relaxed">
                  We are accepting bookings for Summer &amp; Fall 2026. Wedding
                  dates fill quickly &mdash; reach out early to secure your
                  preferred date.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-[0.15em] text-cream/40 mb-3">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-transparent border border-dark-border px-4 py-3.5 text-cream placeholder:text-cream/20 focus:border-gold/40 focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-[0.15em] text-cream/40 mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-transparent border border-dark-border px-4 py-3.5 text-cream placeholder:text-cream/20 focus:border-gold/40 focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-[0.15em] text-cream/40 mb-3">
                      Service Interested In
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full bg-dark border border-dark-border px-4 py-3.5 text-cream focus:border-gold/40 focus:outline-none transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-dark">
                        Select a service
                      </option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-dark">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-[0.15em] text-cream/40 mb-3">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                      className="w-full bg-dark border border-dark-border px-4 py-3.5 text-cream focus:border-gold/40 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.15em] text-cream/40 mb-3">
                    Tell Us About Your Project *
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-transparent border border-dark-border px-4 py-3.5 text-cream placeholder:text-cream/20 focus:border-gold/40 focus:outline-none transition-colors resize-none"
                    placeholder="Share some details about what you're looking for, your vision, and any specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitted}
                  className={`w-full sm:w-auto flex items-center justify-center gap-3 px-12 py-4 text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 ${
                    isSubmitted
                      ? "bg-green-600 text-white"
                      : "bg-gold text-dark hover:bg-gold-light hover:shadow-gold"
                  }`}
                >
                  {isSubmitted ? (
                    "Message Sent!"
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map/Image Section */}
      <section className="relative h-[400px] overflow-hidden">
        <img
          src="/cta-dramatic.jpg"
          alt="Lumiere Studio location"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-dark/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-8 h-8 text-gold mx-auto mb-4" />
            <p className="font-serif text-2xl text-cream mb-2">
              Portland, Oregon
            </p>
            <p className="text-cream/50 text-sm">
              Available for travel worldwide
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
