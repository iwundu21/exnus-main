
import ScrollReveal from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const projects = [
    {
        name: "GovernUI",
        description: "An alternative, open-source user interface for interacting with the Exnus DAO, offering advanced proposal tracking and voting analytics. It demonstrates how to integrate with our governance contracts to create a tailored user experience.",
        author: "By DAOEnthusiast"
    },
    {
        name: "ExnusPy",
        description: "A Python library for interacting with the Exnus protocol's API, created to simplify bot development and data analysis for the community. This tool helps developers build on top of Exnus with ease.",
        author: "By PyCoder"
    },
    {
        name: "Contribution Dashboard",
        description: "A community-developed dashboard that allows users to track their contributions across different categories in real-time, providing a transparent view of how rewards are earned.",
        author: "By CommunityDev2"
    }
];

export default function CommunityProjectsPage() {
  return (
    <div>
      <section className="relative py-12 px-4 md:px-6">
        <Link href="/ecosystem/partners" className="absolute top-4 left-4 md:top-8 md:left-8 flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Ecosystem</span>
        </Link>
        <div className="text-center pt-12">
            <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 gradient-text">
                Community Projects
            </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
            <p className="max-w-3xl mx-auto text-lg text-foreground/80">
                The Exnus ecosystem is defined by its vibrant and innovative community. As an incentive layer on Solana, we empower our users to build, create, and contribute. This space is dedicated to showcasing the incredible tools, dApps, and projects that have been developed by our talented community members. These initiatives are a testament to the collaborative spirit that drives our protocol forward.
            </p>
            </ScrollReveal>
        </div>
      </section>

      <section className="py-12 px-4 md:px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={project.name} delay={index * 150}>
              <div className="p-8 border rounded-lg h-full bg-card/50">
                <h3 className="font-bold text-2xl text-primary mb-2">{project.name}</h3>
                <p className="text-foreground/80">
                  {project.description}
                </p>
                <p className="text-sm text-foreground/60 mt-4">{project.author}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="py-12 px-4 md:px-6">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto p-8 border rounded-lg border-border/50 text-center">
              <h3 className="font-bold text-xl text-primary">Get Your Project Featured</h3>
              <p className="mt-4 text-foreground/70">
                  Have you built something with the Exnus protocol? We would love to see it. Share your project with our community for a chance to be featured here.
              </p>
               <div className="mt-8 flex justify-center">
                    <Button asChild size="lg" className="w-full max-w-xs text-lg rounded-full font-semibold relative overflow-hidden bg-slate-800 border border-slate-700 hover:bg-slate-700 transition-all duration-300">
                        <a href="/contact">
                            <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
                            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-900 px-8 py-3 text-sm font-medium text-gray-50 backdrop-blur-3xl">
                                Submit Your Project
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
