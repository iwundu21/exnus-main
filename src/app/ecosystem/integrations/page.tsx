
import ScrollReveal from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const integrationSteps = [
    {
        title: "Developer SDK",
        description: "Our comprehensive Software Development Kit (SDK) provides all the tools and documentation needed to seamlessly integrate your dApp with the Exnus reward system. Simplify development and focus on what matters most: your user experience."
    },
    {
        title: "Flexible API",
        description: "For more customized solutions, our flexible API allows direct interaction with the protocol's core functions. Track contributions, query reward data, and build custom logic to suit your application's unique needs."
    },
    {
        title: "Smart Contract Composability",
        description: "Built on Solana, Exnus is designed for composability. Our smart contracts can be directly invoked by other on-chain programs, allowing for deep, trustless integrations that expand the utility of your platform."
    }
];

export default function IntegrationsPage() {
  return (
    <div>
      <section className="relative py-12 px-4 md:px-6">
        <Link href="/ecosystem/partners" className="absolute top-4 left-4 md:top-8 md:left-8 flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Ecosystem</span>
        </Link>
        <div className="text-center pt-12">
            <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 gradient-text">
                Protocol Integrations
            </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
            <p className="max-w-3xl mx-auto text-lg text-foreground/80">
                The Exnus Protocol is designed to be the foundational incentive layer for the decentralized web. Our goal is to empower developers and projects to build vibrant, engaged communities by providing a flexible and powerful framework for rewarding user contributions. Whether you're building a DeFi platform, a social dApp, or a gaming ecosystem, Exnus can be integrated to drive user participation and long-term value.
            </p>
            </ScrollReveal>
        </div>
      </section>

      <section className="py-12 px-4 md:px-6">
        <div className="max-w-5xl mx-auto mt-8 grid md:grid-cols-3 gap-8 text-left">
          {integrationSteps.map((step, index) => (
            <ScrollReveal key={step.title} delay={index * 150}>
              <div className="p-6 border rounded-lg h-full border-border/50">
                <div className="p-4 bg-primary/10 rounded-full w-fit mb-4">
                   <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-primary">{step.title}</h3>
                  <p className="mt-2 text-foreground/80">
                    {step.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="py-12 px-4 md:px-6">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto p-8 border rounded-lg border-border/50 text-center">
              <h3 className="font-bold text-xl text-primary">Start Building with Exnus</h3>
              <p className="mt-4 text-foreground/70">
                  Ready to integrate the next generation of decentralized incentives into your project? Explore our technical documentation to get started.
              </p>
               <div className="mt-8 flex justify-center">
                  <Button asChild size="lg" className="w-full max-w-xs text-lg rounded-full font-semibold relative overflow-hidden bg-slate-800 border border-slate-700 hover:bg-slate-700 transition-all duration-300">
                    <a href="/documents">
                        <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-900 px-8 py-3 text-sm font-medium text-gray-50 backdrop-blur-3xl">
                            View Documentation
                        </span>
                    </a>
                </Button>
                </div>
            </div>
          </ScrollReveal>
      </section>
    </div>
  );
}
