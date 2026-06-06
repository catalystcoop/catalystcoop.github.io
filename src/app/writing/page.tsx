import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { getAllPosts } from "@/lib/posts";

export default function Writing() {
  const posts = getAllPosts();

  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <AnimatedSection>
        <h1
          className="text-4xl font-serif font-semibold text-[#1a1714] mb-3"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Writing
        </h1>
        <p className="text-[#6b6560] mb-14">
          Open, curious deep dives. No particular agenda.
        </p>
      </AnimatedSection>

      {posts.length === 0 ? (
        <AnimatedSection delay={0.1}>
          <p className="text-[#6b6560]">First post coming soon.</p>
        </AnimatedSection>
      ) : (
        <div className="flex flex-col">
          {posts.map((post, i) => (
            <AnimatedSection key={post.slug} delay={i * 0.06}>
              <Link
                href={`/writing/${post.slug}`}
                className="group flex items-start justify-between py-6 border-b border-[#d4cdc4] hover:border-[#8b4a2f] transition-colors gap-6"
              >
                <div>
                  <h2
                    className="font-serif font-semibold text-[#1a1714] text-lg group-hover:text-[#8b4a2f] transition-colors mb-1"
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  >
                    {post.title}
                  </h2>
                  {post.description && (
                    <p className="text-sm text-[#6b6560]">{post.description}</p>
                  )}
                </div>
                <span className="text-xs text-[#6b6560] whitespace-nowrap mt-1.5">
                  {post.date}
                </span>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      )}
    </div>
  );
}
