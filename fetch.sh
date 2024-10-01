#!/bin/sh
set -e

RUN="npm run --prefix scripts"
nohup $RUN start-proxy &
sleep 5
$RUN fetch