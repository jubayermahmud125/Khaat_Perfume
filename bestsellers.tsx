import { supabase } from '@/lib/supabase-client';
import type { Product } from '@/lib/types';
import { ProductCard } from './product-card';
import { SectionHeading } from './section-heading';
import Link from 'next/link';

export async function Bestsellers() {
  const { data } = await supabase
    .from('products')
    .select('*')
    .eq('is_bestseller', true)
    .order('sort_order')
    .limit(6);

  const products = (data || []) as Product[];

  if (products.length === 0) return null;

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Most Loved"
          title="Best Sellers"
          subtitle="The fragrances our customers keep coming back for."
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {products.map((product, idx) => (
            <ProductCard key={product.id} product={product} index={idx} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-xs font-sans-body tracking-[0.2em] uppercase text-foreground/70 hover:text-gold transition-colors duration-300 border-b border-foreground/20 hover:border-gold pb-1"
          >
            View All Perfumes
          </Link>
        </div>
      </div>
    </section>
  );
}
