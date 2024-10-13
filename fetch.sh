#!/bin/sh
set -e

RUN="npm run --prefix scripts"

# Start the proxy in the background
nohup $RUN start-proxy &

# Wait for 10 seconds
sleep 10

# Fetch the data
$RUN fetch