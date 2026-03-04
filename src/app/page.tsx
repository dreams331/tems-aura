import Hero from '@/components/home/Hero';
import FeaturedDesigns from '@/components/home/FeaturedDesigns';
import HowItWorks from '@/components/home/HowItWorks';
import Testimonials from '@/components/home/Testimonials';
import ContactSection from '@/components/home/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedDesigns />
      <HowItWorks />
      <Testimonials />
      <ContactSection />
    </div>
  );
}
