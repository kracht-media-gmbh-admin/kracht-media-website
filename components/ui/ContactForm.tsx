"use client";

import { useActionState } from "react";
import { send } from "@/app/actions/send";
import { cn } from "@/lib/utils";

const initialState = null;

export function ContactForm({ className }: { className?: string }) {
  const [state, formAction, isPending] = useActionState(send, initialState);

  return (
    <form
      action={formAction}
      className={cn("flex flex-col gap-4", className)}
      aria-describedby={state?.message ? "form-status" : undefined}
    >
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-semibold text-kracht-gruen"
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
          className="mt-1.5 w-full rounded-md border border-kracht-gruen/20 bg-baby-powder px-3 py-2.5 text-base text-kracht-gruen placeholder-kracht-gruen/50 focus:border-orange-web focus:outline-none focus:ring-1 focus:ring-orange-web"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-kracht-gruen"
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
          className="mt-1.5 w-full rounded-md border border-kracht-gruen/20 bg-baby-powder px-3 py-2.5 text-base text-kracht-gruen placeholder-kracht-gruen/50 focus:border-orange-web focus:outline-none focus:ring-1 focus:ring-orange-web"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-kracht-gruen"
        >
          Nachricht
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          disabled={isPending}
          className="mt-1.5 w-full rounded-md border border-kracht-gruen/20 bg-baby-powder px-3 py-2.5 text-base leading-[1.45] text-kracht-gruen placeholder-kracht-gruen/50 focus:border-orange-web focus:outline-none focus:ring-1 focus:ring-orange-web"
        />
      </div>
      {state?.message && (
        <p
          id="form-status"
          role="status"
          className={cn(
            "text-sm",
            state.success ? "text-kracht-gruen" : "text-orange-web"
          )}
        >
          {state.message}
        </p>
      )}
      <button
        type="submit"
        disabled={isPending}
        className="mt-1 rounded-md bg-orange-web px-5 py-2.5 text-base font-semibold text-kracht-gruen transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-web focus-visible:ring-offset-2 focus-visible:ring-offset-baby-powder disabled:opacity-50"
      >
        {isPending ? "Wird gesendet …" : "Nachricht senden"}
      </button>
    </form>
  );
}
