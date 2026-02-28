"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";

type Category = "Design" | "Strategie" | "Kreation" | "Events" | "Kommunikation";

const CATEGORIES: { label: Category; emoji: string }[] = [
  { label: "Design", emoji: "🎨" },
  { label: "Strategie", emoji: "🧠" },
  { label: "Kreation", emoji: "✨" },
  { label: "Events", emoji: "🥂" },
  { label: "Kommunikation", emoji: "💬" },
];

interface ContactFormProps {
  inputName: string;
  onCategorySelect: (emoji: string) => void;
  isAnimating: boolean;
}

export default function ContactForm({ inputName, onCategorySelect, isAnimating }: ContactFormProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success?: boolean; error?: string } | null>(null);

  // Validation State
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  // Split name for defaults
  const nameParts = inputName.split(" ");
  const firstNameDefault = nameParts[0] || "";
  const lastNameDefault = nameParts.length > 1 ? nameParts.slice(1).join(" ") : "";

  const handleCategoryClick = (category: Category, emoji: string) => {
    if (isAnimating) return;

    if (selectedCategory !== category) {
      setSelectedCategory(category);
      onCategorySelect(emoji);
    }
  };

  const validateEmail = (val: string) => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
    if (!isValid && val.length > 0) {
      setEmailError("Bitte geben Sie eine gültige E-Mail-Adresse ein.");
    } else {
      setEmailError("");
    }
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (emailError || !selectedCategory) {
      if (!selectedCategory) alert("Bitte wählen Sie eine Kategorie aus.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(e.currentTarget);

    const payload = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      category: selectedCategory,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (result.success) {
        setSubmitStatus({ success: true });
      } else {
        setSubmitStatus({ error: result.error || "Ein unerwarteter Fehler ist aufgetreten." });
      }
    } catch {
      setSubmitStatus({ error: "Verbindungsfehler. Bitte versuchen Sie es später erneut." });
    }

    setIsSubmitting(false);
  }

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-12">
      {/* Contact Info Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
        <Input
          label="Vorname"
          name="firstName"
          defaultValue={firstNameDefault}
          placeholder="Max"
          required
        />
        <Input
          label="Nachname"
          name="lastName"
          defaultValue={lastNameDefault}
          placeholder="Musterfrau"
          required
        />
        <Input
          label="Telefon"
          name="phone"
          type="tel"
          placeholder="+43 ..."
          required
        />
        <Input
          label="E-Mail"
          name="email"
          type="email"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value);
            if (emailError) validateEmail(e.target.value);
          }}
          onBlur={(e: React.FocusEvent<HTMLInputElement>) => validateEmail(e.target.value)}
          error={emailError}
          placeholder="maxi@wuchtig.at"
          required
        />
      </div>

      {/* Categories Subtitle */}
      <div className="w-full mt-8">
        <p className="text-center text-xl uppercase tracking-widest font-black text-white/80 mb-8">
          Womit dürfen wir dienen?
        </p>

        {/* Fluid Category Selection - Now with Depth */}
        <div className="flex flex-wrap justify-center gap-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.label}
              type="button"
              disabled={isAnimating}
              onClick={() => handleCategoryClick(cat.label, cat.emoji)}
              className={`
                px-6 py-3 rounded-lg text-lg font-bold transition-all duration-200 border-2
                ${selectedCategory === cat.label
                  ? "bg-white border-white text-[var(--color-primary)] shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] translate-x-[-2px] translate-y-[-2px]"
                  : "bg-transparent border-white/20 text-white hover:border-white/50 hover:bg-white/5 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]"
                }
                active:translate-x-0 active:translate-y-0 active:shadow-none
                disabled:opacity-50 disabled:cursor-not-allowed
              `}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Message */}
      <Textarea
        label="Deine Nachricht"
        name="message"
        placeholder="Eure Vorhaben in 3 Sätzen..."
      />

      {/* Feedback Messages */}
      {submitStatus?.success && (
        <p className="text-center text-green-400 font-bold text-xl animate-bounce">
          Danke für deine Nachricht! Wir melden uns in Kürze bei dir. ✨
        </p>
      )}
      {submitStatus?.error && (
        <p className="text-center text-red-400 font-bold">
          {submitStatus.error}
        </p>
      )}

      {/* Submit Button */}
      {!submitStatus?.success && (
        <div className="flex justify-center mt-12">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            isLoading={isSubmitting}
          >
            Absenden
          </Button>
        </div>
      )}
    </form>
  );
}