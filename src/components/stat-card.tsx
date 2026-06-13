"use client";

import { ArrowDownRight, ArrowUpRight, type LucideIcon } from "lucide-react";
import {
  DollarSign,
  Users,
  UserPlus,
  TrendingUp,
  Activity,
  MousePointer,
  Clock,
  FileText,
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
}

function formatValue(kpi: KPI): string {
  switch (kpi.format) {
    case "currency":
      return formatCurrency(kpi.value);
    case "percent":
      return `${kpi.value}%`;
    default:
      return formatNumber(kpi.value);
  }
}

export function StatCard({ kpi }: StatCardProps) {
  const Icon = iconMap[kpi.icon] || TrendingUp;
  const isPositive = kpi.change >= 0;
  const DeltaIcon = isPositive ? ArrowUpRight : ArrowDownRight;

  return (
    <div className="surface-card p-4 lg:p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 space-y-1">
          <p className="text-label">{kpi.label}</p>
          <p className="text-metric">{formatValue(kpi)}</p>
          <div className="flex items-center gap-2 pt-1">
            <span className={cn(isPositive ? "delta-positive" : "delta-negative")}>
              <DeltaIcon className="h-3 w-3" />
              {formatPercent(kpi.change)}
            </span>
            <span className="text-[11px] text-muted-foreground">{kpi.changeLabel}</span>
          </div>
        </div>
        <Icon className="h-4 w-4 shrink-0 text-muted-foreground" strokeWidth={1.5} />
      </div>
    </div>
  );
}

export function StatCardSkeleton() {
  return (
    <div className="surface-card p-4 lg:p-5">
      <Skeleton className="h-3 w-20" />
      <Skeleton className="mt-2 h-7 w-28" />
      <Skeleton className="mt-3 h-3 w-32" />
    </div>
  );
}
