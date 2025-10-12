
'use client';

import { useState } from 'react';
import Sidebar from '@/components/layout/sidebar';
import NewHeader from '@/components/layout/new-header';
import Footer from './footer';
import GlassmorphismBackground from './glassmorphism-background';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const theme = 'dark'; // Force dark theme

  const toggleTheme = () => {
    // No-op, theme is always dark
  };

  return (
    <div className="min-h-screen bg-background/0">
      <GlassmorphismBackground />
      <Sidebar 
        isMobileMenuOpen={isMobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <div className="flex flex-col lg:pl-0">
        <NewHeader onMenuClick={() => setMobileMenuOpen(true)} theme={theme} toggleTheme={toggleTheme} />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
