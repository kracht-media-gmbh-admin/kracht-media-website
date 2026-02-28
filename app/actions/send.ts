"use server";

import { Resend } from "resend";

const TO_EMAIL = "admin@kracht.at";

export type SendState = {
  success: boolean;
  message: string;
};

export async function send(
  _prevState: SendState | null,
  formData: FormData
): Promise<SendState> {
  const nameStr = String(formData.get("name") ?? "").trim();
  const emailStr = String(formData.get("email") ?? "").trim();
  const messageStr = String(formData.get("message") ?? "").trim();

  if (!nameStr || !emailStr || !messageStr) {
    return { success: false, message: "Bitte füllen Sie alle Felder aus." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[send] RESEND_API_KEY is not set");
    return {
      success: false,
      message: "E-Mail-Versand ist derzeit nicht konfiguriert. Bitte versuchen Sie es später oder schreiben Sie uns direkt an office@kracht.at.",
    };
  }

  const from = process.env.RESEND_FROM ?? "Kracht Media <onboarding@resend.dev>";
  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from,
      to: TO_EMAIL,
      replyTo: emailStr,
      subject: `Kontaktanfrage von ${nameStr}`,
      text: [`Name: ${nameStr}`, `E-Mail: ${emailStr}`, "", "Nachricht:", messageStr].join("\n"),
    });

    if (error) {
      console.error("[send] Resend error:", error);
      return {
        success: false,
        message: "Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später oder schreiben Sie uns direkt an office@kracht.at.",
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
      message: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später oder schreiben Sie uns direkt an office@kracht.at.",
    };
  }
}
