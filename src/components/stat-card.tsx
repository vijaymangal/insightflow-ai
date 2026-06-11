"use client";

import { motion, animate } from "framer-motion";
import { useEffect, useState } from "react";
import {
  DollarSign,
  Users,
  UserPlus,
  TrendingUp,
  Activity,
  MousePointer,
  Clock,
  FileText,
  ArrowUpRight,
  ArrowDownRight,
  type LucideIcon,
} from "lucide-react";
import { cn, formatCurrency, formatNumber, formatPercent } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import type { KPI } from "@/types";

const iconMap: Record<string, LucideIcon> = {
  DollarSign,
  Users,
  UserPlus,
  TrendingUp,
  Activity,
  MousePointer,
  Clock,
  FileText,
};

interface StatCardProps {
  kpi: KPI;
  index?: number;
}

function formatDisplayValue(value: number, format: KPI["format"]): string {
  if (format === "currency") return formatCurrency(Math.round(value));
  if (format === "percent") return `${value.toFixed(1)}%`;
  return formatNumber(Math.round(value));
}

function AnimatedValue({ value, format }: { value: number; format: KPI["format"] }) {
  const [display, setDisplay] = useState(() => formatDisplayValue(value, format));

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 0.9,
      ease: [0.25, 0.46, 0.45, 0.94],
      onUpdate: (v) => setDisplay(formatDisplayValue(v, format)),
    });
    return () => controls.stop();
  }, [value, format]);

  return <span className="text-metric">{display}</span>;
}

export function StatCard({ kpi, index = 0 }: StatCardProps) {
  const Icon = iconMap[kpi.icon] || TrendingUp;
  const isPositive = kpi.change >= 0;
  const DeltaIcon = isPositive ? ArrowUpRight : ArrowDownRight;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="surface-card surface-card-hover group relative overflow-hidden p-5 lg:p-6"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/5 blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />

      <div className="relative flex items-start justify-between gap-4">
        <div className="min-w-0 space-y-3">
          <p className="text-label">{kpi.label}</p>
          <AnimatedValue value={kpi.value} format={kpi.format} />
          <div className="flex flex-wrap items-center gap-2">
            <span className={cn(isPositive ? "delta-positive" : "delta-negative")}>
              <DeltaIcon className="h-3 w-3" />
              {formatPercent(kpi.change)}
            </span>
            <span className="text-[11px] text-muted-foreground/80">{kpi.changeLabel}</span>
          </div>
        </div>
        <div className="icon-well h-10 w-10 shrink-0 text-primary transition-colors duration-300 group-hover:bg-primary/10">
          <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
        </div>
      </div>
    </motion.div>
  );
}

export function StatCardSkeleton() {
  return (
    <div className="surface-card p-5 lg:p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 space-y-3">
          <Skeleton className="h-3.5 w-24" />
          <Skeleton className="h-8 w-36" />
          <div className="flex gap-2">
            <Skeleton className="h-5 w-14 rounded-md" />
            <Skeleton className="h-5 w-20" />
          </div>
        </div>
        <Skeleton className="h-10 w-10 rounded-[10px]" />
      </div>
    </div>
  );
}
