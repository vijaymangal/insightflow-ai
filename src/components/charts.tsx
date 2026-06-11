"use client";

import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import type { ChartDataPoint } from "@/types";
import { formatCurrency, formatCompact } from "@/lib/utils";
import { CHART, axisTickStyle, legendStyle } from "@/lib/chart-theme";

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ name: string; value: number; color: string }>;
  label?: string;
  formatter?: (value: number) => string;
}

function CustomTooltip({ active, payload, label, formatter }: CustomTooltipProps) {
  if (!active || !payload?.length) return null;

  return (
    <div
      className="rounded-lg px-3.5 py-2.5 shadow-2xl"
      style={{
        background: CHART.colors.tooltipBg,
        border: `1px solid ${CHART.colors.tooltipBorder}`,
        boxShadow: "0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.04) inset",
      }}
    >
      <p className="mb-2 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
      <div className="space-y-1.5">
        {payload.map((entry, index) => (
          <div key={index} className="flex items-center justify-between gap-6 text-[12px]">
            <div className="flex items-center gap-2">
              <div
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: entry.color, boxShadow: `0 0 6px ${entry.color}80` }}
              />
              <span className="text-muted-foreground">{entry.name}</span>
            </div>
            <span className="font-semibold tabular-nums text-foreground">
              {formatter ? formatter(entry.value) : entry.value.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

const gridProps = {
  strokeDasharray: "1 4",
  stroke: CHART.colors.grid,
  vertical: false as const,
};

export function RevenueTrendChart({ data }: { data: ChartDataPoint[] }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data} margin={CHART.margin}>
        <CartesianGrid {...gridProps} />
        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={axisTickStyle} dy={8} />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={axisTickStyle}
          tickFormatter={(v) => `$${formatCompact(v)}`}
          width={48}
        />
        <Tooltip
          content={<CustomTooltip formatter={formatCurrency} />}
          cursor={{ stroke: CHART.colors.primary, strokeWidth: 1, strokeDasharray: "4 4", strokeOpacity: 0.4 }}
        />
        <Legend wrapperStyle={legendStyle} iconType="circle" iconSize={6} />
        <Line
          type="monotone"
          dataKey="revenue"
          name="Revenue"
          stroke={CHART.colors.primary}
          strokeWidth={2}
          dot={false}
          activeDot={{
            r: 5,
            fill: CHART.colors.primary,
            stroke: "#09090b",
            strokeWidth: 2,
          }}
        />
        <Line
          type="monotone"
          dataKey="target"
          name="Target"
          stroke={CHART.colors.muted}
          strokeWidth={1.5}
          strokeDasharray="4 4"
          strokeOpacity={0.6}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export function CustomerGrowthChart({ data }: { data: ChartDataPoint[] }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data} margin={CHART.margin}>
        <defs>
          <linearGradient id="customerGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={CHART.colors.primary} stopOpacity={0.25} />
            <stop offset="50%" stopColor={CHART.colors.primary} stopOpacity={0.06} />
            <stop offset="100%" stopColor={CHART.colors.primary} stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid {...gridProps} />
        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={axisTickStyle} dy={8} />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={axisTickStyle}
          tickFormatter={(v) => formatCompact(v)}
          width={40}
        />
        <Tooltip
          content={<CustomTooltip />}
          cursor={{ stroke: CHART.colors.primary, strokeWidth: 1, strokeDasharray: "4 4", strokeOpacity: 0.3 }}
        />
        <Area
          type="monotone"
          dataKey="customers"
          name="Total Customers"
          stroke={CHART.colors.primary}
          strokeWidth={2}
          fill="url(#customerGradient)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export function RevenueBreakdownChart({ data }: { data: ChartDataPoint[] }) {
  const total = data.reduce((sum, item) => sum + (item.value ?? 0), 0);

  return (
    <div className="flex flex-col items-center gap-6 sm:flex-row">
      <div className="relative w-full sm:w-[52%]">
        <ResponsiveContainer width="100%" height={260}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={68}
              outerRadius={96}
              paddingAngle={2}
              dataKey="value"
              strokeWidth={0}
            >
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={CHART.pie[index % CHART.pie.length]} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip formatter={formatCurrency} />} />
          </PieChart>
        </ResponsiveContainer>
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Total</p>
          <p className="text-lg font-semibold tabular-nums tracking-tight">{formatCurrency(total)}</p>
        </div>
      </div>
      <div className="w-full flex-1 space-y-1">
        {data.map((item, index) => {
          const pct = (((item.value ?? 0) / total) * 100).toFixed(1);
          return (
            <div
              key={item.name}
              className="group flex items-center justify-between rounded-lg px-3 py-2.5 transition-colors hover:bg-white/[0.03]"
            >
              <div className="flex items-center gap-2.5">
                <div
                  className="h-2 w-2 rounded-full"
                  style={{
                    backgroundColor: CHART.pie[index % CHART.pie.length],
                    boxShadow: `0 0 8px ${CHART.pie[index % CHART.pie.length]}60`,
                  }}
                />
                <span className="text-[13px] text-muted-foreground transition-colors group-hover:text-foreground">
                  {item.name}
                </span>
              </div>
              <div className="text-right">
                <p className="text-[13px] font-medium tabular-nums">{formatCurrency(item.value ?? 0)}</p>
                <p className="text-[11px] tabular-nums text-muted-foreground">{pct}%</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function MonthlyPerformanceChart({ data }: { data: ChartDataPoint[] }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={CHART.margin} barGap={2} barCategoryGap="20%">
        <CartesianGrid {...gridProps} />
        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={axisTickStyle} dy={8} />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={axisTickStyle}
          tickFormatter={(v) => `$${formatCompact(v)}`}
          width={48}
        />
        <Tooltip content={<CustomTooltip formatter={formatCurrency} />} cursor={{ fill: "rgba(255,255,255,0.03)" }} />
        <Legend wrapperStyle={legendStyle} iconType="circle" iconSize={6} />
        <Bar dataKey="mrr" name="MRR" fill={CHART.colors.primary} radius={[3, 3, 0, 0]} maxBarSize={28} />
        <Bar dataKey="expansion" name="Expansion" fill={CHART.colors.success} radius={[3, 3, 0, 0]} maxBarSize={28} />
        <Bar dataKey="churn" name="Churn" fill={CHART.colors.warning} radius={[3, 3, 0, 0]} maxBarSize={28} opacity={0.85} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function ForecastChart({ data }: { data: ChartDataPoint[] }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data} margin={CHART.margin}>
        <defs>
          <linearGradient id="actualGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={CHART.colors.primary} stopOpacity={0.2} />
            <stop offset="100%" stopColor={CHART.colors.primary} stopOpacity={0} />
          </linearGradient>
          <linearGradient id="forecastGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={CHART.colors.secondary} stopOpacity={0.12} />
            <stop offset="100%" stopColor={CHART.colors.secondary} stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid {...gridProps} />
        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={axisTickStyle} dy={8} />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={axisTickStyle}
          tickFormatter={(v) => `$${formatCompact(v)}`}
          width={48}
        />
        <Tooltip content={<CustomTooltip formatter={formatCurrency} />} cursor={{ stroke: CHART.colors.primary, strokeWidth: 1, strokeDasharray: "4 4", strokeOpacity: 0.3 }} />
        <Legend wrapperStyle={legendStyle} iconType="circle" iconSize={6} />
        <Area type="monotone" dataKey="actual" name="Actual" stroke={CHART.colors.primary} strokeWidth={2} fill="url(#actualGradient)" />
        <Area type="monotone" dataKey="forecast" name="Forecast" stroke={CHART.colors.secondary} strokeWidth={1.5} strokeDasharray="4 4" fill="url(#forecastGradient)" />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export function FunnelChart({ data }: { data: ChartDataPoint[] }) {
  const max = Math.max(...data.map((d) => d.value ?? 0));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} layout="vertical" margin={{ top: 4, right: 16, left: 4, bottom: 4 }} barCategoryGap="18%">
        <CartesianGrid strokeDasharray="1 4" stroke={CHART.colors.grid} horizontal={false} />
        <XAxis
          type="number"
          axisLine={false}
          tickLine={false}
          tick={axisTickStyle}
          tickFormatter={(v) => formatCompact(v)}
        />
        <YAxis
          type="category"
          dataKey="name"
          axisLine={false}
          tickLine={false}
          tick={{ ...axisTickStyle, fontSize: 12 }}
          width={72}
        />
        <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(255,255,255,0.03)" }} />
        <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={20}>
          {data.map((entry, index) => {
            const opacity = 0.45 + ((entry.value ?? 0) / max) * 0.55;
            return <Cell key={index} fill={CHART.colors.primary} fillOpacity={opacity} />;
          })}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

export function TrafficSourcesChart({ data }: { data: ChartDataPoint[] }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={CHART.margin} barCategoryGap="28%">
        <CartesianGrid {...gridProps} />
        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={axisTickStyle} dy={8} />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={axisTickStyle}
          tickFormatter={(v) => formatCompact(v)}
          width={40}
        />
        <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(255,255,255,0.03)" }} />
        <Bar dataKey="value" name="Sessions" fill={CHART.colors.primary} radius={[4, 4, 0, 0]} maxBarSize={40} />
      </BarChart>
    </ResponsiveContainer>
  );
}
