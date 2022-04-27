const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    const { method, path } = req;
    console.log(method, path);
    return res.status(200).json({ message: 'The server is up and running' });
});

app.get('/users', (req, res) => {
    const { method, path } = req;
    console.log(method, path);
    return res.status(200).json({ users: [{'name': 'X'}, {'name': 'y'}] });
});

const server = app.listen(port, () => {
    console.log(`The server is up and running on ${port}`);
});

module.exports = server;