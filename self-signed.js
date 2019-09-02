// Lifted wholesale from: https://timonweb.com/posts/running-expressjs-server-over-https/
// The problem is, the example generates a self-signed certificate which no browser on
// Earth will accept.
const express = require('express');
const fs = require('fs');
const https = require('https');

let app = express();

app.get('/', function(req, res) {
  res.send('hello world');
});

https
  .createServer(
    {
      key: fs.readFileSync('server.key'),
      cert: fs.readFileSync('server.cert')
    },
    app
  )
  .listen(3000, function() {
    console.log(
      'Example app listening on port 3000! Go to https://localhost:3000/'
    );
  });
