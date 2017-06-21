FROM hub.c.163.com/z553992453/nodejs:6.11.0
MAINTAINER zb
WORKDIR /root/elb-test-server
ENTRYPOINT ["/usr/local/bin/node", "app.js"]
