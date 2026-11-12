import { Clock } from "lucide-react";
import { Card } from "../ui/Card";

interface UptimeCardProps {
  uptime: string;
}

export function UptimeCard({ uptime }: UptimeCardProps) {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">
            Server Uptime
          </p>

          <h3 className="mt-3 text-2xl font-bold text-slate-900">
            {uptime}
          </h3>

          <p className="mt-2 text-xs text-slate-500">
            Continuous running time
          </p>
        </div>

        <div className="rounded-xl bg-blue-50 p-3">
          <Clock className="h-6 w-6 text-blue-600" />
        </div>
      </div>

      <div className="mt-6 border-t border-slate-100 pt-4">
        <span className="text-xs font-medium text-emerald-600">
          Demo uptime data
        </span>
      </div>
    </Card>
  );
}