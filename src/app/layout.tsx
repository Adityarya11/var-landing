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
    "A voice agent that runs entirely on a 4 GB laptop GPU. 2.07 s median from end of speech to first audio, measured over 179 turns.",
  openGraph: {
    title: "Voice Agent Runtime",
    description:
      "A voice agent that runs entirely on a 4 GB laptop GPU, with measured latency.",
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
      <body className="min-h-full flex flex-col bg-body text-primary-text">
        {children}
      </body>
    </html>
  );
}
