
'use client';
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { navLinks } from "@/lib/nav-links";
import { usePathname } from "next/navigation";

interface NewHeaderProps {
    onMenuClick: () => void;
}

export default function NewHeader({ onMenuClick }: NewHeaderProps) {
    const pathname = usePathname();

    const getLinkClass = (href: string) => {
        const isActive = pathname === href;
        return cn(
        'text-sm font-medium transition-colors hover:text-primary',
        isActive ? 'text-primary' : 'text-muted-foreground'
        );
    };

    return (
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between gap-4 border-b bg-background px-4 sm:px-6">
            <div className="flex items-center gap-6">
                <a href="/" className="flex items-center gap-2 font-bold text-lg">
                   <Image src="/logo.png" alt="Exnus Protocol" width={32} height={32} className="h-8 w-8" />
                </a>
                <nav className="hidden items-center gap-6 lg:flex">
                     {navLinks.map((link) => (
                        <a key={link.href} href={link.href} className={getLinkClass(link.href)}>
                            {link.label}
                        </a>
                    ))}
                </nav>
            </div>
            
            <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" className="lg:hidden" onClick={onMenuClick}>
                    <Menu className="h-5 w-5"/>
                    <span className="sr-only">Toggle Menu</span>
                </Button>
            </div>
        </header>
    );
}
