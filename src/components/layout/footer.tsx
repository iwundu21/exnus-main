
'use client';

import { Twitter, Linkedin, Send } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // This hook ensures the year is only rendered on the client, avoiding hydration mismatch.
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-[#071A2F] text-white">
      <div className="px-6 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/80">
            &copy; {year} Exnus Protocol. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="https://x.com/exnusprotocol?t=erRcFQecZLsl-pW3MGFC9g&s=09" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/90 hover:text-white">
              <Image src="/x.jpg" alt="X" width={20} height={20} />
              <span>X</span>
            </a>
            <a href="https.t.me/Exnusprotocol" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/90 hover:text-white">
               <Image src="/tg.jpg" alt="Telegram" width={20} height={20} />
              <span>Telegram</span>
            </a>
             <a href="https://discord.gg/v8MpYYFdP8" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/90 hover:text-white">
                <Image src="/discord.jpg" alt="Discord" width={20} height={20} />
                <span>Discord</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
