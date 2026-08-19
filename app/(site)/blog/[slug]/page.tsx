import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import { createImageUrlBuilder } from "@sanity/image-url";
// 1. Configure the image builder
const builder = createImageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

// GROQ query to find a single post by its slug
const POST_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  title,
  publishedAt,
  readTime,
  tags,
  "imageUrl": featuredImage.asset->url,
  "imageAlt": featuredImage.alt,
  content
}`;

// 2. Tell PortableText how to render images
const portableTextComponents = {
  types: {
    // Change this back to "image"
    image: ({ value }: { value: any }) => { 
      if (!value?.asset?._ref) return null;
      
      return (
        <div className="my-10 w-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || "Blog Post Image"}
            width={1200}
            height={800}
            className="w-full h-auto object-cover m-0"
          />
        </div>
      );
    },
  },
};

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const post = await client.fetch(POST_QUERY, { slug });

  if (!post) {
    notFound(); 
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white py-20 px-6 md:px-16">
      <div className="max-w-4xl mx-auto">
        
        <Link href="/blog" className="text-emerald-500 hover:text-emerald-400 mb-8 inline-block transition-colors">
          &larr; Back to Articles
        </Link>

        <div className="mb-12">
          <p className="text-emerald-500 font-medium mb-4">
            {new Date(post.publishedAt).toLocaleDateString('en-US', {
              month: 'long', day: 'numeric', year: 'numeric'
            })} • {post.readTime}
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight tracking-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap gap-3">
            {post.tags?.map((tag: string) => (
              <span key={tag} className="px-4 py-1.5 rounded-full border border-zinc-700 bg-zinc-900/50 text-sm font-medium text-zinc-300">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="w-full h-[400px] md:h-[600px] relative rounded-2xl overflow-hidden mb-16 border border-zinc-800 bg-zinc-900">
          {post.imageUrl && (
            <Image 
              src={post.imageUrl}
              alt={post.imageAlt || post.title}
              fill
              className="object-cover"
              priority
            />
          )}
        </div>

        <article className="prose prose-invert prose-emerald max-w-none text-zinc-300 text-lg leading-relaxed">
          {/* 3. Pass the custom components into PortableText */}
          <PortableText value={post.content} components={portableTextComponents} />
        </article>

      </div>
    </main>
  );
}