#!/bin/bash

set -e

echo "================================="
echo " CloudOps Lite Infrastructure"
echo " Cleanup"
echo "================================="

echo ""
echo "Terraform resources that would be destroyed:"
terraform plan -destroy

echo ""
echo "No resources were destroyed."
echo "Review the plan and run 'terraform destroy' manually"
echo "when you are ready to remove AWS infrastructure."