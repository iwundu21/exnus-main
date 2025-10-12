
'use client';

import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/lib/nav-links.tsx';
import Image from 'next/image';
import { Button } from '../ui/button';

interface SidebarProps {
  isMobileMenuOpen: boolean;
  setMobileMenuOpen: (isOpen: boolean) => void;
  theme: string;
  toggleTheme: () => void;
}

export default function Sidebar({ isMobileMenuOpen, setMobileMenuOpen, theme, toggleTheme }: SidebarProps) {
  const pathname = usePathname();

  const getLinkClass = (href: string) => {
    const isActive = pathname === href;
    return cn(
      'flex items-center gap-3 rounded-md px-3 py-2 text-foreground/70 transition-all hover:bg-white/10 hover:text-foreground',
      isActive && 'bg-white/10 text-foreground font-medium'
    );
  };
  
  return (
    <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
      <SheetContent side="left" className="p-0 w-64 flex flex-col bg-background/80 backdrop-blur-sm border-r border-white/10 lg:hidden">
          <SheetHeader className='border-b border-white/10'>
            <SheetTitle asChild>
              <div className="flex items-center justify-between h-16 px-4">
                <a href="/" className="flex items-center gap-2 font-bold text-lg">
                   <Image src="/logo.png" alt="Exnus Protocol" width={40} height={40} className="h-10 w-10" />
                  <span>Exnus Protocol</span>
                </a>
              </div>
            </SheetTitle>
          </SheetHeader>
          <nav className="flex-1 overflow-auto p-4 space-y-2">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className={getLinkClass(link.href)} onClick={() => setMobileMenuOpen(false)}>
                {link.label}
              </a>
            ))}
          </nav>
      </SheetContent>
    </Sheet>
  );
}
