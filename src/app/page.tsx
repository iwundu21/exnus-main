import HeroSection from '@/components/sections/hero-section';
import FeaturesSection from '@/components/sections/features-section';
import HowItWorksSection from '@/components/sections/how-it-works-section';
import CtaSection from '@/components/sections/cta-section';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className="py-20 px-4 md:px-6">
        <FeaturesSection />
      </div>
      <div className="py-20 px-4 md:px-6">
        <HowItWorksSection />
      </div>
      <div className="py-20 px-4 md:px-6">
        <CtaSection />
      </div>
    </div>
  );
}
