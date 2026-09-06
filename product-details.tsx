'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Check, ShoppingBag, Star, Truck } from 'lucide-react';
import type { Product, ProductSize, Review } from '@/lib/types';
import { getPriceForSize, SIZES, ATTAR_SIZES } from '@/lib/types';
import { useCart } from '@/lib/cart-context';
import { Header } from '@/components/site/header';
import { Footer } from '@/components/site/footer';
import { CartDrawer } from '@/components/site/cart-drawer';

interface ProductDetailsProps {
  product: Product;
  reviews: Review[];
}

export default function ProductDetails({ product, reviews }: ProductDetailsProps) {
  const availableSizes = product.is_attar ? ATTAR_SIZES : SIZES;
  const [selectedSize, setSelectedSize] = useState<ProductSize>(availableSizes[0]);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  const price = getPriceForSize(product, selectedSize);
  const averageRating = reviews.length
    ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
    : 5;

  const addToCart = () => {
    addItem({
      product_id: product.id,
      product_name: product.name,
      product_slug: product.slug,
      image_url: product.image_url || '',
      size: selectedSize,
      quantity,
      unit_price: price,
      is_combo: false,
    });
  };

  return (
    <>
      <Header />
      <main className="pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <Link href="/shop" className="inline-flex items-center gap-2 text-xs font-sans-body tracking-widest uppercase text-foreground/50 hover:text-gold transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to perfumes
          </Link>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <div className="relative aspect-square lg:aspect-[4/5] bg-secondary rounded-sm overflow-hidden">
              {product.image_url && <img src={product.image_url} alt={product.name} className="w-full h-full object-cover" />}
              {product.badge && <span className="absolute top-4 left-4 px-3 py-1 bg-gold text-white text-[10px] font-sans-body tracking-widest uppercase rounded-sm">{product.badge}</span>}
            </div>
            <div className="lg:pt-8">
              <span className="text-xs font-sans-body tracking-[0.25em] uppercase text-gold">{product.scent_tags?.split(',').join(' · ')}</span>
              <h1 className="font-serif-display text-4xl md:text-5xl text-foreground mt-3 mb-4">{product.name}</h1>
              <div className="flex items-center gap-2 mb-5">
                <div className="flex gap-1">{Array.from({ length: 5 }).map((_, index) => <Star key={index} className="w-4 h-4 fill-gold text-gold" />)}</div>
                <span className="font-sans-body text-sm text-foreground/50">{averageRating.toFixed(1)} {reviews.length ? `(${reviews.length} reviews)` : ''}</span>
              </div>
              <p className="font-sans-body text-foreground/65 leading-relaxed mb-6">{product.description}</p>

              {product.is_attar && (
                <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/30 rounded-sm">
                  <span className="text-xs font-sans-body tracking-[0.15em] uppercase text-gold">
                    100% Alcohol-Free • Long-Lasting Concentrated Oil
                  </span>
                </div>
              )}

              <div className="border-t border-border pt-6 mb-6">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="font-sans-body text-xs tracking-[0.2em] uppercase text-foreground/70">Choose your size</h2>
                  <span className="font-serif-display text-2xl text-foreground">৳{price}</span>
                </div>
                <div className={`grid ${availableSizes.length === 3 ? 'grid-cols-3' : 'grid-cols-5'} gap-2`}>
                  {availableSizes.map((size) => (
                    <button key={size} onClick={() => setSelectedSize(size)} className={`py-3 border rounded-sm text-xs font-sans-body transition-colors ${selectedSize === size ? 'border-gold bg-gold/10 text-gold' : 'border-border text-foreground/60 hover:border-gold'}`}>
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center border border-border rounded-sm">
                  <button aria-label="Decrease quantity" onClick={() => setQuantity((value) => Math.max(1, value - 1))} className="w-11 h-12 flex items-center justify-center text-foreground/60 hover:text-gold text-xl">−</button>
                  <span className="w-10 text-center font-sans-body">{quantity}</span>
                  <button aria-label="Increase quantity" onClick={() => setQuantity((value) => value + 1)} className="w-11 h-12 flex items-center justify-center text-foreground/60 hover:text-gold text-xl">+</button>
                </div>
                <button onClick={addToCart} disabled={!product.in_stock} className="flex-1 h-12 bg-primary text-primary-foreground font-sans-body text-xs tracking-[0.18em] uppercase hover:bg-accent transition-colors rounded-sm disabled:opacity-50 flex items-center justify-center gap-2">
                  <ShoppingBag className="w-4 h-4" /> {product.in_stock ? 'Add to Cart' : 'Out of Stock'}
                </button>
              </div>
              <Link href="/checkout" onClick={addToCart} className="w-full h-12 border border-gold text-gold font-sans-body text-xs tracking-[0.18em] uppercase hover:bg-gold hover:text-white transition-colors rounded-sm flex items-center justify-center">Order Now</Link>

              <div className="flex items-center gap-3 mt-6 p-4 bg-secondary/50 rounded-sm">
                <Truck className="w-5 h-5 text-gold" strokeWidth={1.5} />
                <div><p className="font-sans-body text-sm text-foreground">Cash on Delivery available</p><p className="font-sans-body text-xs text-foreground/50">Fast delivery across Bangladesh</p></div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 mt-20 pt-12 border-t border-border">
            <div><h2 className="font-serif-display text-2xl text-foreground mb-6">Fragrance Profile</h2><div className="space-y-5"><Note label="Top Notes" value={product.top_notes} /><Note label="Heart Notes" value={product.heart_notes} /><Note label="Base Notes" value={product.base_notes} /></div></div>
            <div><h2 className="font-serif-display text-2xl text-foreground mb-6">Why You&apos;ll Love It</h2><ul className="space-y-3 font-sans-body text-sm text-foreground/65"><li className="flex gap-3"><Check className="w-4 h-4 text-gold shrink-0" />Fresh and clean</li><li className="flex gap-3"><Check className="w-4 h-4 text-gold shrink-0" />Great for everyday use</li><li className="flex gap-3"><Check className="w-4 h-4 text-gold shrink-0" />Perfect for university and office</li><li className="flex gap-3"><Check className="w-4 h-4 text-gold shrink-0" />Easy to carry</li></ul></div>
          </div>

          {reviews.length > 0 && <div className="mt-20 pt-12 border-t border-border"><h2 className="font-serif-display text-2xl text-foreground mb-8">Customer Reviews</h2><div className="grid md:grid-cols-2 gap-4">{reviews.map((review) => <div key={review.id} className="p-5 border border-border rounded-sm"><div className="flex gap-1 mb-2">{Array.from({ length: review.rating }).map((_, index) => <Star key={index} className="w-4 h-4 fill-gold text-gold" />)}</div><p className="font-sans-body text-sm text-foreground/65 italic mb-3">&ldquo;{review.review_text}&rdquo;</p><p className="font-sans-body text-xs text-foreground/50">— {review.customer_name}</p></div>)}</div></div>}
        </div>
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}

function Note({ label, value }: { label: string; value: string | null }) {
  return <div><p className="font-sans-body text-xs tracking-widest uppercase text-gold mb-1">{label}</p><p className="font-sans-body text-sm text-foreground/65">{value || 'A carefully blended composition'}</p></div>;
}
