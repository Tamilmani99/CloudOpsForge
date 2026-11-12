import { ArrowDownToLine, ArrowUpFromLine } from "lucide-react";
import { Card } from "../ui/Card";

interface NetworkCardProps {
  networkIn: string;
  networkOut: string;
}

export function NetworkCard({
  networkIn,
  networkOut,
}: NetworkCardProps) {
  return (
    <Card>
      <h3 className="text-sm font-semibold text-slate-900">
        Network Traffic
      </h3>

      <p className="mt-1 text-xs text-slate-500">
        Incoming and outgoing traffic
      </p>

      <div className="mt-6 space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-emerald-50 p-2">
              <ArrowDownToLine className="h-5 w-5 text-emerald-600" />
            </div>

            <div>
              <p className="text-xs text-slate-500">Network In</p>
              <p className="text-lg font-semibold text-slate-900">
                {networkIn}
              </p>
            </div>
          </div>

          <span className="text-xs text-emerald-600">Inbound</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-blue-50 p-2">
              <ArrowUpFromLine className="h-5 w-5 text-blue-600" />
            </div>

            <div>
              <p className="text-xs text-slate-500">Network Out</p>
              <p className="text-lg font-semibold text-slate-900">
                {networkOut}
              </p>
            </div>
          </div>

          <span className="text-xs text-blue-600">Outbound</span>
        </div>
      </div>
    </Card>
  );
}