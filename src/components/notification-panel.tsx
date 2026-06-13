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
  info: "bg-primary",
  success: "bg-emerald-500",
  warning: "bg-amber-500",
  error: "bg-red-500",
};

export function NotificationPanel() {
  const { notifications, unreadCount, markAsRead, markAllAsRead } = useNotificationStore();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative h-8 w-8 text-muted-foreground hover:text-foreground">
          <Bell className="h-3.5 w-3.5" strokeWidth={1.75} />
          {unreadCount > 0 && (
            <span className="absolute -right-0.5 -top-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-primary text-[9px] font-medium text-primary-foreground">
              {unreadCount}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80 p-0" align="end">
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <h4 className="text-[13px] font-medium">Notifications</h4>
          {unreadCount > 0 && (
            <Button variant="ghost" size="sm" className="h-7 px-2 text-[11px] text-muted-foreground" onClick={markAllAsRead}>
              <CheckCheck className="mr-1 h-3 w-3" />
              Mark read
            </Button>
          )}
        </div>
        <ScrollArea className="h-[320px]">
          {notifications.length === 0 ? (
            <p className="py-12 text-center text-[13px] text-muted-foreground">No notifications</p>
          ) : (
            <div>
              {notifications.map((notification) => (
                <button
                  key={notification.id}
                  onClick={() => markAsRead(notification.id)}
                  className={cn(
                    "flex w-full items-start gap-3 border-b border-border px-4 py-3 text-left last:border-0 row-hover",
                    !notification.read && "bg-accent/50"
                  )}
                >
                  <div className={cn("mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full", typeColors[notification.type])} />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-[13px] font-medium">{notification.title}</p>
                      {notification.read && <Check className="h-3 w-3 text-muted-foreground/50" />}
                    </div>
                    <p className="mt-0.5 text-[12px] text-muted-foreground">{notification.message}</p>
                    <p className="mt-1 text-[11px] text-muted-foreground">
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
