/**
Before running:
> npm install ws
Then:
> node server.js
> open http://localhost:8080 in the browser
*/

const http = require('http');
const fs = require('fs');

const ws = new require('ws');

const wss = new ws.Server({ noServer: true });

const clients = new Set();

function isWs(req) {
	return (
		req.url === '/ws' &&
		req.headers.upgrade &&
		req.headers.upgrade.toLowerCase() === 'websocket' &&
		// can be Connection: keep-alive, Upgrade
		req.headers.connection.match(/\bupgrade\b/i)
	);
}
function accept(req, res) {
	if (isWs(req)) {
		wss.on('connection', function connection(ws, req) {
			const ip = req.socket.remoteAddress;
			console.log(ip);
		});
		wss.handleUpgrade(req, req.socket, Buffer.alloc(0), onSocketConnect);
	} else if (req.url === '/') {
		// index.html
		fs.createReadStream('../client/index.html').pipe(res);
	} else {
		// page not found
		res.writeHead(404);
		res.end();
	}
}

function onSocketConnect(ws) {
	clients.add(ws);

	ws.on('message', function(message) {
		log(`message received: ${message}`);

		message = message.slice(0, 50); // max message length will be 50

		for (const client of clients) {
			client.send(message);
		}
	});

	ws.on('close', function() {
		log(`connection closed`);
		clients.delete(ws);
	});
}

let log;
if (!module.parent) {
	log = console.log;
	log('listening to ws:localhost:8080');
	http.createServer(accept).listen(8080);
} else {
	// to embed into javascript.info
	log = function() {};
	// log = console.log;
	exports.accept = accept;
}
