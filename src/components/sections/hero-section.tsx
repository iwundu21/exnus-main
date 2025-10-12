
'use client';

import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/scroll-reveal";

export default function HeroSection() {
  return (
    <section 
      className="container mx-auto flex flex-col items-center justify-center text-center py-20"
    >
      <div>
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              The Incentive Layer for a
              <br />
              <span className="relative">
                <span className="gradient-text">Decentralized World</span>
              </span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="max-w-xl mx-auto text-lg md:text-xl text-muted-foreground mb-10">
              Exnus Protocol is building a sustainable reward ecosystem designed to foster long-term commitment and drive lasting innovation in Web3.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={400}>
            <div className="flex flex-col items-center gap-6">
                <Button asChild size="lg" className="w-full max-w-xs text-lg rounded-full font-semibold relative overflow-hidden bg-slate-800 border border-slate-700 hover:bg-slate-700 transition-all duration-300">
                    <a href="/documents">
                        <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-900 px-8 py-3 text-sm font-medium text-gray-50 backdrop-blur-3xl">
                            Explore the Protocol
                        </span>
                    </a>
                </Button>
            </div>
          </ScrollReveal>
      </div>
    </section>
  );
}
