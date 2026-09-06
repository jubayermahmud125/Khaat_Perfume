import { ShieldCheck, Layers, Truck, Heart } from 'lucide-react';
import { Header } from '@/components/site/header';
import { Footer } from '@/components/site/footer';
import { CartDrawer } from '@/components/site/cart-drawer';

const values = [
  { icon: ShieldCheck, title: 'Quality', text: 'Carefully selected fragrances you can feel confident wearing.' },
  { icon: Layers, title: 'Variety', text: 'Fresh, aquatic, sweet, floral, woody, and warm scents for every mood.' },
  { icon: Truck, title: 'Convenience', text: 'Pocket-friendly sizes that fit your lifestyle and your budget.' },
  { icon: Heart, title: 'Trust', text: 'Straightforward service, easy ordering, and customer care you can reach.' },
];

export default function AboutPage() {
  return (
    <><Header /><main className="pt-20"><section className="bg-primary text-primary-foreground py-20"><div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"><span className="block text-xs font-sans-body tracking-[0.3em] uppercase text-gold mb-3">Our Story</span><h1 className="font-serif-display text-4xl md:text-5xl">About KHAAT</h1></div></section><section className="py-16 lg:py-24"><div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-20 items-center"><div className="aspect-[4/5] rounded-sm overflow-hidden"><img src="https://images.pexels.com/photos/8450219/pexels-photo-8450219.jpeg?auto=compress&cs=tinysrgb&w=900" alt="Perfume making" className="w-full h-full object-cover" /></div><div><span className="block text-xs font-sans-body tracking-[0.3em] uppercase text-gold mb-3">Your Premium Perfumery Stop</span><h2 className="font-serif-display text-3xl md:text-4xl text-foreground mb-6">Great fragrance should be easy to experience.</h2><div className="space-y-4 font-sans-body text-foreground/65 leading-relaxed"><p>We believe you shouldn&apos;t always have to buy a full-size bottle to discover a scent you love. KHAAT brings carefully selected fragrances to you in convenient, pocket-friendly sizes.</p><p>From a 6ML pocket perfume for your everyday carry to a 50ML bottle for your collection, every size makes it easier to find and wear your signature scent.</p><p>Our promise is simple: quality, variety, convenience, and trust — delivered with personal customer care.</p></div></div></div></section><section className="py-16 lg:py-24 bg-secondary/30"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-12"><span className="block text-xs font-sans-body tracking-[0.3em] uppercase text-gold mb-3">What We Stand For</span><h2 className="font-serif-display text-3xl md:text-4xl">The KHAAT Promise</h2></div><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">{values.map((value) => { const Icon = value.icon; return <div key={value.title} className="bg-card border border-border rounded-sm p-6 text-center"><div className="w-14 h-14 mx-auto rounded-full border border-gold/30 flex items-center justify-center mb-4"><Icon className="w-6 h-6 text-gold" strokeWidth={1.5} /></div><h3 className="font-serif-display text-xl mb-2">{value.title}</h3><p className="font-sans-body text-sm text-foreground/60 leading-relaxed">{value.text}</p></div>; })}</div></div></section></main><Footer /><CartDrawer /></>
  );
}
