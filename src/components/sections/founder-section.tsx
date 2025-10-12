
'use client';

import Image from "next/image";
import ScrollReveal from "@/components/scroll-reveal";

export default function FounderSection() {
  return (
    <section className="py-20 px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto p-8 border rounded-lg">
            <ScrollReveal>
                <div className="relative aspect-square rounded-lg overflow-hidden border">
                    <Image 
                        src="/rob.jpeg"
                        alt="Founder of Exnus Protocol"
                        fill
                        className="object-cover"
                    />
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
    </section>
  );
}
