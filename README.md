https://letsencrypt.org/
https://certbot.eff.org/

https://timonweb.com/posts/running-expressjs-server-over-https/ (Self-signed Certificate Example)

Follow certbot instructions 1, 2, and 3.
Substitute something like this for step 4. It will register multiple domains at once via LetsEncrypt.
certbot certonly --standalone -d node-https.ml -d www.node-https.ml

