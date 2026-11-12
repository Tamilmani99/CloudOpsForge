import { DollarSign, TrendingUp } from "lucide-react";
import { Card } from "../ui/Card";

interface CostCardProps {
  cost: number;
}

export function CostCard({ cost }: CostCardProps) {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">
            Cloud Cost (MTD)
          </p>

          <h3 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            ${cost.toFixed(2)}
          </h3>

          <p className="mt-2 text-xs text-slate-500">
            Month-to-date spending
          </p>
        </div>

        <div className="rounded-xl bg-emerald-50 p-3">
          <DollarSign className="h-6 w-6 text-emerald-600" />
        </div>
      </div>

      <div className="mt-6 flex items-center gap-2 border-t border-slate-100 pt-4">
        <TrendingUp className="h-4 w-4 text-emerald-600" />

        <span className="text-xs font-medium text-slate-600">
          Demo cost data
        </span>
      </div>
    </Card>
  );
}