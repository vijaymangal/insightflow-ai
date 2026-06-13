"use client";

import { formatDistanceToNow } from "date-fns";
import { Download, FileText, Clock, Loader2, Calendar } from "lucide-react";
import { DashboardHeader } from "@/components/dashboard-header";
import { PageTransition } from "@/components/page-transition";
import { PageContainer } from "@/components/page-container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { ErrorState } from "@/components/empty-state";
import { useReports } from "@/hooks/use-dashboard-data";
import type { Report } from "@/types";

const statusConfig: Record<Report["status"], { label: string; variant: "success" | "warning" | "secondary"; icon: typeof FileText }> = {
  ready: { label: "Ready", variant: "success", icon: FileText },
  generating: { label: "Generating", variant: "warning", icon: Loader2 },
  scheduled: { label: "Scheduled", variant: "secondary", icon: Calendar },
};

export default function ReportsPage() {
  const { data: reports, isLoading, isError, refetch } = useReports();

  return (
    <>
      <DashboardHeader title="Reports" />
      <PageTransition>
        <PageContainer>
          <div className="flex items-center justify-between">
            <p className="text-[13px] text-muted-foreground">{reports?.length ?? 0} reports</p>
            <Button size="sm" variant="outline" disabled>
              New report
            </Button>
          </div>

          {isLoading ? (
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <Skeleton key={i} className="h-36 rounded-lg" />
              ))}
            </div>
          ) : isError ? (
            <ErrorState onRetry={() => refetch()} />
          ) : (
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {reports?.map((report) => {
                const status = statusConfig[report.status];
                const StatusIcon = status.icon;

                return (
                  <div key={report.id} className="surface-card flex flex-col p-4">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-[13px] font-medium">{report.title}</h3>
                      <Badge variant={status.variant} className="shrink-0 gap-1 text-[10px]">
                        <StatusIcon className={`h-3 w-3 ${report.status === "generating" ? "animate-spin" : ""}`} />
                        {status.label}
                      </Badge>
                    </div>
                    <p className="mt-1.5 flex-1 text-[12px] text-muted-foreground">{report.description}</p>
                    <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
                      <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
                        <span className="font-mono">{report.format}</span>
                        {report.schedule && (
                          <>
                            <span>·</span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {report.schedule}
                            </span>
                          </>
                        )}
                      </div>
                      {report.status === "ready" && (
                        <Button variant="ghost" size="sm" className="h-7 gap-1 px-2 text-[11px]" disabled>
                          <Download className="h-3 w-3" />
                          Download
                        </Button>
                      )}
                    </div>
                    <p className="mt-2 text-[11px] text-muted-foreground">
                      {formatDistanceToNow(new Date(report.lastGenerated), { addSuffix: true })}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </PageContainer>
      </PageTransition>
    </>
  );
}
