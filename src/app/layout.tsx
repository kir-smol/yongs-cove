import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import FacebookPixel from "@/components/FacebookPixel";
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
  title: "Young's Cove — Premium Waterfront Living | Quinte West, Ontario",
  description:
    "Discover exceptional luxury waterfront properties at Young's Cove, Quinte West, Ontario. New construction by Briarwood Homes near Prince Edward County. Schedule a private tour today.",
  openGraph: {
    title: "Young's Cove — Premium Waterfront Living | Quinte West, Ontario",
    description:
      "Discover exceptional luxury waterfront properties at Young's Cove, Quinte West, Ontario. New construction by Briarwood Homes near Prince Edward County.",
    type: "website",
    locale: "en_CA",
    siteName: "Young's Cove",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <FacebookPixel />
        {children}
      </body>
    </html>
  );
}
