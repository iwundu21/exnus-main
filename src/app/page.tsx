
import HeroSection from '@/components/sections/hero-section';
import FeaturesSection from '@/components/sections/features-section';
import HowItWorksSection from '@/components/sections/how-it-works-section';
import CtaSection from '@/components/sections/cta-section';
import EcosystemSection from '@/components/sections/ecosystem-section';
import FounderSection from '@/components/sections/founder-section';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className="py-20 px-4 md:px-6">
         <div className="p-4 md:p-8 rounded-lg border border-border/50">
            <FeaturesSection />
        </div>
      </div>
      <div className="py-20 px-4 md:px-6">
        <HowItWorksSection />
      </div>
       <div className="py-20 px-4 md:px-6">
        <div className="p-4 md:p-8 rounded-lg border border-border/50">
            <FounderSection />
        </div>
      </div>
      <div className="py-20 px-4 md:px-6">
        <div className="p-4 md:p-8 rounded-lg border border-border/50">
            <EcosystemSection />
        </div>
      </div>
      <div className="py-20 px-4 md:px-6">
        <div className="p-4 md:p-8 rounded-lg border border-border/50">
            <CtaSection />
        </div>
      </div>
    </div>
  );
}
