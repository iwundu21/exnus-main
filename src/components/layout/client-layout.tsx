
'use client';

import { useState } from 'react';
import NewHeader from '@/components/layout/new-header';
import Footer from './footer';
import Sidebar from './sidebar';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Sidebar 
        isMobileMenuOpen={isMobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <div className="flex flex-col">
        <NewHeader onMenuClick={() => setMobileMenuOpen(true)} />
        <main className="flex-1 pb-16 lg:pb-0">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
