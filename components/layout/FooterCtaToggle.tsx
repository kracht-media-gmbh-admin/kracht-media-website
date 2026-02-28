"use client";

import { useRouter } from "next/navigation";

/**
 * CTA button: creative message, redirects to contact page.
 */
export function FooterCtaToggle() {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.push("/contact")}
      aria-label="Zum Kontakt – gemeinsam KRACH machen"
      className="
        btn-hover px-6 py-3 rounded-full font-semibold text-baby-powder
        bg-orange-web hover:bg-orange-web/90 active:bg-orange-web/80
        transition-colors duration-200
        focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-web focus-visible:ring-offset-2 focus-visible:ring-offset-kracht-gruen
      "
    >
      Ja, ich will mitmachen – Kontakt aufnehmen
    </button>
  );
}
