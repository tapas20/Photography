import { Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const footerLinks = {
    navigation: [
      { name: "Home", href: "/" },
      { name: "Portfolio", href: "/portfolio" },
      { name: "Services", href: "/services" },
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
    ],
    services: [
      { name: "Wedding Photography", href: "/services" },
      { name: "Portrait Sessions", href: "/services" },
      { name: "Commercial & Brand", href: "/services" },
      { name: "Editorial & Fashion", href: "/services" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "Youtube" },
  ];

  return (
    <footer className="bg-dark border-t border-dark-border">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <span className="font-serif text-2xl tracking-widest-custom text-cream">
                LUMIERE
              </span>
            </Link>
            <p className="text-cream/40 mb-8 max-w-xs leading-relaxed text-sm">
              Capturing life&apos;s most beautiful moments through the art of
              light and shadow. Based in Portland, available worldwide.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="mailto:hello@lumiere.studio"
                className="flex items-center gap-3 text-cream/40 hover:text-gold transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                hello@lumiere.studio
              </a>
              <a
                href="tel:+15031234567"
                className="flex items-center gap-3 text-cream/40 hover:text-gold transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                (503) 123-4567
              </a>
              <div className="flex items-center gap-3 text-cream/40 text-sm">
                <MapPin className="w-4 h-4" />
                Portland, Oregon
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-xs uppercase tracking-[0.2em] text-cream/60 mb-6">
              Navigate
            </h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/40 hover:text-gold transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-cream/60 mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/40 hover:text-gold transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-cream/60 mb-6">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-cream/40 hover:text-gold transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-xs text-cream/30">
            &copy; {new Date().getFullYear()} Lumiere Photography. All rights
            reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-9 h-9 border border-dark-border flex items-center justify-center text-cream/30 hover:border-gold/30 hover:text-gold transition-all duration-300"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
