
'use client';

import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/lib/nav-links';
import Image from 'next/image';

interface SidebarProps {
  isMobileMenuOpen: boolean;
  setMobileMenuOpen: (isOpen: boolean) => void;
}

export default function Sidebar({ isMobileMenuOpen, setMobileMenuOpen }: SidebarProps) {
  const pathname = usePathname();

  const getLinkClass = (href: string) => {
    const isActive = pathname === href;
    return cn(
      'flex items-center gap-3 rounded-lg px-4 py-3 text-muted-foreground transition-all hover:bg-accent hover:text-foreground',
      isActive && 'bg-accent text-foreground font-semibold'
    );
  };
  
  return (
    <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
      <SheetContent side="left" className="p-0 w-64 flex flex-col bg-background border-r lg:hidden">
          <SheetHeader className='border-b h-16 flex items-center px-4'>
             <a href="/" className="flex items-center gap-2 font-bold text-lg">
                <Image src="/logo.png" alt="Exnus Protocol" width={32} height={32} className="h-8 w-8" />
                <span>Exnus Protocol</span>
              </a>
              <SheetTitle className="sr-only">Main Menu</SheetTitle>
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
