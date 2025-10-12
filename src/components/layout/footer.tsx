
'use client';

import { Home, Compass, BarChart2, Search, Settings } from "lucide-react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const footerLinks = [
    { href: '/', icon: Home },
    { href: '/market', icon: BarChart2 },
    { href: '/documents', icon: Compass },
    { href: '/roadmap', icon: Search },
    { href: '/contact', icon: Settings },
]

export default function Footer() {
    const pathname = usePathname();

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-background/80 backdrop-blur-lg border-t">
      <div className="flex justify-around items-center h-16">
        {footerLinks.map(({ href, icon: Icon }) => (
            <Link key={href} href={href} className="flex flex-col items-center justify-center gap-1 w-full h-full">
                <Icon className={cn("h-6 w-6 transition-colors", pathname === href ? "text-teal-300" : "text-muted-foreground")} />
            </Link>
        ))}
      </div>
    </footer>
  );
}
