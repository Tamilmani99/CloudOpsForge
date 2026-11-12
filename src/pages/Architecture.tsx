import {
  Terminal,
  Boxes,
  Cloud,
  Activity,
  Bell,
  Code2,
} from "lucide-react";

const architecture = [
  {
    title: "Developer",
    description: "Source code and infrastructure changes",
    icon: Code2,
  },
  {
    title: "Bash Scripts",
    description: "AWS CLI automation and operations",
    icon: Terminal,
  },
  {
    title: "Terraform",
    description: "Infrastructure as Code",
    icon: Boxes,
  },
  {
    title: "AWS Infrastructure",
    description: "VPC, EC2, S3 and IAM resources",
    icon: Cloud,
  },
  {
    title: "CloudWatch",
    description: "Infrastructure monitoring and metrics",
    icon: Activity,
  },
  {
    title: "SNS Alerts",
    description: "Operational notifications",
    icon: Bell,
  },
];

export function Architecture() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-10">

      {/* Header */}
      <div className="mb-10">
        <span className="text-sm font-medium text-emerald-600">
          CLOUD ARCHITECTURE
        </span>

        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          CloudOpsForge Architecture
        </h1>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
          A lightweight cloud operations architecture combining
          infrastructure as code, automation, monitoring and AWS services.
        </p>
      </div>

      {/* Architecture Flow */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {architecture.map((item, index) => {
          const Icon = item.icon;

          return (
            <div key={item.title} className="relative">

              <div className="
                rounded-2xl
                border border-slate-200
                bg-white
                p-6
                shadow-sm
                transition-all duration-300
                hover:-translate-y-1
                hover:scale-[1.02]
                hover:shadow-lg
              ">
                <div className="flex items-start justify-between">

                  <div className="rounded-xl bg-slate-100 p-3">
                    <Icon className="h-6 w-6 text-slate-700" />
                  </div>

                  <span className="
                    rounded-full
                    bg-emerald-50
                    px-2.5 py-1
                    text-xs font-medium
                    text-emerald-700
                  ">
                    Step {index + 1}
                  </span>

                </div>

                <h2 className="mt-5 text-lg font-semibold text-slate-900">
                  {item.title}
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {item.description}
                </p>
              </div>

              {/* Arrow */}
              {index < architecture.length - 1 && (
                <div className="
                  absolute -bottom-4 left-1/2 z-10
                  hidden h-8 w-8 -translate-x-1/2
                  items-center justify-center
                  rounded-full border border-slate-200
                  bg-white text-slate-400
                  lg:flex
                ">
                  ↓
                </div>
              )}

            </div>
          );
        })}
      </div>

      {/* Flow Summary */}
      <div className="
        mt-10
        rounded-2xl
        border border-emerald-100
        bg-emerald-50/50
        p-6
      ">
        <h2 className="text-sm font-semibold text-slate-900">
          Deployment & Monitoring Flow
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          Developer changes are managed through GitHub, automated using
          Bash and Terraform, deployed to AWS, and monitored through
          CloudWatch with alerts delivered through SNS.
        </p>
      </div>

      {/* Demo Notice */}
      <p className="mt-8 text-center text-xs text-slate-400">
        CloudOpsForge · Architecture overview · Demo environment
      </p>

    </main>
  );
}