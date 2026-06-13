import type { KPI, Customer, Activity, AIInsight, Report, Notification, ChartDataPoint } from "@/types";

export const dashboardKPIs: KPI[] = [
  {
    id: "revenue",
    label: "Total revenue",
    value: 283412,
    change: 11.4,
    changeLabel: "vs last month",
    format: "currency",
    icon: "DollarSign",
  },
  {
    id: "users",
    label: "Active users",
    value: 12831,
    change: 6.2,
    changeLabel: "vs last month",
    format: "number",
    icon: "Users",
  },
  {
    id: "customers",
    label: "New customers",
    value: 318,
    change: -2.3,
    changeLabel: "vs last month",
    format: "number",
    icon: "UserPlus",
  },
  {
    id: "conversion",
    label: "Trial conversion",
    value: 4.6,
    change: 0.4,
    changeLabel: "vs last month",
    format: "percent",
    icon: "TrendingUp",
  },
];

export const revenueTrendData: ChartDataPoint[] = [
  { name: "Jan", revenue: 42000, target: 40000 },
  { name: "Feb", revenue: 48000, target: 45000 },
  { name: "Mar", revenue: 52000, target: 48000 },
  { name: "Apr", revenue: 61000, target: 52000 },
  { name: "May", revenue: 58000, target: 55000 },
  { name: "Jun", revenue: 67000, target: 58000 },
  { name: "Jul", revenue: 72000, target: 62000 },
  { name: "Aug", revenue: 78000, target: 68000 },
  { name: "Sep", revenue: 85000, target: 72000 },
  { name: "Oct", revenue: 92000, target: 78000 },
  { name: "Nov", revenue: 98000, target: 85000 },
  { name: "Dec", revenue: 105000, target: 90000 },
];

export const customerGrowthData: ChartDataPoint[] = [
  { name: "Jan", customers: 8200, newCustomers: 420 },
  { name: "Feb", customers: 8650, newCustomers: 450 },
  { name: "Mar", customers: 9100, newCustomers: 450 },
  { name: "Apr", customers: 9580, newCustomers: 480 },
  { name: "May", customers: 10050, newCustomers: 470 },
  { name: "Jun", customers: 10580, newCustomers: 530 },
  { name: "Jul", customers: 11120, newCustomers: 540 },
  { name: "Aug", customers: 11680, newCustomers: 560 },
  { name: "Sep", customers: 12250, newCustomers: 570 },
  { name: "Oct", customers: 12847, newCustomers: 597 },
];

export const revenueBreakdownData: ChartDataPoint[] = [
  { name: "Enterprise", value: 142000 },
  { name: "Pro", value: 89000 },
  { name: "Starter", value: 53750 },
];

export const monthlyPerformanceData: ChartDataPoint[] = [
  { name: "Jan", mrr: 42000, churn: 1200, expansion: 3800 },
  { name: "Feb", mrr: 48000, churn: 1100, expansion: 4200 },
  { name: "Mar", mrr: 52000, churn: 980, expansion: 4500 },
  { name: "Apr", mrr: 61000, churn: 1050, expansion: 5100 },
  { name: "May", mrr: 58000, churn: 1150, expansion: 4800 },
  { name: "Jun", mrr: 67000, churn: 920, expansion: 5600 },
  { name: "Jul", mrr: 72000, churn: 880, expansion: 6100 },
  { name: "Aug", mrr: 78000, churn: 950, expansion: 6800 },
  { name: "Sep", mrr: 85000, churn: 820, expansion: 7200 },
  { name: "Oct", mrr: 92000, churn: 780, expansion: 7800 },
  { name: "Nov", mrr: 98000, churn: 750, expansion: 8200 },
  { name: "Dec", mrr: 105000, churn: 680, expansion: 8900 },
];

export const aiInsights: AIInsight[] = [
  {
    id: "1",
    title: "Revenue up 11.4% MoM",
    description: "Enterprise upgrades added $31.2k. Pro tier flat after two downgrades from Forge App and StackWise.",
    type: "positive",
    metric: "Revenue",
    change: 11.4,
  },
  {
    id: "2",
    title: "Churn down to 2.1%",
    description: "Down from 2.8% last month. Support tickets during onboarding dropped after the checklist shipped.",
    type: "positive",
    metric: "Churn",
    change: -7,
  },
  {
    id: "3",
    title: "Paid search CAC rising",
    description: "Google Ads CAC is $612, up from $498. Organic signups still convert at 2× the paid rate.",
    type: "warning",
    metric: "CAC",
    change: 23,
  },
  {
    id: "4",
    title: "14 trials stuck on step 2",
    description: "Users who skip workspace setup churn within 9 days. A nudge email could recover ~$8.4k MRR.",
    type: "warning",
    metric: "Trials",
    change: -14,
  },
];

export const recentActivities: Activity[] = [
  {
    id: "1",
    type: "signup",
    title: "Harbor Logistics → Enterprise",
    description: "Annual contract · $52,800/yr · owner: Sarah Chen",
    timestamp: "2026-06-10T14:32:00Z",
    user: "Sarah Chen",
  },
  {
    id: "2",
    type: "revenue",
    title: "MRR $105,240",
    description: "+7.1% from May · net new $6,980",
    timestamp: "2026-06-10T11:15:00Z",
  },
  {
    id: "3",
    type: "report",
    title: "May revenue report exported",
    description: "PDF · sent to finance@harborlogistics.com",
    timestamp: "2026-06-10T09:45:00Z",
    user: "Jordan Lee",
  },
  {
    id: "4",
    type: "team",
    title: "Morgan Patel invited",
    description: "Role: Finance · pending acceptance",
    timestamp: "2026-06-09T16:20:00Z",
    user: "Jordan Lee",
  },
  {
    id: "5",
    type: "signup",
    title: "Northwind Tools upgraded to Pro",
    description: "+$400/mo · from Starter",
    timestamp: "2026-06-09T13:10:00Z",
    user: "David Kim",
  },
  {
    id: "6",
    type: "system",
    title: "Stripe sync complete",
    description: "1,183 charges · 3 disputes · 0 failures",
    timestamp: "2026-06-09T08:00:00Z",
  },
];

export const customers: Customer[] = [
  { id: "1", name: "Sarah Chen", email: "sarah@harborlogistics.com", company: "Harbor Logistics", plan: "Enterprise", revenue: 52800, status: "active", joinedAt: "2024-01-15" },
  { id: "2", name: "Michael Torres", email: "michael@northwindtools.io", company: "Northwind Tools", plan: "Pro", revenue: 14400, status: "active", joinedAt: "2024-02-20" },
  { id: "3", name: "Emily Watson", email: "emily@nexuslabs.com", company: "Nexus Labs", plan: "Enterprise", revenue: 51600, status: "active", joinedAt: "2024-03-10" },
  { id: "4", name: "David Kim", email: "david@northwindtools.io", company: "Northwind Tools", plan: "Pro", revenue: 9600, status: "active", joinedAt: "2024-04-05" },
  { id: "5", name: "Alex Rivera", email: "alex@cloudbase.dev", company: "CloudBase", plan: "Starter", revenue: 2400, status: "trial", joinedAt: "2026-05-28" },
  { id: "6", name: "Jessica Park", email: "jessica@datastream.ai", company: "DataStream", plan: "Enterprise", revenue: 58400, status: "active", joinedAt: "2024-05-18" },
  { id: "7", name: "Ryan O'Brien", email: "ryan@velocity.co", company: "Velocity Co", plan: "Pro", revenue: 13200, status: "active", joinedAt: "2024-06-22" },
  { id: "8", name: "Lisa Nguyen", email: "lisa@quantum.io", company: "Quantum IO", plan: "Starter", revenue: 1800, status: "inactive", joinedAt: "2024-07-30" },
  { id: "9", name: "James Wilson", email: "james@forgeapp.com", company: "Forge App", plan: "Pro", revenue: 10800, status: "active", joinedAt: "2024-08-14" },
  { id: "10", name: "Maria Santos", email: "maria@brightpath.co", company: "BrightPath", plan: "Enterprise", revenue: 43600, status: "active", joinedAt: "2024-09-01" },
  { id: "11", name: "Tom Bradley", email: "tom@pixelworks.io", company: "PixelWorks", plan: "Starter", revenue: 0, status: "churned", joinedAt: "2024-03-25" },
  { id: "12", name: "Anna Kowalski", email: "anna@synapse.dev", company: "Synapse Dev", plan: "Pro", revenue: 12800, status: "active", joinedAt: "2024-10-08" },
  { id: "13", name: "Chris Lee", email: "chris@orbitlabs.com", company: "Orbit Labs", plan: "Enterprise", revenue: 55200, status: "active", joinedAt: "2024-10-20" },
  { id: "14", name: "Rachel Green", email: "rachel@flowstate.io", company: "FlowState", plan: "Pro", revenue: 8400, status: "trial", joinedAt: "2026-05-15" },
  { id: "15", name: "Kevin Patel", email: "kevin@stackwise.co", company: "StackWise", plan: "Starter", revenue: 1200, status: "active", joinedAt: "2025-11-22" },
];

export const reports: Report[] = [
  { id: "1", title: "May revenue", description: "MRR, ARR, net new, expansion, churn", type: "revenue", status: "ready", lastGenerated: "2026-06-01T08:00:00Z", format: "PDF", schedule: "1st of month" },
  { id: "2", title: "Customer cohorts", description: "Retention by signup month, plans, segment", type: "customers", status: "ready", lastGenerated: "2026-06-08T14:30:00Z", format: "CSV" },
  { id: "3", title: "Q2 review", description: "YoY revenue, headcount cost ratio, pipeline", type: "performance", status: "generating", lastGenerated: "2026-06-09T10:00:00Z", format: "PDF", schedule: "Quarterly" },
  { id: "4", title: "Channel attribution", description: "Paid vs organic, CAC by source", type: "analytics", status: "ready", lastGenerated: "2026-06-07T16:45:00Z", format: "XLSX" },
  { id: "5", title: "Subscription snapshot", description: "Plan mix, upgrades, downgrades", type: "revenue", status: "scheduled", lastGenerated: "2026-06-02T00:00:00Z", format: "PDF", schedule: "Every Monday" },
  { id: "6", title: "Sales pipeline", description: "Open deals, stage aging, forecast", type: "performance", status: "ready", lastGenerated: "2026-06-06T09:15:00Z", format: "PDF" },
];

export const notifications: Notification[] = [
  { id: "1", title: "MRR $105,240", message: "Up 7.1% from May.", type: "success", read: false, timestamp: "2026-06-10T11:15:00Z" },
  { id: "2", title: "Harbor Logistics signed", message: "Enterprise · $52,800/yr", type: "info", read: false, timestamp: "2026-06-10T14:32:00Z" },
  { id: "3", title: "Q2 review ready", message: "PDF export finished.", type: "success", read: false, timestamp: "2026-06-09T10:00:00Z" },
  { id: "4", title: "PixelWorks churned", message: "Starter plan cancelled.", type: "warning", read: true, timestamp: "2026-06-08T15:30:00Z" },
  { id: "5", title: "Stripe sync", message: "1,183 charges imported.", type: "info", read: true, timestamp: "2026-06-09T08:00:00Z" },
];

export const revenueMetrics = {
  mrr: { label: "Monthly Recurring Revenue", value: 105000, change: 7.1, format: "currency" as const },
  arr: { label: "Annual Recurring Revenue", value: 1260000, change: 18.4, format: "currency" as const },
  growth: { label: "Revenue Growth Rate", value: 18.2, change: 3.5, format: "percent" as const },
  forecast: { label: "Q1 Forecast", value: 340000, change: 12.0, format: "currency" as const },
  ltv: { label: "Customer LTV", value: 8400, change: 5.2, format: "currency" as const },
  cac: { label: "Customer CAC", value: 420, change: -8.1, format: "currency" as const },
};

export const subscriptionAnalytics = [
  { plan: "Enterprise", subscribers: 48, revenue: 142000, percentage: 49.9 },
  { plan: "Pro", subscribers: 186, revenue: 89000, percentage: 31.3 },
  { plan: "Starter", subscribers: 412, revenue: 53750, percentage: 18.8 },
];

export const forecastData: ChartDataPoint[] = [
  { name: "Jan", actual: 42000, forecast: 41000 },
  { name: "Feb", actual: 48000, forecast: 46000 },
  { name: "Mar", actual: 52000, forecast: 50000 },
  { name: "Apr", actual: 61000, forecast: 55000 },
  { name: "May", actual: 58000, forecast: 58000 },
  { name: "Jun", actual: 67000, forecast: 62000 },
  { name: "Jul", actual: 72000, forecast: 68000 },
  { name: "Aug", actual: 78000, forecast: 74000 },
  { name: "Sep", actual: 85000, forecast: 80000 },
  { name: "Oct", actual: 92000, forecast: 86000 },
  { name: "Nov", actual: 98000, forecast: 92000 },
  { name: "Dec", actual: 105000, forecast: 98000 },
  { name: "Jan+", actual: 0, forecast: 112000 },
  { name: "Feb+", actual: 0, forecast: 118000 },
  { name: "Mar+", actual: 0, forecast: 125000 },
];

export const analyticsKPIs: KPI[] = [
  { id: "sessions", label: "Total sessions", value: 89420, change: 15.3, changeLabel: "vs last period", format: "number", icon: "Activity" },
  { id: "bounce", label: "Bounce rate", value: 32.4, change: -4.2, changeLabel: "vs last period", format: "percent", icon: "MousePointer" },
  { id: "duration", label: "Avg. duration (min)", value: 4.2, change: 8.1, changeLabel: "vs last period", format: "number", icon: "Clock" },
  { id: "pages", label: "Pages per session", value: 5.8, change: 3.4, changeLabel: "vs last period", format: "number", icon: "FileText" },
];

export const sessionsTrendData: ChartDataPoint[] = [
  { name: "Jan", sessions: 58200 },
  { name: "Feb", sessions: 61400 },
  { name: "Mar", sessions: 64800 },
  { name: "Apr", sessions: 69100 },
  { name: "May", sessions: 71200 },
  { name: "Jun", sessions: 74800 },
  { name: "Jul", sessions: 78100 },
  { name: "Aug", sessions: 81200 },
  { name: "Sep", sessions: 83600 },
  { name: "Oct", sessions: 86100 },
  { name: "Nov", sessions: 87800 },
  { name: "Dec", sessions: 89420 },
];

export const trafficSourcesData: ChartDataPoint[] = [
  { name: "Organic", value: 38400 },
  { name: "Direct", value: 22100 },
  { name: "Referral", value: 15800 },
  { name: "Social", value: 8900 },
  { name: "Paid", value: 4220 },
];

export const conversionFunnelData: ChartDataPoint[] = [
  { name: "Visitors", value: 89420 },
  { name: "Signups", value: 4280 },
  { name: "Trials", value: 2140 },
  { name: "Paid", value: 856 },
  { name: "Enterprise", value: 128 },
];

export const currentUser = {
  id: "1",
  name: "Jordan Lee",
  email: "jordan@insightflow.io",
  role: "Admin",
  company: "InsightFlow",
  avatar: undefined,
};
