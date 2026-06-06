"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

const featuredProjects = [
  {
    name: "Automated Market Intelligence Platform",
    description:
      "Real-time competitive intelligence tool built for a live business. Monitors funding activity, competitor moves, and industry trends — surfaces actionable analysis for investor prep and sales.",
    tags: ["Software", "n8n", "AI"],
    year: "2024–present",
  },
  {
    name: "CLD-9 Automated Dosing Machine",
    description:
      "Designed and fabricated a custom automated supplement dosing machine from scratch for a consumer startup that won the CU New Venture Challenge. CNC machining, 3D printing, end-to-end.",
    tags: ["Hardware", "Startup", "Fabrication"],
    year: "2024",
  },
  {
    name: "Pumped Thermal Energy Storage",
    description:
      "Led business model evaluation and legal research on grid integration for a modular long-duration energy storage concept at CU's Sustainability Hackathon.",
    tags: ["Energy", "Hackathon", "Business"],
    year: "2024",
  },
];

const recentPosts = [
  {
    title: "On curiosity as a way of moving through the world",
    date: "June 2025",
    slug: "on-curiosity",
  },
];

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">

      {/* Hero — two column with photo */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col-reverse sm:flex-row sm:items-start sm:justify-between gap-10 mb-20"
      >
        <div className="flex-1">
          <h1
            className="text-5xl sm:text-6xl font-serif font-semibold text-[#1a1714] leading-tight mb-5"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Cooper Wathen
          </h1>
          <p
            className="text-xl font-serif text-[#8b4a2f] mb-5 italic"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Curious by nature. Grounded by values.
          </p>
          <p className="text-[#6b6560] leading-relaxed mb-8">
            Engineering physics student at CU Boulder building at the
            intersection of technical depth and startup execution. I believe most
            things worth understanding take time, honesty, and a willingness to
            be wrong.
          </p>
          <div className="flex gap-5 text-sm">
            <a
              href="https://linkedin.com/in/cooperwathen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8b4a2f] hover:underline underline-offset-4"
            >
              LinkedIn →
            </a>
            <a
              href="mailto:cooper.wathen@gmail.com"
              className="text-[#8b4a2f] hover:underline underline-offset-4"
            >
              Email →
            </a>
          </div>
        </div>

        <div className="sm:w-44 sm:flex-shrink-0">
          <div className="w-36 sm:w-44 aspect-square rounded-2xl overflow-hidden border border-[#d4cdc4] shadow-sm">
            <Image
              src="/selfie.jpg"
              alt="Cooper Wathen"
              width={176}
              height={176}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </motion.div>

      {/* Featured Work */}
      <AnimatedSection delay={0.05}>
        <div className="flex items-center justify-between mb-8">
          <h2
            className="text-2xl font-serif font-semibold text-[#1a1714]"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Featured Work
          </h2>
          <Link
            href="/projects"
            className="text-sm text-[#6b6560] hover:text-[#1a1714] transition-colors"
          >
            All projects →
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          {featuredProjects.map((project, i) => (
            <AnimatedSection key={project.name} delay={i * 0.08}>
              <div className="border border-[#d4cdc4] bg-[#ede8df] rounded-lg p-6 hover:-translate-y-0.5 transition-transform duration-200">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3
                    className="font-serif font-semibold text-[#1a1714] text-lg leading-snug"
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  >
                    {project.name}
                  </h3>
                  <span className="text-xs text-[#6b6560] whitespace-nowrap mt-1">
                    {project.year}
                  </span>
                </div>
                <p className="text-sm text-[#6b6560] leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-full border border-[#d4cdc4] text-[#6b6560]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>

      {/* Writing */}
      <AnimatedSection className="mt-20" delay={0.05}>
        <div className="flex items-center justify-between mb-8">
          <h2
            className="text-2xl font-serif font-semibold text-[#1a1714]"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Writing
          </h2>
          <Link
            href="/writing"
            className="text-sm text-[#6b6560] hover:text-[#1a1714] transition-colors"
          >
            All posts →
          </Link>
        </div>
        <div className="flex flex-col">
          {recentPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/writing/${post.slug}`}
              className="group flex items-center justify-between py-4 border-b border-[#d4cdc4] hover:border-[#8b4a2f] transition-colors"
            >
              <span className="text-[#1a1714] group-hover:text-[#8b4a2f] transition-colors">
                {post.title}
              </span>
              <span className="text-xs text-[#6b6560] ml-4 whitespace-nowrap">
                {post.date}
              </span>
            </Link>
          ))}
        </div>
        <p className="mt-5 text-sm text-[#6b6560]">
          Open, curious deep dives. No particular agenda.
        </p>
      </AnimatedSection>

    </div>
  );
}
