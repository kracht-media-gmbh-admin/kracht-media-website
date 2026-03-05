"use server";

import { Resend } from "resend";
import { contactFormSchema } from "@/lib/contact-schema";

const TO_EMAIL = "admin@kracht.at";
const DIRECT_EMAIL = "office@kracht.at";

export type SendState = {
  success: boolean;
  message: string;
};

function sanitizeSubject(name: string): string {
  return name.replace(/\s+/g, " ").trim().slice(0, 100);
}

export async function send(
  _prevState: SendState | null,
  formData: FormData
): Promise<SendState> {
  try {
    const raw = {
      name: formData.get("name") ?? "",
      email: formData.get("email") ?? "",
      phone: formData.get("phone") ?? "",
      message: formData.get("message") ?? "",
    };

    const parsed = contactFormSchema.safeParse({
      name: typeof raw.name === "string" ? raw.name : "",
      email: typeof raw.email === "string" ? raw.email : "",
      phone: typeof raw.phone === "string" ? raw.phone : "",
      message: typeof raw.message === "string" ? raw.message : "",
    });

    if (!parsed.success) {
      const firstIssue = parsed.error.issues[0];
      const message =
        typeof firstIssue?.message === "string"
          ? firstIssue.message
          : "Bitte prüfen Sie Ihre Eingaben.";
      return { success: false, message };
    }

    const { name, email, phone, message } = parsed.data;

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("[send] RESEND_API_KEY is not set");
      return {
        success: false,
        message: `E-Mail-Versand ist derzeit nicht konfiguriert. Bitte schreiben Sie uns direkt an ${DIRECT_EMAIL}.`,
      };
    }

    const from = process.env.RESEND_FROM ?? "Kracht Media <onboarding@resend.dev>";
    const resend = new Resend(apiKey);
    const subject = `Kontaktanfrage von ${sanitizeSubject(name)}`;

    const lines = ["Name: " + name];
    if (email) lines.push("E-Mail: " + email);
    if (phone) lines.push("Telefon: " + phone);
    lines.push("", "Nachricht:", message);

    const { error } = await resend.emails.send({
      from,
      to: TO_EMAIL,
      ...(email ? { replyTo: email } : {}),
      subject,
      text: lines.join("\n"),
    });

    if (error) {
      console.error("[send] Resend error:", error);
      return {
        success: false,
        message: `Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später oder schreiben Sie uns direkt an ${DIRECT_EMAIL}.`,
      };
    }

    return {
      success: true,
      message: "Vielen Dank. Wir melden uns in Kürze bei Ihnen.",
    };
  } catch (err) {
    console.error("[send] Unexpected error:", err);
    return {
      success: false,
      message: `Ein Fehler ist aufgetreten. Bitte prüfen Sie Ihre Eingaben oder schreiben Sie uns später direkt an ${DIRECT_EMAIL}.`,
    };
  }
}
