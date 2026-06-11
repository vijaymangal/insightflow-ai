"use client";

import { useQuery } from "@tanstack/react-query";
import {
  dashboardService,
  customerService,
  analyticsService,
  revenueService,
  reportService,
} from "@/services";

export function useDashboardKPIs() {
  return useQuery({
    queryKey: ["dashboard", "kpis"],
    queryFn: dashboardService.getKPIs,
  });
}

export function useRevenueTrend() {
  return useQuery({
    queryKey: ["dashboard", "revenue-trend"],
    queryFn: dashboardService.getRevenueTrend,
  });
}

export function useCustomerGrowth() {
  return useQuery({
    queryKey: ["dashboard", "customer-growth"],
    queryFn: dashboardService.getCustomerGrowth,
  });
}

export function useRevenueBreakdown() {
  return useQuery({
    queryKey: ["dashboard", "revenue-breakdown"],
    queryFn: dashboardService.getRevenueBreakdown,
  });
}

export function useMonthlyPerformance() {
  return useQuery({
    queryKey: ["dashboard", "monthly-performance"],
    queryFn: dashboardService.getMonthlyPerformance,
  });
}

export function useAIInsights() {
  return useQuery({
    queryKey: ["dashboard", "insights"],
    queryFn: dashboardService.getInsights,
  });
}

export function useActivities() {
  return useQuery({
    queryKey: ["dashboard", "activities"],
    queryFn: dashboardService.getActivities,
  });
}

export function useCustomers() {
  return useQuery({
    queryKey: ["customers"],
    queryFn: customerService.getAll,
  });
}

export function useAnalyticsKPIs() {
  return useQuery({
    queryKey: ["analytics", "kpis"],
    queryFn: analyticsService.getKPIs,
  });
}

export function useTrafficSources() {
  return useQuery({
    queryKey: ["analytics", "traffic"],
    queryFn: analyticsService.getTrafficSources,
  });
}

export function useConversionFunnel() {
  return useQuery({
    queryKey: ["analytics", "funnel"],
    queryFn: analyticsService.getConversionFunnel,
  });
}

export function useRevenueMetrics() {
  return useQuery({
    queryKey: ["revenue", "metrics"],
    queryFn: revenueService.getMetrics,
  });
}

export function useSubscriptionAnalytics() {
  return useQuery({
    queryKey: ["revenue", "subscriptions"],
    queryFn: revenueService.getSubscriptionAnalytics,
  });
}

export function useRevenueForecast() {
  return useQuery({
    queryKey: ["revenue", "forecast"],
    queryFn: revenueService.getForecast,
  });
}

export function useReports() {
  return useQuery({
    queryKey: ["reports"],
    queryFn: reportService.getAll,
  });
}
