const express = require('express');

const app = express();

app.get('/', (req, res) => {
    console.log('Request handled by SERVER 1');

    res.setHeader('X-Server', 'SERVER-1');

    res.send('Response from SERVER 1');
});

app.listen(3001, () => {
    console.log('SERVER 1 running on port 3001');
});