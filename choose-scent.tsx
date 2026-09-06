'use client';

import Link from 'next/link';
import { Waves, Citrus, Flower2, TreePine, Flame, Droplet } from 'lucide-react';
import { SectionHeading } from './section-heading';

const scentCategories = [
  {
    name: 'Fresh & Aquatic',
    description: 'For hot weather & everyday use',
    slug: 'fresh-aquatic',
    icon: Waves,
  },
  {
    name: 'Fresh & Citrus',
    description: 'Clean, energetic & refreshing',
    slug: 'fresh-citrus',
    icon: Citrus,
  },
  {
    name: 'Floral & Sweet',
    description: 'Soft, attractive & feminine',
    slug: 'floral-sweet',
    icon: Flower2,
  },
  {
    name: 'Woody & Oud',
    description: 'Rich, warm & elegant',
    slug: 'woody-oud',
    icon: TreePine,
  },
  {
    name: 'Sweet & Warm',
    description: 'Perfect for evenings',
    slug: 'sweet-warm',
    icon: Flame,
  },
  {
    name: 'Attar / Concentrated Oils',
    description: 'Alcohol-free long-lasting oils',
    slug: 'attar-concentrated-oils',
    icon: Droplet,
  },
];

export function ChooseScent() {
  return (
    <section className="py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Choose Your Scent"
          title="What Are You Looking For?"
          subtitle="Don't know perfume names? Pick by mood and we'll show you matching fragrances."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-4">
          {scentCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.slug}
                href={`/shop?category=${cat.slug}`}
                className="group relative bg-card border border-border hover:border-gold/40 rounded-sm p-5 lg:p-6 text-center transition-all duration-500 hover:shadow-lg animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.08}s` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 rounded-full border border-gold/30 mb-4 group-hover:bg-gold/10 transition-colors duration-300">
                  <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif-display text-base lg:text-lg text-foreground mb-1 group-hover:text-gold transition-colors duration-300">
                  {cat.name}
                </h3>
                <p className="font-sans-body text-xs text-foreground/50 leading-relaxed">
                  {cat.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
