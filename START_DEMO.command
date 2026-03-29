#!/bin/bash
# ─────────────────────────────────────────────────────────
#  Knowledge Aging Radar — Demo Launcher
#  Double-click this file on your Mac to start the demo.
# ─────────────────────────────────────────────────────────

# Change to the folder this script lives in
cd "$(dirname "$0")"

echo ""
echo "  ●  Knowledge Aging Radar"
echo "  Starting demo server..."
echo ""

# Kill any previous instances
lsof -ti:7823 | xargs kill -9 2>/dev/null
lsof -ti:7824 | xargs kill -9 2>/dev/null

# Start the CORS proxy on port 7824
python3 -c "
import http.server, urllib.request, json, ssl, sys

class ProxyHandler(http.server.BaseHTTPRequestHandler):
    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type, x-api-key, anthropic-version, anthropic-dangerous-direct-browser-calls')
        self.end_headers()

    def do_POST(self):
        length = int(self.headers.get('Content-Length', 0))
        body = self.rfile.read(length)
        forward_headers = {
            'Content-Type': self.headers.get('Content-Type', 'application/json'),
            'x-api-key': self.headers.get('x-api-key', ''),
            'anthropic-version': self.headers.get('anthropic-version', '2023-06-01'),
            'anthropic-dangerous-direct-browser-calls': 'true'
        }
        try:
            req = urllib.request.Request(
                'https://api.anthropic.com' + self.path,
                data=body,
                headers=forward_headers,
                method='POST'
            )
            ctx = ssl.create_default_context()
            with urllib.request.urlopen(req, context=ctx, timeout=120) as resp:
                data = resp.read()
                self.send_response(resp.status)
                self.send_header('Content-Type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(data)
        except urllib.error.HTTPError as e:
            data = e.read()
            self.send_response(e.code)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(data)
        except Exception as e:
            self.send_response(500)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps({'error': str(e)}).encode())

    def log_message(self, fmt, *args):
        pass  # silent

print('  ●  Proxy running on port 7824', flush=True)
http.server.HTTPServer(('localhost', 7824), ProxyHandler).serve_forever()
" &

PROXY_PID=$!

# Start the file server on port 7823
python3 -m http.server 7823 --bind localhost &>/dev/null &
FILE_PID=$!

sleep 1

echo "  ●  Opening Chrome..."
echo ""
open -a "Google Chrome" "http://localhost:7823/KnowledgeAgingRadar.html"

echo "  ✓  Demo is running at http://localhost:7823/KnowledgeAgingRadar.html"
echo ""
echo "  Press Ctrl+C to stop the server when done."
echo ""

# Keep script alive so servers stay running
trap "kill $PROXY_PID $FILE_PID 2>/dev/null; echo '  Stopped.'; exit" INT TERM
wait
