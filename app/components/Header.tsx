"use client";
import { useState } from "react";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

const NAV_LINKS = ["Services", "Work", "About", "Contact"];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-header-bar/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
        {/* Logo */}
        <Image
          src="/logo.png"
          alt="Arzen"
          width={90}
          height={30}
          className="h-auto"
        />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="nav-link text-sm text-white/60 transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-5 py-2 rounded-full bg-btn-gradient text-black text-sm font-semibold btn-primary"
        >
          Get Started
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white/70 hover:text-white transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <IoCloseOutline size={24} /> : <RxHamburgerMenu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-header-bar border-t border-white/10 px-6 py-6 flex flex-col gap-5">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-white/70 hover:text-white transition-colors"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            className="w-fit px-5 py-2 rounded-full bg-btn-gradient text-black text-sm font-semibold"
            onClick={() => setOpen(false)}
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  );
}
