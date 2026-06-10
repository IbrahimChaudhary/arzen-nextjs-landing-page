"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky  inset-x-0 top-0 z-50 border-b border-white/10 bg-header-bar/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 md:px-10">
        <Image
          src="/logo.png"
          alt="Arzen"
          width={100}
          height={34}
          className="w-[84px] md:w-[100px] h-auto"
        />

        <nav className="hidden md:flex items-center gap-2 relative">
          {NAV_LINKS.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-5 py-2 text-sm rounded-full"
              >
                {/* 🔥 Animated sliding pill */}
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full border border-[#535353] bg-[#1A1A1A]"
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 35,
                    }}
                  />
                )}

                <span
                  className={`relative z-10 transition-colors ${
                    isActive ? "text-white" : "text-gray-text"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        <a
          href="#contact"
          className="btn-primary hidden md:inline-flex items-center rounded-full bg-btn-gradient px-5 py-2 text-sm font-semibold text-black"
        >
          Get Started
        </a>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <IoCloseOutline size={28} /> : <RxHamburgerMenu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-header-bar px-4 py-6">
          <div className="flex flex-col gap-5">
            {NAV_LINKS.map((link) => {
              const href = `#${link.label.toLowerCase() === "about" ? "services" : link.label.toLowerCase()}`;
              return (
                <Link
                  key={link.label}
                  href={href}
                  className="text-white/70"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}

            <a
              href="#contact"
              className="w-fit rounded-full bg-btn-gradient px-5 py-2 text-sm font-semibold text-black"
              onClick={() => setOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
