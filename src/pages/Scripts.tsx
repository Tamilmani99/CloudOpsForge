import {
  Terminal,
  Activity,
  DollarSign,
  Power,
  FileText,
  Trash2,
} from "lucide-react";

const scripts = [
  {
    name: "deploy.sh",
    description: "Deploy CloudOpsForge infrastructure using Terraform.",
    command: "./deploy.sh",
    icon: Terminal,
  },
  {
    name: "monitor.sh",
    description: "Check infrastructure health and CloudWatch metrics.",
    command: "./monitor.sh",
    icon: Activity,
  },
  {
    name: "cost-report.sh",
    description: "Generate a summary of estimated AWS spending.",
    command: "./cost-report.sh",
    icon: DollarSign,
  },
  {
    name: "shutdown-idle.sh",
    description: "Identify and stop selected idle development resources.",
    command: "./shutdown-idle.sh",
    icon: Power,
  },
  {
    name: "report.sh",
    description: "Generate an infrastructure status report.",
    command: "./report.sh",
    icon: FileText,
  },
  {
    name: "destroy.sh",
    description: "Safely remove Terraform-managed demo infrastructure.",
    command: "./destroy.sh",
    icon: Trash2,
  },
];

export function Scripts() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-10">

      {/* Header */}
      <div className="mb-10">
        <span className="text-sm font-medium text-emerald-600">
          AUTOMATION
        </span>

        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          Bash & AWS CLI Scripts
        </h1>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
          Automation scripts for deployment, monitoring, reporting and
          infrastructure operations.
        </p>
      </div>

      {/* Script Cards */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

        {scripts.map((script) => {
          const Icon = script.icon;

          return (
            <div
              key={script.name}
              className="
                rounded-2xl
                border border-slate-200
                bg-white
                p-6
                shadow-sm
                transition-all duration-300
                hover:-translate-y-1
                hover:scale-[1.02]
                hover:shadow-lg
              "
            >
              <div className="flex items-start justify-between">

                <div className="rounded-xl bg-slate-100 p-3">
                  <Icon className="h-5 w-5 text-slate-700" />
                </div>

                <span
                  className="
                    rounded-full
                    bg-emerald-50
                    px-2.5 py-1
                    text-xs font-medium
                    text-emerald-700
                  "
                >
                  Bash
                </span>

              </div>

              <h2 className="mt-5 font-mono text-sm font-semibold text-slate-900">
                {script.name}
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {script.description}
              </p>

              <div className="mt-5 rounded-lg bg-slate-900 px-4 py-3">
                <code className="text-xs text-emerald-400">
                  $ {script.command}
                </code>
              </div>

            </div>
          );
        })}

      </div>

      {/* Automation Flow */}
      <div className="
        mt-10
        rounded-2xl
        border border-slate-200
        bg-white
        p-6
        shadow-sm
      ">
        <h2 className="text-sm font-semibold text-slate-900">
          Automation Workflow
        </h2>

        <div className="mt-5 flex flex-wrap items-center gap-3 text-xs">

          {["Bash", "AWS CLI", "Terraform", "AWS", "CloudWatch"].map(
            (item, index) => (
              <div key={item} className="flex items-center gap-3">
                <span className="
                  rounded-lg
                  bg-slate-100
                  px-4 py-2
                  font-medium
                  text-slate-700
                ">
                  {item}
                </span>

                {index < 4 && (
                  <span className="text-slate-300">→</span>
                )}
              </div>
            )
          )}

        </div>
      </div>

      <p className="mt-8 text-center text-xs text-slate-400">
        CloudOpsForge · Automation scripts · Demo environment
      </p>

    </main>
  );
}