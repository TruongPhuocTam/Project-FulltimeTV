"use strict";

var fileSystem = require("fs"); // Requiring fs module
// const fileSystem = require("fs")
// Storing the JSON format data in myObject


var data = fileSystem.readFileSync('../Public/Data/datamatch.json', 'utf8');
var myObject = JSON.parse(data); // Adding the new data to our object

myObject.push({
  id: 4,
  name: 'V.League 1',
  TeamOne: 'HAGL',
  TeamTwo: 'Nam Định FC',
  Link: ''
}); // Writing to our JSON file

var newData2 = JSON.stringify(myObject);
fileSystem.writeFile('../Public/Data/datamatch.json', newData2, function (err) {
  // Error checking
  if (err) throw err;
  console.log('New data added');
});