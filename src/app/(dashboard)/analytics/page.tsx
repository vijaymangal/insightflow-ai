"use client";

import { Download, Calendar } from "lucide-react";
import { DashboardHeader } from "@/components/dashboard-header";
import { PageTransition } from "@/components/page-transition";
import { PageContainer } from "@/components/page-container";
import { StatCard, StatCardSkeleton } from "@/components/stat-card";
import { ChartCard, ChartCardSkeleton } from "@/components/chart-card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  RevenueTrendChart,
  TrafficSourcesChart,
  FunnelChart,
  CustomerGrowthChart,
} from "@/components/charts";
import {
  useAnalyticsKPIs,
  useRevenueTrend,
  useTrafficSources,
  useConversionFunnel,
  useCustomerGrowth,
} from "@/hooks/use-dashboard-data";

export default function AnalyticsPage() {
  const { data: kpis, isLoading: kpisLoading } = useAnalyticsKPIs();
  const { data: revenueTrend, isLoading: revenueLoading } = useRevenueTrend();
  const { data: trafficSources, isLoading: trafficLoading } = useTrafficSources();
  const { data: funnel, isLoading: funnelLoading } = useConversionFunnel();
  const { data: customerGrowth, isLoading: customerLoading } = useCustomerGrowth();

  return (
    <>
      <DashboardHeader title="Analytics" description="Deep dive into your business performance" />
      <PageTransition>
        <PageContainer>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <Select defaultValue="30d">
                <SelectTrigger className="w-[160px]">
                  <Calendar className="mr-2 h-4 w-4" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7d">Last 7 days</SelectItem>
                  <SelectItem value="30d">Last 30 days</SelectItem>
                  <SelectItem value="90d">Last 90 days</SelectItem>
                  <SelectItem value="12m">Last 12 months</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export Report
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {kpisLoading
              ? Array.from({ length: 4 }).map((_, i) => <StatCardSkeleton key={i} />)
              : kpis?.map((kpi, index) => <StatCard key={kpi.id} kpi={kpi} index={index} />)}
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {revenueLoading ? (
              <ChartCardSkeleton />
            ) : (
              <ChartCard title="Revenue Trend" description="Revenue performance over time">
                <RevenueTrendChart data={revenueTrend ?? []} />
              </ChartCard>
            )}
            {trafficLoading ? (
              <ChartCardSkeleton />
            ) : (
              <ChartCard title="Traffic Sources" description="Sessions by acquisition channel">
                <TrafficSourcesChart data={trafficSources ?? []} />
              </ChartCard>
            )}
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {funnelLoading ? (
              <ChartCardSkeleton />
            ) : (
              <ChartCard title="Conversion Funnel" description="Visitor to customer journey">
                <FunnelChart data={funnel ?? []} />
              </ChartCard>
            )}
            {customerLoading ? (
              <ChartCardSkeleton />
            ) : (
              <ChartCard title="Customer Growth" description="Customer acquisition trends">
                <CustomerGrowthChart data={customerGrowth ?? []} />
              </ChartCard>
            )}
          </div>
        </PageContainer>
      </PageTransition>
    </>
  );
}
