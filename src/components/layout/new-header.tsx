
'use client';
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
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
            <a href="/" className="flex items-center gap-2 font-bold text-lg">
                <Image src="/logo.png" alt="Exnus Protocol" width={32} height={32} className="h-8 w-8" />
                <span className="">Exnus Protocol</span>
            </a>
            
            <div className="flex items-center gap-4">
                <nav className="hidden items-center gap-6 lg:flex">
                     {navLinks.map((link) => (
                        <a key={link.href} href={link.href} className={getLinkClass(link.href)}>
                            {link.label}
                        </a>
                    ))}
                </nav>
                <Button variant="outline" size="icon" className="lg:hidden" onClick={onMenuClick}>
                    <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="4" x2="20" y1="12" y2="12" />
                        <line x1="4" x2="20" y1="6" y2="6" />
                        <line x1="4" x2="20" y1="18" y2="18" />
                    </svg>
                    <span className="sr-only">Toggle Menu</span>
                </Button>
            </div>
        </header>
    );
}
