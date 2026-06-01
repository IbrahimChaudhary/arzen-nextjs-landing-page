import Image from "next/image";

const SOCIAL_HANDLES = ["in", "ig", "tw", "gh"];

const FOOTER_COLS = [
  {
    heading: "Company",
    links: ["About Us", "Our Team", "Careers", "Blog"],
  },
  {
    heading: "Services",
    links: ["Web Development", "UI/UX Design", "Branding", "Digital Growth"],
  },
  {
    heading: "Resources",
    links: ["Case Studies", "Documentation", "Privacy Policy", "Terms"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] text-white px-6 md:px-10 lg:px-16 py-14 flex flex-col gap-10">

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
              <h3 className="font-heading text-[15px] md:text-[17px]">{col.heading}</h3>
              <ul className="flex flex-col gap-2 text-sm text-gray-text">
                {col.links.map((link) => (
                  <li
                    key={link}
                    className="hover:text-white cursor-pointer transition-colors"
                  >
                    {link}
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