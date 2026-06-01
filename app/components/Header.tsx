"use client";

import { useState } from "react";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

const NAV_LINKS = ["Services", "Work", "About", "Contact"];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 border-b border-white/10 bg-header-bar/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 md:px-10">
        <Image
          src="/logo.png"
          alt="Arzen"
          width={100}
          height={34}
          className="w-[84px] md:w-[100px] h-auto"
        />

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-white/60 transition-colors hover:text-white"
            >
              {link}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-full bg-btn-gradient px-5 py-2 text-sm font-semibold text-black"
        >
          Get Started
        </a>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? (
            <IoCloseOutline size={28} />
          ) : (
            <RxHamburgerMenu size={22} />
          )}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-header-bar px-4 py-6">
          <div className="flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-white/70"
                onClick={() => setOpen(false)}
              >
                {link}
              </a>
            ))}

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