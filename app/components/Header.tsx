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
    <header className="sticky inset-x-0 top-0 z-50 border-b border-white/10 bg-header-bar/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 md:px-10">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Arzen"
            width={170}
            height={25}
            className="w-25 md:w-31 h-auto"
          />
        </Link>
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
                  className={`relative z-10 inline-block transition-all duration-300 ${
                    isActive
                      ? "scale-140 text-white"
                      : "scale-100 text-gray hover:scale-100 hover:text-white/80"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="btn-primary hidden md:inline-flex items-center rounded-full bg-btn-gradient px-5 py-2 text-sm font-semibold text-black"
        >
          Get Started
        </Link>

        <button
          type="button"
          className="md:hidden text-white p-4 rounded-full relative z-[60]"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle Menu"
          aria-expanded={open}
          style={{
            touchAction: "manipulation",
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {open ? <IoCloseOutline size={28} /> : <RxHamburgerMenu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden absolute inset-x-0 top-full border-t border-white/10 bg-header-bar px-4 py-6 z-50">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block rounded-xl px-3 py-3 text-white/80 transition hover:bg-white/5 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact"
              className="inline-flex w-fit rounded-full bg-btn-gradient px-5 py-2 text-sm font-semibold text-black"
              onClick={() => setOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
