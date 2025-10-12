'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const SPHERE_COUNT = 10;

export function HeroBackground() {
  const [spheres, setSpheres] = useState<{ top: string; left: string; size: string; delay: string; duration: string; }[]>([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const generateSpheres = () => {
      return Array.from({ length: SPHERE_COUNT }).map(() => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: `${2 + Math.random() * 4}px`,
        delay: `${Math.random() * 5}s`,
        duration: `${5 + Math.random() * 10}s`,
      }));
    };
    setSpheres(generateSpheres());
    const timer = setTimeout(() => setIsReady(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={cn(
        "absolute inset-0 -z-10 overflow-hidden transition-opacity duration-1000",
        isReady ? "opacity-100" : "opacity-0"
    )}>
      {spheres.map((sphere, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-slate-500/50 sphere-animation"
          style={{
            top: sphere.top,
            left: sphere.left,
            width: sphere.size,
            height: sphere.size,
            animationDelay: sphere.delay,
            animationDuration: sphere.duration,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes move-sphere {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(1.5);
            opacity: 0.8;
          }
        }
        .sphere-animation {
          animation: move-sphere linear infinite;
        }
      `}</style>
    </div>
  );
}
