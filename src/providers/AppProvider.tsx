import { useEffect, type ReactNode } from 'react';
import Lenis from 'lenis';

export function AppProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Initialize Lenis with heavy, luxurious scroll physics
    const lenis = new Lenis({
      duration: 1.6,
      lerp: 0.07,
      smoothWheel: true,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return children;
}