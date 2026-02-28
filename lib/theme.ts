/**
 * Theme (dark/light) – respects system preference, overridable by user.
 * Persisted in localStorage.
 */

export const THEME_STORAGE_KEY = "kracht-media-theme";

export type ThemeValue = "light" | "dark";

export function getSystemDark(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export function getStoredTheme(): ThemeValue | null {
  if (typeof window === "undefined") return null;
  const v = localStorage.getItem(THEME_STORAGE_KEY);
  if (v === "light" || v === "dark") return v;
  return null;
}

export function setStoredTheme(value: ThemeValue | null): void {
  if (typeof window === "undefined") return;
  if (value === null) {
    localStorage.removeItem(THEME_STORAGE_KEY);
  } else {
    localStorage.setItem(THEME_STORAGE_KEY, value);
  }
}

/** Resolve effective theme: stored override or system */
export function resolveTheme(stored: ThemeValue | null, systemDark: boolean): ThemeValue {
  if (stored) return stored;
  return systemDark ? "dark" : "light";
}
