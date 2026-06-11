"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SettingsCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
  className?: string;
}

export function SettingsCard({ title, description, children, className }: SettingsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={cn("surface-card overflow-hidden", className)}
    >
      <div className="border-b border-border px-5 py-4 lg:px-6 lg:py-5">
        <h3 className="text-[13px] font-semibold tracking-[-0.01em]">{title}</h3>
        <p className="mt-1 text-[12px] text-muted-foreground">{description}</p>
      </div>
      <div className="p-5 lg:p-6">{children}</div>
    </motion.div>
  );
}
