"use client";

import React, { forwardRef, useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface SelectOption {
    value: string;
    label: string;
}

interface SelectProps {
    label: string;
    options: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    error?: string;
    className?: string;
    name?: string;
    required?: boolean;
}

const Select = forwardRef<HTMLDivElement, SelectProps>(
    ({
        label,
        options,
        value,
        onChange,
        placeholder = "Bitte auswählen...",
        error,
        className,
        name,
        required,
    }, ref) => {
        const [isOpen, setIsOpen] = useState(false);
        const [selectedValue, setSelectedValue] = useState(value || "");
        const containerRef = useRef<HTMLDivElement>(null);

        // Sync with external value
        useEffect(() => {
            if (value !== undefined) {
                setSelectedValue(value);
            }
        }, [value]);

        // Close on outside click
        useEffect(() => {
            const handleClickOutside = (event: MouseEvent) => {
                if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                    setIsOpen(false);
                }
            };
            document.addEventListener("mousedown", handleClickOutside);
            return () => document.removeEventListener("mousedown", handleClickOutside);
        }, []);

        const handleSelect = (optionValue: string) => {
            setSelectedValue(optionValue);
            onChange?.(optionValue);
            setIsOpen(false);
        };

        const selectedOption = options.find(opt => opt.value === selectedValue);

        return (
            <div className="flex flex-col gap-2 group" ref={containerRef}>
                <label className="text-xs font-bold uppercase tracking-wider opacity-60 text-white ml-1">
                    {label}
                </label>

                {/* Hidden input for form submission */}
                <input type="hidden" name={name} value={selectedValue} required={required} />

                <div className="relative" ref={ref}>
                    {/* Select Button */}
                    <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        className={cn(
                            "w-full bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-sm border-2 border-white/10 rounded-xl px-4 py-4 text-lg text-left font-medium outline-none transition-all duration-500",
                            "shadow-[inset_0_2px_4px_rgba(0,0,0,0.3),0_1px_2px_rgba(255,255,255,0.05)]",
                            "focus:from-white/[0.06] focus:to-white/[0.02] focus:border-[var(--color-accent)] focus:shadow-[inset_0_2px_4px_rgba(0,0,0,0.4),0_0_30px_rgba(250,169,22,0.15)]",
                            "hover:border-white/30 hover:shadow-[inset_0_2px_4px_rgba(0,0,0,0.2),0_10px_30px_-10px_rgba(0,0,0,0.5)]",
                            selectedValue ? "text-white" : "text-white/20",
                            error && "border-red-500/50 focus:border-red-500 shadow-[inset_0_2px_4px_rgba(239,68,68,0.1)]",
                            className
                        )}
                    >
                        <span className="flex items-center justify-between">
                            <span>{selectedOption?.label || placeholder}</span>
                            <motion.svg
                                animate={{ rotate: isOpen ? 180 : 0 }}
                                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                                className="w-5 h-5 text-white/40"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2 / 2} d="M19 9l-7 7-7-7" />
                            </motion.svg>
                        </span>
                    </button>

                    {/* Visual Depth Accents */}
                    <div className="absolute inset-x-4 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
                    <div className="absolute inset-0 rounded-xl shadow-[6px_6px_20px_rgba(0,0,0,0.4)] pointer-events-none -z-10" />

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                                className="absolute z-50 w-full mt-3 bg-[var(--color-dark)]/95 backdrop-blur-xl border-2 border-white/10 rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                            >
                                <div className="p-1">
                                    {options.map((option) => (
                                        <button
                                            key={option.value}
                                            type="button"
                                            onClick={() => handleSelect(option.value)}
                                            className={cn(
                                                "w-full px-4 py-3 text-lg text-left transition-all duration-300 rounded-lg mb-1 last:mb-0",
                                                "hover:bg-white/10 hover:translate-x-1",
                                                selectedValue === option.value
                                                    ? "bg-[var(--color-accent)] text-[var(--color-primary)] font-bold"
                                                    : "text-white/80 hover:text-white"
                                            )}
                                        >
                                            {option.label}
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {error && (
                    <span className="text-red-400 text-sm font-bold ml-1 animate-pulse">
                        {error}
                    </span>
                )}
            </div>
        );
    }
);
Select.displayName = "Select";

export default Select;
