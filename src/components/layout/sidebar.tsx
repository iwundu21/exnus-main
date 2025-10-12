
'use client';

import { useState, useEffect } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/lib/nav-links.tsx';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import Image from 'next/image';
import { Moon, Sun } from 'lucide-react';
import { Button } from '../ui/button';

interface SidebarProps {
  isMobileMenuOpen: boolean;
  setMobileMenuOpen: (isOpen: boolean) => void;
  theme: string;
  toggleTheme: () => void;
}

export default function Sidebar({ isMobileMenuOpen, setMobileMenuOpen, theme, toggleTheme }: SidebarProps) {
  const pathname = usePathname();
  const [activePath, setActivePath] = useState(pathname);
  
  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  const getLinkClass = (href: string) => {
    const isActive = activePath === href;
    return cn(
      'flex items-center gap-3 rounded-md px-3 py-2 text-foreground/70 transition-all hover:bg-white/10 hover:text-foreground',
      isActive && 'bg-white/10 text-foreground font-medium'
    );
  };
  
  const getDesktopLinkClass = (href: string) => {
    const isActive = activePath === href;
    return cn(
      'flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground hover:bg-white/10',
      isActive && 'bg-white/10 text-foreground'
    );
  };

  const NavContent = () => (
    <>
      <nav className="flex-1 overflow-auto p-4 space-y-2">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className={getLinkClass(link.href)} onClick={() => setMobileMenuOpen(false)}>
            {link.icon}
            {link.label}
          </a>
        ))}
      </nav>
      <div className="p-4 mt-auto border-t border-white/10">
          <Button onClick={toggleTheme} variant="ghost" className="w-full justify-start gap-3">
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              <span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
          </Button>
      </div>
    </>
  );

  const DesktopNavContent = () => (
    <TooltipProvider>
      <nav className="flex flex-col items-center gap-4 px-2 py-4">
          {navLinks.map((link) => (
              <Tooltip key={link.href}>
                  <TooltipTrigger asChild>
                      <a href={link.href} className={getDesktopLinkClass(link.href)}>
                          {link.icon}
                          <span className="sr-only">{link.label}</span>
                      </a>
                  </TooltipTrigger>
                  <TooltipContent side="right">
                      <p>{link.label}</p>
                  </TooltipContent>
              </Tooltip>
          ))}
      </nav>
      <div className="mt-auto flex flex-col items-center gap-4 p-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button onClick={toggleTheme} variant="ghost" size="icon" className="h-10 w-10 rounded-lg text-muted-foreground">
                {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                <span className="sr-only">Toggle theme</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>{theme === 'light' ? 'Enable Dark Mode' : 'Enable Light Mode'}</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );

  return (
    <>
      {/* Mobile Sidebar */}
      <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side="left" className="p-0 w-64 flex flex-col bg-background/80 backdrop-blur-sm border-r border-white/10">
            <SheetHeader className='border-b border-white/10'>
              <SheetTitle asChild>
                <div className="flex items-center justify-between h-14 px-4">
                  <a href="/" className="flex items-center gap-2 font-bold text-lg">
                     <Image src="/logo.png" alt="Exnus Protocol" width={40} height={40} className="h-10 w-10" />
                    <span>Exnus Protocol</span>
                  </a>
                </div>
              </SheetTitle>
            </SheetHeader>
            <NavContent />
        </SheetContent>
      </Sheet>


      {/* Desktop Sidebar */}
      <aside className="hidden md:flex md:flex-col w-20 border-r bg-background/50 backdrop-blur-sm border-white/10 fixed inset-y-0 z-50">
        <div className="flex h-20 items-center justify-center border-b border-white/10">
          <a href="/" className="flex items-center justify-center">
             <Image src="/logo.png" alt="Exnus Protocol" width={56} height={56} className="h-14 w-14" />
             <span className="sr-only">Exnus</span>
          </a>
        </div>
        <DesktopNavContent />
      </aside>
    </>
  );
}
