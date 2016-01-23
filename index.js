var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('hatfat express?!');
});

app.get('/test', function (req, res) {
  res.send('hatfat TEST');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
