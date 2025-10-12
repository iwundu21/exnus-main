
'use client';
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Menu, Wallet } from "lucide-react";

interface NewHeaderProps {
    onMenuClick: () => void;
}

export default function NewHeader({ onMenuClick }: NewHeaderProps) {
    return (
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between gap-4 bg-transparent px-4 sm:px-6">
            <a href="/" className="flex items-center gap-2 font-bold text-lg">
               <Image src="/logo.png" alt="Exnus Protocol" width={32} height={32} className="h-8 w-8" />
            </a>
            
            <div className="flex items-center gap-2">
                <Button variant="outline" size="icon">
                    <Wallet className="h-5 w-5" />
                    <span className="sr-only">Connect Wallet</span>
                </Button>
                <Button variant="outline" size="icon" className="lg:hidden" onClick={onMenuClick}>
                    <Menu className="h-5 w-5"/>
                    <span className="sr-only">Toggle Menu</span>
                </Button>
            </div>
        </header>
    );
}
