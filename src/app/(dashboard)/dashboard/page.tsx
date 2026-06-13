"use client";

import { DashboardHeader } from "@/components/dashboard-header";
import { PageTransition } from "@/components/page-transition";
import { PageContainer } from "@/components/page-container";
import { StatCard, StatCardSkeleton } from "@/components/stat-card";
import { ChartCard, ChartCardSkeleton, PanelSkeleton } from "@/components/chart-card";
import { InsightsPanel } from "@/components/insight-card";
import { ActivityFeed } from "@/components/activity-feed";
import { ErrorState } from "@/components/empty-state";
import {
  RevenueTrendChart,
  CustomerGrowthChart,
  RevenueBreakdownChart,
  MonthlyPerformanceChart,
} from "@/components/charts";
import {
  useDashboardKPIs,
  useRevenueTrend,
  useCustomerGrowth,
  useRevenueBreakdown,
  useMonthlyPerformance,
  useAIInsights,
  useActivities,
} from "@/hooks/use-dashboard-data";

export default function DashboardPage() {
  const { data: kpis, isLoading: kpisLoading, isError: kpisError, refetch: refetchKpis } = useDashboardKPIs();
  const { data: revenueTrend, isLoading: revenueLoading } = useRevenueTrend();
  const { data: customerGrowth, isLoading: customerLoading } = useCustomerGrowth();
  const { data: revenueBreakdown, isLoading: breakdownLoading } = useRevenueBreakdown();
  const { data: monthlyPerformance, isLoading: performanceLoading } = useMonthlyPerformance();
  const { data: insights, isLoading: insightsLoading } = useAIInsights();
  const { data: activities, isLoading: activitiesLoading } = useActivities();

  if (kpisError) {
    return (
      <>
        <DashboardHeader title="Dashboard" />
        <PageContainer>
          <ErrorState onRetry={() => refetchKpis()} />
        </PageContainer>
      </>
    );
  }

  return (
    <>
      <DashboardHeader title="Dashboard" />
      <PageTransition>
        <PageContainer>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {kpisLoading
              ? Array.from({ length: 4 }).map((_, i) => <StatCardSkeleton key={i} />)
              : kpis?.map((kpi) => <StatCard key={kpi.id} kpi={kpi} />)}
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {revenueLoading ? (
              <ChartCardSkeleton />
            ) : (
              <ChartCard title="Revenue" description="Monthly vs target">
                <RevenueTrendChart data={revenueTrend ?? []} />
              </ChartCard>
            )}
            {customerLoading ? (
              <ChartCardSkeleton />
            ) : (
              <ChartCard title="Customers" description="Active accounts">
                <CustomerGrowthChart data={customerGrowth ?? []} />
              </ChartCard>
            )}
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            <div className="lg:col-span-2">
              {performanceLoading ? (
                <ChartCardSkeleton />
              ) : (
                <ChartCard title="MRR breakdown" description="Expansion, churn, net new">
                  <MonthlyPerformanceChart data={monthlyPerformance ?? []} />
                </ChartCard>
              )}
            </div>
            {breakdownLoading ? (
              <ChartCardSkeleton />
            ) : (
              <ChartCard title="By plan" description="Enterprise, Pro, Starter">
                <RevenueBreakdownChart data={revenueBreakdown ?? []} />
              </ChartCard>
            )}
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {insightsLoading ? <PanelSkeleton rows={4} /> : insights && <InsightsPanel insights={insights} />}
            {activitiesLoading ? <PanelSkeleton rows={6} /> : activities && <ActivityFeed activities={activities} />}
          </div>
        </PageContainer>
      </PageTransition>
    </>
  );
}
