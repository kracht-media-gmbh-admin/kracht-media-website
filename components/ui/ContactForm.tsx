"use client";

import { useActionState } from "react";
import { send } from "@/app/actions/send";
import { cn } from "@/lib/utils";

const initialState = null;

export function ContactForm({ className }: { className?: string }) {
  const [state, formAction, isPending] = useActionState(send, initialState);

  const inputClass =
    "mt-2 w-full border-0 border-b bg-transparent px-0 py-3 text-base transition focus:border-orange-web focus:outline-none focus:ring-0 rounded-none border-[var(--border-page)] text-[var(--text-page)] placeholder:text-[var(--placeholder-page)]";

  return (
    <form
      action={formAction}
      className={cn("flex flex-col gap-5", className)}
      aria-describedby={state?.message ? "form-status" : undefined}
    >
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-semibold text-[var(--text-page)]"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          disabled={isPending}
          className={inputClass}
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-[var(--text-page)]"
        >
          E-Mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          disabled={isPending}
          className={inputClass}
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-[var(--text-page)]"
        >
          Nachricht
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          disabled={isPending}
          className={cn(inputClass, "resize-y min-h-[120px] border-b")}
        />
      </div>
      {state?.message && (
        <p
          id="form-status"
          role="status"
          aria-live="polite"
          className={cn(
            "text-sm font-medium",
            state.success ? "text-[var(--text-page)]" : "text-orange-web"
          )}
        >
          {state.message}
        </p>
      )}
      <button
        type="submit"
        disabled={isPending}
        className={cn(
          "btn-hover btn-hover-invert mt-1 rounded-xl bg-orange-web px-6 py-3.5 text-base font-semibold text-kracht-gruen focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-web focus-visible:ring-offset-2 focus-visible:ring-offset-baby-powder dark:focus-visible:ring-offset-[var(--bg-page)] disabled:opacity-60 disabled:hover:transform-none"
        )}
      >
        {isPending ? "Wird gesendet …" : "Nachricht senden"}
      </button>
      <p className="text-xs leading-relaxed text-[var(--text-page-muted-50)]">
        Mit dem Absenden dieser Anfrage werden Ihre Angaben (Name, E-Mail-Adresse, Nachricht)
        zur Bearbeitung Ihres Anliegens verarbeitet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b
        und f DSGVO. Die Übermittlung erfolgt verschlüsselt über Resend (USA). Weitere
        Informationen finden Sie in unserer{" "}
        <a href="/datenschutz" className="underline underline-offset-2 text-[var(--text-page-muted-50)] hover:opacity-90 transition-opacity">
          Datenschutzerklärung
        </a>
        .
      </p>
    </form>
  );
}
