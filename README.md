# Prerequisites

1. You must have a public server. You must. Let's Encrypt is going to verify that the server in question exists and interact with it. To do so, it must be able to see it.

    For the examples in video, I used [Digital Ocean](https://m.do.co/c/aa6133d36219) Note: Full disclosure, the link is my referral link so I could end up getting some credit at DO if you end up using it to sign up.

2. You must have a domain name already in existence and pointing to the IP address of the public server I just mentioned. That is, you must be able to ping it from other machinges (for example, "ping node-https.ga" and "ping www.node-https.ga") and log into it remotely via SSH (for example, "ssh root@node-https.ga).

    For the examples in the video, I used [Freenom](https://my.freenom.com/) to get the domain you saw me use for free for a few months. Since it's just for an example it didn't make sense to pay for one and I even used their DNS to point to a Digital Ocean server I setup.

# Setup

1. Go to the [Certbot](https://certbot.eff.org/) site and you should find a link to the [Instructions](https://certbot.eff.org/instructions) page.
2. It has dropdowns for Software and System. You will want to select "None of the above" for Software and System should reflect what you picked for an OS on your box. I used Ubuntu 18.04 LTS in my video.
3. Scroll down the page and you'll see instructions from them on installing Certbot onto your machine. Follow steps 1, 2, 3, and 4.
4. Now we need to get Node.js, NPM, and a Node.js app onto the machine to try out our newly acquired certificate.
    - apt install node npm
    - npm install -g forever
    - get the code you need to run onto the server
    - npm install
    - forever start index.js

# Links

- [Let's Encrypt](https://letsencrypt.org/)
- [Certbot](https://certbot.eff.org/)

- [Self-signed Certificate Example](https://timonweb.com/posts/running-expressjs-server-over-https/)
