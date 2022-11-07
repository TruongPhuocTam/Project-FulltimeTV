"use strict";

var express = require('express');

var router = express.Router(); // Requiring fs module

var fs = require("fs"); // Storing the JSON format data in myObject


var data = fs.readFileSync("data.json");
var myObject = JSON.parse(data); // Defining new data to be added

var newData = {
  country: "England"
}; // Adding the new data to our object

myObject.push(newData); // Writing to our JSON file

var newData2 = JSON.stringify(myObject);
fs.writeFile("data2.json", newData2, function (err) {
  // Error checking
  if (err) throw err;
  console.log("New data added");
});