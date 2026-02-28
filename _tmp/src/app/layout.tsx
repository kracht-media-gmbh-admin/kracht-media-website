import type { Metadata } from "next";
import { Montserrat, Caveat } from "next/font/google";
import Script from "next/script";
import "@/app/globals.css";

import Footer from "@/components/layout/footer";
import BottomNav from "@/components/layout/bottom-nav";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Kracht Media',
    default: 'Kracht Media',
  },
  description: "Achtung, jetzt wird's laut!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <Script
          src="//www.cookie-manager.com/0/37/0a4f9b179425d2710b85bd19661d0d09.js"
          strategy="beforeInteractive"
        />
      </head>
      <body
        className={`${montserrat.variable} ${caveat.variable} antialiased`}
        style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
      >
        <BottomNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
