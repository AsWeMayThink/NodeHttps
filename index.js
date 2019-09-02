const express = require('express');
const fs = require('fs');
const http = require('http');
const https = require('https');
const logger = require('morgan');
const path = require('path');

const app = express();

const domain = 'node-https.ga';

// The express.json() line isn't necessary at the moment because we aren't POSTing any
// data to this server, but it will come in handy later if we start using this to build
// an API.
app.use(logger('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Automatic redirection from HTTP to HTTPS.
app.use((req, res, next) => {
  if (req.secure) {
    next();
  } else {
    res.redirect(`https://${req.headers.host}${req.url}`);
  }
});

// Just a stupid example URL. Obviously, your real server would go here.
app.get('/', (req, res) => res.send('It Works!'));

// Create servers.
http.createServer(app).listen(80, () => {
  console.log(`Listening on http://${domain}`);
});

// Create credentials using Let's Encrypt certificate.
const credentials = {
  key: fs.readFileSync(`/etc/letsencrypt/live/${domain}/privkey.pem`, 'utf8'),
  cert: fs.readFileSync(
    `/etc/letsencrypt/live/${domain}/fullchain.pem`,
    'utf8'
  ),
  ca: fs.readFileSync(`/etc/letsencrypt/live/${domain}/chain.pem`, 'utf8')
};
// And use them to instantiate the HTTPS server.
https.createServer(credentials, app).listen(443, () => {
  console.log(`and on https://${domain}`);
});
