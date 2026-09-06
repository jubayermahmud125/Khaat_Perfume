import { supabase } from '@/lib/supabase-client';
import type { Review } from '@/lib/types';
import { SectionHeading } from './section-heading';
import { Star, Quote } from 'lucide-react';

export async function Reviews() {
  const { data } = await supabase
    .from('reviews')
    .select('*')
    .eq('is_featured', true)
    .order('created_at', { ascending: false })
    .limit(6);

  const reviews = (data || []) as Review[];

  if (reviews.length === 0) return null;

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Customer Love"
          title="What Our Customers Say"
          subtitle="Real reviews from real KHAAT customers."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {reviews.map((review, idx) => (
            <article
              key={review.id}
              className="bg-card border border-border hover:border-gold/30 transition-all duration-500 p-6 lg:p-8 rounded-sm animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <Quote className="w-8 h-8 text-gold/20 mb-4" strokeWidth={1} />
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.rating
                        ? 'fill-gold text-gold'
                        : 'text-border'
                    }`}
                  />
                ))}
              </div>
              <p className="font-sans-body text-sm text-foreground/70 leading-relaxed mb-5 italic">
                &ldquo;{review.review_text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center">
                  <span className="font-serif-display text-sm text-gold">
                    {review.customer_name.charAt(0)}
                  </span>
                </div>
                <span className="font-sans-body text-sm font-medium text-foreground">
                  {review.customer_name}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
