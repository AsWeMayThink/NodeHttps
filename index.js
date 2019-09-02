const express = require('express');
const fs = require('fs');
const http = require('http');
const https = require('https');
const logger = require('morgan');
const path = require('path');

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

app.use(logger('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'), { dotfiles: 'allow' }));

app.use((req, res, next) => {
  if (req.secure) {
    next();
  } else {
    res.redirect(`https://${req.headers.host}${req.url}`);
  }
});
app.get('/', (req, res) => res.send('It Works!'));

// Create servers.
let httpServer = http.createServer(app);
httpServer.listen(80, () => {
  console.log(`Listening on http://${domain}`);
});

https.createServer(credentials, app).listen(443, () => {
  console.log(`and on https://${domain}`);
});
