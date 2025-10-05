import HeroSection from '@/components/sections/hero-section';
import FeaturesSection from '@/components/sections/features-section';
import HowItWorksSection from '@/components/sections/how-it-works-section';
import CtaSection from '@/components/sections/cta-section';

export default function Home() {
  return (
    <div className="space-y-20 md:space-y-0">
      <HeroSection />
      <div className="p-4 sm:p-6 md:p-8 space-y-20">
        <FeaturesSection />
        <HowItWorksSection />
        <CtaSection />
      </div>
    </div>
  );
}
