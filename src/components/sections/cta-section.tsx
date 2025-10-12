
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/scroll-reveal";

export default function CtaSection() {
  return (
    <section className="container mx-auto">
      <div className="text-center">
        <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 gradient-text">Explore the Exnus Ecosystem</h2>
            <p className="max-w-2xl mx-auto text-center text-foreground/70 mb-12">
                Dive deep into the technical architecture, smart contracts, and strategic vision of our protocol.
            </p>
        </ScrollReveal>
      </div>
      <div className="flex justify-center">
          <ScrollReveal delay={150}>
                <Button asChild size="lg" className="w-full max-w-xs text-lg rounded-full font-semibold relative overflow-hidden bg-slate-800 border border-slate-700 hover:bg-slate-700 transition-all duration-300">
                    <a href="/documents">
                        <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-900 px-8 py-3 text-sm font-medium text-gray-50 backdrop-blur-3xl">
                            Read the Documents
                        </span>
                    </a>
                </Button>
          </ScrollReveal>
      </div>
    </section>
  );
}
