const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static('dist'));
app.get('/home', (req, res) => res.sendFile(path.resolve('./dist/index.html')));

app.listen(port, () => console.log(`Listening on port ${port}!`));