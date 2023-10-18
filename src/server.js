const express = require('express')
const path = require('path');
const app = express()
const port = 8000

// config template engine
app.set('views',path.join(__dirname, 'views'));
app.set('view engine','ejs')

// khai báo route

app.get('/info', (req, res) => {
  res.send('Giới thiệu bản thân tôi')
})

app.get('/hoidanit', (req, res) => {
  //res.send('Hello World!')
  res.render('sample.ejs')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})