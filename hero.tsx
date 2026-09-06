'use client';

import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 py-24 px-4 min-h-[70vh] flex flex-col items-center justify-center text-center">
      <img
        src="/hero-bg.jpg.jpeg"
        alt="KHAAT Perfumes"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/20 via-zinc-950/40 to-zinc-950 z-10" />
      <div className="relative z-20 max-w-3xl mx-auto space-y-6">
        <span className="inline-block text-xs sm:text-sm tracking-[0.3em] uppercase text-amber-400 font-sans-body">
          KHAAT — Your Premium Perfumery Stop
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-amber-400">
          Don&apos;t Buy the Whole Bottle.
        </h1>
        <p className="text-lg text-gray-200">
          Discover luxury fragrances in 6ML to 50ML sizes starting from &#2547;200.
        </p>
        <Link
          href="/shop"
          className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-6 py-3 rounded-lg inline-block transition-colors duration-300"
        >
          Shop 6ML Pocket Perfumes (&#2547;200)
        </Link>
      </div>
    </section>
  );
}
