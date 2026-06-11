"use client";

import { useRouter } from "next/navigation";
import {
  LayoutDashboard,
  BarChart3,
  Users,
  DollarSign,
  FileText,
  Settings,
  Plus,
  Download,
} from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { useCommandPaletteStore } from "@/store";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Customers", href: "/customers", icon: Users },
  { name: "Revenue", href: "/revenue", icon: DollarSign },
  { name: "Reports", href: "/reports", icon: FileText },
  { name: "Settings", href: "/settings", icon: Settings },
];

const actions = [
  { name: "Generate Report", icon: Plus, href: "/reports" },
  { name: "Export Data", icon: Download, href: "/analytics" },
];

export function CommandPalette() {
  const { isOpen, close } = useCommandPaletteStore();
  const router = useRouter();

  const runCommand = (command: () => void) => {
    close();
    command();
  };

  return (
    <CommandDialog open={isOpen} onOpenChange={(open) => !open && close()}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Navigation">
          {navigation.map((item) => (
            <CommandItem
              key={item.href}
              onSelect={() => runCommand(() => router.push(item.href))}
            >
              <item.icon className="mr-2 h-4 w-4" />
              {item.name}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Actions">
          {actions.map((item) => (
            <CommandItem
              key={item.name}
              onSelect={() => runCommand(() => router.push(item.href))}
            >
              <item.icon className="mr-2 h-4 w-4" />
              {item.name}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Keyboard Shortcuts">
          <CommandItem disabled>
            Command Palette
            <CommandShortcut>⌘K</CommandShortcut>
          </CommandItem>
          <CommandItem disabled>
            Search
            <CommandShortcut>⌘/</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
