import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Voice Agent Runtime",
  description:
    "A distributed, real-time voice agent runtime. Go orchestrator, Python inference engine, gRPC bidirectional stream. Sub-1.1s end-to-end latency on consumer hardware.",
  openGraph: {
    title: "Voice Agent Runtime",
    description:
      "Distributed real-time voice agent runtime built on consumer hardware. No cloud APIs.",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-body text-primary-text transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}