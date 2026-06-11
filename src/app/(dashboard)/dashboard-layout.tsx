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
    <div className="min-h-screen dashboard-bg">
      <AppSidebar />
      <div
        className={cn(
          "min-h-screen transition-all duration-300 ease-out",
          isCollapsed ? "lg:pl-[60px]" : "lg:pl-[240px]"
        )}
      >
        {children}
      </div>
      <CommandPalette />
    </div>
  );
}
