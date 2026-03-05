import { z } from "zod";

/** Maximale Längen für Resend und Schutz vor übergroßen Payloads */
const MAX_NAME = 200;
const MAX_EMAIL = 320;
const MAX_PHONE = 50;
const MAX_MESSAGE = 10_000;
const MIN_MESSAGE = 10;

/** Einfache Prüfung: mindestens ein paar Ziffern/Plus, keine reinen Sonderzeichen */
const phoneRegex = /^[\d\s+\-()]{6,}$/;

export const contactFormSchema = z
  .object({
    name: z
      .string()
      .min(1, "Bitte geben Sie einen Namen an.")
      .max(MAX_NAME, `Der Name darf maximal ${MAX_NAME} Zeichen haben.`)
      .transform((s) => s.trim()),
    email: z
      .string()
      .max(MAX_EMAIL, "Die E-Mail-Adresse ist zu lang.")
      .transform((s) => (s ?? "").trim().toLowerCase()),
    phone: z
      .string()
      .max(MAX_PHONE, "Die Telefonnummer ist zu lang.")
      .transform((s) => (s ?? "").trim()),
    message: z
      .string()
      .min(MIN_MESSAGE, `Die Nachricht muss mindestens ${MIN_MESSAGE} Zeichen haben.`)
      .max(MAX_MESSAGE, `Die Nachricht darf maximal ${MAX_MESSAGE} Zeichen haben.`)
      .transform((s) => s.trim()),
  })
  .superRefine((data, ctx) => {
    const email = typeof data.email === "string" ? data.email : "";
    const phone = typeof data.phone === "string" ? data.phone : "";
    const hasEmail = email.length > 0;
    const hasPhone = phone.length > 0;
    if (!hasEmail && !hasPhone) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Bitte geben Sie eine E-Mail-Adresse und/oder Telefonnummer an (mindestens eines).",
        path: ["email"],
      });
      return;
    }
    if (hasEmail) {
      const emailResult = z
        .string()
        .email("Bitte geben Sie eine gültige E-Mail-Adresse an.")
        .safeParse(email);
      if (!emailResult.success) {
        const msg = emailResult.error.issues[0]?.message;
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: typeof msg === "string" ? msg : "Ungültiges E-Mail-Format.",
          path: ["email"],
        });
      }
    }
    if (hasPhone) {
      const phoneDigits = phone.replace(/\s/g, "");
      if (!phoneRegex.test(phoneDigits)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Bitte geben Sie eine gültige Telefonnummer an (mindestens 6 Ziffern oder Zeichen).",
          path: ["phone"],
        });
      }
    }
  });

export type ContactFormInput = z.infer<typeof contactFormSchema>;
