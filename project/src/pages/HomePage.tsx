import { PublicLayout } from '@/components/PublicLayout';
import { Hero } from '@/components/home/Hero';
import { FeaturesGrid } from '@/components/home/FeaturesGrid';
import { Benefits } from '@/components/home/Benefits';
import { Statistics } from '@/components/home/Statistics';
import { Testimonials } from '@/components/home/Testimonials';
import { FAQ } from '@/components/home/FAQ';
import { CTA } from '@/components/home/CTA';

export function HomePage() {
  return (
    <PublicLayout>
      <Hero />
      <FeaturesGrid />
      <Benefits />
      <Statistics />
      <Testimonials />
      <FAQ />
      <CTA />
    </PublicLayout>
  );
}
