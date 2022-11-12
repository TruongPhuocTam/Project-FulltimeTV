"use strict";

var express = require('express');

var port = process.env.PORT || 3000;
var app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(express["static"]('../Project-FulltimeTV')); //

app.get('/main', function (req, res) {
  res.sendFile(__dirname + '/Admin/index.html');
});
app.get('/index', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});
app.post('/mainPost', function (req, res) {
  console.log(req.body);
});
app.listen(port, function () {
  console.log('Server started at http://localhost:' + port);
});