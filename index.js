const express = require('express');
const http = require('http');
const app = express();
const hostname ='127.0.0.1'
const port = 3000;
const fs = require('fs'); 


app.get('/', function(req, res) {
  res.sendFile(__dirname + '/Main');
});

app.use(express.static('Main'));


/*const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type',"text/index.html");
    res.end('ola');
});*/

app.listen(port,hostname,()=>{
    console.log("server operacional!");
});
