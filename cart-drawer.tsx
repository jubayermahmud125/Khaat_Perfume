'use client';

import Link from 'next/link';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import { cn } from '@/lib/utils';

export function CartDrawer() {
  const {
    items,
    isCartOpen,
    setCartOpen,
    removeItem,
    updateQuantity,
    totalAmount,
    totalItems,
  } = useCart();

  const handleWhatsAppCheckout = () => {
    const businessNumber = "8801642127315";
    const itemDetails = items
      .map((item) => `${item.product_name} (${item.size || 'Standard'}) x${item.quantity}`)
      .join('%0A- ');

    const message = `*New Order - KHAAT Perfumes*%0A%0A` +
      `*Items:*%0A- ${itemDetails}%0A%0A` +
      `*Total:* ৳${totalAmount}%0A%0A` +
      `Please confirm my order and share payment options (bKash/Nagad/COD).`;

    window.open(`https://wa.me/${businessNumber}?text=${message}`, '_blank');
    setCartOpen(false);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-foreground/40 backdrop-blur-sm z-[60] transition-opacity duration-300',
          isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none',
        )}
        onClick={() => setCartOpen(false)}
      />

      {/* Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 bottom-0 w-full max-w-md bg-background z-[70] shadow-2xl flex flex-col transition-transform duration-400',
          isCartOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-border">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-gold" strokeWidth={1.5} />
            <h2 className="font-serif-display text-xl text-foreground">
              Your Bag
            </h2>
            {totalItems > 0 && (
              <span className="text-sm text-foreground/50">({totalItems})</span>
            )}
          </div>
          <button
            aria-label="Close cart"
            onClick={() => setCartOpen(false)}
            className="text-foreground/60 hover:text-foreground transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-5">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-foreground/20 mb-4" strokeWidth={1} />
              <p className="font-sans-body text-sm text-foreground/50 mb-4">
                Your bag is empty
              </p>
              <Link
                href="/shop"
                onClick={() => setCartOpen(false)}
                className="px-6 py-3 bg-primary text-primary-foreground text-xs font-sans-body tracking-widest uppercase hover:bg-accent transition-colors duration-300 rounded-sm"
              >
                Shop Perfumes
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3 pb-4 border-b border-border"
                >
                  {item.image_url && (
                    <img
                      src={item.image_url}
                      alt={item.product_name}
                      className="w-16 h-20 object-cover rounded-sm flex-shrink-0"
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif-display text-sm text-foreground truncate">
                      {item.product_name}
                    </h3>
                    <p className="font-sans-body text-xs text-foreground/50 mb-2">
                      {item.size}
                      {item.is_combo && ' · Combo'}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          aria-label="Decrease quantity"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-6 h-6 flex items-center justify-center border border-border rounded-sm hover:border-gold transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-sans-body text-sm w-6 text-center">
                          {item.quantity}
                        </span>
                        <button
                          aria-label="Increase quantity"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-6 h-6 flex items-center justify-center border border-border rounded-sm hover:border-gold transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="font-serif-display text-sm text-foreground">
                        ৳{item.unit_price * item.quantity}
                      </span>
                    </div>
                  </div>
                  <button
                    aria-label="Remove item"
                    onClick={() => removeItem(item.id)}
                    className="text-foreground/30 hover:text-destructive transition-colors self-start"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-5 border-t border-border space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-sans-body text-sm text-foreground/60">
                Total
              </span>
              <span className="font-serif-display text-2xl text-foreground">
                ৳{totalAmount}
              </span>
            </div>
            <button
              onClick={handleWhatsAppCheckout}
              className="block w-full py-4 bg-amber-500 text-black font-bold text-center text-xs font-sans-body tracking-[0.2em] uppercase hover:bg-amber-400 transition-colors duration-300 rounded-sm cursor-pointer"
            >
              Order via WhatsApp
            </button>
            <Link
              href="/shop"
              onClick={() => setCartOpen(false)}
              className="block w-full py-2 text-center text-xs font-sans-body tracking-widest uppercase text-foreground/60 hover:text-gold transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </>
  );
}