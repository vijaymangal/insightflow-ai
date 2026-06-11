import type { KPI, Customer, Activity, AIInsight, Report, Notification } from "@/types";
import {
  dashboardKPIs,
  customers,
  recentActivities,
  aiInsights,
  reports,
  notifications,
  revenueMetrics,
  subscriptionAnalytics,
  revenueTrendData,
  customerGrowthData,
  revenueBreakdownData,
  monthlyPerformanceData,
  forecastData,
  analyticsKPIs,
  trafficSourcesData,
  conversionFunnelData,
} from "@/data/mock-data";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const dashboardService = {
  async getKPIs(): Promise<KPI[]> {
    await delay(300);
    return dashboardKPIs;
  },
  async getRevenueTrend() {
    await delay(400);
    return revenueTrendData;
  },
  async getCustomerGrowth() {
    await delay(400);
    return customerGrowthData;
  },
  async getRevenueBreakdown() {
    await delay(350);
    return revenueBreakdownData;
  },
  async getMonthlyPerformance() {
    await delay(400);
    return monthlyPerformanceData;
  },
  async getInsights(): Promise<AIInsight[]> {
    await delay(500);
    return aiInsights;
  },
  async getActivities(): Promise<Activity[]> {
    await delay(300);
    return recentActivities;
  },
};

export const customerService = {
  async getAll(): Promise<Customer[]> {
    await delay(400);
    return customers;
  },
  async getById(id: string): Promise<Customer | undefined> {
    await delay(200);
    return customers.find((c) => c.id === id);
  },
};

export const analyticsService = {
  async getKPIs(): Promise<KPI[]> {
    await delay(350);
    return analyticsKPIs;
  },
  async getTrafficSources() {
    await delay(400);
    return trafficSourcesData;
  },
  async getConversionFunnel() {
    await delay(400);
    return conversionFunnelData;
  },
  async getRevenueTrend() {
    await delay(400);
    return revenueTrendData;
  },
};

export const revenueService = {
  async getMetrics() {
    await delay(350);
    return revenueMetrics;
  },
  async getSubscriptionAnalytics() {
    await delay(400);
    return subscriptionAnalytics;
  },
  async getForecast() {
    await delay(450);
    return forecastData;
  },
  async getMonthlyPerformance() {
    await delay(400);
    return monthlyPerformanceData;
  },
};

export const reportService = {
  async getAll(): Promise<Report[]> {
    await delay(350);
    return reports;
  },
};

export const notificationService = {
  async getAll(): Promise<Notification[]> {
    await delay(200);
    return notifications;
  },
};
