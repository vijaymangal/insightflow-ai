"use client";

import { useRouter } from "next/navigation";
import {
  Menu,
  Moon,
  Search,
  Sun,
  LogOut,
  User,
  Settings,
  Keyboard,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useSidebarStore, useThemeStore, useCommandPaletteStore, useAuthStore } from "@/store";
import { NotificationPanel } from "@/components/notification-panel";
import { currentUser } from "@/data/mock-data";

interface DashboardHeaderProps {
  title: string;
  description?: string;
}

export function DashboardHeader({ title, description }: DashboardHeaderProps) {
  const { setMobileOpen } = useSidebarStore();
  const { theme, setTheme } = useThemeStore();
  const { open: openCommandPalette } = useCommandPaletteStore();
  const { logout } = useAuthStore();
  const router = useRouter();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/70 backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex h-[60px] max-w-[1600px] items-center justify-between gap-4 px-5 lg:px-8">
        <div className="flex min-w-0 items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 shrink-0 text-muted-foreground lg:hidden"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="h-4 w-4" />
          </Button>
          <div className="min-w-0">
            <h1 className="truncate text-[15px] font-semibold tracking-[-0.02em]">{title}</h1>
            {description && (
              <p className="hidden truncate text-[12px] text-muted-foreground sm:block">{description}</p>
            )}
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-1.5">
          <button
            onClick={openCommandPalette}
            className="hidden h-8 items-center gap-2 rounded-lg border border-border bg-white/[0.03] px-3 text-[12px] text-muted-foreground transition-all duration-200 hover:border-border hover:bg-white/[0.05] hover:text-foreground md:flex"
          >
            <Search className="h-3.5 w-3.5" strokeWidth={1.75} />
            <span>Search</span>
            <kbd className="pointer-events-none ml-3 hidden h-5 select-none items-center rounded border border-border bg-white/[0.04] px-1.5 font-mono text-[10px] font-medium text-muted-foreground lg:inline-flex">
              ⌘K
            </kbd>
          </button>

          <div className="mx-1 hidden h-5 w-px bg-border md:block" />

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="h-8 w-8 text-muted-foreground hover:text-foreground"
          >
            {theme === "dark" ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
          </Button>

          <NotificationPanel />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full p-0">
                <Avatar className="h-7 w-7 ring-1 ring-white/10">
                  <AvatarFallback className="bg-primary/15 text-[10px] font-semibold text-primary">
                    {currentUser.name.split(" ").map((n) => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-0.5">
                  <p className="text-[13px] font-medium">{currentUser.name}</p>
                  <p className="text-[11px] text-muted-foreground">{currentUser.email}</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => router.push("/settings")} className="text-[13px]">
                <User className="mr-2 h-3.5 w-3.5" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push("/settings")} className="text-[13px]">
                <Settings className="mr-2 h-3.5 w-3.5" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem onClick={openCommandPalette} className="text-[13px]">
                <Keyboard className="mr-2 h-3.5 w-3.5" />
                Command Palette
                <span className="ml-auto text-[10px] text-muted-foreground">⌘K</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout} className="text-[13px] text-destructive focus:text-destructive">
                <LogOut className="mr-2 h-3.5 w-3.5" />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}

export function UserMenu() {
  return null;
}
