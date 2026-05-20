import Image from "next/image";

const Header = () => {
  return (
    <div className="h-[60px] border-b border-[#535353] w-full bg-[#0D0D0D] px-[50px] flex items-center justify-between">
      <Image src="/logo.png" alt="logo" width={100} height={40} />
      <div className="flex gap-[30px] items-center">
        <ul className="flex gap-[30px] text-sm text-white/80">
          <li className="cursor-pointer hover:text-white transition-colors">
            Service
          </li>
          <li className="cursor-pointer hover:text-white transition-colors">
            Work
          </li>
          <li className="cursor-pointer hover:text-white transition-colors">
            About
          </li>
          <li className="cursor-pointer hover:text-white transition-colors">
            Contact
          </li>
        </ul>
        <button className="bg-btn-gradient px-4 py-1.5 rounded-full text-black text-sm font-medium whitespace-nowrap">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Header;
