"use client";

import { motion } from "framer-motion";
import { formatDistanceToNow } from "date-fns";
import {
  UserPlus,
  Users,
  FileText,
  DollarSign,
  Settings,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { Activity } from "@/types";

const typeConfig: Record<Activity["type"], { icon: LucideIcon; color: string; bg: string }> = {
  signup: { icon: UserPlus, color: "text-emerald-400", bg: "bg-emerald-500/10" },
  team: { icon: Users, color: "text-primary", bg: "bg-primary/10" },
  report: { icon: FileText, color: "text-amber-400", bg: "bg-amber-500/10" },
  revenue: { icon: DollarSign, color: "text-emerald-400", bg: "bg-emerald-500/10" },
  system: { icon: Settings, color: "text-muted-foreground", bg: "bg-white/[0.04]" },
};

interface ActivityFeedProps {
  activities: Activity[];
}

export function ActivityFeed({ activities }: ActivityFeedProps) {
  return (
    <div className="surface-card surface-card-hover overflow-hidden">
      <div className="border-b border-border px-5 py-4 lg:px-6 lg:py-5">
        <h3 className="text-[13px] font-semibold tracking-[-0.01em]">Recent Activity</h3>
        <p className="mt-1 text-[12px] text-muted-foreground">Latest updates across your workspace</p>
      </div>
      <div>
        {activities.map((activity, index) => {
          const config = typeConfig[activity.type];
          const Icon = config.icon;

          return (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              className="group flex items-start gap-3 border-b border-border px-5 py-3.5 transition-colors last:border-0 hover:bg-white/[0.03] lg:px-6 lg:py-4"
            >
              <div className={cn("icon-well h-8 w-8 shrink-0", config.bg, config.color)}>
                <Icon className="h-3.5 w-3.5" strokeWidth={1.75} />
              </div>
              <div className="min-w-0 flex-1 pt-0.5">
                <p className="text-[13px] font-medium leading-snug">{activity.title}</p>
                <p className="mt-0.5 text-[12px] leading-relaxed text-muted-foreground">{activity.description}</p>
                <div className="mt-1.5 flex items-center gap-1.5 text-[11px] text-muted-foreground/70">
                  {activity.user && <span className="font-medium text-muted-foreground">{activity.user}</span>}
                  {activity.user && <span>·</span>}
                  <span>{formatDistanceToNow(new Date(activity.timestamp), { addSuffix: true })}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
