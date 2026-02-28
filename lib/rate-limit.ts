/**
 * Einfaches Rate-Limiting für die Kontakt-Action.
 *
 * Ohne Upstash: In-Memory-Store (nur pro Server-Instanz, nicht für Multi-Instance/Vercel geeignet).
 * Mit Upstash: Siehe docs/CONTACT-RATE-LIMIT.md – UPSTASH_REDIS_REST_URL + UPSTASH_REDIS_REST_TOKEN setzen
 * und send.ts auf checkRateLimitUpstash() umstellen.
 */

const LIMIT = 5;
const WINDOW_MS = 60 * 1000; // 1 Minute

type Entry = { count: number; resetAt: number };

const store = new Map<string, Entry>();

function prune() {
  const now = Date.now();
  for (const [key, entry] of store.entries()) {
    if (entry.resetAt < now) store.delete(key);
  }
}

/**
 * In-Memory Rate-Limit (pro IP). Für Produktion mit mehreren Instanzen: Upstash nutzen.
 */
export function checkRateLimitInMemory(identifier: string): { ok: true } | { ok: false; message: string } {
  prune();
  const now = Date.now();
  const entry = store.get(identifier);

  if (!entry) {
    store.set(identifier, { count: 1, resetAt: now + WINDOW_MS });
    return { ok: true };
  }

  if (entry.resetAt < now) {
    entry.count = 1;
    entry.resetAt = now + WINDOW_MS;
    return { ok: true };
  }

  if (entry.count >= LIMIT) {
    return {
      ok: false,
      message: "Zu viele Anfragen. Bitte warten Sie eine Minute und versuchen Sie es erneut.",
    };
  }

  entry.count += 1;
  return { ok: true };
}

/**
 * Client-IP aus Next-Headers (Vercel: x-forwarded-for, x-real-ip).
 */
export function getClientIdentifier(headers: Headers): string {
  const forwarded = headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() ?? "unknown";
  const realIp = headers.get("x-real-ip");
  if (realIp) return realIp.trim();
  return "unknown";
}
