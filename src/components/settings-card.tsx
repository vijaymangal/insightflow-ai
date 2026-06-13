import { cn } from "@/lib/utils";

interface SettingsCardProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export function SettingsCard({ title, description, children, className }: SettingsCardProps) {
  return (
    <div className={cn("surface-card overflow-hidden", className)}>
      <div className="border-b border-border px-4 py-3.5 lg:px-5">
        <h3 className="text-[13px] font-medium">{title}</h3>
        {description && <p className="mt-0.5 text-[12px] text-muted-foreground">{description}</p>}
      </div>
      <div className="p-4 lg:p-5">{children}</div>
    </div>
  );
}
