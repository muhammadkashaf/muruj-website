import type { Metadata } from "next";
import { DM_Sans, Sora } from "next/font/google";
import WhatsAppFAB from "@/components/landing/ui/WhatsAppFAB";
import "./globals.css";

const headingFont = Sora({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-heading",
});

const bodyFont = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Muruj Travels | Explore Skardu Smarter",
  description:
    "Discover curated Skardu packages, local guides, AI trip planning, and live travel alerts inside the Muruj Travels app.",
  icons: {
    icon: [{ url: "/images/muruj-tab-icon.svg", type: "image/svg+xml", sizes: "any" }],
    shortcut: "/images/muruj-tab-icon.svg",
    apple: "/images/muruj-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full">
        {children}
        <WhatsAppFAB />
      </body>
    </html>
  );
}
