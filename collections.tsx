'use client';

import { ArrowRight } from 'lucide-react';

const collections = [
  {
    name: 'Florale',
    tagline: 'Bloom in moonlight',
    description: 'Jasmine, rose, and peony woven into ethereal bouquets.',
    image:
      'https://images.pexels.com/photos/965731/pexels-photo-965731.jpeg?auto=compress&cs=tinysrgb&w=900',
    count: '6 fragrances',
  },
  {
    name: "Bois d'Orient",
    tagline: 'Warmth of distant lands',
    description: 'Sandalwood, amber, and oud for the bold and the brave.',
    image:
      'https://images.pexels.com/photos/15096784/pexels-photo-15096784.jpeg?auto=compress&cs=tinysrgb&w=900',
    count: '5 fragrances',
  },
  {
    name: 'Citrus Soleil',
    tagline: 'Mediterranean mornings',
    description: 'Bergamot, neroli, and verbena — bright as coastal light.',
    image:
      'https://images.pexels.com/photos/20470833/pexels-photo-20470833.jpeg?auto=compress&cs=tinysrgb&w=900',
    count: '4 fragrances',
  },
];

export function Collections() {
  return (
    <section id="collections" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-sans-body tracking-[0.3em] uppercase text-gold mb-4 block">
            Signature Collections
          </span>
          <h2 className="font-serif-display text-4xl md:text-5xl text-foreground mb-4">
            Curated by Mood
          </h2>
          <p className="font-sans-body text-foreground/60 max-w-2xl mx-auto leading-relaxed">
            Three distinct families, each a world of its own. Find the scent
            that speaks your language.
          </p>
        </div>

        {/* Collection Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {collections.map((collection, idx) => (
            <article
              key={collection.name}
              className="group relative overflow-hidden bg-card rounded-sm cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />

                {/* Count badge */}
                <div className="absolute top-5 right-5 px-3 py-1 bg-background/80 backdrop-blur-sm rounded-sm">
                  <span className="text-[10px] font-sans-body tracking-widest uppercase text-foreground/70">
                    {collection.count}
                  </span>
                </div>
              </div>

              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <span className="text-xs font-sans-body tracking-[0.2em] uppercase text-gold-light mb-2 block">
                  {collection.tagline}
                </span>
                <h3 className="font-serif-display text-2xl lg:text-3xl text-background mb-2">
                  {collection.name}
                </h3>
                <p className="font-sans-body text-sm text-background/70 leading-relaxed mb-4 max-h-0 overflow-hidden opacity-0 group-hover:max-h-32 group-hover:opacity-100 transition-all duration-500">
                  {collection.description}
                </p>
                <div className="flex items-center gap-2 text-background/80 group-hover:text-gold-light transition-colors duration-300">
                  <span className="text-xs font-sans-body tracking-widest uppercase">
                    Discover
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>

              {/* Gold border on hover */}
              <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/40 transition-all duration-500 pointer-events-none" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
