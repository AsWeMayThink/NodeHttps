const fs = require('fs');
const http = require('http');
const https = require('https');
const express = require('express');

const app = express();

// Certificate
const domain = 'node-https.ml';

const credentials = {
  key: fs.readFileSync(`/etc/letsencrypt/live/${domain}/privkey.pem`, 'utf8'),
  cert: fs.readFileSync(
    `/etc/letsencrypt/live/${domain}/fullchain.pem`,
    'utf8'
  ),
  ca: fs.readFileSync(`/etc/letsencrypt/live/${domain}/chain.pem`, 'utf8')
};

app.use((req, res) => {
  res.send('It works!');
});

// Create servers.
http.createServer(app).listen(80, () => {
  console.log('HTTP Server running on port 80');
});

https.createServer(credentials, app).listen(443, () => {
  console.log('HTTPS Server running on port 443');
});
