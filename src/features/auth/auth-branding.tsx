"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, BarChart3, TrendingUp, Shield } from "lucide-react";

export function AuthBranding() {
  return (
    <div className="relative hidden overflow-hidden bg-[#111113] lg:flex lg:w-1/2 lg:flex-col">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(13,148,136,0.14),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(217,119,6,0.07),_transparent_50%)]" />

      <div className="relative z-10 flex flex-1 flex-col justify-center p-12">
        <div className="max-w-md">
          <Link href="/" className="inline-flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
              <Sparkles className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <span className="text-lg font-semibold tracking-tight">InsightFlow AI</span>
            </div>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-12"
          >
            <h1 className="text-3xl font-semibold leading-tight tracking-tight">
              Turn business data into{" "}
              <span className="text-primary">actionable insights</span>
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Monitor KPIs, track revenue, analyze customer growth, and generate AI-powered
              insights — all in one enterprise-grade platform.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-10 space-y-4"
          >
            {[
              { icon: BarChart3, text: "Real-time analytics dashboard" },
              { icon: TrendingUp, text: "AI-powered business insights" },
              { icon: Shield, text: "Enterprise-grade security" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon className="h-4 w-4 text-primary" />
                </div>
                {item.text}
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm"
          >
            <div className="grid grid-cols-3 gap-4 text-center">
              {[
                { value: "2.4K+", label: "Companies" },
                { value: "$1.2B", label: "Revenue tracked" },
                { value: "99.9%", label: "Uptime" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-lg font-semibold">{stat.value}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
