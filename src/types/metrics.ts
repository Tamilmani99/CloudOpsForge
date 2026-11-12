export type ServerStatus = "healthy" | "warning" | "offline";

export interface Metric {
  label: string;
  value: string;
  unit?: string;
  status?: "healthy" | "warning" | "critical";
}

export interface SystemMetrics {
  serverStatus: ServerStatus;
  cpuUsage: number;
  memoryUsage: number;
  uptime: string;
  networkIn: string;
  networkOut: string;
  costMTD: number;
}