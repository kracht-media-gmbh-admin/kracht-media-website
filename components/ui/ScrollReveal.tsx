"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  /** Root margin (e.g. "0px 0px -60px 0px" to trigger when 60px from bottom) */
  rootMargin?: string;
  threshold?: number;
}

export function ScrollReveal({
  children,
  className,
  rootMargin = "0px 0px -40px 0px",
  threshold = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("scroll-reveal-visible");
          }
        }
      },
      { rootMargin, threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  return (
    <div ref={ref} className={cn("scroll-reveal", className)}>
      {children}
    </div>
  );
}
