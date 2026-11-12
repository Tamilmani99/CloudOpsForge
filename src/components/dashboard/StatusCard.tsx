import { Activity, CheckCircle2 } from "lucide-react";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import type { ServerStatus } from "../../types/metrics";

interface StatusCardProps {
  status: ServerStatus;
}

export function StatusCard({ status }: StatusCardProps) {
  const statusConfig = {
    healthy: {
      label: "Healthy",
      variant: "success" as const,
      message: "All systems operational",
    },
    warning: {
      label: "Warning",
      variant: "warning" as const,
      message: "Attention required",
    },
    offline: {
      label: "Offline",
      variant: "danger" as const,
      message: "Server unavailable",
    },
  };

  const config = statusConfig[status];

  return (
    <Card>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">
            Server Status
          </p>

          <div className="mt-3">
            <Badge variant={config.variant}>
              {config.label}
            </Badge>
          </div>

          <p className="mt-3 text-sm text-slate-600">
            {config.message}
          </p>
        </div>

        <div className="rounded-xl bg-emerald-50 p-3">
          {status === "healthy" ? (
            <CheckCircle2 className="h-6 w-6 text-emerald-600" />
          ) : (
            <Activity className="h-6 w-6 text-slate-600" />
          )}
        </div>
      </div>
    </Card>
  );
}