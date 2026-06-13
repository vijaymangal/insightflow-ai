"use client";

import { formatDistanceToNow } from "date-fns";
import type { Activity } from "@/types";

interface ActivityFeedProps {
  activities: Activity[];
}

export function ActivityFeed({ activities }: ActivityFeedProps) {
  return (
    <div className="surface-card overflow-hidden">
      <div className="border-b border-border px-4 py-3.5 lg:px-5">
        <h3 className="text-[13px] font-medium">Activity</h3>
      </div>
      <div className="divide-y divide-border">
        {activities.map((activity) => (
          <div key={activity.id} className="row-hover px-4 py-3 lg:px-5">
            <p className="text-[13px]">{activity.title}</p>
            <p className="mt-0.5 text-[12px] text-muted-foreground">{activity.description}</p>
            <p className="mt-1 text-[11px] text-muted-foreground">
              {[activity.user, formatDistanceToNow(new Date(activity.timestamp), { addSuffix: true })]
                .filter(Boolean)
                .join(" · ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
