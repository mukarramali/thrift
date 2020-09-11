# Build Images

## SystemB

docker build -t systemb systemb

## SystemA

docker build -t systema systema

## Run docker compose

docker-compose up

## Or run script directly

./start_local.sh

## Demo

###localhost:3000 in browser

# From scratch

1. Write .thrift file for your server. Having all the routes with data types. Like you write docs for APIs.
2. Run thrift command like
   `thrift -r --gen java statistics.thrift`
3. Put the generated files in your project wherever.
4. Import these generated modules in your app server/client file.
