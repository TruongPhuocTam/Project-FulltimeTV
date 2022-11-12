"use strict";

var express = require('express');

var http = require('http');

var app = express();

var cors = require('cors');

var data = require('./public/data/datamatch.json');

var server = http.createServer(app);
var port = process.env.PORT || 3000;

var fileSystem = require('fs');

app.use(express["static"]('./Public'));
app.use(express.json());
app.use(express.urlencoded());
app.get('/', function _callee(req, res, next) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          res.sendFile(__dirname + '/admin/index.html');

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
});
app.post('/', function (req, res, next) {
  // Storing the JSON format data in myObject
  var myObject = JSON.parse(fileSystem.readFileSync('./public/data/datamatch.json', 'utf8')); // Adding the new data to our object

  myObject.push({
    id: req.body.id,
    name: req.body.tournament,
    TeamOne: req.body.teamone,
    TeamTwo: req.body.teamtwo,
    Link: req.body.link
  });
  console.log(myObject); // Writing to our JSON file

  var newData = JSON.stringify(myObject);
  fileSystem.writeFile('./public/data/datamatch.json', newData, function (err) {
    // Error checking
    if (err) throw console.log('New data added');else {
      res.redirect('/');
    }
  });
});
server.listen(port, function () {
  console.log('Server started at http://localhost:' + port);
});