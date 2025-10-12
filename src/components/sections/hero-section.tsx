'use client';

import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/scroll-reveal";
import { HeroBackground } from "./hero-background";

export default function HeroSection() {
  return (
    <section 
      className="relative overflow-hidden min-h-[70vh] md:min-h-[80vh] flex items-center justify-center"
    >
      <HeroBackground />
      <div className="relative z-10 text-center px-4">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              The Incentive Layer for a
              <br />
              <span className="relative">
                <span className="gradient-text">Decentralized World</span>
                <span 
                  className="absolute -right-4 -top-2 w-24 h-16 bg-primary/20 rounded-full blur-2xl"
                  style={{ animation: 'pulse 2s infinite' }}
                ></span>
              </span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-10">
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
      <style jsx>{`
        @keyframes pulse {
            0%, 100% {
                transform: scale(1);
                opacity: 0.6;
            }
            50% {
                transform: scale(1.2);
                opacity: 0.9;
            }
        }
      `}</style>
    </section>
  );
}
