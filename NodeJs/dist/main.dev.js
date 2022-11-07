"use strict";

var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);
var formElement = $('#manage-form'); // Xử ký Form

var inputElements = $$('.form-input');

var OnInput = function OnInput() {
  var isValid = true;
  inputElements.forEach(function (input) {
    var formGroup = input.closest('.form-group');

    if (input.value.trim().length <= 0) {
      formGroup.querySelector('.form-message').innerText = "Vui l\xF2ng nh\u1EADp tr\u01B0\u1EDDng n\xE0y !";
      isValid = false;
    } else {
      formGroup.querySelector('.form-message').innerText = "";
    }
  });
  return isValid;
};

inputElements.forEach(function (input) {
  input.oninput = OnInput;
  input.onblur = OnInput;
}); //

var Addmatch = function Addmatch(e) {
  e.preventDefault();

  if (OnInput()) {
    // Lưu sản phẩm
    var nameTournament = $('#name-tournament').value;
    var teamOne = $('#name-team-one').value;
    var teamTwo = $('#name-team-two').value;
    var link = $('#url-link').value;
    var myObject = {
      nameTournament: nameTournament,
      teamOne: teamOne,
      teamTwo: teamTwo,
      link: link
    }; // const fileSystem = require('@supercharge/framework/filesystem')
    // const { fileSystem } = require('fs/promises')
    // const { fileSystem } = require('fs')
    //const fileSystem = require('fs')
    // Requiring fs module

    var fileSystem = require('fs'); // Storing the JSON format data in myObject


    var data = fileSystem.readFileSync('../Public/Data/datamatch.json', 'utf8'); //var myObject = JSON.parse(data)
    // Adding the new data to our object

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
    alert('Đã thêm trận đấu vào danh sách !');
    restInput();
  }
}; // Reset Form


$('.form-submit').onclick = Addmatch;

var restInput = function restInput() {
  $('#name-tournament').value = '';
  $('#name-team-one').value = '';
  $('#name-team-two').value = '';
  $('#url-link').value = '';
};