import {
  CheckCircle2,
  Circle,
  Cloud,
  ShieldCheck,
  GitBranch,
  Activity,
} from "lucide-react";

const roadmap = [
  {
    phase: "Phase 1",
    title: "Frontend Foundation",
    description:
      "Build the CloudOps Lite dashboard and operational interface.",
    status: "Complete",
    icon: Cloud,
  },
  {
    phase: "Phase 2",
    title: "AWS Infrastructure",
    description:
      "Provision VPC, EC2, S3, IAM and supporting AWS resources.",
    status: "Next",
    icon: Cloud,
  },
  {
    phase: "Phase 3",
    title: "Monitoring",
    description:
      "Connect CloudWatch metrics, health checks and operational alerts.",
    status: "Planned",
    icon: Activity,
  },
  {
    phase: "Phase 4",
    title: "Security",
    description:
      "Apply IAM least privilege, monitoring and security controls.",
    status: "Planned",
    icon: ShieldCheck,
  },
  {
    phase: "Phase 5",
    title: "CI/CD",
    description:
      "Automate validation and infrastructure deployment through GitHub Actions.",
    status: "Planned",
    icon: GitBranch,
  },
];

export function Roadmap() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-10">

      <div className="mb-10">
        <span className="text-sm font-medium text-emerald-600">
          PROJECT ROADMAP
        </span>

        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          CloudOps Lite Roadmap
        </h1>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
          The planned evolution from a cloud operations dashboard
          into an automated AWS infrastructure platform.
        </p>
      </div>

      <div className="space-y-4">
        {roadmap.map((item) => {
          const Icon = item.icon;
          const complete = item.status === "Complete";

          return (
            <div
              key={item.phase}
              className="
                flex flex-col gap-5
                rounded-2xl
                border border-slate-200
                bg-white
                p-6
                shadow-sm
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-lg
                md:flex-row md:items-center
              "
            >
              <div className="flex items-center gap-4 md:w-56">
                <div
                  className={`
                    rounded-xl p-3
                    ${
                      complete
                        ? "bg-emerald-50"
                        : "bg-slate-100"
                    }
                  `}
                >
                  <Icon
                    className={`
                      h-5 w-5
                      ${
                        complete
                          ? "text-emerald-600"
                          : "text-slate-600"
                      }
                    `}
                  />
                </div>

                <div>
                  <p className="text-xs font-medium text-slate-400">
                    {item.phase}
                  </p>

                  <h2 className="mt-1 text-sm font-semibold text-slate-900">
                    {item.title}
                  </h2>
                </div>
              </div>

              <div className="flex-1">
                <p className="text-sm leading-6 text-slate-500">
                  {item.description}
                </p>
              </div>

              <div className="flex items-center gap-2">
                {complete ? (
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                ) : (
                  <Circle className="h-4 w-4 text-slate-300" />
                )}

                <span
                  className={`
                    text-xs font-medium
                    ${
                      complete
                        ? "text-emerald-600"
                        : item.status === "Next"
                          ? "text-amber-600"
                          : "text-slate-400"
                    }
                  `}
                >
                  {item.status}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="
        mt-10
        rounded-2xl
        border border-emerald-100
        bg-emerald-50/50
        p-6
      ">
        <h2 className="text-sm font-semibold text-slate-900">
          Current milestone
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          Frontend foundation complete. The next milestone is
          provisioning the AWS infrastructure and replacing demo
          dashboard values with real cloud metrics.
        </p>
      </div>

      <p className="mt-8 text-center text-xs text-slate-400">
        CloudOps Lite · Project roadmap
      </p>

    </main>
  );
}