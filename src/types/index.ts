export interface KPI {
  id: string;
  label: string;
  value: number;
  change: number;
  changeLabel: string;
  format: "currency" | "number" | "percent";
  icon: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  company: string;
  plan: "Starter" | "Pro" | "Enterprise";
  revenue: number;
  status: "active" | "inactive" | "churned" | "trial";
  joinedAt: string;
  avatar?: string;
}

export interface Activity {
  id: string;
  type: "signup" | "team" | "report" | "revenue" | "system";
  title: string;
  description: string;
  timestamp: string;
  user?: string;
  avatar?: string;
}

export interface AIInsight {
  id: string;
  title: string;
  description: string;
  type: "positive" | "neutral" | "warning";
  metric?: string;
  change?: number;
}

export interface Report {
  id: string;
  title: string;
  description: string;
  type: "revenue" | "customers" | "analytics" | "performance";
  status: "ready" | "generating" | "scheduled";
  lastGenerated: string;
  format: "PDF" | "CSV" | "XLSX";
  schedule?: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: "info" | "success" | "warning" | "error";
  read: boolean;
  timestamp: string;
}

export interface RevenueMetric {
  label: string;
  value: number;
  change: number;
  format: "currency" | "number" | "percent";
}

export interface ChartDataPoint {
  name: string;
  value?: number;
  [key: string]: string | number | undefined;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: string;
  company: string;
}

export interface NavItem {
  title: string;
  href: string;
  icon: string;
  badge?: string;
}

export interface SettingsSection {
  id: string;
  title: string;
  description: string;
}

export interface SubscriptionPlan {
  name: string;
  price: number;
  interval: "month" | "year";
  features: string[];
  current: boolean;
}
