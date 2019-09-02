# Prerequisites

1. You must have a public server. You must. Let's Encrypt is going to verify that the server in question exists and interact with it. To do so, it must be able to see it.

For the examples in video, I used [Digital Ocean](https://m.do.co/c/aa6133d36219) Note: Full disclosure, the link is my referral link so I could end up getting some credit at DO if you end up using it to sign up.

2. You must have a domain name already in existence and pointing to the IP address of the public server I just mentioned. That is, you must be able to ping it from other machinges (for example, "ping node-https.ml") and log into it remotely via SSH (for example, "ssh root@node-https.ml).

For the examples in the video, I used [Freenom](https://my.freenom.com/) to get the domain you saw me use for free for a few months. Since it's just for an example it didn't make sense to pay for one and I even used their DNS to point to a Digital Ocean server I setup.

Follow certbot instructions 1, 2, and 3.
Substitute something like this for step 4. It will register multiple domains at once via LetsEncrypt.
certbot certonly --standalone -d node-https.ml -d www.node-https.ml

apt install node
apt install npm

get the code you need to run onto the server
npm install
npm install -g forever
forever start index.js

# Links

https://letsencrypt.org/
https://certbot.eff.org/

https://timonweb.com/posts/running-expressjs-server-over-https/ (Self-signed Certificate Example)
