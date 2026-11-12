import { Activity, Server, ShieldCheck } from "lucide-react";

import { mockMetrics } from "../data/mockMetrics";

import { SectionHeader } from "../components/layout/SectionHeader";

import { Card } from "../components/ui/Card";

import { CpuGauge } from "../components/dashboard/CpuGauge";
import { MemoryGauge } from "../components/dashboard/MemoryGauge";
import { NetworkCard } from "../components/dashboard/NetworkCard";
import { CostCard } from "../components/dashboard/CostCard";
import { UptimeCard } from "../components/dashboard/UptimeCard";
import { StatusCard } from "../components/dashboard/StatusCard";
import { MetricCard } from "../components/dashboard/MetricCard";

export function Console() {
  const metrics = mockMetrics;

  return (
    <main className="mx-auto min-h-screen max-w-7xl px-6 py-8">

      {/* Dashboard Heading */}
      <SectionHeader
        title="Cloud Infrastructure Overview"
        description="Monitor your cloud infrastructure and resource health."
        action={
          <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-600">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Demo Environment
          </div>
        }
      />

      {/* Overview Metrics */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

        <MetricCard
          title="Infrastructure"
          value="1 Server"
          description="Demo monitored resource"
          icon={<Server className="h-5 w-5" />}
        />

        <MetricCard
          title="System Health"
          value="Operational"
          description="All demo checks passing"
          icon={<ShieldCheck className="h-5 w-5" />}
        />

        <MetricCard
          title="Monitoring"
          value="Active"
          description="Sample monitoring data"
          icon={<Activity className="h-5 w-5" />}
        />

      </div>

      {/* Server Status */}
      <SectionHeader
        title="Server Monitoring"
        description="Current performance and health metrics."
      />

      <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">

        <StatusCard status={metrics.serverStatus} />

        <Card>
          <h3 className="mb-2 text-sm font-semibold text-slate-900">
            CPU Utilization
          </h3>
          <CpuGauge value={metrics.cpuUsage} />
        </Card>

        <Card>
          <h3 className="mb-2 text-sm font-semibold text-slate-900">
            Memory Utilization
          </h3>
          <MemoryGauge value={metrics.memoryUsage} />
        </Card>

      </div>

      {/* Infrastructure Details */}
      <SectionHeader
        title="Infrastructure Details"
        description="Uptime, network activity, and estimated cloud spending."
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

        <UptimeCard uptime={metrics.uptime} />

        <NetworkCard
          networkIn={metrics.networkIn}
          networkOut={metrics.networkOut}
        />

        <CostCard cost={metrics.costMTD} />

      </div>

      <p className="mt-8 text-center text-xs text-slate-400">
        CloudOpsForge · Sample dashboard data · Not connected to AWS yet
      </p>

    </main>
  );
}