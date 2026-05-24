const express = require('express');
const httpProxy = require('http-proxy-middleware');

const app = express();

const servers = [
    'http://localhost:3001',
    'http://localhost:3002'
];

let current = 0;

app.use((req, res, next) => {

    const target = servers[current];

    console.log(`Forwarding request to ${target}`);

    current++;

    if (current >= servers.length) {
        current = 0;
    }

    const proxy = httpProxy.createProxyMiddleware({
        target: target,
        changeOrigin: true
    });

    proxy(req, res, next);
});

app.listen(8000, () => {
    console.log('Load Balancer running on port 8000');
});