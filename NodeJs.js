const express = require('express')
const http = require('http')
const app = express()
const cors = require('cors')
const data = require('./public/data/datamatch.json')
const server = http.createServer(app)
const port = process.env.PORT || 3000

const fileSystem = require('fs')
const { parse } = require('path')

app.use(express.static('../Project-FulltimeTV'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', async (req, res, next) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/dashboard', async (req, res, next) => {
  res.sendFile(__dirname + '/admin/index.html')
})
app.post('/adddata', (req, res, next) => {
  // Storing the JSON format data in myObject
  var myObject = JSON.parse(
    fileSystem.readFileSync('./public/data/datamatch.json', 'utf8')
  )
  var idOld = myObject.length;
  // Writing to our JSON file
  myObject.push({
    id: idOld,
    name: req.body.tournament,
    TeamOne: req.body.teamone,
    TeamTwo: req.body.teamtwo,
    Link: req.body.link
  })
  if (
    req.body.tournament !== '' &&
    req.body.teamone !== '' &&
    req.body.teamtwo !== '' &&
    req.body.link !== ''
  ) {
    var newData = JSON.stringify(myObject)
    fileSystem.writeFile('./public/data/datamatch.json', newData, err => {
      // Error checking
      if (err) throw console.log('New data added')
      else {
        res.redirect('/dashboard#!/adddatamatch/Add%20Data%20Match')
      }
    })
  } else {
    idOld -= 1
    res.redirect('/dashboard')
  }
})
app.post('/deldata', (req, res, next) => {
  // Storing the JSON format data in myObject
  var myObjnew = JSON.parse(
    fileSystem.readFileSync('./public/data/datamatch.json', 'utf8')
  )
  // lấy id vào mảng
  var myObj = {
    id: req.body.id
  }

  // Chuyển id chuỗi sang id số
  const numberid = Number(myObj.id)
  
  //xóa id
  delete data[numberid]
  myObject = data
  var myObjnew = []
  var x = -1;
  for (i in myObject) {
    myObjnew.push({
      id: x += 1,
      name: myObject[i].name,
      TeamOne: myObject[i].TeamOne,
      TeamTwo: myObject[i].TeamTwo,
      Link: myObject[i].Link,
    })
  }

  var newData = JSON.stringify(myObjnew.filter(item => item !== null))
  fileSystem.writeFile('./public/data/datamatch.json', newData, err => {
    if (err) throw console.log('Delete data success !')
    else {
      res.redirect('/dashboard')
    }
  })
})

server.listen(port, () => {
  console.log('Server started at http://localhost:' + port + '/dashboard')
})
