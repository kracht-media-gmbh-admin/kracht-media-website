// components/SocialLink.tsx
import { SocialNavLink } from "@/types";
import Link from "next/link";
import { SimpleIcon } from "simple-icons";

interface Props {
  icon: SimpleIcon;
  href: string;
}

type SocialLinkProps = Pick<SocialNavLink, 'icon' | 'href'>;

export default function SocialLink({ icon, href }: SocialLinkProps) {

  if (!icon) return null;

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={icon.title}
      className="group flex items-center justify-center p-2 transition-transform hover:scale-110"
    >
      <svg
        role="img"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="currentColor"
        className="fill-gray-600 group-hover:fill-blue-500 transition-colors"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={icon.path} />
      </svg>
    </Link>
  );
}
