FROM nginx:latest

COPY nginx.conf /etc/nginx/conf.d/default.conf

# EXPOSE 8080

ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]