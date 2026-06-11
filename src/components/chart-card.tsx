"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

interface ChartCardProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
  delay?: number;
}

export function ChartCard({ title, description, children, action, className, delay = 0 }: ChartCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={cn("surface-card surface-card-hover overflow-hidden", className)}
    >
      <div className="flex items-start justify-between gap-4 border-b border-border px-5 py-4 lg:px-6 lg:py-5">
        <div className="min-w-0">
          <h3 className="text-[13px] font-semibold tracking-[-0.01em] text-foreground">{title}</h3>
          {description && (
            <p className="mt-1 text-[12px] leading-relaxed text-muted-foreground">{description}</p>
          )}
        </div>
        {action && <div className="shrink-0">{action}</div>}
      </div>
      <div className="px-2 pb-4 pt-2 lg:px-4 lg:pb-5 lg:pt-3">{children}</div>
    </motion.div>
  );
}

export function ChartCardSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("surface-card overflow-hidden", className)}>
      <div className="border-b border-border px-5 py-4 lg:px-6 lg:py-5">
        <Skeleton className="h-3.5 w-32" />
        <Skeleton className="mt-2 h-3 w-48" />
      </div>
      <div className="space-y-3 p-5 lg:p-6">
        <div className="flex items-end justify-between gap-2 px-2" style={{ height: 220 }}>
          {Array.from({ length: 12 }).map((_, i) => (
            <Skeleton
              key={i}
              className="w-full rounded-sm"
              style={{ height: `${30 + Math.sin(i * 0.8) * 20 + 40}%` }}
            />
          ))}
        </div>
        <div className="flex justify-center gap-4 pt-2">
          <Skeleton className="h-3 w-16" />
          <Skeleton className="h-3 w-16" />
          <Skeleton className="h-3 w-16" />
        </div>
      </div>
    </div>
  );
}

export function PanelSkeleton({ rows = 4 }: { rows?: number }) {
  return (
    <div className="surface-card overflow-hidden">
      <div className="border-b border-border px-5 py-4 lg:px-6 lg:py-5">
        <Skeleton className="h-3.5 w-28" />
        <Skeleton className="mt-2 h-3 w-44" />
      </div>
      <div className="divide-y divide-border">
        {Array.from({ length: rows }).map((_, i) => (
          <div key={i} className="flex items-start gap-3 px-5 py-4 lg:px-6">
            <Skeleton className="h-8 w-8 shrink-0 rounded-lg" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-3.5 w-3/5" />
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-2.5 w-1/4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
