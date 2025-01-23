import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: 'AI Scaler - The AI Developer Cloud',
  description: 'On-demand NVIDIA GPU instances & clusters for AI training & inference.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} smooth-scroll`}
    >
      <body className="bg-white text-black min-h-screen flex flex-col">
        {/* Top Banner */}
        <div className="bg-[#4339F2] font-sans p-3 text-center text-lg text-white">
          <p>
            Don&apos;t miss out on our bootcamp!{" "}
            <Link href="/bootcamp" className="underline">
              Get in touch now.
            </Link>
          </p>
        </div>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
