
.PHONY: test

test:
	mocha --reporter spec

server:
	node src/server.js

mongo:
	mongod run --config mongod.conf

init:
	npm install express
	npm install socket.io
	npm install jqueryify
	npm install should
