'use client';

import { Heart, ShoppingBag, Star } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const products = [
  {
    id: 1,
    name: 'Nuit Étoilée',
    family: 'Florale',
    price: 185,
    image:
      'https://images.pexels.com/photos/36389336/pexels-photo-36389336.jpeg?auto=compress&cs=tinysrgb&w=800',
    notes: ['Jasmine', 'Iris', 'Vanilla'],
    rating: 4.9,
    badge: 'Bestseller',
  },
  {
    id: 2,
    name: 'Ambre Royal',
    family: "Bois d'Orient",
    price: 240,
    image:
      'https://images.pexels.com/photos/32630384/pexels-photo-32630384.jpeg?auto=compress&cs=tinysrgb&w=800',
    notes: ['Oud', 'Amber', 'Saffron'],
    rating: 5.0,
    badge: 'New',
  },
  {
    id: 3,
    name: 'Soleil de Capri',
    family: 'Citrus Soleil',
    price: 165,
    image:
      'https://images.pexels.com/photos/34690231/pexels-photo-34690231.jpeg?auto=compress&cs=tinysrgb&w=800',
    notes: ['Bergamot', 'Neroli', 'Cedar'],
    rating: 4.8,
    badge: null,
  },
  {
    id: 4,
    name: 'Rose de Mai',
    family: 'Florale',
    price: 210,
    image:
      'https://images.pexels.com/photos/13662407/pexels-photo-13662407.jpeg?auto=compress&cs=tinysrgb&w=800',
    notes: ['May Rose', 'Patchouli', 'Musk'],
    rating: 4.9,
    badge: 'Limited',
  },
];

export function ProductShowcase() {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-sans-body tracking-[0.3em] uppercase text-gold mb-4 block">
              The Atelier
            </span>
            <h2 className="font-serif-display text-4xl md:text-5xl text-foreground">
              Featured Fragrances
            </h2>
          </div>
          <p className="font-sans-body text-foreground/60 max-w-md leading-relaxed">
            Our most beloved compositions — each a signature waiting to be worn.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product, idx) => (
            <article
              key={product.id}
              className="group relative bg-card rounded-sm overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-gold text-white text-[10px] font-sans-body tracking-widest uppercase rounded-sm">
                    {product.badge}
                  </div>
                )}

                {/* Favorite */}
                <button
                  aria-label="Add to favorites"
                  onClick={() => toggleFavorite(product.id)}
                  className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors duration-300"
                >
                  <Heart
                    className={cn(
                      'w-4 h-4 transition-colors duration-300',
                      favorites.includes(product.id)
                        ? 'fill-gold text-gold'
                        : 'text-foreground/50 hover:text-gold'
                    )}
                  />
                </button>

                {/* Quick add */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <button className="w-full py-3 bg-primary text-primary-foreground text-xs font-sans-body tracking-widest uppercase hover:bg-accent transition-colors duration-300 flex items-center justify-center gap-2">
                    <ShoppingBag className="w-4 h-4" />
                    Add to Bag
                  </button>
                </div>
              </div>

              {/* Details */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-sans-body tracking-[0.2em] uppercase text-gold">
                    {product.family}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-gold text-gold" />
                    <span className="text-xs font-sans-body text-foreground/60">
                      {product.rating}
                    </span>
                  </div>
                </div>
                <h3 className="font-serif-display text-xl text-foreground mb-2">
                  {product.name}
                </h3>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {product.notes.map((note) => (
                    <span
                      key={note}
                      className="text-[10px] font-sans-body text-foreground/50 border border-border px-2 py-0.5 rounded-sm"
                    >
                      {note}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-serif-display text-xl text-foreground">
                    ${product.price}
                  </span>
                  <span className="text-xs font-sans-body text-foreground/40">
                    50ml EDP
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <a
            href="#collections"
            className="inline-flex items-center gap-2 text-sm font-sans-body tracking-widest uppercase text-foreground/70 hover:text-gold transition-colors duration-300 border-b border-foreground/20 hover:border-gold pb-1"
          >
            View All Fragrances
          </a>
        </div>
      </div>
    </section>
  );
}
