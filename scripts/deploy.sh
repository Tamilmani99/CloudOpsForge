#!/bin/bash

set -e

echo "================================="
echo " CloudOpsForge Deployment"
echo "================================="

echo ""
echo "[1/4] Checking Terraform..."
terraform version

echo ""
echo "[2/4] Initializing Terraform..."
terraform init

echo ""
echo "[3/4] Validating Terraform..."
terraform validate

echo ""
echo "[4/4] Creating deployment plan..."
terraform plan

echo ""
echo "================================="
echo " Deployment plan completed"
echo "================================="
echo "Review the plan before running:"
echo "terraform apply"