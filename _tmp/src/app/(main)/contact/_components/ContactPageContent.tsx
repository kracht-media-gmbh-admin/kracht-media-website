"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LayeredTitle from "@/components/ui/LayeredTitle";
import PageHero from "@/components/layout/PageHero";
import ContactForm from "./ContactForm";
import { COMPANY_INFO } from "@/config/site";

export default function ContactPageContent() {
    const searchParams = useSearchParams();
    const nameFromParams = searchParams.get("name");

    // Animation state for categories
    const [animatingCategory, setAnimatingCategory] = useState<{
        active: boolean;
        emoji: string;
    }>({ active: false, emoji: "" });

    const triggerAnimation = (emoji: string) => {
        if (animatingCategory.active) return; // Lock animation if one is already running

        setAnimatingCategory({ active: true, emoji });
        // Reset after animation (approx 2s)
        setTimeout(() => {
            setAnimatingCategory({ active: false, emoji: "" });
        }, 2000);
    };

    return (
        <div className="w-full relative">
            {/* Category Selection Animation Overlay */}
            <AnimatePresence>
                {animatingCategory.active && (
                    <>
                        {/* Darken Screen */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.6 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black z-50 pointer-events-none"
                        />
                        {/* Flying Emoji */}
                        <motion.div
                            initial={{ x: "-10vw", y: "50vh", rotate: -20, scale: 0.5 }}
                            animate={{
                                x: "110vw",
                                y: ["50vh", "30vh", "60vh"], // Curve
                                rotate: [0, 20, -10, 360],
                                scale: [1, 2, 1],
                            }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                            className="fixed z-50 pointer-events-none text-9xl"
                        >
                            {animatingCategory.emoji}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* HERO SECTION */}
            <PageHero
                main="KRACHT"
                overlay="anbandeln mit"
                subtitles={[
                    COMPANY_INFO.phone.display,
                    COMPANY_INFO.email.display,
                    `${COMPANY_INFO.name}, ${COMPANY_INFO.address.street}, ${COMPANY_INFO.address.zip} ${COMPANY_INFO.address.city}`
                ]}
            />

            {/* FORM SECTION - Darker Shade */}
            <section className="min-h-screen w-full bg-[var(--color-primary)] py-20 px-4 flex flex-col items-center text-[var(--color-background)]">
                <div className="w-full max-w-4xl">
                    {/* Form Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter">
                            {nameFromParams ? `HALLO ${nameFromParams}` : "HALLO"}
                        </h2>
                        <p className="text-xl md:text-3xl font-light opacity-80">
                            Jetzt geht&apos;s los. Wir freuen uns drauf.
                        </p>
                    </div>

                    {/* Form */}
                    <ContactForm
                        inputName={nameFromParams || ""}
                        onCategorySelect={triggerAnimation}
                        isAnimating={animatingCategory.active}
                    />
                </div>
            </section>
        </div>
    );
}
