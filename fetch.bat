@echo off
setlocal

set RUN=npm run --prefix scripts

:: Start the proxy in the background
start "" cmd /c "%RUN% start-proxy"

:: Wait for 10 seconds
timeout /t 10 /nobreak >nul

:: Fetch the data
%RUN% fetch