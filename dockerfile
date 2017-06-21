FROM hub.c.163.com/z553992453/nodejs:6.11.0
MAINTAINER zb
RUN git clone https://github.com/zhbo/nodeserver.git
WORKDIR /root/nodeserver/nodejs
ENTRYPOINT ["/usr/local/bin/node", "app.js"]
