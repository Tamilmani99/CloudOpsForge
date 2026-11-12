import {
  Boxes,
  FileCode2,
  Network,
  Server,
  ShieldCheck,
  Database,
} from "lucide-react";

const terraformModules = [
  {
    name: "provider.tf",
    description: "AWS provider configuration and region settings.",
    icon: FileCode2,
  },
  {
    name: "vpc.tf",
    description: "VPC, subnets, route tables and networking resources.",
    icon: Network,
  },
  {
    name: "ec2.tf",
    description: "EC2 compute resources and instance configuration.",
    icon: Server,
  },
  {
    name: "s3.tf",
    description: "S3 bucket configuration for application assets.",
    icon: Database,
  },
  {
    name: "iam.tf",
    description: "IAM roles and least-privilege permissions.",
    icon: ShieldCheck,
  },
  {
    name: "cloudwatch.tf",
    description: "Monitoring resources and CloudWatch configuration.",
    icon: Boxes,
  },
];

export function Terraform() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-10">

      {/* Header */}
      <div className="mb-10">
        <span className="text-sm font-medium text-emerald-600">
          INFRASTRUCTURE AS CODE
        </span>

        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          Terraform Infrastructure
        </h1>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
          Infrastructure as Code modules used to define and manage
          CloudOps Lite AWS resources.
        </p>
      </div>

      {/* Terraform Overview */}
      <div className="mb-8 rounded-2xl border border-slate-200 bg-slate-900 p-6 text-white shadow-sm">
        <div className="flex items-start gap-4">

          <div className="rounded-xl bg-white/10 p-3">
            <Boxes className="h-6 w-6 text-emerald-400" />
          </div>

          <div>
            <h2 className="text-lg font-semibold">
              Terraform-managed infrastructure
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-300">
              CloudOps Lite uses Terraform to define AWS infrastructure
              consistently and reproducibly.
            </p>
          </div>

        </div>
      </div>

      {/* Terraform Files */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

        {terraformModules.map((module) => {
          const Icon = module.icon;

          return (
            <div
              key={module.name}
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
              <div className="flex items-center justify-between">

                <div className="rounded-xl bg-emerald-50 p-3">
                  <Icon className="h-5 w-5 text-emerald-600" />
                </div>

                <span className="text-xs font-medium text-slate-400">
                  .tf
                </span>

              </div>

              <h2 className="mt-5 font-mono text-sm font-semibold text-slate-900">
                {module.name}
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {module.description}
              </p>

            </div>
          );
        })}

      </div>

      {/* Workflow */}
      <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

        <h2 className="text-sm font-semibold text-slate-900">
          Terraform Workflow
        </h2>

        <div className="mt-5 grid gap-4 md:grid-cols-4">

          {[
            ["01", "terraform init"],
            ["02", "terraform validate"],
            ["03", "terraform plan"],
            ["04", "terraform apply"],
          ].map(([number, command]) => (
            <div
              key={command}
              className="rounded-xl bg-slate-50 p-4"
            >
              <span className="text-xs font-semibold text-emerald-600">
                {number}
              </span>

              <p className="mt-2 font-mono text-xs text-slate-700">
                {command}
              </p>
            </div>
          ))}

        </div>

      </div>

      <p className="mt-8 text-center text-xs text-slate-400">
        CloudOps Lite · Terraform configuration · Demo environment
      </p>

    </main>
  );
}