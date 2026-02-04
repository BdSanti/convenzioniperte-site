import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Convenzioni Per Te | Welfare e Partnership",
  description: "Piattaforma di vantaggi esclusivi per dipendenti e partner commerciali.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Google Analytics Script 1 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-16Z0YZWGGH"
          strategy="afterInteractive"
        />
        {/* Google Analytics Script 2 */}
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-16Z0YZWGGH');
          `}
        </Script>

        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
