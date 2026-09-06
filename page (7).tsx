import { Header } from '@/components/site/header';
import { Hero } from '@/components/site/hero';
import { Bestsellers } from '@/components/site/bestsellers';
import { ChooseScent } from '@/components/site/choose-scent';
import { Combos } from '@/components/site/combos';
import { NewArrivals } from '@/components/site/new-arrivals';
import { Reviews } from '@/components/site/reviews';
import { AboutPreview } from '@/components/site/about-preview';
import { SocialSection } from '@/components/site/social-section';
import { Footer } from '@/components/site/footer';
import { CartDrawer } from '@/components/site/cart-drawer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Bestsellers />
        <ChooseScent />
        <Combos />
        <NewArrivals />
        <Reviews />
        <AboutPreview />
        <SocialSection />
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}
