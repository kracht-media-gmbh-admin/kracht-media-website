import Script from "next/script";

/**
 * Externe Skripte (Analytics, etc.) mit next/script optimal laden.
 *
 * Strategy:
 * - afterInteractive: Nach dem hydraten der Seite (empfohlen für Analytics).
 *   Blockiert nicht das initiale Rendering.
 * - lazyOnload: Noch später, wenn Browser idle (optional für weniger kritische Skripte).
 *
 * Für Analytics: NEXT_PUBLIC_ANALYTICS_SCRIPT_URL setzen (z.B. Google Analytics,
 * Plausible, etc.). Ohne gesetzte URL wird nichts geladen.
 */
const analyticsScriptUrl = process.env.NEXT_PUBLIC_ANALYTICS_SCRIPT_URL;

export function ExternalScripts() {
  if (!analyticsScriptUrl) return null;

  return (
    <Script
      src={analyticsScriptUrl}
      strategy="afterInteractive"
      // strategy="lazyOnload" = noch später, wenn Browser idle (weniger Einfluss auf LCP)
    />
  );
}
