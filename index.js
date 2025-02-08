const express = require('express');
const cors = require('cors');
const fs = require('fs');
const dotenv = require('dotenv');
const { createProxyMiddleware } = require('http-proxy-middleware');

let clientIp = '';

dotenv.config();

const app = express();

// Initial target server URL from .env
let targetUrl = process.env['TARGET'];
const PORT = process.env['PORT'] || 8080;

if (!targetUrl) throw new Error('No target URL provided');

function filterIP(ip) {
  return ip.split(',')[0];
}

// ✅ Define proxy once, outside of request handlers
const proxy = createProxyMiddleware({
  target: targetUrl,
  changeOrigin: true,
  secure: false,
  logLevel: 'debug', // Enable debugging logs
  preserveHeaderKeyCase: true,
  on: {

  	error: (err, req, res) => {
	      console.error(`[Proxy] Error in proxying request to ${targetUrl}:`, err.message);
	      res.status(500).send(`Proxy Error: ${err.message}`);
	    },
  
  	proxyReq: (proxyReq, req, res) => {
	      const clientIp = filterIP(req.headers['x-forwarded-for'] || req.connection.remoteAddress);
	      
	      // Store original host in a custom header
	      const originalHost = req.headers.host;
		  const customHost   = req.headers['x-passed-host'];

		  if (customHost) {
		  	proxyReq.setHeader('X-Passed-Host', customHost); 
	      	proxyReq.setHeader('Host', customHost);
		  	
		  	console.log("Passed CUSTOM Host: ", customHost);
		  } else {
		  	proxyReq.setHeader('X-Passed-Host', originalHost); 
	      	proxyReq.setHeader('Host', originalHost);

	      	console.log("Using default host: ", originalHost);
		  }
	    
	      console.log('Real IP:', clientIp);
	      console.log('Original Host:', originalHost);
	    
	      // Optionally, pass X-Forwarded-For as well
	      proxyReq.setHeader('X-Forwarded-For', clientIp);
	    }
	    
	}
});

// ✅ Attach the proxy middleware to all routes (except /update-ddns)
app.use((req, res, next) => {
  if (req.path === '/update-ddns' || req.path === '/_ip') {
    return next(); // Skip proxy for these routes
  }
  proxy(req, res, next);
});

app.use(cors({ origin: '*' }));

// Define the `/update-ddns` route specifically so it’s excluded from proxying
app.get('/update-ddns', (req, res) => {
  clientIp = filterIP(req.query.ip || req.headers['x-forwarded-for'] || req.connection.remoteAddress);

  if (targetUrl !== `http://${clientIp}`) {
  	targetUrl = `http://${clientIp}`;

	// Write changes to .env
	fs.writeFileSync('.env', `TARGET=${targetUrl}\nPORT=${PORT}\n`);
	dotenv.config();

	console.log('Updated target URL to:', targetUrl);
	res.send('OK');	
  }
});

app.get('/_ip', (req, res) => {
  return res.send(clientIp.toString());
});

app.listen(PORT, () => {
  console.log('Initial target URL:', targetUrl);
  console.log(`Proxy server running on http://localhost:${PORT}`);
});
