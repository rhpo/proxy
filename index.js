const express = require('express');
const cors = require('cors');
const fs = require('fs');
const dotenv = require('dotenv');
const { createProxyMiddleware } = require('http-proxy-middleware');

let clientIp = '';

dotenv.config();

const app = express();

// Initial target server URL from .env
let targetUrl = process.env['TARGET'] || 'https://codiha.com';
const PORT = process.env['PORT'] || 8080;

if (!targetUrl) {
	// throw new Error('No target URL provided');

	fs.writeFileSync('.env', `TARGET=${targetUrl}\nPORT=${PORT}\n`);
	dotenv.config();
}

function filterIP(ip) {
  return ip.split(',')[0];
}

// ✅ Attach the proxy middleware to all routes (except /update-ddns)
app.use((req, res, next) => {
	if (req.path === '/update-ddns' || req.path === '/_ip') {
	  return next(); // Skip proxy for these routes
	}

	// Set to true if you need the website to include cookies in the requests sent
	// to the API (e.g. in case you use sessions)
	res.setHeader('Access-Control-Allow-Credentials', true);
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Passed-Host,X-Requested-With,content-type');

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

			const origin = req.get('origin') || req.get('referer'); 
			console.log('Request Origin:', origin);

			const customHost = req.headers['x-passed-host'];
			let originalHost;

			try {
				let url = new URL(origin);
				let hostname = url.hostname;

				originalHost = hostname;
			} catch {
				originalHost = req.headers['host'];
			}
			

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
	res.send(`OK`);	
  }
	else res.send(`ALREADY SET, (current="${targetUrl.split("//")[1]}", passed="${clientIp}")`);	
});

app.get('/_ip', (req, res) => {
  return res.send(clientIp.toString());
});

app.listen(PORT, () => {
  console.log('Initial target URL:', targetUrl);
  console.log(`Proxy server running on http://localhost:${PORT}`);
});
