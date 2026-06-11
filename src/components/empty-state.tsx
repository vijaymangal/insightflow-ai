"use client";

import { motion } from "framer-motion";
import { AlertCircle, Inbox, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}

export function EmptyState({ title, description, actionLabel, onAction }: EmptyStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="surface-card flex flex-col items-center justify-center px-6 py-20 text-center"
    >
      <div className="relative">
        <div className="absolute inset-0 rounded-2xl bg-primary/10 blur-xl" />
        <div className="icon-well relative h-14 w-14 rounded-2xl">
          <Inbox className="h-6 w-6 text-muted-foreground" strokeWidth={1.5} />
        </div>
      </div>
      <h3 className="mt-5 text-[15px] font-semibold tracking-[-0.01em]">{title}</h3>
      <p className="mt-1.5 max-w-sm text-[13px] leading-relaxed text-muted-foreground">{description}</p>
      {actionLabel && onAction && (
        <Button onClick={onAction} className="mt-6 h-8 text-[13px]" size="sm">
          {actionLabel}
        </Button>
      )}
    </motion.div>
  );
}

interface ErrorStateProps {
  title?: string;
  description?: string;
  onRetry?: () => void;
}

export function ErrorState({
  title = "Something went wrong",
  description = "We couldn't load this data. Please try again.",
  onRetry,
}: ErrorStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="flex flex-col items-center justify-center rounded-xl border border-destructive/15 bg-destructive/[0.04] px-6 py-20 text-center"
      style={{ boxShadow: "0 0 0 1px rgba(239,68,68,0.08) inset" }}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-destructive/10 ring-1 ring-destructive/20">
        <AlertCircle className="h-6 w-6 text-destructive" strokeWidth={1.5} />
      </div>
      <h3 className="mt-5 text-[15px] font-semibold tracking-[-0.01em]">{title}</h3>
      <p className="mt-1.5 max-w-sm text-[13px] leading-relaxed text-muted-foreground">{description}</p>
      {onRetry && (
        <Button onClick={onRetry} variant="outline" className="mt-6 h-8 gap-1.5 text-[13px]" size="sm">
          <RefreshCw className="h-3.5 w-3.5" />
          Try again
        </Button>
      )}
    </motion.div>
  );
}
