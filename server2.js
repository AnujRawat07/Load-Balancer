const express = require('express');

const app = express();

app.get('/', (req, res) => {
    console.log('Request handled by SERVER 2');

    res.setHeader('X-Server', 'SERVER-2');

    res.send('Response from SERVER 2');
});

app.listen(3002, () => {
    console.log('SERVER 2 running on port 3002');
});