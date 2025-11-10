"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/portfolio", label: "PORTFOLIO" },

  ];

  return (
    <nav className="flex justify-between items-center px-10 md:px-16 h-20 bg-[#FAF6EB] border-b border-[#E9724C]/30 sticky top-0 z-50 backdrop-blur-sm">
      {/* === LOGO === */}
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.png"
          alt="MAHWEB logo"
          width={95}
          height={95}
          priority
          className="transition-transform duration-300 hover:scale-105"
        />
      </Link>

      {/* === NAV LINKS === */}
      <div className="flex items-center space-x-10 md:space-x-14 text-sm md:text-base font-semibold">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`relative group transition-all duration-300 
                ${
                  isActive
                    ? "text-[#E9724C]"
                    : "text-[#7E4E24] hover:text-[#E9724C]"
                }`}
            >
              {link.label}

              {/* Hover / Active underline */}
              <span
                className={`absolute left-0 bottom-[-6px] h-[2px] w-full transition-all duration-300
                ${
                  isActive
                    ? "bg-[#E9724C] scale-x-100"
                    : "bg-[#E9724C] scale-x-0 group-hover:scale-x-100"
                } origin-left`}
              ></span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
