$RUN = "npm run --prefix scripts"

# Start the proxy in the background
Start-Process -NoNewWindow powershell -ArgumentList "$RUN start-proxy"

# Wait for 10 seconds
Start-Sleep -Seconds 10

# Fetch the data
Invoke-Expression "$RUN fetch"