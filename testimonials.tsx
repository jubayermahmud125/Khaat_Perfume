'use client';

import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote:
      'Nuit Étoilée is the only fragrance I have worn for five years. It becomes more beautiful the longer it sits on your skin — like it was made for me alone.',
    author: 'Isabelle Moreau',
    role: 'Paris, France',
    rating: 5,
  },
  {
    quote:
      'I received Ambre Royal as a gift and have since purchased it six more times. The depth of the oud is unlike anything I have found elsewhere. It feels ancient and modern at once.',
    author: 'James Whitfield',
    role: 'London, UK',
    rating: 5,
  },
  {
    quote:
      'Maison Lumière is the last house that still feels like art. Each scent tells a story — you do not just wear it, you inhabit it.',
    author: 'Sofia Conti',
    role: 'Milan, Italy',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="reviews" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-sans-body tracking-[0.3em] uppercase text-gold mb-4 block">
            Voices of the Maison
          </span>
          <h2 className="font-serif-display text-4xl md:text-5xl text-foreground">
            Loved by Many
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, idx) => (
            <article
              key={testimonial.author}
              className="relative bg-card p-8 lg:p-10 rounded-sm border border-border hover:border-gold/30 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              {/* Quote icon */}
              <Quote className="w-10 h-10 text-gold/20 mb-6" strokeWidth={1} />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-gold text-gold"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="font-serif-display text-lg text-foreground/80 leading-relaxed mb-8 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-6 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <span className="font-serif-display text-sm text-gold">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-sans-body text-sm font-medium text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="font-sans-body text-xs text-foreground/50">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
