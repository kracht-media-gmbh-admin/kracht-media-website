"use server";

/**
 * Server Action: Kontaktformular versenden.
 * Stub für Resend. Bei Einrichtung: RESEND_API_KEY setzen und resend.emails.send nutzen.
 */

export type SendEmailState = {
  success: boolean;
  message: string;
};

export async function sendEmail(
  _prevState: SendEmailState | null,
  formData: FormData
): Promise<SendEmailState> {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  if (!name || !email || !message) {
    return { success: false, message: "Bitte füllen Sie alle Felder aus." };
  }

  // Stub: Log und Erfolg. Später durch Resend ersetzen.
  console.log("[sendEmail stub]", {
    name,
    email,
    message: String(message).slice(0, 50),
  });

  return {
    success: true,
    message: "Vielen Dank. Wir melden uns in Kürze bei Ihnen.",
  };
}
