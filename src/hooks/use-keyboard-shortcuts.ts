"use client";

import { useEffect } from "react";
import { useCommandPaletteStore } from "@/store";

export function useKeyboardShortcuts() {
  const { toggle, open } = useCommandPaletteStore();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        toggle();
      }
      if ((e.metaKey || e.ctrlKey) && e.key === "/") {
        e.preventDefault();
        open();
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [toggle, open]);
}
