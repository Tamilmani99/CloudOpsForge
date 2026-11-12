import type { SystemMetrics } from "../types/metrics";

export const mockMetrics: SystemMetrics = {
  serverStatus: "healthy",
  cpuUsage: 34,
  memoryUsage: 62,
  uptime: "14d 06h 32m",
  networkIn: "128.4 MB",
  networkOut: "86.2 MB",
  costMTD: 12.48,
};