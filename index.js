const express = require('express');
const cors = require('cors');

const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use(cors({ origin: '*' }));

// Target server URL (your actual HTTP target)
const targetUrl = process.env['TARGET'];

if (!targetUrl) throw new Error('No target URL provided');

// Proxy middleware to forward all requests, including paths and query strings
app.use(
  '/', // Forward all routes
  createProxyMiddleware({
    target: targetUrl,
    changeOrigin: true,  // Modify the origin to match the target
    secure: false,       // Set to false since the target is HTTP, not HTTPS

    // Preserve the full original path and query string
    pathRewrite: (path, req) => {
      // Ensure the exact path and query string are sent to the target server
      return path; // Keeps the original path unchanged
    },

    // Add headers for forwarding client information
    onProxyReq: (proxyReq, req, res) => {
      const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
      proxyReq.setHeader('X-Forwarded-For', clientIp);

      // Forward original Host
      proxyReq.setHeader('Host', req.headers.host);

      // Forward Origin header if available
      if (req.headers.origin) {
        proxyReq.setHeader('Origin', req.headers.origin);
      }
    },

    preserveHeaderKeyCase: true, // Preserve the case of header keys
  })
);

// Start the HTTP server
const PORT = process.env['PORT'] || 8080;

app.listen(PORT, () => {
  console.log('Endpoint: ' + targetUrl);
  console.log(`Proxy server running on http://localhost:${PORT}`);
});
