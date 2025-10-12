
'use client';

import Image from 'next/image';
import ScrollReveal from '../scroll-reveal';

export default function HowItWorksSection() {
  return (
    <section id="how-it-works">
      <ScrollReveal>
        <div className="relative w-full rounded-lg overflow-hidden border">
            <Image
                src="/rob.jpeg"
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
