import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// Mock data (You can replace this with MongoDB fetches later)
const blogPosts = [
  {
    slug: "future-of-web-development",
    title: "The Future of Web Development in 2026",
    date: "August 1, 2026",
    readTime: "5 min read",
    tags: ["Development", "Trends", "Next.js"],
    content: "Web development is evolving rapidly. With the rise of AI agents and edge computing...",
    image: "/blog-placeholder-1.jpg" // Ensure you have placeholder images in /public
  },
  {
    slug: "mastering-brand-identity",
    title: "Mastering Brand Identity for Startups",
    date: "July 24, 2026",
    readTime: "4 min read",
    tags: ["Design", "Branding", "UI/UX"],
    content: "A strong brand identity is more than just a logo. It's the philosophy behind...",
    image: "/blog-placeholder-2.jpg"
  }
];

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound(); // Triggers the Next.js 404 page if slug doesn't exist
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white py-20 px-6 md:px-16">
      <div className="max-w-4xl mx-auto">
        
        {/* Back Button */}
        <Link href="/blog" className="text-emerald-500 hover:text-emerald-400 mb-8 inline-block transition-colors">
          &larr; Back to Articles
        </Link>

        {/* Header Section */}
        <div className="mb-12">
          <p className="text-emerald-500 font-medium mb-4">{post.date} • {post.readTime}</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight tracking-tight">
            {post.title}
          </h1>
          
          {/* Pill Tags (Matching Portfolio.jpg style) */}
          <div className="flex flex-wrap gap-3">
            {post.tags.map((tag) => (
              <span key={tag} className="px-4 py-1.5 rounded-full border border-zinc-700 bg-zinc-900/50 text-sm font-medium text-zinc-300">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Featured Image */}
        <div className="w-full h-[400px] md:h-[600px] relative rounded-2xl overflow-hidden mb-16 border border-zinc-800">
          <div className="absolute inset-0 bg-zinc-800 animate-pulse flex items-center justify-center text-zinc-500">
            {/* Replace this div with an actual <Image /> component when assets are ready */}
            [Blog Image Placeholder]
          </div>
        </div>

        {/* Content Section */}
        <article className="prose prose-invert prose-emerald max-w-none text-zinc-300 text-lg leading-relaxed">
          <p>{post.content}</p>
          {/* Render extended markdown or HTML content here */}
        </article>

      </div>
    </main>
  );
}