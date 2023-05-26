import { handler } from "./build/handler.js";
import express from 'express';
import http from 'http';

const app = express();

const httpserver = http.createServer(app);
const PORT = 80;

httpserver.listen(PORT, function() {
    console.log('HTTP Server is running on: http://localhost:%s', PORT);
})

app.get('/healthcheck', (req, res) => {
    res.end('ok');
});

app.use(handler);
