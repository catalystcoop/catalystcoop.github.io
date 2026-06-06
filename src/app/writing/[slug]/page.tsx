import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostContent } from "@/lib/posts";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostContent(slug);
  if (!post) notFound();

  return (
    <div className="max-w-2xl mx-auto px-6 py-20">
      <div className="mb-12">
        <p className="text-sm text-[#6b6560] mb-3">{post.meta.date}</p>
        <h1
          className="text-4xl font-serif font-semibold text-[#1a1714] leading-tight"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          {post.meta.title}
        </h1>
      </div>
      <article className="prose prose-stone max-w-none [&_h2]:font-serif [&_h2]:text-[#1a1714] [&_a]:text-[#8b4a2f] [&_a]:no-underline [&_a:hover]:underline">
        <MDXRemote source={post.content} />
      </article>
    </div>
  );
}
