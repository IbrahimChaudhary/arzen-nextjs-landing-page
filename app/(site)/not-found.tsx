import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#0A0A0A] text-white">
      <h1 className="text-7xl font-bold">404</h1>
      <p className="mt-4 text-xl">Sorry, the page you requested was not found.</p>
      <Link href="/" className="mt-6 inline-block rounded bg-white/10 px-5 py-2 hover:bg-white/20">
        Go home
      </Link>
    </main>
  );
}
