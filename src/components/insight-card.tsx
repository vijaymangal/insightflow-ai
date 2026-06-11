"use client";

import { motion } from "framer-motion";
import { Sparkles, TrendingUp, TrendingDown, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";
import type { AIInsight } from "@/types";

interface InsightCardProps {
  insight: AIInsight;
  index?: number;
}

const typeConfig = {
  positive: {
    icon: TrendingUp,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    ring: "ring-emerald-500/20",
  },
  neutral: {
    icon: Sparkles,
    color: "text-primary",
    bg: "bg-primary/10",
    ring: "ring-primary/20",
  },
  warning: {
    icon: AlertTriangle,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    ring: "ring-amber-500/20",
  },
};

export function InsightCard({ insight, index = 0 }: InsightCardProps) {
  const config = typeConfig[insight.type];
  const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.35, delay: index * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group rounded-lg border border-border bg-white/[0.02] p-3.5 transition-all duration-200 hover:border-border hover:bg-white/[0.04]"
    >
      <div className="flex gap-3">
        <div className={cn("icon-well h-8 w-8 shrink-0 ring-1", config.bg, config.ring, config.color)}>
          <Icon className="h-3.5 w-3.5" strokeWidth={2} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <h4 className="text-[13px] font-medium leading-snug">{insight.title}</h4>
            {insight.change !== undefined && (
              <span
                className={cn(
                  "inline-flex shrink-0 items-center gap-0.5 text-[11px] font-semibold tabular-nums",
                  insight.change >= 0 ? "text-emerald-400" : "text-red-400"
                )}
              >
                {insight.change >= 0 ? (
                  <TrendingUp className="h-3 w-3" />
                ) : (
                  <TrendingDown className="h-3 w-3" />
                )}
                {Math.abs(insight.change)}%
              </span>
            )}
          </div>
          <p className="mt-1 text-[12px] leading-relaxed text-muted-foreground">{insight.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export function InsightsPanel({ insights }: { insights: AIInsight[] }) {
  return (
    <div className="surface-card surface-card-hover overflow-hidden">
      <div className="flex items-center gap-3 border-b border-border px-5 py-4 lg:px-6 lg:py-5">
        <div className="icon-well h-8 w-8 text-primary">
          <Sparkles className="h-3.5 w-3.5" strokeWidth={2} />
        </div>
        <div>
          <h3 className="text-[13px] font-semibold tracking-[-0.01em]">AI Insights</h3>
          <p className="text-[11px] text-muted-foreground">Powered by InsightFlow AI</p>
        </div>
      </div>
      <div className="space-y-2 p-3 lg:p-4">
        {insights.map((insight, index) => (
          <InsightCard key={insight.id} insight={insight} index={index} />
        ))}
      </div>
    </div>
  );
}
