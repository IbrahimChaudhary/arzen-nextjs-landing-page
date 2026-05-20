import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#0d0d0d] text-white px-10 py-14 flex flex-col gap-10">

      {/* Main row */}
      <div className="flex justify-between gap-10 pb-10 border-b border-white/10">

        {/* Left: logo + desc + socials */}
        <div className="flex flex-col gap-4 max-w-[260px]">
          <Image src="/logo.png" alt="Logo" width={120} height={40} />
          <p className="text-xs text-white/50 leading-relaxed">
            We're here to answer your questions and explore how we can help your business grow.
          </p>
          <div className="flex gap-2 text-xs text-white/70">
            {["in", "ig", "tw", "gh"].map((s) => (
              <span key={s} className="border border-white/20 rounded-md px-2.5 py-1.5 hover:border-white/50 cursor-pointer transition-all">
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Right: nav columns */}
        <div className="flex gap-20">
          <div className="flex flex-col gap-3">
            <h3 className="font-heading text-[17px]">Company</h3>
            <ul className="flex flex-col gap-2 text-sm text-gray-text">
              {["About Us", "Our Team", "Careers", "Blog"].map((i) => (
                <li key={i} className="hover:text-white cursor-pointer transition-colors">{i}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-heading text-[17px]">Services</h3>
            <ul className="flex flex-col gap-2 text-sm text-gray-text">
              {["Web Development", "UI/UX Design", "Branding", "Digital Growth"].map((i) => (
                <li key={i} className="hover:text-white cursor-pointer transition-colors">{i}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-heading text-[17px]">Resources</h3>
            <ul className="flex flex-col gap-2 text-sm text-gray-text">
              {["Case Studies", "Documentation", "Privacy Policy", "Terms"].map((i) => (
                <li key={i} className="hover:text-white cursor-pointer transition-colors">{i}</li>
              ))}
            </ul>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="flex items-center justify-between text-xs text-white/30">
        <p>© 2026 Arzen Inc. All rights reserved.</p>
        <p>Designed with precision. Built for growth.</p>
      </div>

    </footer>
  );
};

export default Footer;