"use client";

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
    <div className="surface-card flex flex-col items-center px-6 py-16 text-center">
      <Inbox className="h-8 w-8 text-muted-foreground/40" strokeWidth={1.25} />
      <h3 className="mt-4 text-[14px] font-medium">{title}</h3>
      <p className="mt-1 max-w-sm text-[13px] text-muted-foreground">{description}</p>
      {actionLabel && onAction && (
        <Button onClick={onAction} className="mt-5" size="sm" variant="outline">
          {actionLabel}
        </Button>
      )}
    </div>
  );
}

interface ErrorStateProps {
  title?: string;
  description?: string;
  onRetry?: () => void;
}

export function ErrorState({
  title = "Could not load data",
  description = "Check your connection and try again.",
  onRetry,
}: ErrorStateProps) {
  return (
    <div className="surface-card flex flex-col items-center px-6 py-16 text-center">
      <AlertCircle className="h-8 w-8 text-muted-foreground" strokeWidth={1.25} />
      <h3 className="mt-4 text-[14px] font-medium">{title}</h3>
      <p className="mt-1 max-w-sm text-[13px] text-muted-foreground">{description}</p>
      {onRetry && (
        <Button onClick={onRetry} variant="outline" className="mt-5 gap-1.5" size="sm">
          <RefreshCw className="h-3.5 w-3.5" />
          Retry
        </Button>
      )}
    </div>
  );
}
