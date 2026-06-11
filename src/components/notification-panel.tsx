"use client";

import { formatDistanceToNow } from "date-fns";
import { Bell, Check, CheckCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { useNotificationStore } from "@/store";

const typeColors = {
  info: "bg-primary shadow-[0_0_6px_rgba(13,148,136,0.5)]",
  success: "bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.5)]",
  warning: "bg-amber-400 shadow-[0_0_6px_rgba(251,191,36,0.5)]",
  error: "bg-red-400 shadow-[0_0_6px_rgba(248,113,113,0.5)]",
};

export function NotificationPanel() {
  const { notifications, unreadCount, markAsRead, markAllAsRead } = useNotificationStore();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative h-8 w-8 text-muted-foreground hover:text-foreground">
          <Bell className="h-3.5 w-3.5" strokeWidth={1.75} />
          {unreadCount > 0 && (
            <span className="absolute -right-0.5 -top-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-primary text-[9px] font-bold text-primary-foreground ring-2 ring-background">
              {unreadCount}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-80 overflow-hidden p-0"
        align="end"
        style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.06)" }}
      >
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <h4 className="text-[13px] font-semibold">Notifications</h4>
          {unreadCount > 0 && (
            <Button variant="ghost" size="sm" className="h-7 gap-1 px-2 text-[11px] text-muted-foreground" onClick={markAllAsRead}>
              <CheckCheck className="h-3 w-3" />
              Mark all read
            </Button>
          )}
        </div>
        <ScrollArea className="h-[320px]">
          {notifications.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="icon-well h-12 w-12">
                <Bell className="h-5 w-5 text-muted-foreground/50" strokeWidth={1.5} />
              </div>
              <p className="mt-3 text-[13px] text-muted-foreground">No notifications yet</p>
            </div>
          ) : (
            <div>
              {notifications.map((notification) => (
                <button
                  key={notification.id}
                  onClick={() => markAsRead(notification.id)}
                  className={cn(
                    "flex w-full items-start gap-3 border-b border-border px-4 py-3 text-left transition-colors last:border-0 hover:bg-white/[0.03]",
                    !notification.read && "bg-primary/[0.04]"
                  )}
                >
                  <div className={cn("mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full", typeColors[notification.type])} />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-[13px] font-medium leading-snug">{notification.title}</p>
                      {notification.read && <Check className="h-3 w-3 shrink-0 text-muted-foreground/50" />}
                    </div>
                    <p className="mt-0.5 text-[12px] leading-relaxed text-muted-foreground">{notification.message}</p>
                    <p className="mt-1 text-[10px] text-muted-foreground/60">
                      {formatDistanceToNow(new Date(notification.timestamp), { addSuffix: true })}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
