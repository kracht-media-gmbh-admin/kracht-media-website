import { z } from "zod";

/** Maximale Längen für Resend und Schutz vor übergroßen Payloads */
const MAX_NAME = 200;
const MAX_EMAIL = 320;
const MAX_MESSAGE = 10_000;
const MIN_MESSAGE = 10;

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, "Bitte geben Sie einen Namen an.")
    .max(MAX_NAME, `Der Name darf maximal ${MAX_NAME} Zeichen haben.`)
    .transform((s) => s.trim()),
  email: z
    .string()
    .min(1, "Bitte geben Sie eine E-Mail-Adresse an.")
    .max(MAX_EMAIL, "Die E-Mail-Adresse ist zu lang.")
    .email("Bitte geben Sie eine gültige E-Mail-Adresse an.")
    .transform((s) => s.trim().toLowerCase()),
  message: z
    .string()
    .min(MIN_MESSAGE, `Die Nachricht muss mindestens ${MIN_MESSAGE} Zeichen haben.`)
    .max(MAX_MESSAGE, `Die Nachricht darf maximal ${MAX_MESSAGE} Zeichen haben.`)
    .transform((s) => s.trim()),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;
