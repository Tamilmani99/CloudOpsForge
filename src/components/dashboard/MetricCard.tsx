import type { ReactNode } from "react";
import { Card } from "../ui/Card";

interface MetricCardProps {
  title: string;
  value: string;
  description: string;
  icon: ReactNode;
}

export function MetricCard({
  title,
  value,
  description,
  icon,
}: MetricCardProps) {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-slate-500">
          {title}
        </p>

        <div className="rounded-lg bg-slate-100 p-2 text-slate-600">
          {icon}
        </div>
      </div>

      <h3 className="mt-4 text-2xl font-bold text-slate-900">
        {value}
      </h3>

      <p className="mt-1 text-xs text-slate-500">
        {description}
      </p>
    </Card>
  );
}