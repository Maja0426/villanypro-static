import Header from '@/components/landing/header';
import Hero from '@/components/landing/hero';
import Benefits from '@/components/landing/benefits';
import Features from '@/components/landing/features';
import Testimonials from '@/components/landing/testimonials';
import Faq from '@/components/landing/faq';
import Pricing from '@/components/landing/pricing';
import Footer from '@/components/landing/footer';
import HowItWorks from '@/components/landing/how-it-works';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Benefits />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Faq />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
