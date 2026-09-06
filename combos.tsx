import { supabase } from '@/lib/supabase-client';
import type { Combo } from '@/lib/types';
import { SectionHeading } from './section-heading';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export async function Combos() {
  const { data } = await supabase
    .from('combos')
    .select('*')
    .order('created_at')
    .limit(4);

  const combos = (data || []) as Combo[];

  if (combos.length === 0) return null;

  return (
    <section id="combos" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="KHAAT Combos"
          title="Save With Combos"
          subtitle="Pair your favorites and save. Perfect for trying multiple scents."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {combos.map((combo, idx) => (
            <Link
              key={combo.id}
              href="/shop"
              className="group relative overflow-hidden bg-card rounded-sm border border-border hover:border-gold/40 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.08}s` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                {combo.image_url && (
                  <img
                    src={combo.image_url}
                    alt={combo.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="font-serif-display text-lg text-background mb-1">
                    {combo.name}
                  </h3>
                </div>
              </div>
              <div className="p-4">
                <p className="font-sans-body text-xs text-foreground/60 leading-relaxed mb-3 line-clamp-2">
                  {combo.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-serif-display text-xl text-foreground">
                    ৳{combo.price}
                  </span>
                  <div className="flex items-center gap-1 text-gold group-hover:gap-2 transition-all duration-300">
                    <span className="text-[10px] font-sans-body tracking-widest uppercase">
                      View
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
