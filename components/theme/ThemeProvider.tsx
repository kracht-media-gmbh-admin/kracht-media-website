"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  THEME_STORAGE_KEY,
  getSystemDark,
  getStoredTheme,
  setStoredTheme,
  resolveTheme,
  type ThemeValue,
} from "@/lib/theme";

type ThemeContextValue = {
  theme: ThemeValue;
  /** User override: "light" | "dark" | null (null = follow system) */
  override: ThemeValue | null;
  setOverride: (v: ThemeValue | null) => void;
  toggle: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function applyDark(dark: boolean) {
  document.documentElement.classList.toggle("dark", dark);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [override, setOverrideState] = useState<ThemeValue | null>(null);
  const [systemDark, setSystemDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setOverrideState(getStoredTheme());
    setSystemDark(getSystemDark());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const stored = override ?? getStoredTheme();
    const effective = resolveTheme(stored, systemDark);
    applyDark(effective === "dark");
  }, [mounted, override, systemDark]);

  useEffect(() => {
    if (!mounted) return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => setSystemDark(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [mounted]);

  const setOverride = useCallback((v: ThemeValue | null) => {
    setStoredTheme(v);
    setOverrideState(v);
    const effective = resolveTheme(v ?? getStoredTheme(), getSystemDark());
    applyDark(effective === "dark");
  }, []);

  const toggle = useCallback(() => {
    const stored = getStoredTheme();
    const sys = getSystemDark();
    const current = resolveTheme(stored, sys);
    const next: ThemeValue = current === "dark" ? "light" : "dark";
    setStoredTheme(next);
    setOverrideState(next);
    applyDark(next === "dark");
  }, []);

  const theme = resolveTheme(override ?? getStoredTheme(), systemDark);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        override: override ?? getStoredTheme(),
        setOverride,
        toggle,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
