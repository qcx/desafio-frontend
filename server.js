const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.static('src'));

app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
  res.render(__dirname + '/public/index.html');
});

app.listen(process.env.PORT || 8080, () => console.log('Listening on port 8080!'));