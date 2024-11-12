const express = require('express');
const cors = require('cors');
const fs = require('fs');
const dotenv = require('dotenv');
const { createProxyMiddleware } = require('http-proxy-middleware');

dotenv.config();

const app = express();
app.use(cors({ origin: '*' }));

// Initial target server URL from .env
let targetUrl = process.env['TARGET'];
const PORT = process.env['PORT'] || 8080;

if (!targetUrl) throw new Error('No target URL provided');

// Define the `/update-ddns` route specifically so it’s excluded from proxying
app.get('/update-ddns', (req, res) => {
  const clientIp = req.query.ip || req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  targetUrl = `http://${clientIp}`;

  // Write changes to .env
  fs.writeFileSync('.env', `TARGET=${targetUrl}\nPORT=${PORT}\n`);
  dotenv.config();

  console.log('Updated target URL to:', targetUrl);
  res.send('OK');
});

// Dynamically create proxy middleware for each request
app.use((req, res, next) => {
  if (req.path === '/update-ddns') {
    // Skip proxy for the `/update-ddns` route
    return next();
  }

  // Create proxy middleware with the current `targetUrl`
  createProxyMiddleware({
    target: targetUrl,
    changeOrigin: true,
    secure: false,
    pathRewrite: (path, req) => path, // Keeps the original path unchanged
    onProxyReq: (proxyReq, req, res) => {
      const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
      proxyReq.setHeader('X-Forwarded-For', clientIp);
      proxyReq.setHeader('Host', req.headers.host);
      if (req.headers.origin) {
        proxyReq.setHeader('Origin', req.headers.origin);
      }
    },
    preserveHeaderKeyCase: true,
  })(req, res, next); // Call the middleware immediately
});

app.listen(PORT, () => {
  console.log('Initial target URL:', targetUrl);
  console.log(`Proxy server running on http://localhost:${PORT}`);
});
