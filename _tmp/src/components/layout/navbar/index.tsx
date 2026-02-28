// components/Navbar.tsx
import Link from 'next/link';
import { ROUTES } from '@/config/site';

export default function Navbar() {
  return (
    <nav className="fixed right-0 top-0 h-screen w-20 flex flex-col items-center justify-center bg-gray-900 text-white z-50">
      <ul className="flex flex-col gap-8">
        {Object.values(ROUTES).map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="hover:text-blue-400">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}