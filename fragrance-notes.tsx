'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

const families = [
  {
    name: 'Top Notes',
    description: 'The first impression — bright, volatile, fleeting. These are the notes you smell in the first 15 minutes.',
    notes: [
      { name: 'Bergamot', color: 'from-yellow-200 to-yellow-400' },
      { name: 'Pink Pepper', color: 'from-rose-300 to-rose-500' },
      { name: 'Lavender', color: 'from-violet-300 to-violet-500' },
      { name: 'Mandarin', color: 'from-orange-200 to-orange-400' },
    ],
  },
  {
    name: 'Heart Notes',
    description: 'The soul of the fragrance — rich, floral, and full-bodied. These emerge after 30 minutes and linger for hours.',
    notes: [
      { name: 'Jasmine', color: 'from-amber-100 to-amber-300' },
      { name: 'May Rose', color: 'from-rose-200 to-rose-400' },
      { name: 'Iris', color: 'from-violet-200 to-violet-400' },
      { name: 'Ylang Ylang', color: 'from-yellow-100 to-yellow-300' },
    ],
  },
  {
    name: 'Base Notes',
    description: 'The lasting memory — deep, warm, and grounding. These notes stay on your skin long after the rest have faded.',
    notes: [
      { name: 'Sandalwood', color: 'from-amber-300 to-amber-600' },
      { name: 'Oud', color: 'from-amber-700 to-amber-900' },
      { name: 'Vanilla', color: 'from-amber-100 to-amber-300' },
      { name: 'Musk', color: 'from-stone-300 to-stone-500' },
    ],
  },
];

export function FragranceNotes() {
  const [activeFamily, setActiveFamily] = useState(0);

  return (
    <section
      id="notes"
      className="py-24 lg:py-32 bg-primary text-primary-foreground relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-sans-body tracking-[0.3em] uppercase text-gold mb-4 block">
            The Architecture of Scent
          </span>
          <h2 className="font-serif-display text-4xl md:text-5xl text-primary-foreground mb-4">
            Understanding Fragrance Notes
          </h2>
          <p className="font-sans-body text-primary-foreground/60 max-w-2xl mx-auto leading-relaxed">
            A fine perfume unfolds in three movements, like a symphony. Each
            layer reveals itself in time.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 mb-12">
          {families.map((family, idx) => (
            <button
              key={family.name}
              onClick={() => setActiveFamily(idx)}
              className={cn(
                'px-6 py-3 font-sans-body text-sm tracking-widest uppercase transition-all duration-300 border',
                activeFamily === idx
                  ? 'border-gold text-gold bg-gold/10'
                  : 'border-primary-foreground/20 text-primary-foreground/50 hover:text-primary-foreground hover:border-primary-foreground/40'
              )}
            >
              {family.name}
            </button>
          ))}
        </div>

        {/* Active Family Content */}
        <div className="max-w-4xl mx-auto">
          <p className="text-center font-sans-body text-primary-foreground/70 leading-relaxed mb-12 animate-fade-in" key={activeFamily}>
            {families[activeFamily].description}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {families[activeFamily].notes.map((note, idx) => (
              <div
                key={note.name}
                className="group relative animate-scale-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div
                  className={cn(
                    'aspect-square rounded-sm bg-gradient-to-br relative overflow-hidden',
                    note.color
                  )}
                >
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-serif-display text-xl text-primary/80 group-hover:text-primary transition-colors duration-500">
                      {note.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
