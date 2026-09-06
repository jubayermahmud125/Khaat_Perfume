import { supabase } from '@/lib/supabase-client';
import type { Product } from '@/lib/types';
import { ProductCard } from './product-card';
import { SectionHeading } from './section-heading';

export async function NewArrivals() {
  const { data } = await supabase
    .from('products')
    .select('*')
    .eq('is_new_arrival', true)
    .order('created_at', { ascending: false })
    .limit(4);

  const products = (data || []) as Product[];

  if (products.length === 0) return null;

  return (
    <section className="py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Just Added"
          title="New Arrivals"
          subtitle="The latest fragrances to join the KHAAT collection."
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {products.map((product, idx) => (
            <ProductCard key={product.id} product={product} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
