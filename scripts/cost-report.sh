#!/bin/bash

set -e

echo "================================="
echo " CloudOps Lite Cost Report"
echo "================================="

echo ""
echo "AWS Cost Explorer query"
echo "Current month estimated cost:"
echo ""

aws ce get-cost-and-usage \
  --time-period Start=$(date -u +%Y-%m-01),End=$(date -u -d "+1 month" +%Y-%m-01) \
  --granularity MONTHLY \
  --metrics "UnblendedCost" \
  --query "ResultsByTime[*].Total.UnblendedCost.Amount" \
  --output table

echo ""
echo "================================="
echo " Cost report completed"
echo "================================="