
import ScrollReveal from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import { StakingRewardsDiagram } from "@/components/sections/diagrams/staking-rewards-diagram";


const principles = [
    {
      title: "Long-Term Value Creation",
      description: "Our model is designed to reward sustained participation, not short-term speculation. We believe that true ecosystem health comes from a community that is invested in the protocol's future success."
    },
    {
      title: "Sustainable Tokenomics",
      description: "We employ a carefully planned vesting and distribution schedule to prevent token inflation and ensure that rewards remain meaningful over the long run, fostering a stable and predictable economic environment."
    },
    {
      title: "Community-Centric Governance",
      description: "A sustainable ecosystem is one that is governed by its users. We empower our community with the tools and voting power necessary to guide the protocol's evolution and collectively manage its resources."
    },
    {
      title: "Fair and Transparent Distribution",
      description: "All rewards are calculated and distributed through transparent, auditable smart contracts. Our system is designed to be fair, inclusive, and resistant to manipulation, building trust within our community."
    }
];

export default function AboutPage() {
  return (
    <div>
      <section className="py-12 px-4 md:px-6">
        <div className="text-center">
            <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 gradient-text">
                Our Mission: A Sustainable Reward Ecosystem
            </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
            <p className="max-w-3xl mx-auto text-lg text-foreground/80">
                At Exnus Protocol, our mission is to build the incentive layer for a decentralized world that values long-term commitment over fleeting engagement. We are creating a sustainable reward ecosystem designed to foster a dedicated community and drive lasting innovation.
            </p>
            </ScrollReveal>
        </div>
      </section>

      <section className="py-12 px-4 md:px-6">
        <div className="p-6 md:p-8 rounded-lg">
          <div className="grid md:grid-cols-2 gap-12 items-center">
              <ScrollReveal>
                  <div>
                      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Beyond Instant Gratification</h2>
                      <p className="text-foreground/80 text-lg mb-6">
                        In a Web3 landscape often dominated by hype and short-term incentives, we are taking a different approach. We believe that the key to building a resilient and thriving decentralized future lies in creating systems that encourage and reward long-term commitment.
                      </p>
                      <p className="text-foreground/80 text-lg">
                        Our protocol is engineered to ensure that rewards are not just a fleeting bonus, but a continuous stream of value that recognizes sustained participation. By aligning the interests of our users with the long-term health of the network, we are building a community of true stakeholders, not speculators.
                      </p>
                  </div>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <div className="not-prose my-8 relative overflow-hidden rounded-lg shadow-inner border border-border/50">
                    <div className="relative z-10 p-6 md:p-8">
                        <StakingRewardsDiagram />
                    </div>
                </div>
              </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 md:px-6">
        <div className="text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              The Principles of a Sustainable Ecosystem
            </h2>
            <p className="mt-4 text-foreground/80 max-w-3xl mx-auto">
              Our mission is guided by a core set of principles designed to ensure fairness, transparency, and long-term stability.
            </p>
          </ScrollReveal>
        </div>
        <div className="max-w-5xl mx-auto mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          {principles.map((value, index) => (
            <ScrollReveal key={value.title} delay={index * 150}>
              <div className="p-6 border rounded-lg flex flex-col items-center text-center h-full border-border/50">
                 <div className="p-4 bg-primary/10 rounded-full w-fit mb-4">
                    <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-primary">{value.title}</h3>
                  <p className="mt-2 text-foreground/80">
                    {value.description}
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
              <h3 className="font-bold text-xl text-primary">Join a Protocol Built for the Future</h3>
              <p className="mt-4 text-foreground/70">
                  If you believe in building a decentralized world that rewards commitment and fosters sustainable growth, we invite you to join our mission. Together, we can create a more stable and equitable future for Web3.
              </p>
               <div className="mt-8 flex justify-center">
                  <Button asChild size="lg" className="w-full max-w-xs text-lg rounded-full font-semibold relative overflow-hidden bg-slate-800 border border-slate-700 hover:bg-slate-700 transition-all duration-300">
                    <a href="/documents">
                        <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-900 px-8 py-3 text-sm font-medium text-gray-50 backdrop-blur-3xl">
                            Learn More in Our Documents
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
