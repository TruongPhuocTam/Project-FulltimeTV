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
    var link = $('#url-link').value; // myObject.push({
    //   nameTournament,
    //   teamOne,
    //   teamTwo,
    //   link
    // })

    var fileSystem = require('browserify-fs');

    var client = {
      id: 2,
      name: 'UEFA Champions League 2022-23',
      TeamOne: 'LIVERPOOL',
      TeamTwo: 'CHELSEA',
      Link: 'https://youtu.be/1vPn_tdyB48'
    };
    var data = JSON.stringify(client);
    fileSystem.writeFile('../Public/Data/datamatch.json', data, function (err) {
      if (err) {
        console.log('Error writing file', err);
      } else {
        console.log('JSON data is written to the file successfully');
      }
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