import Link from "next/link";
import { cn } from "@/lib/utils";

export function Navbar() {
  return (
    <header
      className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/90 backdrop-blur-sm dark:border-zinc-800/80 dark:bg-zinc-950/90"
      role="banner"
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6"
        aria-label="Main"
      >
        <Link
          href="/"
          className={cn(
            "text-lg font-semibold text-zinc-900 dark:text-zinc-100",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2 rounded"
          )}
        >
          Kracht Media
        </Link>
        <ul className="flex items-center gap-6">
          <li>
            <Link
              href="/#projects"
              className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2 rounded"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/#contact"
              className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2 rounded"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
