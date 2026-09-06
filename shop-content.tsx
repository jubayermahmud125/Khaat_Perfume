'use client';

import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { supabase } from '@/lib/supabase-client';
import type { Product, Category } from '@/lib/types';
import { ProductCard } from '@/components/site/product-card';
import { Header } from '@/components/site/header';
import { Footer } from '@/components/site/footer';
import { CartDrawer } from '@/components/site/cart-drawer';
import { cn } from '@/lib/utils';

type SortOption = 'popular' | 'price-low' | 'price-high' | 'new';

export default function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState<SortOption>('popular');

  useEffect(() => {
    async function fetchData() {
      const [{ data: productsData }, { data: categoriesData }] = await Promise.all([
        supabase.from('products').select('*').order('sort_order'),
        supabase.from('categories').select('*').order('name'),
      ]);
      setProducts((productsData || []) as Product[]);
      setCategories((categoriesData || []) as Category[]);
      setLoading(false);
    }
    fetchData();
  }, []);

  const filteredProducts = useMemo(() => {
    let result = [...products];
    const categoryMap: Record<string, string[]> = {
      'fresh-aquatic': ['fresh', 'aquatic'],
      'fresh-citrus': ['fresh', 'citrus'],
      'floral-sweet': ['floral', 'sweet'],
      'woody-oud': ['woody', 'oud'],
      'sweet-warm': ['sweet', 'warm'],
      'attar-concentrated-oils': ['attar'],
    };
    if (activeCategory !== 'all') {
      const keywords = categoryMap[activeCategory] || [];
      result = result.filter((product) =>
        keywords.some((keyword) =>
          product.scent_tags?.toLowerCase().includes(keyword),
        ),
      );
    }
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price_6ml - b.price_6ml);
        break;
      case 'price-high':
        result.sort((a, b) => b.price_6ml - a.price_6ml);
        break;
      case 'new':
        result.sort((a, b) => Number(b.is_new_arrival) - Number(a.is_new_arrival));
        break;
      default:
        result.sort((a, b) => a.sort_order - b.sort_order);
    }
    return result;
  }, [products, activeCategory, sortBy]);

  const filterTabs = [
    { slug: 'all', name: 'All' },
    ...categories.map((category) => ({ slug: category.slug, name: category.name })),
  ];

  return (
    <>
      <Header />
      <main className="pt-20">
        <div className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="block text-xs font-sans-body tracking-[0.3em] uppercase text-gold mb-3">
              KHAAT Collection
            </span>
            <h1 className="font-serif-display text-4xl md:text-5xl text-primary-foreground">
              All Perfumes
            </h1>
          </div>
        </div>
        <div className="sticky top-16 z-30 bg-background/95 backdrop-blur-md border-b border-border py-4">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {filterTabs.map((tab) => (
                  <button
                    key={tab.slug}
                    onClick={() => setActiveCategory(tab.slug)}
                    className={cn(
                      'px-4 py-2 text-xs font-sans-body tracking-widest uppercase rounded-sm whitespace-nowrap transition-all duration-300',
                      activeCategory === tab.slug
                        ? 'bg-primary text-primary-foreground'
                        : 'border border-border text-foreground/60 hover:border-gold hover:text-gold',
                    )}
                  >
                    {tab.name}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-sans-body tracking-widest uppercase text-foreground/40">Sort</span>
                <select
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value as SortOption)}
                  className="px-3 py-2 text-xs font-sans-body border border-border rounded-sm bg-background text-foreground focus:outline-none focus:border-gold"
                >
                  <option value="popular">Popular</option>
                  <option value="price-low">Price: Low → High</option>
                  <option value="price-high">Price: High → Low</option>
                  <option value="new">New Arrivals</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {loading ? (
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                {Array.from({ length: 8 }).map((_, index) => (
                  <div key={index} className="aspect-[3/4] bg-secondary animate-pulse rounded-sm" />
                ))}
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="text-center py-20 font-sans-body text-foreground/50">
                No perfumes found in this category.
              </div>
            ) : (
              <>
                <p className="font-sans-body text-sm text-foreground/50 mb-6">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'fragrance' : 'fragrances'} found
                </p>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                  {filteredProducts.map((product, index) => (
                    <ProductCard key={product.id} product={product} index={index} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}
