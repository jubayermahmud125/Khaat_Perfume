import { ShieldCheck, Layers, Truck, Heart } from 'lucide-react';
import { SectionHeading } from './section-heading';

const values = [
  { icon: ShieldCheck, label: 'Quality' },
  { icon: Layers, label: 'Variety' },
  { icon: Truck, label: 'Convenience' },
  { icon: Heart, label: 'Trust' },
];

export function AboutPreview() {
  return (
    <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="block text-xs font-sans-body tracking-[0.3em] uppercase text-gold mb-3">
            About KHAAT
          </span>
          <h2 className="font-serif-display text-3xl md:text-4xl text-primary-foreground mb-4">
            Your Premium Perfumery Stop
          </h2>
          <p className="font-sans-body text-primary-foreground/60 leading-relaxed">
            We believe you shouldn&apos;t always have to buy a full-size bottle
            to experience a great fragrance. KHAAT brings you carefully selected
            fragrances in convenient sizes — from 6ML pocket perfumes to 50ML
            bottles.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-3xl mx-auto">
          {values.map((value, idx) => {
            const Icon = value.icon;
            return (
              <div
                key={value.label}
                className="flex flex-col items-center text-center animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center mb-3">
                  <Icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
                </div>
                <span className="font-sans-body text-sm tracking-widest uppercase text-primary-foreground/80">
                  {value.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
