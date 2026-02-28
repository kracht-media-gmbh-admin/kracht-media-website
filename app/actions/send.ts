"use server";

/**
 * Server Action: Kontaktformular (Resend-ready).
 * Für Produktion: npm install resend, RESEND_API_KEY setzen,
 * dann resend.emails.send({ from, to, subject, react: <Template /> }) aufrufen.
 */

export type SendState = {
  success: boolean;
  message: string;
};

export async function send(
  _prevState: SendState | null,
  formData: FormData
): Promise<SendState> {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  if (!name || !email || !message) {
    return { success: false, message: "Bitte füllen Sie alle Felder aus." };
  }

  // Stub. Resend-Integration z. B.:
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({ from: '...', to: '...', subject: 'Kontakt Kracht Media', ... });
  console.log("[send stub]", {
    name,
    email,
    message: String(message).slice(0, 80),
  });

  return {
    success: true,
    message: "Vielen Dank. Wir melden uns in Kürze bei Ihnen.",
  };
}
