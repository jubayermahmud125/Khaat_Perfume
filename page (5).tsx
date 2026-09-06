'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { CheckCircle2, ChevronLeft, Loader2, ShoppingBag } from 'lucide-react';
import { supabase } from '@/lib/supabase-client';
import { useCart } from '@/lib/cart-context';
import { Header } from '@/components/site/header';
import { Footer } from '@/components/site/footer';
import { CartDrawer } from '@/components/site/cart-drawer';

export default function CheckoutPage() {
  const { items, totalAmount, clearCart } = useCart();
  const [form, setForm] = useState({ name: '', phone: '', address: '', city: '', payment: 'Cash on Delivery' });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [orderId, setOrderId] = useState('');

  const updateField = (field: keyof typeof form, value: string) => setForm((current) => ({ ...current, [field]: value }));

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    if (items.length === 0) {
      setError('Your bag is empty. Please add a perfume before ordering.');
      return;
    }
    setSubmitting(true);
    const { data: order, error: orderError } = await supabase.from('orders').insert({
      customer_name: form.name.trim(),
      phone: form.phone.trim(),
      address: form.address.trim(),
      city: form.city.trim(),
      payment_method: form.payment,
      total_amount: totalAmount,
    }).select('id').maybeSingle();

    if (orderError || !order) {
      setError('We could not place your order right now. Please try again or contact us directly.');
      setSubmitting(false);
      return;
    }

    const { error: itemsError } = await supabase.from('order_items').insert(items.map((item) => ({
      order_id: order.id,
      product_id: item.product_id,
      product_name: item.product_name,
      size: item.size,
      quantity: item.quantity,
      unit_price: item.unit_price,
      line_total: item.unit_price * item.quantity,
    })));

    if (itemsError) {
      setError('Your order could not be completed. Please contact us so we can help.');
      setSubmitting(false);
      return;
    }
    setOrderId(order.id);
    clearCart();
    setSubmitting(false);
  }

  if (orderId) {
    return <><Header /><main className="pt-28 min-h-[70vh] flex items-center justify-center px-4"><div className="max-w-md text-center"><CheckCircle2 className="w-16 h-16 text-gold mx-auto mb-6" strokeWidth={1.2} /><span className="block text-xs font-sans-body tracking-[0.3em] uppercase text-gold mb-3">Order Received</span><h1 className="font-serif-display text-4xl text-foreground mb-4">Thank You</h1><p className="font-sans-body text-foreground/60 leading-relaxed mb-8">Your order has been received. We will contact you soon to confirm delivery details.</p><Link href="/shop" className="inline-flex px-8 py-4 bg-primary text-primary-foreground text-xs font-sans-body tracking-widest uppercase rounded-sm hover:bg-accent transition-colors">Continue Shopping</Link></div></main><Footer /><CartDrawer /></>;
  }

  return (
    <>
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <Link href="/shop" className="inline-flex items-center gap-2 text-xs font-sans-body tracking-widest uppercase text-foreground/50 hover:text-gold mb-8"><ChevronLeft className="w-4 h-4" /> Continue shopping</Link>
          <div className="grid lg:grid-cols-[1fr_360px] gap-8 lg:gap-12 items-start">
            <div><span className="block text-xs font-sans-body tracking-[0.3em] uppercase text-gold mb-3">Simple checkout</span><h1 className="font-serif-display text-4xl text-foreground mb-8">Complete Your Order</h1><form onSubmit={handleSubmit} className="space-y-5"><Field label="Name" value={form.name} onChange={(value) => updateField('name', value)} required /><Field label="Phone Number" type="tel" value={form.phone} onChange={(value) => updateField('phone', value)} required /><Field label="Delivery Address" value={form.address} onChange={(value) => updateField('address', value)} required textarea /><Field label="City / Area" value={form.city} onChange={(value) => updateField('city', value)} required /><div><label className="block font-sans-body text-xs tracking-widest uppercase text-foreground/60 mb-2">Payment Method</label><div className="p-4 border border-gold bg-gold/5 rounded-sm"><label className="flex items-center gap-3 font-sans-body text-sm text-foreground"><input type="radio" checked readOnly className="accent-[hsl(var(--gold))]" /> Cash on Delivery</label><p className="text-xs font-sans-body text-foreground/50 mt-1 ml-6">Pay when your order arrives.</p></div></div>{error && <p className="p-3 bg-destructive/10 border border-destructive/20 text-destructive text-sm font-sans-body rounded-sm">{error}</p>}<button type="submit" disabled={submitting || items.length === 0} className="w-full py-4 bg-primary text-primary-foreground text-xs font-sans-body tracking-[0.2em] uppercase rounded-sm hover:bg-accent transition-colors disabled:opacity-50 flex items-center justify-center gap-2">{submitting ? <><Loader2 className="w-4 h-4 animate-spin" /> Placing order...</> : 'Confirm Order'}</button></form></div>
            <aside className="bg-secondary/40 border border-border rounded-sm p-5 lg:p-6 lg:sticky lg:top-24"><div className="flex items-center gap-2 mb-5"><ShoppingBag className="w-5 h-5 text-gold" strokeWidth={1.5} /><h2 className="font-serif-display text-xl">Your Order</h2></div>{items.length === 0 ? <p className="font-sans-body text-sm text-foreground/50">Your bag is empty.</p> : <div className="space-y-4">{items.map((item) => <div key={item.id} className="flex gap-3"><img src={item.image_url} alt={item.product_name} className="w-14 h-16 object-cover rounded-sm" /><div className="flex-1"><p className="font-serif-display text-sm">{item.product_name}</p><p className="font-sans-body text-xs text-foreground/50">{item.size} · Qty {item.quantity}</p></div><span className="font-serif-display text-sm">৳{item.unit_price * item.quantity}</span></div>)}<div className="border-t border-border pt-4 flex items-center justify-between"><span className="font-sans-body text-sm text-foreground/60">Total</span><span className="font-serif-display text-2xl">৳{totalAmount}</span></div></div>}</aside>
          </div>
        </div>
      </main>
      <Footer /><CartDrawer />
    </>
  );
}

function Field({ label, value, onChange, required, type = 'text', textarea = false }: { label: string; value: string; onChange: (value: string) => void; required?: boolean; type?: string; textarea?: boolean }) {
  const className = 'w-full px-4 py-3 bg-background border border-border rounded-sm font-sans-body text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-gold transition-colors';
  return <div><label className="block font-sans-body text-xs tracking-widest uppercase text-foreground/60 mb-2">{label}</label>{textarea ? <textarea required={required} value={value} onChange={(event) => onChange(event.target.value)} className={`${className} min-h-28 resize-y`} /> : <input required={required} type={type} value={value} onChange={(event) => onChange(event.target.value)} className={className} />}</div>;
}
