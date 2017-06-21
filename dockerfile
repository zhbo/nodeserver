FROM hub.c.163.com/z553992453/nginx_node:latest 
MAINTAINER zb
WORKDIR /root/elb-test-server
ENTRYPOINT ["/usr/sbin/node", "app.js"]
