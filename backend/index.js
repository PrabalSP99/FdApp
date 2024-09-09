const express =require('express');
const mongoose = require('mongoose');
const path = require(('path'))
var bodyParser = require('body-parser');
const app= express();
const cors = require('cors')


const port = 5000
app.use(cors(
    {
      origin: "http://localhost:3000",
      methods: ["POST", "GET", "DELETE", "PUT"],
      credentials: true
    }
  ));

app.use(bodyParser.json());
app.use('/', require('./routes/index'));


app.listen(port,(err)=>{
    if(err){
        console.log(`error: ${err}`);
        return;
    }
    console.log(`server running on port : ${port}`)
})







