const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('This is Evan working with continuous delivery pipeline. Adding some text here to test pipeline'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
