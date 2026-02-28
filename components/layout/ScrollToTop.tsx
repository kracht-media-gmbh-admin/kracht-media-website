"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";

/**
 * Scrolls window to top when the route changes (e.g. navigation via Link).
 * useLayoutEffect runs before paint so the navbar/content are never shown in a scrolled-down state.
 */
export function ScrollToTop() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
