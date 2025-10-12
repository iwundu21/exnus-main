
import ScrollReveal from "@/components/scroll-reveal";

const partners = [
    {
        name: "Solana Foundation",
        description: "Supporting our growth on the high-performance Solana blockchain to ensure scalability and efficiency.",
        category: "Foundational Partner"
    },
    {
        name: "Realms (by Mango)",
        description: "Leveraging their battle-tested DAO framework to power our community-centric governance model.",
        category: "Governance Partner"
    },
    {
        name: "Chainlink",
        description: "Integrating their decentralized oracle network for secure and reliable off-chain data feeds.",
        category: "Data Partner"
    },
    {
        name: "Pyth Network",
        description: "Utilizing their high-fidelity price feeds to ensure accurate and timely market data for our protocol.",
        category: "Data Partner"
    }
];

export default function PartnersPage() {
  return (
    <div>
      <section className="py-12 px-4 md:px-6">
        <div className="text-center">
            <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 gradient-text">
                Strategic Partners
            </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
            <p className="max-w-3xl mx-auto text-lg text-foreground/80">
                At Exnus Protocol, we believe that collaboration is the key to building a resilient and innovative decentralized future. Our strategic partners are instrumental in providing the foundational technology, security, and data integrity that power our ecosystem. Together, we are committed to driving sustainable growth and fostering a more equitable Web3 landscape.
            </p>
            </ScrollReveal>
        </div>
      </section>

      <section className="py-12 px-4 md:px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {partners.map((partner, index) => (
            <ScrollReveal key={partner.name} delay={index * 150}>
              <div className="p-8 border rounded-lg h-full bg-card/50">
                <div className="mb-4">
                    <span className="text-xs uppercase font-semibold tracking-wider text-primary">{partner.category}</span>
                </div>
                <h3 className="font-bold text-2xl text-foreground mb-3">{partner.name}</h3>
                <p className="text-foreground/80">
                  {partner.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="py-12 px-4 md:px-6">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto p-8 border rounded-lg border-border/50 text-center">
              <h3 className="font-bold text-xl text-primary">Become a Partner</h3>
              <p className="mt-4 text-foreground/70">
                  We are always looking to collaborate with forward-thinking projects that share our vision for a decentralized world. If you believe your project can contribute to the Exnus ecosystem, we invite you to get in touch.
              </p>
               <div className="mt-8">
                  <a href="/contact" className="text-primary hover:underline">
                      Contact Us to Discuss a Partnership &rarr;
                  </a>
                </div>
            </div>
          </ScrollReveal>
      </section>
    </div>
  );
}
