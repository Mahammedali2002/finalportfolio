import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MAHWEB Portfolio",
  description: "Portfolio van Mahweb – Webdesign, UX en Frontend Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#FAF6EB] text-[#1E1E1E]`}
      >
        {/* Navbar verschijnt bovenaan elke pagina */}
        <Navbar />

        {/* Hier komt de rest van de pagina */}
        <main>{children}</main>
      </body>
    </html>
  );
}
