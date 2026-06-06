import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Nav from "@/components/Nav";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Cooper Wathen",
  description: "Engineering physics student building at the intersection of technical depth and startup execution.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-[#d4cdc4] py-8 mt-24">
          <div className="max-w-3xl mx-auto px-6 text-sm text-[#6b6560]">
            Cooper Wathen · Denver, CO
          </div>
        </footer>
      </body>
    </html>
  );
}
