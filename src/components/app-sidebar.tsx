"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BarChart3,
  Users,
  DollarSign,
  FileText,
  Settings,
  ChevronLeft,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useSidebarStore } from "@/store";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { currentUser } from "@/data/mock-data";

const navItems = [
  { title: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { title: "Analytics", href: "/analytics", icon: BarChart3 },
  { title: "Customers", href: "/customers", icon: Users },
  { title: "Revenue", href: "/revenue", icon: DollarSign },
  { title: "Reports", href: "/reports", icon: FileText },
  { title: "Settings", href: "/settings", icon: Settings },
];

function LogoMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 text-primary-foreground" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 19V5" strokeLinecap="round" />
      <path d="M4 19h16" strokeLinecap="round" />
      <path d="M8 15V9" strokeLinecap="round" />
      <path d="M12 17V7" strokeLinecap="round" />
      <path d="M16 13v-2" strokeLinecap="round" />
    </svg>
  );
}

export function AppSidebar() {
  const pathname = usePathname();
  const { isCollapsed, isMobileOpen, toggleCollapsed, setMobileOpen } = useSidebarStore();

  const sidebarContent = (
    <>
      <div className="flex h-14 items-center justify-between px-3">
        <Link href="/dashboard" className="flex min-w-0 items-center gap-2 rounded-md px-1 py-1">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary">
            <LogoMark />
          </div>
          {!isCollapsed && (
            <span className="text-[13px] font-semibold tracking-tight">InsightFlow</span>
          )}
        </Link>
        <Button
          variant="ghost"
          size="icon"
          className="hidden h-7 w-7 text-muted-foreground lg:flex"
          onClick={toggleCollapsed}
        >
          <ChevronLeft className={cn("h-3.5 w-3.5 transition-transform", isCollapsed && "rotate-180")} />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8 lg:hidden" onClick={() => setMobileOpen(false)}>
          <X className="h-4 w-4" />
        </Button>
      </div>

      <nav className="flex-1 space-y-0.5 px-2 py-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
          const Icon = item.icon;

          const linkContent = (
            <Link
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "flex items-center gap-2.5 rounded-md px-2.5 py-2 text-[13px] transition-colors",
                isActive
                  ? "bg-accent font-medium text-foreground"
                  : "text-muted-foreground hover:bg-accent/60 hover:text-foreground"
              )}
            >
              <Icon className="h-[15px] w-[15px] shrink-0" strokeWidth={isActive ? 2 : 1.75} />
              {!isCollapsed && <span className="truncate">{item.title}</span>}
            </Link>
          );

          if (isCollapsed) {
            return (
              <Tooltip key={item.href} delayDuration={0}>
                <TooltipTrigger asChild>{linkContent}</TooltipTrigger>
                <TooltipContent side="right">{item.title}</TooltipContent>
              </Tooltip>
            );
          }

          return <div key={item.href}>{linkContent}</div>;
        })}
      </nav>

      <div className="border-t border-border p-2">
        <div className={cn("flex items-center gap-2 rounded-md px-2 py-2", isCollapsed && "justify-center")}>
          <Avatar className="h-7 w-7">
            <AvatarFallback className="bg-muted text-[10px] font-medium">
              {currentUser.name.split(" ").map((n) => n[0]).join("")}
            </AvatarFallback>
          </Avatar>
          {!isCollapsed && (
            <div className="min-w-0 flex-1">
              <p className="truncate text-[12px] font-medium">{currentUser.name}</p>
              <p className="truncate text-[11px] text-muted-foreground">{currentUser.email}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );

  return (
    <>
      {isMobileOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={() => setMobileOpen(false)} />
      )}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex flex-col border-r border-border bg-surface transition-[width] duration-200",
          isCollapsed ? "w-[56px]" : "w-[220px]",
          isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        {sidebarContent}
      </aside>
    </>
  );
}
