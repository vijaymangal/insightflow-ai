"use client";

import { useEffect } from "react";
import { useThemeStore } from "@/store";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { theme } = useThemeStore();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      if (systemTheme === "dark") root.classList.add("dark");
    } else if (theme === "dark") {
      root.classList.add("dark");
    }
  }, [theme]);

  return <>{children}</>;
}
