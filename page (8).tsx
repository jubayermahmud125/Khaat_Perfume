import { notFound } from 'next/navigation';
import { supabase } from '@/lib/supabase-client';
import type { Product, Review } from '@/lib/types';
import ProductDetails from './product-details';

interface ProductPageProps {
  params: { slug: string };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const [{ data: product }, { data: reviews }] = await Promise.all([
    supabase.from('products').select('*').eq('slug', params.slug).maybeSingle(),
    supabase.from('reviews').select('*').order('created_at', { ascending: false }),
  ]);

  if (!product) notFound();

  const productReviews = ((reviews || []) as Review[]).filter(
    (review) => review.product_id === product.id,
  );

  return (
    <ProductDetails
      product={product as Product}
      reviews={productReviews}
    />
  );
}
