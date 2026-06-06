"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/writing", label: "Writing" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="border-b border-[#d4cdc4] py-5">
      <div className="max-w-3xl mx-auto px-6 flex items-center justify-between">
        <Link
          href="/"
          className="font-serif text-lg font-semibold tracking-wide text-[#1a1714] hover:text-[#8b4a2f] transition-colors"
        >
          CW
        </Link>
        <div className="flex gap-7">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm transition-colors ${
                pathname === href
                  ? "text-[#1a1714] font-medium"
                  : "text-[#6b6560] hover:text-[#1a1714]"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
