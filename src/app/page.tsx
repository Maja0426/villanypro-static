import Header from '@/components/landing/header';
import Hero from '@/components/landing/hero';
import Benefits from '@/components/landing/benefits';
import Features from '@/components/landing/features';
import Testimonials from '@/components/landing/testimonials';
import Pricing from '@/components/landing/pricing';
import Footer from '@/components/landing/footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Benefits />
        <Features />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
