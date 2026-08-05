import Link from "next/link";

// Using the same mock data array
const blogPosts = [
  {
    slug: "future-of-web-development",
    title: "The Future of Web Development in 2026",
    date: "August 1, 2026",
    tags: ["Development", "Trends", "Next.js"],
  },
  {
    slug: "mastering-brand-identity",
    title: "Mastering Brand Identity for Startups",
    date: "July 24, 2026",
    tags: ["Design", "Branding", "UI/UX"],
  }
];

export default function BlogListing() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        
        <header className="mb-16">
          <h2 className="text-emerald-500 font-semibold tracking-wider uppercase mb-2">Our Thoughts</h2>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">The Arzen Blog</h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="group cursor-pointer">
              <div className="h-64 bg-zinc-900 rounded-2xl border border-zinc-800 mb-6 group-hover:border-emerald-500/50 transition-colors duration-300 overflow-hidden relative">
                 {/* Image Placeholder */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map(tag => (
                  <span key={tag} className="text-xs text-zinc-400 uppercase tracking-wider font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              
              <h3 className="text-2xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-zinc-500">{post.date}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}