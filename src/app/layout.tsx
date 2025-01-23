import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { siteConfig } from "@/config/site";

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
    keywords: [
      "AI",
      "scaling",
      "african cloud",
      "AI bootcamp",
      "NVIDIA",
      "GPU",
      "Kubernetes",
      "Monitoring",
      "auto scaling",
    ],
    creator: "Destino DELLO",
    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteConfig.url,
      title: siteConfig.name,
      description: siteConfig.description,
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.name,
      description: siteConfig.description,
      creator: "@DestinoDello",
    },
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
