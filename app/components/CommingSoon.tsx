import Link from "next/link";

interface ComingSoonProps {
  title: string;
  description?: string;
}

export default function ComingSoon({ title, description }: ComingSoonProps) {
  return (
    <main className="min-h-[80vh] bg-[#0D0D0D] text-white flex items-center justify-center px-6">
      <div className="flex flex-col items-center text-center gap-5 max-w-md">
        <span className="text-xs uppercase tracking-[0.2em] text-white/40">
          Coming Soon
        </span>
        <h1 className="font-display text-4xl md:text-5xl">{title}</h1>
        <p className="text-sm text-white/50 leading-relaxed">
          {description ??
            "We're putting this together. Check back soon to see what we've been working on."}
        </p>
        <Link
          href="/"
          className="mt-2 text-sm border border-white/20 rounded-md px-5 py-2.5 hover:border-white/50 transition-all"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
