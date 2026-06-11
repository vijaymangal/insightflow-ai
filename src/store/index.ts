import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Notification } from "@/types";
import { notifications as initialNotifications } from "@/data/mock-data";

interface SidebarState {
  isCollapsed: boolean;
  isMobileOpen: boolean;
  toggleCollapsed: () => void;
  setMobileOpen: (open: boolean) => void;
}

interface NotificationState {
  notifications: Notification[];
  unreadCount: number;
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
}

interface CommandPaletteState {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

interface AuthState {
  isAuthenticated: boolean;
  user: { name: string; email: string } | null;
  login: (email: string) => void;
  logout: () => void;
}

export const useSidebarStore = create<SidebarState>((set) => ({
  isCollapsed: false,
  isMobileOpen: false,
  toggleCollapsed: () => set((state) => ({ isCollapsed: !state.isCollapsed })),
  setMobileOpen: (open) => set({ isMobileOpen: open }),
}));

export const useNotificationStore = create<NotificationState>((set) => ({
  notifications: initialNotifications,
  unreadCount: initialNotifications.filter((n) => !n.read).length,
  markAsRead: (id) =>
    set((state) => {
      const notifications = state.notifications.map((n) =>
        n.id === id ? { ...n, read: true } : n
      );
      return {
        notifications,
        unreadCount: notifications.filter((n) => !n.read).length,
      };
    }),
  markAllAsRead: () =>
    set((state) => ({
      notifications: state.notifications.map((n) => ({ ...n, read: true })),
      unreadCount: 0,
    })),
}));

export const useCommandPaletteStore = create<CommandPaletteState>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,
      login: (email) =>
        set({
          isAuthenticated: true,
          user: { name: "Alex Morgan", email },
        }),
      logout: () => set({ isAuthenticated: false, user: null }),
    }),
    { name: "insightflow-auth" }
  )
);

interface ThemeState {
  theme: "dark" | "light" | "system";
  setTheme: (theme: "dark" | "light" | "system") => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: "dark",
      setTheme: (theme) => set({ theme }),
    }),
    { name: "insightflow-theme" }
  )
);
