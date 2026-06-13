"use client";

import Link from "next/link";
import { BarChart3 } from "lucide-react";

export function AuthBranding() {
  return (
    <div className="hidden border-r border-border bg-surface lg:flex lg:w-[440px] lg:flex-col">
      <div className="flex flex-1 flex-col justify-between p-10">
        <Link href="/" className="inline-flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
            <BarChart3 className="h-4 w-4 text-primary-foreground" strokeWidth={2} />
          </div>
          <span className="text-[15px] font-semibold tracking-tight">InsightFlow</span>
        </Link>

        <div className="max-w-sm">
          <h1 className="text-[28px] font-semibold leading-snug tracking-tight">
            Revenue and customer metrics in one place.
          </h1>
          <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">
            Connect billing and product data to track MRR, retention, and pipeline without
            switching tools.
          </p>
          <ul className="mt-8 space-y-2.5 text-[13px] text-muted-foreground">
            <li>Stripe and HubSpot sync</li>
            <li>Weekly digest for finance and GTM</li>
            <li>Role-based access for your team</li>
          </ul>
        </div>

        <p className="text-[12px] text-muted-foreground">
          Copyright {new Date().getFullYear()} InsightFlow
        </p>
      </div>
    </div>
  );
}
