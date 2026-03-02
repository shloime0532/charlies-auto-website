import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://charlies-auto-website.vercel.app"),
  title: "Charlie's Auto Service | Trusted Auto Repair in Lakewood, NJ",
  description:
    "Family-owned auto repair shop in Lakewood, NJ. ASE-certified mechanics, same-day service, honest pricing. Engine, brakes, transmission, electrical & more. Call (732) 555-0187.",
  keywords: [
    "auto repair",
    "Lakewood NJ",
    "mechanic",
    "oil change",
    "brake repair",
    "transmission",
    "ASE certified",
    "car repair",
    "Charlie's Auto Service",
  ],
  openGraph: {
    title: "Charlie's Auto Service | Trusted Auto Repair in Lakewood, NJ",
    description:
      "Family-owned auto repair shop. ASE-certified mechanics, same-day service, honest pricing.",
    type: "website",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
