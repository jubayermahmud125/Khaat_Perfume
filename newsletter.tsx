'use client';

import { useState } from 'react';
import { Mail, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <section id="journal" className="py-24 lg:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gold/10 rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-gold/10 rounded-full" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-gold/30 mb-8">
            <Mail className="w-6 h-6 text-gold" strokeWidth={1.5} />
          </div>

          <span className="text-xs font-sans-body tracking-[0.3em] uppercase text-gold mb-4 block">
            The Lumière Letter
          </span>
          <h2 className="font-serif-display text-4xl md:text-5xl text-foreground mb-4">
            Join Our Inner Circle
          </h2>
          <p className="font-sans-body text-foreground/60 leading-relaxed mb-10">
            Receive early access to new compositions, private events, and
            stories from the atelier. We write rarely, and never without
            intention.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-5 py-4 bg-background border border-border rounded-sm font-sans-body text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-gold transition-colors duration-300"
            />
            <button
              type="submit"
              className={cn(
                'px-8 py-4 font-sans-body text-sm tracking-widest uppercase rounded-sm transition-all duration-300 flex items-center justify-center gap-2',
                submitted
                  ? 'bg-green-700 text-white'
                  : 'bg-primary text-primary-foreground hover:bg-accent'
              )}
            >
              {submitted ? (
                <>
                  <Check className="w-4 h-4" />
                  Subscribed
                </>
              ) : (
                'Subscribe'
              )}
            </button>
          </form>

          <p className="font-sans-body text-xs text-foreground/40 mt-6">
            By subscribing you agree to our privacy policy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
