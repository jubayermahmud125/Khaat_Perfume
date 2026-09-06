'use client';

import Link from 'next/link';
import { Star, ArrowRight } from 'lucide-react';
import type { Product } from '@/lib/types';
import { getStartingPrice } from '@/lib/types';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="group block bg-card rounded-sm overflow-hidden border border-border hover:border-gold/40 transition-all duration-500 animate-fade-in-up"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
        {product.image_url && (
          <img
            src={product.image_url}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}
        {product.badge && (
          <div className="absolute top-3 left-3 px-3 py-1 bg-gold text-white text-[10px] font-sans-body tracking-widest uppercase rounded-sm">
            {product.badge}
          </div>
        )}
        {!product.in_stock && (
          <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
            <span className="font-sans-body text-sm tracking-widest uppercase text-foreground/60">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      {/* Details */}
      <div className="p-4">
        <h3 className="font-serif-display text-lg text-foreground mb-1 group-hover:text-gold transition-colors duration-300">
          {product.name}
        </h3>
        {product.scent_tags && (
          <p className="font-sans-body text-xs text-foreground/50 mb-3">
            {product.scent_tags.split(',').slice(0, 3).join(' · ')}
          </p>
        )}
        <div className="flex items-center justify-between">
          <div>
            <span className="font-sans-body text-xs text-foreground/40">From</span>
            <span className="font-serif-display text-lg text-foreground ml-1">
              ৳{getStartingPrice(product)}
            </span>
          </div>
          <div className="flex items-center gap-1 text-gold group-hover:gap-2 transition-all duration-300">
            <span className="text-[10px] font-sans-body tracking-widest uppercase">
              View
            </span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}
