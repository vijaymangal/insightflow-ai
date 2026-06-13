"use client";

import { DashboardHeader } from "@/components/dashboard-header";
import { PageTransition } from "@/components/page-transition";
import { PageContainer } from "@/components/page-container";
import { ChartCard, ChartCardSkeleton } from "@/components/chart-card";
import { StatCard, StatCardSkeleton } from "@/components/stat-card";
import { ForecastChart, MonthlyPerformanceChart } from "@/components/charts";
import { formatCurrency } from "@/lib/utils";
import {
  useRevenueMetrics,
  useSubscriptionAnalytics,
  useRevenueForecast,
  useMonthlyPerformance,
} from "@/hooks/use-dashboard-data";
import type { KPI } from "@/types";

export default function RevenuePage() {
  const { data: metrics, isLoading: metricsLoading } = useRevenueMetrics();
  const { data: subscriptions, isLoading: subsLoading } = useSubscriptionAnalytics();
  const { data: forecast, isLoading: forecastLoading } = useRevenueForecast();
  const { data: monthlyPerformance, isLoading: performanceLoading } = useMonthlyPerformance();

  const revenueKPIs: KPI[] = metrics
    ? [
        { id: "mrr", label: "MRR", value: metrics.mrr.value, change: metrics.mrr.change, changeLabel: "vs last month", format: "currency", icon: "DollarSign" },
        { id: "arr", label: "ARR", value: metrics.arr.value, change: metrics.arr.change, changeLabel: "vs last year", format: "currency", icon: "TrendingUp" },
        { id: "growth", label: "Growth rate", value: metrics.growth.value, change: metrics.growth.change, changeLabel: "vs last month", format: "percent", icon: "Activity" },
        { id: "forecast", label: "Q3 forecast", value: metrics.forecast.value, change: metrics.forecast.change, changeLabel: "projected", format: "currency", icon: "TrendingUp" },
      ]
    : [];

  return (
    <>
      <DashboardHeader title="Revenue" />
      <PageTransition>
        <PageContainer>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {metricsLoading
              ? Array.from({ length: 4 }).map((_, i) => <StatCardSkeleton key={i} />)
              : revenueKPIs.map((kpi) => <StatCard key={kpi.id} kpi={kpi} />)}
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {forecastLoading ? (
              <ChartCardSkeleton />
            ) : (
              <ChartCard title="Forecast" description="Actual vs projected">
                <ForecastChart data={forecast ?? []} />
              </ChartCard>
            )}
            {performanceLoading ? (
              <ChartCardSkeleton />
            ) : (
              <ChartCard title="MRR by month" description="Expansion and churn">
                <MonthlyPerformanceChart data={monthlyPerformance ?? []} />
              </ChartCard>
            )}
          </div>

          <div className="surface-card overflow-hidden">
            <div className="border-b border-border px-4 py-3.5 lg:px-5">
              <h3 className="text-[13px] font-medium">Plans</h3>
            </div>
            <div className="p-4 lg:p-5">
              {subsLoading ? (
                <div className="space-y-3">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="h-8 animate-pulse rounded bg-muted" />
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {subscriptions?.map((sub) => (
                    <div key={sub.plan} className="flex items-center gap-4 text-[13px]">
                      <div className="w-24 font-medium">{sub.plan}</div>
                      <div className="flex-1">
                        <div className="h-1.5 overflow-hidden rounded-full bg-muted">
                          <div className="h-full rounded-full bg-primary" style={{ width: `${sub.percentage}%` }} />
                        </div>
                      </div>
                      <div className="w-16 text-right tabular-nums text-muted-foreground">{sub.subscribers}</div>
                      <div className="w-24 text-right tabular-nums font-medium">{formatCurrency(sub.revenue)}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {metrics && (
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="surface-card p-4 lg:p-5">
                <p className="text-label">LTV</p>
                <p className="text-metric">{formatCurrency(metrics.ltv.value)}</p>
                <p className="mt-1 text-[11px] text-muted-foreground">+{metrics.ltv.change}% vs Q1</p>
              </div>
              <div className="surface-card p-4 lg:p-5">
                <p className="text-label">CAC</p>
                <p className="text-metric">{formatCurrency(metrics.cac.value)}</p>
                <p className="mt-1 text-[11px] text-muted-foreground">{metrics.cac.change}% vs Q1</p>
              </div>
            </div>
          )}
        </PageContainer>
      </PageTransition>
    </>
  );
}
