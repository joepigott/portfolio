// this was stolen from stackoverflow, i don't know anything about http

import { handler } from "./build/handler.js";
import express from 'express';
import fs from 'fs';
// import http from 'http';
import https from 'https';

const private_key = fs.readFileSync('hidden', 'utf8');
const certificate = fs.readFileSync('hidden', 'utf8');

const credentials = { key: private_key, cert: certificate };

const app = express();

// const http_server = http.createServer(app);
const https_server = https.createServer(credentials, app);

// const PORT = 80;
const SSL_PORT = 443;

// httpserver.listen(PORT, function() {
//     console.log('HTTP Server is running on: http://localhost:%s', PORT);
// })

https_server.listen(SSL_PORT, function() {
    console.log('HTTPS Server is running on: https://localhost:%s', SSL_PORT);
});

app.get('/healthcheck', (_, res) => {
    res.end('ok');
});

app.use(handler);
