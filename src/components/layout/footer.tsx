
'use client';

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full mt-auto py-6 px-4 md:px-6 border-t border-border/50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Exnus Protocol. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
            <Link href="https://x.com/exnusprotocol?t=erRcFQecZLsl-pW3MGFC9g&s=09" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Image src="/x.jpg" alt="X" width={20} height={20} />
                <span className="sr-only">X</span>
            </Link>
            <Link href="https://t.me/Exnusprotocol" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Image src="/tg.jpg" alt="Telegram" width={20} height={20} />
                <span className="sr-only">Telegram</span>
            </Link>
            <Link href="https://discord.gg/v8MpYYFdP8" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Image src="/discord.jpg" alt="Discord" width={20} height={20} />
                <span className="sr-only">Discord</span>
            </Link>
        </div>
      </div>
    </footer>
  );
}
