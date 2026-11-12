import {
  CheckCircle2,
  Circle,
  Cloud,
  ShieldCheck,
  GitBranch,
  Activity,
  Terminal,
} from "lucide-react";

const roadmap = [
  {
    phase: "Phase 1",
    title: "Frontend Foundation",
    description:
      "Build the CloudOpsForge dashboard and operational interface.",
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
    <main
  className="
    min-h-screen
    bg-slate-50
    bg-[radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.06)_1px,transparent_0)]
    [background-size:24px_24px]
    px-6 py-12
  "
>
      <div className="mx-auto max-w-7xl">

      <div className="mb-10">
        <span className="text-sm font-medium text-emerald-600">
          PROJECT ROADMAP
        </span>

        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          CloudOpsForge Roadmap
        </h1>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
          The planned evolution from a cloud operations dashboard
          into an automated AWS infrastructure platform.
        </p>
      </div>

            <div className="mb-10 grid gap-6 lg:grid-cols-[1fr_1.1fr]">

        <div className="flex flex-col justify-center">
          <span className="text-sm font-medium text-emerald-600">
            LIVE OPERATIONS
          </span>

          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
            Cloud Infrastructure
            <br />
            Deployment Console
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
            Monitor deployment activity, infrastructure validation and
            operational health from a single command-line inspired interface.
          </p>
        </div>

        <div
         className="
          group
          overflow-hidden
          rounded-2xl
          bg-slate-950
          shadow-xl
          transition-all duration-300 ease-out
          hover:scale-[1.03]
          hover:-translate-y-1
          hover:shadow-2xl
        "
>

          <div className="flex items-center gap-2 border-b border-slate-800 px-5 py-3">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-amber-400" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />

            <div className="ml-3 flex items-center gap-2 text-xs text-slate-400">
              <Terminal className="h-3.5 w-3.5" />
              cloudops@aws-console: ~/cloudOps-forge
            </div>

            <span className="ml-auto text-xs font-medium text-emerald-400">
              ● LIVE
            </span>
          </div>

          <div className="space-y-2 p-5 font-mono text-xs leading-6">

            <p className="text-slate-500">
              [10:42:01] $ ./deploy.sh
            </p>

            <p className="text-cyan-400">
              [10:42:02] → terraform fmt ................. OK
            </p>

            <p className="text-cyan-400">
              [10:42:03] → terraform validate ........... OK
            </p>

            <p className="text-cyan-400">
              [10:42:05] → terraform plan ............... 11 to add
            </p>

            <p className="text-emerald-400">
              [10:42:18] ✓ VPC configuration ready
            </p>

            <p className="text-emerald-400">
              [10:42:22] ✓ Public subnet ready
            </p>

            <p className="text-emerald-400">
              [10:42:25] ✓ Internet Gateway ready
            </p>

            <p className="text-emerald-400">
              [10:42:33] ✓ Security group ready
            </p>

            <p className="text-emerald-400">
              [10:42:51] ✓ EC2 configuration ready
            </p>

            <p className="text-sky-400">
              [10:43:04] → monitoring health checks...
            </p>

            <p className="text-slate-300">
              [10:43:09] CPU: 31% · MEM: 41% · NET: healthy
            </p>

            <p className="text-emerald-400">
              [10:43:11] ✓ STATUS: ONLINE
            </p>

            <p className="animate-pulse text-emerald-400">
              █
            </p>

          </div>
        </div>
      </div>

      <div className="space-y-4">
        {roadmap.map((item) => {
          const Icon = item.icon;
          const complete = item.status === "Complete";

          return (
             <div
               className="
               group
               rounded-2xl
               border border-slate-200
               bg-white
               p-6
               shadow-sm
              transition-all duration-300 ease-out
              hover:scale-[1.04]
              hover:-translate-y-1
              hover:shadow-2xl
               "
            >
              <div className="flex items-center gap-4 md:w-56">
                <div
                  className={`
                    rounded-xl p-3 transition-all duration-300 group-hover:scale-110 group-hover:shadow-sm
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

                  <h2 className="mt-1 text-sm font-semibold text-slate-900 transition-colors duration-300 group-hover:text-emerald-700">
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
        CloudOpsForge · Project roadmap
      </p>

      </div>
    </main>
  );
}