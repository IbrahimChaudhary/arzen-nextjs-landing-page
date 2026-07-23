import type { Metadata } from "next";
import { Archivo_Black, DM_Sans } from "next/font/google";
import "./globals.css";
import CursorFollower from "@/app/components/CursorFollower";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ResetScrollOnReload from "../components/ResetScrollOnReload";

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-archivo-black",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arzen",
  description: "Arzen — portfolio and projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${archivoBlack.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ResetScrollOnReload />
        <CursorFollower />
        <Header />
        <main className="flex-1 bg-[#0A0A0A] text-white">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
