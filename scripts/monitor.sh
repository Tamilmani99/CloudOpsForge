#!/bin/bash

set -e

echo "================================="
echo " CloudOpsForge Monitoring"
echo "================================="

echo ""
echo "Checking AWS identity..."
aws sts get-caller-identity

echo ""
echo "Checking running EC2 instances..."

aws ec2 describe-instances \
  --filters "Name=instance-state-name,Values=running" \
  --query "Reservations[*].Instances[*].[InstanceId,InstanceType,State.Name,PublicIpAddress]" \
  --output table

echo ""
echo "================================="
echo " Monitoring check completed"
echo "================================="