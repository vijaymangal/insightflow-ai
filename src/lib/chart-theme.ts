export const CHART = {
  colors: {
    primary: "#0D9488",
    primaryMuted: "rgba(13, 148, 136, 0.15)",
    success: "#10B981",
    successMuted: "rgba(16, 185, 129, 0.15)",
    warning: "#F59E0B",
    warningMuted: "rgba(245, 158, 11, 0.15)",
    secondary: "#D97706",
    secondaryMuted: "rgba(217, 119, 6, 0.15)",
    muted: "#78716C",
    grid: "rgba(255, 255, 255, 0.04)",
    axis: "#52525B",
    tooltipBg: "#141416",
    tooltipBorder: "rgba(255, 255, 255, 0.08)",
  },
  pie: ["#0D9488", "#D97706", "#10B981", "#78716C"],
  axis: {
    fontSize: 11,
    fontWeight: 500,
  },
  margin: { top: 8, right: 12, left: -8, bottom: 0 },
} as const;

export const axisTickStyle = {
  fill: CHART.colors.axis,
  fontSize: CHART.axis.fontSize,
  fontWeight: CHART.axis.fontWeight,
};

export const legendStyle = {
  fontSize: 11,
  color: "#71717A",
  fontWeight: 500,
};
