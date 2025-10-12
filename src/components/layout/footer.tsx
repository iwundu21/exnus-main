
'use client';

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full mt-auto py-6 px-4 md:px-6 border-t border-border/50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <p>
            © {new Date().getFullYear()} Exnus Protocol. All rights reserved.
            </p>
            <Link href="/terms" className="hover:text-primary transition-colors">
                Terms
            </Link>
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">
                Privacy Policy
            </Link>
        </div>
        <div className="flex items-center gap-6">
            <Link href="https://x.com/exnusprotocol?t=erRcFQecZLsl-pW3MGFC9g&s=09" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <span>X</span>
                <span className="sr-only">X</span>
            </Link>
            <Link href="https://t.me/Exnusprotocol" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <span>Telegram</span>
                <span className="sr-only">Telegram</span>
            </Link>
            <Link href="https://discord.gg/v8MpYYFdP8" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <span>Discord</span>
                <span className="sr-only">Discord</span>
            </Link>
        </div>
      </div>
    </footer>
  );
}
