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
      noValidate
    >
      {state?.message && (
        <div
          id="form-status"
          role="status"
          aria-live="polite"
          className={cn(
            "rounded-card-inner border-2 px-4 py-4 text-base font-semibold leading-body",
            state.success
              ? "border-kracht-gruen/30 bg-kracht-gruen/10 text-kracht-gruen dark:bg-kracht-gruen/15 dark:border-kracht-gruen/40"
              : "border-orange-web/50 bg-orange-web/10 text-kracht-gruen dark:bg-orange-web/15 dark:border-orange-web/40"
          )}
        >
          {state.message}
        </div>
      )}
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
          type="text"
          inputMode="email"
          autoComplete="email"
          disabled={isPending}
          className={inputClass}
          placeholder="z. B. name@beispiel.de"
        />
        <p className="mt-1 text-xs text-[var(--text-page-muted-50)]">
          E-Mail, Telefon oder beides angeben (mindestens eines).
        </p>
      </div>
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-semibold text-[var(--text-page)]"
        >
          Telefon (optional)
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          disabled={isPending}
          className={inputClass}
          placeholder="z. B. +43 660 1234567"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-[var(--text-page)]"
        >
          Nachricht <span className="font-normal text-[var(--text-page-muted-50)]">(mind. 10 Zeichen)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          disabled={isPending}
          className={cn(inputClass, "resize-y min-h-[120px] border-b")}
        />
      </div>
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
        Mit dem Absenden dieser Anfrage werden Ihre Angaben (Name, E-Mail bzw. Telefon, Nachricht)
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
