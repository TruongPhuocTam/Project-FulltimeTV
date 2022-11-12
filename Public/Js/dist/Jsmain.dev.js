"use strict";

var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);
var formElement = $('#manage-form-admin'); // Xử ký Form

var inputElements = $$('.form-input');

var OnInputAdmin = function OnInputAdmin() {
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
  input.oninput = OnInputAdmin;
  input.onblur = OnInputAdmin;
}); //

var Login = function Login(e) {
  e.preventDefault();

  if (OnInputAdmin()) {
    // Lưu sản phẩm
    var Username = $('#Username').value;
    var Password = $('#Password').value;

    if (Username === 'tamtruong' && Password === '12345') {
      alert('Đăng nhập thành công !');
      restInput();
      Redirect();
    } else {
      // restInput()
      alert('Đăng nhập thất bại\nUsername hoặc password sai !!');
    }
  }
};

function Redirect() {
  window.location = "../Admin/index.html";
} // Reset Form


$('.form-submit').onclick = Login;

var restInput = function restInput() {
  $('#Username').value = '';
  $('#Password').value = '';
};