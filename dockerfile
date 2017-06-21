FROM hub.c.163.com/z553992453/nginx_node:latest 
MAINTAINER zb
WORKDIR /root/nodeserver/nodejs
ENTRYPOINT ["/usr/sbin/node", "app.js"]
