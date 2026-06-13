import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

interface ChartCardProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}

export function ChartCard({ title, description, children, action, className }: ChartCardProps) {
  return (
    <div className={cn("surface-card overflow-hidden", className)}>
      <div className="flex items-start justify-between gap-4 border-b border-border px-4 py-3.5 lg:px-5">
        <div className="min-w-0">
          <h3 className="text-[13px] font-medium text-foreground">{title}</h3>
          {description && (
            <p className="mt-0.5 text-[12px] text-muted-foreground">{description}</p>
          )}
        </div>
        {action && <div className="shrink-0">{action}</div>}
      </div>
      <div className="px-1 pb-3 pt-1 lg:px-3 lg:pb-4">{children}</div>
    </div>
  );
}

export function ChartCardSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("surface-card overflow-hidden", className)}>
      <div className="border-b border-border px-4 py-3.5 lg:px-5">
        <Skeleton className="h-3.5 w-28" />
      </div>
      <div className="p-5">
        <Skeleton className="h-[220px] w-full rounded-md" />
      </div>
    </div>
  );
}

export function PanelSkeleton({ rows = 4 }: { rows?: number }) {
  return (
    <div className="surface-card overflow-hidden">
      <div className="border-b border-border px-4 py-3.5 lg:px-5">
        <Skeleton className="h-3.5 w-24" />
      </div>
      <div className="divide-y divide-border">
        {Array.from({ length: rows }).map((_, i) => (
          <div key={i} className="space-y-2 px-4 py-3.5 lg:px-5">
            <Skeleton className="h-3.5 w-2/5" />
            <Skeleton className="h-3 w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
