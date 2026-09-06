'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCart } from '@/lib/cart-context';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Perfumes', href: '/shop' },
  { label: 'Attars', href: '/shop?category=attar-concentrated-oils' },
  { label: 'Combos', href: '/#combos' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { totalItems, setCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled || pathname !== '/'
          ? 'bg-background/95 backdrop-blur-md shadow-[0_1px_0_0_hsl(var(--gold)/0.15)] py-3'
          : 'bg-transparent py-5',
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="KHAAT home">
            <span className="flex items-center gap-3 group" aria-label="KHAAT home">
              <img
                src="/logo.png"
                alt="KHAAT logo"
                className="h-9 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                style={{ filter: 'none'}}
              />
            </span>
            <span className="flex items-baseline gap-1">
              <span className="font-serif-display text-2xl tracking-[0.15em] text-foreground transition-colors duration-300 lg:text-3xl">
                KHAAT
              </span>
              <span className="hidden text-[10px] font-sans-body tracking-[0.2em] uppercase text-gold sm:inline">
                Perfume
              </span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href.split('#')[0]) &&
                    link.href !== '/';
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    'relative text-xs font-sans-body tracking-[0.2em] uppercase transition-colors duration-300',
                    isActive
                      ? 'text-gold'
                      : 'text-foreground/70 hover:text-gold',
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-px bg-gold" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              aria-label="Cart"
              onClick={() => setCartOpen(true)}
              className="relative text-foreground/70 hover:text-gold transition-colors duration-300"
            >
              <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-gold text-[10px] flex items-center justify-center text-white font-medium">
                  {totalItems}
                </span>
              )}
            </button>
            <button
              aria-label="Menu"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-foreground/70 hover:text-gold transition-colors duration-300"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="lg:hidden mt-4 pb-4 flex flex-col gap-1 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-sans-body tracking-[0.15em] uppercase text-foreground/80 hover:text-gold transition-colors duration-300 py-3 border-b border-border"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
