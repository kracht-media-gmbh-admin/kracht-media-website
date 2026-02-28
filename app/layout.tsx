import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { defaultMetadata } from "@/lib/metadata";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { ExternalScripts } from "@/components/analytics/ExternalScripts";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import "./globals.css";

// Inline script: set dark class before first paint to avoid flash (system + localStorage)
const themeScript = `
(function(){
  var k = 'kracht-media-theme';
  var s;
  try { s = localStorage.getItem(k); } catch (e) {}
  var dark = s === 'dark' || (!s && typeof matchMedia !== 'undefined' && matchMedia('(prefers-color-scheme: dark)').matches);
  document.documentElement.classList.toggle('dark', dark);
})();
`;

// next/font: automatisches Self-Hosting, kein externer Font-Request, display: swap verhindert FOIT
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${montserrat.variable} min-h-screen antialiased flex flex-col bg-baby-powder text-kracht-gruen font-sans dark:bg-[var(--bg-page)] dark:text-[var(--text-page)]`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-orange-web focus:text-kracht-gruen focus:font-semibold focus:rounded-md focus:transition focus:duration-200 hover:bg-orange-web/90 focus:shadow-[0_4px_20px_rgba(255,159,28,0.35)]"
        >
          Zum Inhalt springen
        </a>
        <ThemeProvider>
          <ScrollToTop />
          <Navbar />
          <div id="main" className="flex-1 min-w-0 overflow-x-hidden" role="main">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
        <ExternalScripts />
      </body>
    </html>
  );
}
