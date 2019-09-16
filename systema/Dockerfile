FROM node:12
EXPOSE 3000
EXPOSE 8000
COPY . /usr/src/myapp
WORKDIR /usr/src/myapp
COPY ./entrypoint.sh /
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]