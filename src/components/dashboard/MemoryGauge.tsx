interface MemoryGaugeProps {
  value: number;
}

export function MemoryGauge({ value }: MemoryGaugeProps) {
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const progress = (value / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative h-32 w-32">
        <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="#e2e8f0"
            strokeWidth="9"
            fill="none"
          />

          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="#6366f1"
            strokeWidth="9"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={`${progress} ${circumference}`}
          />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-slate-900">
            {value}%
          </span>
          <span className="text-xs text-slate-500">Memory Usage</span>
        </div>
      </div>

      <span className="mt-2 text-xs font-medium text-indigo-600">
        Memory utilization
      </span>
    </div>
  );
}