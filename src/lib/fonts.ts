import localFont from "next/font/local";

export const googleSans = localFont({
  src: [
    {
      path: "../app/fonts/google-sans-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../app/fonts/google-sans-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../app/fonts/google-sans-latin-600-normal.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../app/fonts/google-sans-latin-700-normal.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-google-sans",
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
});
