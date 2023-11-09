require('dotenv').config();


const express = require('express')
const path = require('path');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');

// get the client

const mysql = require('mysql2');

const app = express()
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

console.log(">>> check env: ", process.env);

// config template engine
configViewEngine(app);

// khai báo route

app.use('/',webRoutes);

// test connection

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'hoidanit'
});

// Simple query

// simple query
connection.query(
  'SELECT * FROM users',
  function(err, results, fields) {
    console.log(">>> results= ", results); // results contains rows returned by server
    console.log(">>> fields= ", fields); // fields contains extra meta data about results, if available
  }
);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})