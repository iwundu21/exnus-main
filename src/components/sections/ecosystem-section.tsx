
import ScrollReveal from "../scroll-reveal";
import { Button } from "../ui/button";

const ecosystemLinks = [
  {
    title: "Integrations",
    description: "A growing list of platforms and services that have integrated the Exnus protocol.",
    href: "/ecosystem/integrations",
    icon: (
        <svg className="w-10 h-10 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
  },
  {
    title: "Community Projects",
    description: "Discover innovative projects and tools built by our vibrant and talented community members.",
    href: "/ecosystem/community",
    icon: (
         <svg className="w-10 h-10 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.125-1.273-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.125-1.273.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
    )
  },
];

export default function EcosystemSection() {
  return (
    <section 
      id="ecosystem"
      className="relative"
    >
      <div className="relative z-10 p-8 md:p-12">
        <div className="text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
              Explore Our Growing Ecosystem
            </h2>
            <p className="max-w-3xl mx-auto text-center text-foreground/80 mb-12">
              The Exnus protocol is more than just technology; it's a thriving network of partners, integrations, and community-led initiatives all working together to build a decentralized future.
            </p>
          </ScrollReveal>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {ecosystemLinks.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 150}>
              <a href={item.href} className="block h-full group">
                <div 
                  className="relative h-full p-6 border rounded-lg overflow-hidden transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-lg flex flex-col"
                >
                  <div className="absolute inset-0 opacity-[0.02]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><defs><pattern id={`pattern-eco-${index}`} patternUnits="userSpaceOnUse" width="40" height="40" patternTransform={`scale(1) rotate(${index * 60})`}><rect x="0" y="0" width="100%" height="100%" fill="hsla(0,0%,100%,0)"/><path d="M10-5v20M-5 10h20" strokeWidth="0.5" stroke="hsl(var(--primary))" fill="none"/></pattern></defs><rect width="800%" height="800%" transform="translate(0,0)" fill={`url(#pattern-eco-${index})`}/></svg>
                  </div>
                  <div className="relative z-10 flex flex-col items-center text-center flex-grow">
                    <div className="p-4 bg-primary/10 rounded-full mb-4 w-fit">
                      {item.icon}
                    </div>
                    <h3 className="text-xl text-primary font-bold">{item.title}</h3>
                    <p className="text-foreground/80 mt-2">{item.description}</p>
                  </div>
                   <div className="relative z-10 mt-6 flex justify-center">
                        <Button variant="outline" tabIndex={-1}>
                            Learn More
                        </Button>
                    </div>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
