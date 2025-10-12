
'use client';

import Image from "next/image";
import ScrollReveal from "@/components/scroll-reveal";

export default function FounderSection() {
  return (
    <section 
      className="relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/4.jpeg')" }}
    >
      <div className="absolute inset-0 bg-background/90 backdrop-blur-sm"></div>
      <div className="relative z-10 p-8 md:p-12 lg:p-20">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <ScrollReveal>
                <div className="relative aspect-square rounded-lg overflow-hidden border group">
                    <Image 
                        src="/rob.jpeg"
                        alt="Founder of Exnus Protocol"
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-300 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent mix-blend-hard-light"></div>
                </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">A Message from Our Founder</h2>
                    <p className="text-foreground/80 text-lg mb-6">
                        "We started Exnus Protocol with a simple but powerful idea: to build a decentralized future that truly rewards commitment and collaboration. In a landscape often driven by short-term gains, we are dedicated to fostering a sustainable ecosystem where every contribution matters. Our mission is to empower builders, creators, and community members to become true stakeholders in the future of Web3."
                    </p>
                    <p className="text-foreground/70 font-semibold">
                        - Rob, Founder of Exnus Protocol
                    </p>
                </div>
            </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
