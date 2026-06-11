import type { KPI, Customer, Activity, AIInsight, Report, Notification, ChartDataPoint } from "@/types";

export const dashboardKPIs: KPI[] = [
  {
    id: "revenue",
    label: "Total Revenue",
    value: 284750,
    change: 18.2,
    changeLabel: "vs last month",
    format: "currency",
    icon: "DollarSign",
  },
  {
    id: "users",
    label: "Active Users",
    value: 12847,
    change: 12.5,
    changeLabel: "vs last month",
    format: "number",
    icon: "Users",
  },
  {
    id: "customers",
    label: "New Customers",
    value: 342,
    change: 8.7,
    changeLabel: "vs last month",
    format: "number",
    icon: "UserPlus",
  },
  {
    id: "conversion",
    label: "Conversion Rate",
    value: 4.8,
    change: 2.1,
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
    title: "Revenue Growth Accelerating",
    description: "Revenue increased 18% this month, outpacing the 12% quarterly average. Enterprise plan upgrades drove 62% of the growth.",
    type: "positive",
    metric: "Revenue",
    change: 18,
  },
  {
    id: "2",
    title: "Churn Rate Declining",
    description: "Customer churn decreased by 7% compared to last quarter. Improved onboarding flow and proactive support contributed to retention.",
    type: "positive",
    metric: "Churn",
    change: -7,
  },
  {
    id: "3",
    title: "Marketing ROI Improved",
    description: "Marketing campaign ROI improved to 3.2x, up from 2.4x last month. LinkedIn and content marketing channels show strongest performance.",
    type: "positive",
    metric: "ROI",
    change: 33,
  },
  {
    id: "4",
    title: "Trial Conversion Opportunity",
    description: "23% of trial users haven't completed onboarding. Sending a personalized email sequence could recover an estimated $12K in MRR.",
    type: "warning",
    metric: "Trials",
    change: -23,
  },
];

export const recentActivities: Activity[] = [
  {
    id: "1",
    type: "signup",
    title: "New enterprise signup",
    description: "Acme Corp signed up for Enterprise plan",
    timestamp: "2024-12-10T14:32:00Z",
    user: "Sarah Chen",
  },
  {
    id: "2",
    type: "revenue",
    title: "Revenue milestone reached",
    description: "Monthly recurring revenue crossed $100K",
    timestamp: "2024-12-10T11:15:00Z",
  },
  {
    id: "3",
    type: "report",
    title: "Q4 report generated",
    description: "Quarterly revenue report exported as PDF",
    timestamp: "2024-12-10T09:45:00Z",
    user: "Michael Torres",
  },
  {
    id: "4",
    type: "team",
    title: "Team member invited",
    description: "Alex Rivera was invited as Analytics Manager",
    timestamp: "2024-12-09T16:20:00Z",
    user: "Emily Watson",
  },
  {
    id: "5",
    type: "signup",
    title: "Pro plan upgrade",
    description: "TechFlow Inc upgraded from Starter to Pro",
    timestamp: "2024-12-09T13:10:00Z",
    user: "David Kim",
  },
  {
    id: "6",
    type: "system",
    title: "Data sync completed",
    description: "Stripe integration synced 1,247 transactions",
    timestamp: "2024-12-09T08:00:00Z",
  },
];

export const customers: Customer[] = [
  { id: "1", name: "Sarah Chen", email: "sarah@acmecorp.com", company: "Acme Corp", plan: "Enterprise", revenue: 48000, status: "active", joinedAt: "2024-01-15" },
  { id: "2", name: "Michael Torres", email: "michael@techflow.io", company: "TechFlow Inc", plan: "Pro", revenue: 12000, status: "active", joinedAt: "2024-02-20" },
  { id: "3", name: "Emily Watson", email: "emily@nexuslabs.com", company: "Nexus Labs", plan: "Enterprise", revenue: 52000, status: "active", joinedAt: "2024-03-10" },
  { id: "4", name: "David Kim", email: "david@startupxyz.com", company: "StartupXYZ", plan: "Pro", revenue: 9600, status: "active", joinedAt: "2024-04-05" },
  { id: "5", name: "Alex Rivera", email: "alex@cloudbase.dev", company: "CloudBase", plan: "Starter", revenue: 2400, status: "trial", joinedAt: "2024-11-28" },
  { id: "6", name: "Jessica Park", email: "jessica@datastream.ai", company: "DataStream AI", plan: "Enterprise", revenue: 60000, status: "active", joinedAt: "2024-05-18" },
  { id: "7", name: "Ryan O'Brien", email: "ryan@velocity.co", company: "Velocity Co", plan: "Pro", revenue: 14400, status: "active", joinedAt: "2024-06-22" },
  { id: "8", name: "Lisa Nguyen", email: "lisa@quantum.io", company: "Quantum IO", plan: "Starter", revenue: 1800, status: "inactive", joinedAt: "2024-07-30" },
  { id: "9", name: "James Wilson", email: "james@forgeapp.com", company: "Forge App", plan: "Pro", revenue: 10800, status: "active", joinedAt: "2024-08-14" },
  { id: "10", name: "Maria Santos", email: "maria@brightpath.co", company: "BrightPath", plan: "Enterprise", revenue: 44000, status: "active", joinedAt: "2024-09-01" },
  { id: "11", name: "Tom Bradley", email: "tom@pixelworks.io", company: "PixelWorks", plan: "Starter", revenue: 2400, status: "churned", joinedAt: "2024-03-25" },
  { id: "12", name: "Anna Kowalski", email: "anna@synapse.dev", company: "Synapse Dev", plan: "Pro", revenue: 13200, status: "active", joinedAt: "2024-10-08" },
  { id: "13", name: "Chris Lee", email: "chris@orbitlabs.com", company: "Orbit Labs", plan: "Enterprise", revenue: 56000, status: "active", joinedAt: "2024-10-20" },
  { id: "14", name: "Rachel Green", email: "rachel@flowstate.io", company: "FlowState", plan: "Pro", revenue: 8400, status: "trial", joinedAt: "2024-11-15" },
  { id: "15", name: "Kevin Patel", email: "kevin@stackwise.co", company: "StackWise", plan: "Starter", revenue: 1200, status: "active", joinedAt: "2024-11-22" },
];

export const reports: Report[] = [
  { id: "1", title: "Monthly Revenue Report", description: "Comprehensive revenue breakdown with MRR, ARR, and growth metrics", type: "revenue", status: "ready", lastGenerated: "2024-12-10T08:00:00Z", format: "PDF", schedule: "Monthly on 1st" },
  { id: "2", title: "Customer Analytics", description: "Customer acquisition, retention, and churn analysis", type: "customers", status: "ready", lastGenerated: "2024-12-09T14:30:00Z", format: "CSV" },
  { id: "3", title: "Q4 Performance Review", description: "Quarterly business performance with YoY comparisons", type: "performance", status: "generating", lastGenerated: "2024-12-08T10:00:00Z", format: "PDF", schedule: "Quarterly" },
  { id: "4", title: "Marketing Attribution", description: "Channel performance and campaign ROI analysis", type: "analytics", status: "ready", lastGenerated: "2024-12-07T16:45:00Z", format: "XLSX" },
  { id: "5", title: "Subscription Metrics", description: "Plan distribution, upgrades, downgrades, and expansion revenue", type: "revenue", status: "scheduled", lastGenerated: "2024-12-01T00:00:00Z", format: "PDF", schedule: "Weekly on Monday" },
  { id: "6", title: "Team Performance", description: "Sales team metrics, quotas, and pipeline analysis", type: "performance", status: "ready", lastGenerated: "2024-12-06T09:15:00Z", format: "PDF" },
];

export const notifications: Notification[] = [
  { id: "1", title: "Revenue milestone", message: "MRR crossed $100K for the first time!", type: "success", read: false, timestamp: "2024-12-10T11:15:00Z" },
  { id: "2", title: "New enterprise customer", message: "Acme Corp signed up for Enterprise plan", type: "info", read: false, timestamp: "2024-12-10T14:32:00Z" },
  { id: "3", title: "Report ready", message: "Your Q4 Performance Review is ready to download", type: "success", read: false, timestamp: "2024-12-09T10:00:00Z" },
  { id: "4", title: "Churn alert", message: "PixelWorks cancelled their subscription", type: "warning", read: true, timestamp: "2024-12-08T15:30:00Z" },
  { id: "5", title: "Integration sync", message: "Stripe data sync completed successfully", type: "info", read: true, timestamp: "2024-12-09T08:00:00Z" },
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
  { id: "sessions", label: "Total Sessions", value: 89420, change: 15.3, changeLabel: "vs last period", format: "number", icon: "Activity" },
  { id: "bounce", label: "Bounce Rate", value: 32.4, change: -4.2, changeLabel: "vs last period", format: "percent", icon: "MousePointer" },
  { id: "duration", label: "Avg. Session Duration", value: 4.2, change: 8.1, changeLabel: "vs last period", format: "number", icon: "Clock" },
  { id: "pages", label: "Pages per Session", value: 5.8, change: 3.4, changeLabel: "vs last period", format: "number", icon: "FileText" },
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
  name: "Alex Morgan",
  email: "alex@insightflow.ai",
  role: "Admin",
  company: "InsightFlow AI",
  avatar: undefined,
};
