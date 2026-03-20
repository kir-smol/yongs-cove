import type { Metadata } from "next";
import { Lato, Inter, Archivo } from "next/font/google";
import FacebookPixel from "@/components/FacebookPixel";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-archivo",
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
        className={`${lato.variable} ${inter.variable} ${archivo.variable} antialiased font-sans`}
      >
        <FacebookPixel />
        {children}
      </body>
    </html>
  );
}
