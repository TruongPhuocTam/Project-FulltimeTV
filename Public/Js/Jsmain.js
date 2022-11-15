const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)


const formElement = $('#manage-form')
// Xử ký Form
const inputElements = $$('.form-input')
const OnInput = () => {
  let isValid = true
  inputElements.forEach(input => {
    const formGroup = input.closest('.form-group')
    if (input.value.trim().length <= 0) {
      formGroup.querySelector(
        '.form-message'
      ).innerText = `Vui lòng nhập trường này !`
      isValid = false
    } else {
      formGroup.querySelector('.form-message').innerText = ``
    }
  })
  return isValid
}
inputElements.forEach(input => {
  input.oninput = OnInput
  input.onblur = OnInput
})

//
const Login = e => {
  e.preventDefault()
  if (OnInput()) {
    //
    const Username = $('#Username').value
    const Password = $('#Password').value

    if (Username === 'tam@gmail.com' && Password === 'tamtruong') {
      alert('Đăng nhập thành công !')
      Redirect()
      restInput()
    } else {
      // restInput()
      alert('Đăng nhập thất bại\nUsername hoặc password sai !!')
    }
  }
}

function Redirect () {
  window.location = '../Admin/index.html'
}
////////////////////////////////////////////////////////////////

// Reset Form
$('.form-submit').onclick = Login
const restInput = () => {
  $('#Username').value = ''
  $('#Password').value = ''
}
