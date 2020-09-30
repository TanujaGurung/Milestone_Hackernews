const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = process.env.PORT || 3000
//const bodyParser = require("body-parser")
//app.use(bodyParser.urlencoded({ extended: true }));
//const url = 'mongodb://127.0.0.1/Newsdb'
 app.get('/', function (req, res) {
  res.send('Hello World')
}) 
 mongoose.connect('mongodb://localhost/Newsdb',{useNewUrlParser:true}).then(() => {
  console.log("Connected to Database");
  }).catch((err) => {
      console.log("Not Connected to Databaspe ERROR! ", err);
    });
    app.use(express.json()); // using middlewire to accept json data

 const newsRouter = require('./routs/news');
 app.use('/news',newsRouter);
 
app.listen(port, () => {
  console.log("server is running on port no " + port);
})