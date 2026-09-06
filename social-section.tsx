import Link from 'next/link';
import { Instagram, Facebook } from 'lucide-react';
import { SectionHeading } from './section-heading';

export function SocialSection() {
  return (
    <section className="py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Follow KHAAT"
          title="Stay Connected"
          subtitle="Follow us on social media for new arrivals, offers, and fragrance tips."
        />
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <a
            href="https://www.instagram.com/khaat_perfume/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 border border-border hover:border-gold rounded-sm transition-all duration-300"
          >
            <Instagram className="w-5 h-5 text-gold" strokeWidth={1.5} />
            <span className="font-sans-body text-sm tracking-widest uppercase text-foreground/70 group-hover:text-gold transition-colors">
              Instagram
            </span>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61580254928435"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 border border-border hover:border-gold rounded-sm transition-all duration-300"
          >
            <Facebook className="w-5 h-5 text-gold" strokeWidth={1.5} />
            <span className="font-sans-body text-sm tracking-widest uppercase text-foreground/70 group-hover:text-gold transition-colors">
              Facebook
            </span>
          </a>
        </div>

        {/* Image grid mockup */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 lg:gap-3 max-w-4xl mx-auto">
          {[
            'https://images.pexels.com/photos/264819/pexels-photo-264819.jpeg?auto=compress&cs=tinysrgb&w=400',
            'https://images.pexels.com/photos/965731/pexels-photo-965731.jpeg?auto=compress&cs=tinysrgb&w=400',
            'https://images.pexels.com/photos/36389336/pexels-photo-36389336.jpeg?auto=compress&cs=tinysrgb&w=400',
            'https://images.pexels.com/photos/32817141/pexels-photo-32817141.jpeg?auto=compress&cs=tinysrgb&w=400',
            'https://images.pexels.com/photos/21008941/pexels-photo-21008941.jpeg?auto=compress&cs=tinysrgb&w=400',
          ].map((src, idx) => (
            <a
              key={idx}
              href="https://www.instagram.com/khaat_perfume/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-sm"
            >
              <img
                src={src}
                alt="KHAAT on Instagram"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300 flex items-center justify-center">
                <Instagram
                  className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  strokeWidth={1.5}
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
