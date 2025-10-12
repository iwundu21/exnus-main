
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/scroll-reveal";
import { HeroBackground } from "./hero-background";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";

export default function HeroSection() {
  return (
    <section 
      className="relative overflow-hidden min-h-screen flex items-center justify-center"
    >
      <HeroBackground />
      <div className="relative z-10 text-center px-4">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              <span className="gradient-text">SNIPE AND SELL</span>
              <br />
              TOKENS AT
              <br />
              <span className="relative">
                LIGHTNING SPEED
                <span 
                  className="absolute -right-4 -top-2 w-24 h-16 bg-yellow-300/80 rounded-full blur-2xl"
                  style={{ animation: 'pulse 2s infinite' }}
                ></span>
              </span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-10">
              Connect to start trading SOL now
            </p>
          </ScrollReveal>
          <ScrollReveal delay={400}>
            <div className="flex flex-col items-center gap-6">
                <Button size="lg" className="w-full max-w-xs text-lg rounded-full font-semibold">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-6 w-6"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2Z"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><path d="M9 9h.01"/><path d="M15 9h.01"/></svg>
                    Connect Wallet
                </Button>
                <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms" className="text-muted-foreground text-sm">
                        By connecting, I agree to the <a href="#" className="underline text-foreground">Terms</a> & <a href="#" className="underline text-foreground">Privacy</a>
                    </Label>
                </div>
            </div>
          </ScrollReveal>
      </div>
      <style jsx>{`
        @keyframes pulse {
            0%, 100% {
                transform: scale(1);
                opacity: 0.8;
            }
            50% {
                transform: scale(1.2);
                opacity: 1;
            }
        }
      `}</style>
    </section>
  );
}
