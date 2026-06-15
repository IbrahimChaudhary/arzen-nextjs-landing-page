import Image from "next/image";
import Link from "next/link";

const SOCIAL_HANDLES = ["in", "ig", "tw", "gh"];

const FOOTER_COLS = [
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/about" },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Web Development", href: "/work" },
      { label: "UI/UX Design", href: "/work" },
      { label: "Branding", href: "/work" },
      { label: "Digital Growth", href: "/work" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Case Studies", href: "/projects" },
      { label: "Documentation", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] text-white px-6 md:px-10 lg:px-16 py-14 flex flex-col gap-10">

      {/* Main row */}
      <div className="flex flex-col lg:flex-row justify-between gap-10 pb-10 border-b border-white/10">

        {/* Brand */}
        <div className="flex flex-col gap-4 max-w-full lg:max-w-[260px]">
          <Image src="/logo.png" alt="Arzen" width={170} height={25} />
          <p className="text-xs text-white/50 leading-relaxed">
            We're here to answer your questions and explore how we can help your business grow.
          </p>
          <div className="flex gap-2 text-xs text-white/70">
            {SOCIAL_HANDLES.map((s) => (
              <span
                key={s}
                className="border border-white/20 rounded-md px-2.5 py-1.5 hover:border-white/50 cursor-pointer transition-all uppercase"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Nav columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10 lg:gap-20">
          {FOOTER_COLS.map((col) => (
            <div key={col.heading} className="flex flex-col gap-3">
              <h3 className="font-display text-[15px] md:text-[17px]">{col.heading}</h3>
              <ul className="flex flex-col gap-2 text-sm text-gray-text">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-white/30">
        <p>© 2026 Arzen Inc. All rights reserved.</p>
        <p>Designed with precision. Built for growth.</p>
      </div>

    </footer>
  );
}