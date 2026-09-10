import './globals.css';
import type { Metadata } from 'next';
import { CartProvider } from '@/lib/cart-context';

export const metadata: Metadata = {
  title: 'KHAAT — Your Premium Perfumery Stop',
  description:
    "KHAAT brings you carefully selected fragrances in convenient sizes — from 6ML pocket perfumes to 50ML bottles. Find your signature scent today.",
  openGraph: {
    title: 'KHAAT — Your Premium Perfumery Stop',
    description:
      'Premium fragrances in pocket-friendly sizes. 6ML, 10ML, 15ML, 30ML, 50ML. Cash on Delivery available.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,300..600;1,300..600&family=Playfair+Display:ital,wght@0,400..700;1,400..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans-body antialiased bg-background text-foreground">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}