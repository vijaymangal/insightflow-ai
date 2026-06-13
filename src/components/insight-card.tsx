"use client";

import { formatDistanceToNow } from "date-fns";
import { TrendingUp, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";
import type { AIInsight } from "@/types";

interface InsightCardProps {
  insight: AIInsight;
}

const typeIcon = {
  positive: TrendingUp,
  neutral: TrendingUp,
  warning: AlertTriangle,
};

export function InsightCard({ insight }: InsightCardProps) {
  const Icon = typeIcon[insight.type];

  return (
    <div className="border-b border-border px-4 py-3 last:border-0 lg:px-5">
      <div className="flex items-start gap-2">
        <Icon
          className={cn(
            "mt-0.5 h-3.5 w-3.5 shrink-0",
            insight.type === "warning" ? "text-amber-500" : "text-muted-foreground"
          )}
          strokeWidth={1.75}
        />
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline justify-between gap-2">
            <p className="text-[13px] font-medium">{insight.title}</p>
            {insight.change !== undefined && (
              <span
                className={cn(
                  "shrink-0 text-[11px] tabular-nums",
                  insight.change >= 0 ? "text-emerald-400" : "text-red-400"
                )}
              >
                {insight.change >= 0 ? "+" : ""}
                {insight.change}%
              </span>
            )}
          </div>
          <p className="mt-0.5 text-[12px] leading-relaxed text-muted-foreground">{insight.description}</p>
        </div>
      </div>
    </div>
  );
}

export function InsightsPanel({ insights }: { insights: AIInsight[] }) {
  return (
    <div className="surface-card overflow-hidden">
      <div className="border-b border-border px-4 py-3.5 lg:px-5">
        <h3 className="text-[13px] font-medium">Summary</h3>
        <p className="text-[11px] text-muted-foreground">Updated {formatDistanceToNow(new Date(), { addSuffix: true })}</p>
      </div>
      <div>{insights.map((insight) => <InsightCard key={insight.id} insight={insight} />)}</div>
    </div>
  );
}
