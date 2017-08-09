var express = require("express");
var path = require("path");

var app = new express();

app.use(express.static(__dirname + '/src'));

app.get("*",function(req,res){

    res.sendFile(path.join(__dirname+'/src/index.html'));

})

app.listen('9000');
console.log("here we go");