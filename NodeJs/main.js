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

const Addmatch = e => {
  e.preventDefault()
  if (OnInput()) {
    // Lưu sản phẩm
    const nameTournament = $('#name-tournament').value
    const teamOne = $('#name-team-one').value
    const teamTwo = $('#name-team-two').value
    const link = $('#url-link').value
    const myObject = {
      nameTournament,
      teamOne,
      teamTwo,
      link
    }

    // const fileSystem = require('@supercharge/framework/filesystem')
    // const { fileSystem } = require('fs/promises')
    // const { fileSystem } = require('fs')
    //const fileSystem = require('fs')

    // Requiring fs module
    const fileSystem = require('fs')

    // Storing the JSON format data in myObject
    var data = fileSystem.readFileSync('../Public/Data/datamatch.json', 'utf8')
    //var myObject = JSON.parse(data)

    // Adding the new data to our object
    myObject.push({
      id: 4,
      name: 'V.League 1',
      TeamOne: 'HAGL',
      TeamTwo: 'Nam Định FC',
      Link: ''
    })

    // Writing to our JSON file
    var newData2 = JSON.stringify(myObject)
    fileSystem.writeFile('../Public/Data/datamatch.json', newData2, err => {
      // Error checking
      if (err) throw err
      console.log('New data added')
    })

    alert('Đã thêm trận đấu vào danh sách !')
    restInput()
  }
}

// Reset Form

$('.form-submit').onclick = Addmatch
const restInput = () => {
  $('#name-tournament').value = ''
  $('#name-team-one').value = ''
  $('#name-team-two').value = ''
  $('#url-link').value = ''
}
