import {
  Rocket,
  CheckCircle2,
  Clock3,
  AlertCircle,
} from "lucide-react";
import { useState } from "react";

export function Deploy() {
  const [deploying, setDeploying] = useState(false);
  const [deployed, setDeployed] = useState(false);

  function handleDeploy() {
    setDeploying(true);
    setDeployed(false);

    setTimeout(() => {
      setDeploying(false);
      setDeployed(true);
    }, 1800);
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">

      {/* Header */}
      <div className="mb-10">
        <span className="text-sm font-medium text-emerald-600">
          DEPLOYMENT
        </span>

        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          Deploy Infrastructure
        </h1>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
          Manage the CloudOpsForge infrastructure deployment workflow
          using Terraform and AWS automation.
        </p>
      </div>

      {/* Deployment Card */}
      <div className="
        rounded-2xl
        border border-slate-200
        bg-white
        p-8
        shadow-sm
      ">

        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

          <div className="flex items-start gap-4">

            <div className="
              rounded-2xl
              bg-slate-900
              p-4
            ">
              <Rocket className="h-7 w-7 text-white" />
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900">
                Cloud Infrastructure
              </h2>

              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                Deploy the CloudOpsForge infrastructure using the
                configured Terraform workflow.
              </p>
            </div>

          </div>

          <button
            onClick={handleDeploy}
            disabled={deploying}
            className="
              inline-flex items-center justify-center gap-2
              rounded-xl
              bg-slate-900
              px-6 py-3
              text-sm font-semibold text-white
              transition-all duration-300
              hover:-translate-y-1
              hover:scale-105
              hover:bg-slate-700
              hover:shadow-lg
              disabled:cursor-not-allowed
              disabled:opacity-60
            "
          >
            <Rocket className="h-4 w-4" />

            {deploying
              ? "Deploying..."
              : deployed
                ? "Deployment Complete"
                : "Run Deploy"}
          </button>

        </div>

        {/* Status */}
        <div className="mt-8 border-t border-slate-100 pt-6">

          {!deploying && !deployed && (
            <div className="flex items-center gap-3 text-sm text-slate-500">
              <Clock3 className="h-5 w-5" />
              Ready to deploy
            </div>
          )}

          {deploying && (
            <div className="flex items-center gap-3 text-sm text-amber-600">
              <Clock3 className="h-5 w-5 animate-pulse" />
              Terraform deployment in progress...
            </div>
          )}

          {deployed && (
            <div className="flex items-center gap-3 text-sm text-emerald-600">
              <CheckCircle2 className="h-5 w-5" />
              Demo deployment completed successfully.
            </div>
          )}

        </div>

      </div>

      {/* Important Notice */}
      <div className="
        mt-6
        flex items-start gap-3
        rounded-xl
        border border-amber-200
        bg-amber-50
        p-4
      ">
        <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />

        <p className="text-xs leading-5 text-amber-800">
          This button currently demonstrates the deployment workflow
          in the frontend. It does not execute Terraform or create
          AWS resources yet.
        </p>
      </div>

      {/* Deployment Steps */}
      <div className="mt-10">

        <h2 className="text-sm font-semibold text-slate-900">
          Deployment Pipeline
        </h2>

        <div className="mt-5 grid gap-4 md:grid-cols-4">

          {[
            ["01", "Validate", "Check Terraform configuration"],
            ["02", "Plan", "Preview infrastructure changes"],
            ["03", "Apply", "Provision AWS resources"],
            ["04", "Monitor", "Track infrastructure health"],
          ].map(([number, title, description]) => (
            <div
              key={number}
              className="
                rounded-xl
                border border-slate-200
                bg-white
                p-5
                shadow-sm
              "
            >
              <span className="text-xs font-bold text-emerald-600">
                {number}
              </span>

              <h3 className="mt-3 text-sm font-semibold text-slate-900">
                {title}
              </h3>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                {description}
              </p>
            </div>
          ))}

        </div>

      </div>

      <p className="mt-8 text-center text-xs text-slate-400">
        CloudOpsForge · Deployment workflow · Demo environment
      </p>

    </main>
  );
}