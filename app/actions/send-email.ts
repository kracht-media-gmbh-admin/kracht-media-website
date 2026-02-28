"use server";

/**
 * Server Action: send contact form email.
 * Stub for Resend integration. Replace with actual Resend API call when ready.
 *
 * Resend setup:
 * 1. npm install resend
 * 2. Set RESEND_API_KEY in env
 * 3. Use resend.emails.send({ from, to, subject, react: <EmailTemplate /> })
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
    return { success: false, message: "Please fill in all fields." };
  }

  // Stub: log and return success. Replace with Resend when configured.
  // await resend.emails.send({ from: '...', to: '...', subject: '...', react: ... });
  console.log("[sendEmail stub]", { name, email, message: String(message).slice(0, 50) });

  return {
    success: true,
    message: "Thank you. We'll get back to you soon.",
  };
}
