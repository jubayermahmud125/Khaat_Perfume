import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, Jost } from 'next/font/google';
import { CartProvider } from '@/lib/cart-context';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
});

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
    <html lang="en" className={`${playfair.variable} ${jost.variable}`}>
      <body className="font-sans-body antialiased bg-background text-foreground">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
