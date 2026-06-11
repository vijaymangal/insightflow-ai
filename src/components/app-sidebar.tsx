"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  BarChart3,
  Users,
  DollarSign,
  FileText,
  Settings,
  ChevronLeft,
  Sparkles,
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

export function AppSidebar() {
  const pathname = usePathname();
  const { isCollapsed, isMobileOpen, toggleCollapsed, setMobileOpen } = useSidebarStore();

  const sidebarContent = (
    <>
      <div className="flex h-[60px] items-center justify-between px-3 lg:px-4">
        <Link href="/dashboard" className="flex min-w-0 items-center gap-2.5 rounded-lg px-1.5 py-1 transition-colors hover:bg-white/[0.04]">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-primary shadow-[0_0_20px_rgba(13,148,136,0.35)]">
            <Sparkles className="h-4 w-4 text-primary-foreground" strokeWidth={2} />
          </div>
          {!isCollapsed && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-w-0">
              <span className="block text-[13px] font-semibold tracking-[-0.02em]">InsightFlow</span>
              <span className="block text-[10px] font-medium text-muted-foreground">AI Analytics</span>
            </motion.div>
          )}
        </Link>
        <Button
          variant="ghost"
          size="icon"
          className="hidden h-7 w-7 text-muted-foreground hover:text-foreground lg:flex"
          onClick={toggleCollapsed}
        >
          <ChevronLeft className={cn("h-3.5 w-3.5 transition-transform duration-300", isCollapsed && "rotate-180")} />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 lg:hidden"
          onClick={() => setMobileOpen(false)}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      {!isCollapsed && (
        <div className="px-4 pb-2">
          <p className="text-caption">Platform</p>
        </div>
      )}

      <nav className="flex-1 space-y-0.5 px-2.5 py-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
          const Icon = item.icon;

          const linkContent = (
            <Link
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "group relative flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[13px] font-medium transition-all duration-200",
                isActive
                  ? "text-foreground"
                  : "text-muted-foreground hover:bg-white/[0.04] hover:text-foreground"
              )}
            >
              {isActive && (
                <>
                  <motion.div
                    layoutId="sidebar-active-bg"
                    className="absolute inset-0 rounded-lg bg-white/[0.06]"
                    transition={{ type: "spring", bounce: 0.15, duration: 0.45 }}
                  />
                  <motion.div
                    layoutId="sidebar-active-bar"
                    className="absolute left-0 top-1/2 h-4 w-[2px] -translate-y-1/2 rounded-full bg-primary"
                    transition={{ type: "spring", bounce: 0.15, duration: 0.45 }}
                  />
                </>
              )}
              <Icon
                className={cn(
                  "relative h-[15px] w-[15px] shrink-0 transition-colors",
                  isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                )}
                strokeWidth={isActive ? 2 : 1.75}
              />
              {!isCollapsed && <span className="relative truncate">{item.title}</span>}
            </Link>
          );

          if (isCollapsed) {
            return (
              <Tooltip key={item.href} delayDuration={0}>
                <TooltipTrigger asChild>{linkContent}</TooltipTrigger>
                <TooltipContent side="right" className="text-xs">{item.title}</TooltipContent>
              </Tooltip>
            );
          }

          return <div key={item.href}>{linkContent}</div>;
        })}
      </nav>

      <div className="border-t border-border p-2.5">
        <div
          className={cn(
            "group flex cursor-default items-center gap-2.5 rounded-lg px-2.5 py-2 transition-colors hover:bg-white/[0.04]",
            isCollapsed && "justify-center px-0"
          )}
        >
          <Avatar className="h-7 w-7 ring-1 ring-white/10">
            <AvatarFallback className="bg-primary/15 text-[10px] font-semibold text-primary">
              {currentUser.name.split(" ").map((n) => n[0]).join("")}
            </AvatarFallback>
          </Avatar>
          {!isCollapsed && (
            <div className="min-w-0 flex-1">
              <p className="truncate text-[12px] font-medium">{currentUser.name}</p>
              <p className="truncate text-[10px] text-muted-foreground">{currentUser.email}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );

  return (
    <>
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex flex-col border-r border-border bg-[#0c0c0e]/95 backdrop-blur-xl transition-all duration-300 ease-out",
          isCollapsed ? "w-[60px]" : "w-[240px]",
          isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
        style={{ boxShadow: "1px 0 0 rgba(255,255,255,0.02) inset" }}
      >
        {sidebarContent}
      </aside>
    </>
  );
}
