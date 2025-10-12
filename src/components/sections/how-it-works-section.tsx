
'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HowItWorksDiagram } from "./diagrams/how-it-works-diagram";
import ScrollReveal from "../scroll-reveal";


const howItWorksSteps = [
    {
        value: "contribute",
        title: "1. Contribute & Participate",
        description: "Engage with the ecosystem through development, governance, or community building. The protocol tracks all meaningful contributions, from code commits to forum moderation, ensuring all efforts are recognized.",
        diagram: <HowItWorksDiagram variant="contribute" />
    },
    {
        value: "rewards",
        title: "2. Earn Rewards",
        description: "Based on your verified contributions, the protocol's smart contracts automatically calculate and distribute Exnus tokens to your wallet. The more you contribute, the more you earn.",
        diagram: <HowItWorksDiagram variant="rewards" />
    },
    {
        value: "govern",
        title: "3. Shape the Future",
        description: "Stake your earned tokens to gain voting power in the DAO. Participate in governance to influence the protocol's development, manage the treasury, and guide its long-term strategy.",
        diagram: <HowItWorksDiagram variant="govern" />
    }
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works">
       <div className="text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
              How It Works: A Unified Reward Ecosystem
            </h2>
            <p className="max-w-3xl mx-auto text-center text-foreground/80 mb-12">
              The Exnus protocol is designed to be a seamless and intuitive system that recognizes and rewards all forms of meaningful participation. From development and governance to community building, our three-step process ensures every contribution is valued.
            </p>
          </ScrollReveal>
        </div>
      <ScrollReveal delay={200}>
        <Tabs defaultValue="contribute" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="contribute">Contribute</TabsTrigger>
                <TabsTrigger value="rewards">Earn</TabsTrigger>
                <TabsTrigger value="govern">Govern</TabsTrigger>
            </TabsList>
            {howItWorksSteps.map((step) => (
                 <TabsContent key={step.value} value={step.value}>
                    <div className="flex flex-col gap-8 items-center border rounded-lg p-6">
                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-primary">{step.title}</h3>
                            <p className="text-foreground/70 mt-2 max-w-xl mx-auto">{step.description}</p>
                        </div>
                        <div className="w-full max-w-md">
                           {step.diagram}
                        </div>
                    </div>
                </TabsContent>
            ))}
        </Tabs>
      </ScrollReveal>
    </section>
  );
}
