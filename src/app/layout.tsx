import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ['normal', 'italic'],
  weight: ['400', '700', '900'],
  display: 'swap',
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "TEMS AURA | Soft Luxury Custom Fashion",
  description: "Experience soft luxury with TEMS AURA - bespoke custom fashion designed exclusively for you. Ultra-feminine, elegant custom dresses and clothing made to your exact measurements.",
  keywords: "luxury fashion, custom dresses, bespoke clothing, fashion designer, custom measurements, luxury dresses, feminine fashion, TEMS AURA",
  authors: [{ name: "TEMS AURA" }],
  openGraph: {
    title: "TEMS AURA | Soft Luxury Custom Fashion",
    description: "Experience soft luxury with TEMS AURA - bespoke custom fashion designed exclusively for you.",
    type: "website",
    locale: "en_GB",
    siteName: "TEMS AURA",
  },
  twitter: {
    card: "summary_large_image",
    title: "TEMS AURA | Soft Luxury Custom Fashion",
    description: "Experience soft luxury with TEMS AURA - bespoke custom fashion designed exclusively for you.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased font-inter`}
      >
        <Script
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
          strategy="beforeInteractive"
        />
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Script id="netlify-identity-redirect" strategy="afterInteractive">
          {`
            if (window.netlifyIdentity) {
              window.netlifyIdentity.on("init", user => {
                if (!user) {
                  window.netlifyIdentity.on("login", () => {
                    document.location.href = "/admin/";
                  });
                }
              });
            }
          `}
        </Script>
      </body>
    </html>
  );
}
