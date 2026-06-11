"use client";

import { motion } from "framer-motion";
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

const typeColors: Record<Report["type"], string> = {
  revenue: "bg-primary/10 text-primary",
  customers: "bg-success/10 text-success",
  analytics: "bg-warning/10 text-warning",
  performance: "bg-secondary/10 text-secondary",
};

export default function ReportsPage() {
  const { data: reports, isLoading, isError, refetch } = useReports();

  return (
    <>
      <DashboardHeader title="Reports" description="Generate, schedule, and download business reports" />
      <PageTransition>
        <PageContainer>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">
              {reports?.length ?? 0} reports available
            </p>
            <Button size="sm">
              <FileText className="mr-2 h-4 w-4" />
              Generate New Report
            </Button>
          </div>

          {isLoading ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <Skeleton key={i} className="h-48 rounded-xl" />
              ))}
            </div>
          ) : isError ? (
            <ErrorState onRetry={() => refetch()} />
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {reports?.map((report, index) => {
                const status = statusConfig[report.status];
                const StatusIcon = status.icon;

                return (
                  <motion.div
                    key={report.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                  >
                    <div className="flex items-start justify-between">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${typeColors[report.type]}`}>
                        <FileText className="h-5 w-5" />
                      </div>
                      <Badge variant={status.variant} className="gap-1">
                        <StatusIcon className={`h-3 w-3 ${report.status === "generating" ? "animate-spin" : ""}`} />
                        {status.label}
                      </Badge>
                    </div>

                    <h3 className="mt-4 text-sm font-semibold">{report.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {report.description}
                    </p>

                    <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="rounded bg-muted px-1.5 py-0.5 font-mono">{report.format}</span>
                      {report.schedule && (
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {report.schedule}
                        </span>
                      )}
                    </div>

                    <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                      <span className="text-xs text-muted-foreground">
                        {formatDistanceToNow(new Date(report.lastGenerated), { addSuffix: true })}
                      </span>
                      {report.status === "ready" && (
                        <Button variant="ghost" size="sm" className="h-7 gap-1 text-xs opacity-0 transition-opacity group-hover:opacity-100">
                          <Download className="h-3 w-3" />
                          Download
                        </Button>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </PageContainer>
      </PageTransition>
    </>
  );
}
