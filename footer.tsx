import Link from 'next/link';
import { Phone, MessageCircle, Instagram, Facebook } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Perfumes', href: '/shop' },
  { label: 'Combos', href: '/#combos' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 pb-12 border-b border-primary-foreground/10">
          {/* Brand */}
          <div>
            <Link href="/" className="group mb-4 inline-flex items-center gap-3" aria-label="KHAAT home">
              <span className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-gold/40 !bg-transparent p-0.5 transition-all duration-300 group-hover:border-gold group-hover:shadow-[0_0_18px_hsl(var(--gold)/0.2)]">
                <img
                  src="logo.png"
                  alt="KHAAT logo"
                  className="h-full w-full rounded-full object-contain"
                  style={{ filter: 'none' }}
                />
              </span>
              <span className="font-serif-display text-3xl tracking-[0.15em]">
                KHAAT
              </span>
            </Link>
            <p className="font-sans-body text-sm text-primary-foreground/50 leading-relaxed max-w-xs mb-6">
              Your Premium Perfumery Stop. Carefully selected fragrances in
              convenient sizes — from 6ML to 50ML.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61580254928435"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 flex items-center justify-center border border-primary-foreground/20 rounded-sm hover:border-gold hover:text-gold transition-all duration-300"
              >
                <Facebook className="w-4 h-4" strokeWidth={1.5} />
              </a>
              <a
                href="https://www.instagram.com/khaat_perfume/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 flex items-center justify-center border border-primary-foreground/20 rounded-sm hover:border-gold hover:text-gold transition-all duration-300"
              >
                <Instagram className="w-4 h-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans-body text-xs tracking-[0.2em] uppercase text-gold mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-sans-body text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h4 className="font-sans-body text-xs tracking-[0.2em] uppercase text-gold mb-5">
              Customer Support
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:01642127315"
                  className="flex items-center gap-3 font-sans-body text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors duration-300"
                >
                  <Phone className="w-4 h-4 text-gold" strokeWidth={1.5} />
                  01642127315
                </a>
              </li>
              <li>
                <a
                  href="https://m.me/61580254928435"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-sans-body text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors duration-300"
                >
                  <MessageCircle className="w-4 h-4 text-gold" strokeWidth={1.5} />
                  Messenger
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/8801642127315"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-sans-body text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors duration-300"
                >
                  <MessageCircle className="w-4 h-4 text-gold" strokeWidth={1.5} />
                  WhatsApp: 01642127315
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans-body text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} KHAAT. All rights reserved.
          </p>
          <p className="font-sans-body text-xs text-primary-foreground/40">
            Quality · Variety · Convenience · Trust
          </p>
        </div>
      </div>
    </footer>
  );
}
