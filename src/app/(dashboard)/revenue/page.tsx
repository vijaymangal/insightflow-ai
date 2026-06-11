"use client";

import { motion } from "framer-motion";
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
        { id: "mrr", label: metrics.mrr.label, value: metrics.mrr.value, change: metrics.mrr.change, changeLabel: "vs last month", format: "currency", icon: "DollarSign" },
        { id: "arr", label: metrics.arr.label, value: metrics.arr.value, change: metrics.arr.change, changeLabel: "vs last year", format: "currency", icon: "TrendingUp" },
        { id: "growth", label: metrics.growth.label, value: metrics.growth.value, change: metrics.growth.change, changeLabel: "vs last month", format: "percent", icon: "Activity" },
        { id: "forecast", label: metrics.forecast.label, value: metrics.forecast.value, change: metrics.forecast.change, changeLabel: "projected", format: "currency", icon: "TrendingUp" },
      ]
    : [];

  return (
    <>
      <DashboardHeader title="Revenue" description="Track MRR, ARR, and subscription analytics" />
      <PageTransition>
        <PageContainer>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {metricsLoading
              ? Array.from({ length: 4 }).map((_, i) => <StatCardSkeleton key={i} />)
              : revenueKPIs.map((kpi, index) => <StatCard key={kpi.id} kpi={kpi} index={index} />)}
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {forecastLoading ? (
              <ChartCardSkeleton />
            ) : (
              <ChartCard title="Revenue Forecast" description="Actual vs projected revenue">
                <ForecastChart data={forecast ?? []} />
              </ChartCard>
            )}
            {performanceLoading ? (
              <ChartCardSkeleton />
            ) : (
              <ChartCard title="Monthly Performance" description="MRR breakdown by month">
                <MonthlyPerformanceChart data={monthlyPerformance ?? []} />
              </ChartCard>
            )}
          </div>

          <div className="rounded-xl border border-border bg-card">
            <div className="border-b border-border px-6 py-4">
              <h3 className="text-sm font-semibold">Subscription Analytics</h3>
              <p className="mt-0.5 text-xs text-muted-foreground">Revenue and subscriber distribution by plan</p>
            </div>
            <div className="p-6">
              {subsLoading ? (
                <div className="space-y-4">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="h-16 animate-pulse rounded-lg bg-muted" />
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {subscriptions?.map((sub, index) => (
                    <motion.div
                      key={sub.plan}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <div className="w-24 text-sm font-medium">{sub.plan}</div>
                      <div className="flex-1">
                        <div className="h-2 overflow-hidden rounded-full bg-muted">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${sub.percentage}%` }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="h-full rounded-full bg-primary"
                          />
                        </div>
                      </div>
                      <div className="w-20 text-right text-sm text-muted-foreground">
                        {sub.subscribers} users
                      </div>
                      <div className="w-24 text-right text-sm font-medium">
                        {formatCurrency(sub.revenue)}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {metrics && (
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-6">
                <p className="text-sm text-muted-foreground">Customer LTV</p>
                <p className="mt-1 text-2xl font-semibold">{formatCurrency(metrics.ltv.value)}</p>
                <p className="mt-1 text-xs text-success">+{metrics.ltv.change}% vs last quarter</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <p className="text-sm text-muted-foreground">Customer CAC</p>
                <p className="mt-1 text-2xl font-semibold">{formatCurrency(metrics.cac.value)}</p>
                <p className="mt-1 text-xs text-success">{metrics.cac.change}% vs last quarter</p>
              </div>
            </div>
          )}
        </PageContainer>
      </PageTransition>
    </>
  );
}
