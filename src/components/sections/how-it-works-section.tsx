
'use client';

import Image from 'next/image';
import ScrollReveal from '../scroll-reveal';

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
        <div className="relative w-full rounded-lg overflow-hidden border">
            <Image
                src="/7.jpeg"
                alt="How it works diagram"
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
            />
        </div>
      </ScrollReveal>
    </section>
  );
}
