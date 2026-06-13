"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { CommandPalette } from "@/components/command-palette";
import { useSidebarStore } from "@/store";
import { useKeyboardShortcuts } from "@/hooks/use-keyboard-shortcuts";
import { cn } from "@/lib/utils";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { isCollapsed } = useSidebarStore();
  useKeyboardShortcuts();

  return (
    <div className="min-h-screen bg-background">
      <AppSidebar />
      <div
        className={cn(
          "min-h-screen transition-[padding] duration-200",
          isCollapsed ? "lg:pl-[56px]" : "lg:pl-[220px]"
        )}
      >
        {children}
      </div>
      <CommandPalette />
    </div>
  );
}
