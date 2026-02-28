import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, label, error, ...props }, ref) => {
        return (
            <div className="flex flex-col gap-2 group">
                <label className="text-xs font-bold uppercase tracking-wider opacity-60 text-white ml-1">
                    {label}
                </label>
                <div className="relative">
                    <input
                        ref={ref}
                        className={cn(
                            "w-full bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-sm border-2 border-white/10 rounded-xl px-4 py-4 text-lg text-white font-medium placeholder-white/20 outline-none transition-all duration-500",
                            "shadow-[inset_0_2px_4px_rgba(0,0,0,0.3),0_1px_2px_rgba(255,255,255,0.05)]",
                            "focus:from-white/[0.06] focus:to-white/[0.02] focus:border-[var(--color-accent)] focus:shadow-[inset_0_2px_4px_rgba(0,0,0,0.4),0_0_30px_rgba(250,169,22,0.15)]",
                            "hover:border-white/30 hover:shadow-[inset_0_2px_4px_rgba(0,0,0,0.2),0_10px_30px_-10px_rgba(0,0,0,0.5)]",
                            error && "border-red-500/50 focus:border-red-500 shadow-[inset_0_2px_4px_rgba(239,68,68,0.1)]",
                            className
                        )}
                        {...props}
                    />
                    {/* Visual Depth Accents */}
                    <div className="absolute inset-x-4 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
                    <div className="absolute inset-0 rounded-xl shadow-[6px_6px_20px_rgba(0,0,0,0.4)] pointer-events-none -z-10" />
                </div>
                {error && (
                    <span className="text-red-400 text-sm font-caveat font-bold ml-1 animate-pulse">
                        {error}
                    </span>
                )}
            </div>
        );
    }
);
Input.displayName = "Input";

export default Input;
