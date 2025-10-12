
'use client';

import { useState, useEffect } from "react";
import { StakingDiagram } from "@/components/sections/diagrams/staking-diagram";
import { StakingModelDiagram } from "@/components/sections/diagrams/staking-model-diagram";
import ScrollReveal from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


const benefits = [
    {
        icon: (
            <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 3v18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 17l5-5 4 4 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        ),
        title: "Maximize Your Earnings",
        description: "Earn competitive yields on your staked Exnus tokens. Our model is designed to reward long-term holders with attractive APYs."
    },
    {
        icon: (
             <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 8l-6 6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        ),
        title: "Shape the Future",
        description: "Staking grants you voting power in our Realms-powered DAO. Participate in key decisions and influence the protocol's direction."
    },
    {
        icon: (
            <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        ),
        title: "Strengthen the Network",
        description: "By staking, you contribute to the security and stability of the Exnus ecosystem, making it more robust and decentralized."
    }
];

const faqs = [
    {
        question: "What is locked staking?",
        answer: "Locked staking involves committing your tokens for a fixed period. In return for this commitment, you typically receive a higher annual percentage yield (APY) compared to flexible staking options."
    },
    {
        question: "Can I unstake my tokens early?",
        answer: "Our current model is based on a fixed monthly lock-in period. Early withdrawal options are not available to ensure network stability and fair reward distribution. Please ensure you are comfortable with the lock-up duration before staking."
    },
    {
        question: "How are staking rewards calculated?",
        answer: "Staking rewards are calculated based on the amount of tokens you have staked and the current APY. Rewards are distributed periodically to your wallet."
    },
    {
        question: "What is a DAO?",
        answer: "A Decentralized Autonomous Organization (DAO) is an organization represented by rules encoded as a computer program that is transparent, controlled by the organization members, and not influenced by a central government."
    },
];

export default function StakingPage() {
    const [stakeAmount, setStakeAmount] = useState<number | string>("");
    const [apy, setApy] = useState(15); // Example APY
    const [estimatedRewards, setEstimatedRewards] = useState(0);

    useEffect(() => {
        if (typeof stakeAmount === 'number' && stakeAmount > 0) {
            const rewards = (stakeAmount * apy) / 100;
            setEstimatedRewards(rewards);
        } else {
            setEstimatedRewards(0);
        }
    }, [stakeAmount, apy]);


    return (
        <div className="space-y-12">
            <section className="text-center">
                <ScrollReveal>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-primary">
                    Stake Exnus Tokens
                </h1>
                </ScrollReveal>
                <ScrollReveal delay={200}>
                <p className="max-w-3xl mx-auto text-lg text-foreground/80 mb-8">
                    Secure the network, earn rewards, and gain governance power by staking your Exnus tokens. Become a true stakeholder in our decentralized ecosystem.
                </p>
                </ScrollReveal>
                <ScrollReveal delay={400}>
                    <Button size="lg" asChild>
                        <a href="#staking-calculator">
                            Start Staking
                        </a>
                    </Button>
                </ScrollReveal>
            </section>

             <section>
                <div className="text-center">
                    <ScrollReveal>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary">
                        Why Stake with Exnus?
                    </h2>
                    <p className="mt-4 text-foreground/70">
                        Staking is more than just earning passive income. It's about actively participating in the growth and security of the protocol.
                    </p>
                    </ScrollReveal>
                </div>
                <div className="max-w-5xl mx-auto mt-8 grid md:grid-cols-3 gap-8 text-left">
                    {benefits.map((benefit, index) => (
                        <ScrollReveal key={benefit.title} delay={index * 150}>
                        <div className="p-6 border rounded-lg flex flex-col items-center text-center h-full border-border/50">
                            <div className="p-4 bg-primary/10 rounded-full w-fit mb-4">
                                {benefit.icon}
                            </div>
                            <div>
                            <h3 className="font-bold text-xl text-primary">{benefit.title}</h3>
                            <p className="mt-2 text-foreground/80">
                                {benefit.description}
                            </p>
                            </div>
                        </div>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            <section className="p-6 md:p-8 rounded-lg border border-border/50">
                <ScrollReveal>
                    <div className="not-prose relative overflow-hidden">
                        <StakingDiagram />
                    </div>
                </ScrollReveal>
            </section>
            
            <section id="staking-calculator" className="p-6 md:p-8 rounded-lg border border-border/50">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <ScrollReveal>
                         <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Staking Calculator</h2>
                            <p className="text-foreground/80 text-lg mb-6">
                                Estimate your potential rewards by entering the amount of Exnus tokens you wish to stake. See how your contribution can grow over time.
                            </p>
                            <div>
                                <CardContent className="pt-6">
                                     <div className="space-y-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="stake-amount">Amount to Stake (EXN)</Label>
                                            <Input 
                                                id="stake-amount" 
                                                type="number"
                                                placeholder="e.g., 1000"
                                                value={stakeAmount}
                                                onChange={(e) => setStakeAmount(e.target.value === '' ? '' : parseFloat(e.target.value))}
                                                className="text-lg"
                                            />
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-muted-foreground">Current APY</span>
                                            <span className="font-bold text-primary">{apy}%</span>
                                        </div>
                                        <div className="flex justify-between items-center text-lg font-bold">
                                            <span className="text-foreground">Estimated Yearly Rewards</span>
                                            <span className="text-primary">{estimatedRewards.toLocaleString(undefined, { maximumFractionDigits: 2 })} EXN</span>
                                        </div>
                                     </div>
                                </CardContent>
                            </div>
                             <Button size="lg" className="w-full mt-6">Connect Wallet & Stake</Button>
                             <p className="text-xs text-center text-muted-foreground mt-2">Note: This is an estimate. Actual rewards may vary based on network conditions.</p>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={200}>
                         <div className="not-prose relative overflow-hidden">
                           <StakingModelDiagram />
                        </div>
                    </ScrollReveal>
                </div>
            </section>

             <section>
                <div className="text-center">
                    <ScrollReveal>
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">
                            Frequently Asked Questions
                        </h2>
                        <p className="mt-4 text-foreground/70 max-w-2xl mx-auto">
                            Find answers to common questions about staking on the Exnus Protocol.
                        </p>
                    </ScrollReveal>
                </div>
                <div className="max-w-4xl mx-auto mt-8 grid md:grid-cols-2 gap-6">
                    {faqs.map((faq, index) => (
                        <ScrollReveal key={index} delay={index * 100}>
                            <div className="h-full">
                                <CardHeader className="flex-row items-center gap-4">
                                    <svg className="w-6 h-6 text-primary flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                                        <path d="M12 16v-4m0-4h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                    </svg>
                                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-foreground/80">{faq.answer}</p>
                                </CardContent>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </section>
        </div>
    );
}
