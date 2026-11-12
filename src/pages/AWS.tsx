import {
  Cloud,
  Server,
  Database,
  ShieldCheck,
  Activity,
  Bell,
} from "lucide-react";

const services = [
  {
    name: "Amazon EC2",
    description: "Compute capacity for application workloads.",
    status: "Planned",
    icon: Server,
  },
  {
    name: "Amazon S3",
    description: "Object storage for static website assets.",
    status: "Planned",
    icon: Database,
  },
  {
    name: "Amazon VPC",
    description: "Isolated network environment for AWS resources.",
    status: "Planned",
    icon: Cloud,
  },
  {
    name: "AWS IAM",
    description: "Identity and access management with least privilege.",
    status: "Planned",
    icon: ShieldCheck,
  },
  {
    name: "Amazon CloudWatch",
    description: "Metrics, logs and infrastructure monitoring.",
    status: "Planned",
    icon: Activity,
  },
  {
    name: "Amazon SNS",
    description: "Notifications for infrastructure alerts.",
    status: "Planned",
    icon: Bell,
  },
];

export function AWS() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-10">

      {/* Header */}
      <div className="mb-10">
        <span className="text-sm font-medium text-emerald-600">
          AWS SERVICES
        </span>

        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          AWS Infrastructure
        </h1>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
          AWS services planned for the CloudOpsForge infrastructure,
          monitoring and deployment workflow.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

        {services.map((service) => {
          const Icon = service.icon;

          return (
            <div
              key={service.name}
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
                  <Icon className="h-6 w-6 text-slate-700" />
                </div>

                <span
                  className="
                    rounded-full
                    bg-amber-50
                    px-2.5 py-1
                    text-xs font-medium
                    text-amber-700
                  "
                >
                  {service.status}
                </span>

              </div>

              <h2 className="mt-5 text-lg font-semibold text-slate-900">
                {service.name}
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {service.description}
              </p>

            </div>
          );
        })}

      </div>

      {/* Architecture Summary */}
      <div
        className="
          mt-10
          rounded-2xl
          border border-slate-200
          bg-white
          p-6
          shadow-sm
        "
      >
        <div className="flex items-start gap-4">

          <div className="rounded-xl bg-emerald-50 p-3">
            <Cloud className="h-6 w-6 text-emerald-600" />
          </div>

          <div>
            <h2 className="text-sm font-semibold text-slate-900">
              AWS Integration Status
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              The current dashboard uses demo data. AWS resources will
              be connected through Terraform, AWS CLI and CloudWatch
              during the infrastructure implementation phase.
            </p>
          </div>

        </div>
      </div>

      <p className="mt-8 text-center text-xs text-slate-400">
        CloudOpsForge · AWS service overview · Demo environment
      </p>

    </main>
  );
}