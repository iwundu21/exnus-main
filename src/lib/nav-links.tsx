
import type { ReactNode } from 'react';

export interface NavLink {
    href: string;
    label: string;
}

export const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'Our Mission' },
  { href: '/documents', label: 'Documents' },
  { href: '/roadmap', label: 'Roadmap' },
  { href: '/market', label: 'Market' },
  { href: '/contact', label: 'Contact' },
];
