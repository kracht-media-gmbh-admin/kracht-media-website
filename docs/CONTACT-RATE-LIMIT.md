# Rate-Limiting für das Kontaktformular

Die Server Action `app/actions/send.ts` nutzt standardmäßig ein **in-memory Rate-Limit** (5 Anfragen pro Minute pro IP). Das reicht für Single-Instance- oder lokale Entwicklung. Auf **Vercel** (mehrere Serverless-Instanzen) ist der In-Memory-Store nicht geteilt – für zuverlässiges Rate-Limiting in Produktion sollten Sie **Upstash Redis** (oder Vercel KV) verwenden.

---

## Option 1: Upstash Redis (empfohlen auf Vercel)

1. **Upstash Account:** [upstash.com](https://upstash.com) – Free Tier reicht für das Kontaktformular.

2. **Redis-Datenbank anlegen** und in der Konsole die Werte kopieren:
   - `UPSTASH_REDIS_REST_URL`
   - `UPSTASH_REDIS_REST_TOKEN`

3. **Pakete installieren:**
   ```bash
   npm install @upstash/ratelimit @upstash/redis
   ```

4. **Rate-Limiter anlegen** (z. B. `lib/rate-limit-upstash.ts`):
   ```ts
   import { Ratelimit } from "@upstash/ratelimit";
   import { Redis } from "@upstash/redis";

   const redis =
     process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
       ? new Redis({
           url: process.env.UPSTASH_REDIS_REST_URL,
           token: process.env.UPSTASH_REDIS_REST_TOKEN,
         })
       : null;

   export const contactRateLimiter =
     redis &&
     new Ratelimit({
       redis,
       limiter: Ratelimit.slidingWindow(5, "1 m"),
       prefix: "contact:",
     });
   ```

5. **In `app/actions/send.ts`** das In-Memory-Check ersetzen:
   - `headers()` nutzen, um die Client-IP zu lesen (wie bereits für In-Memory).
   - Vor dem Versand prüfen:
     ```ts
     if (contactRateLimiter) {
       const headersList = await headers();
       const ip = getClientIdentifier(headersList);
       const { success } = await contactRateLimiter.limit(ip);
       if (!success) {
         return { success: false, message: "Zu viele Anfragen. Bitte warten Sie eine Minute." };
       }
     } else {
       const rateLimit = checkRateLimitInMemory(identifier);
       if (!rateLimit.ok) return { success: false, message: rateLimit.message };
     }
     ```

6. **Env-Variablen** in Vercel (oder `.env.local`) setzen:
   - `UPSTASH_REDIS_REST_URL`
   - `UPSTASH_REDIS_REST_TOKEN`

---

## Option 2: Vercel KV

Vercel KV baut auf Upstash auf. Nach dem Anlegen der KV-Store in der Vercel-Console erhalten Sie die gleichen Env-Variablen (oder kompatibel). Sie können dann `@upstash/redis` mit der Vercel-KV-URL nutzen oder die Vercel-KV-Client-Library – die **Ratelimit-Logik** (z. B. mit `@upstash/ratelimit`) bleibt gleich: pro IP einen Zähler mit Sliding Window (z. B. 5 pro Minute).

---

## Aktuelles Verhalten (ohne Upstash)

- **Limit:** 5 Anfragen pro Minute pro IP.
- **Identifikation:** IP aus `x-forwarded-for` oder `x-real-ip` (von Vercel gesetzt).
- **Antwort bei Limit:** *"Zu viele Anfragen. Bitte warten Sie eine Minute und versuchen Sie es erneut."*

Mit Upstash gilt dasselbe Limit, nur eben plattformübergreifend für alle Instanzen.
