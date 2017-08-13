var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
var app = new express();
var mongoose = require("mongoose");
//APP CONFIGURATION
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
//------


//DB conection
mongoose.connect("mongodb://localhost/mydb");

//------Register our ROUTERS

var apiRoutes = require('./app/routes/api')(app, express);
app.use('/api', apiRoutes);

//----------------

app.use(express.static(__dirname + '/src'));

app.get("*",function(req,res){

    res.sendFile(path.join(__dirname+'/src/index.html'));

})

app.listen('9000');
console.log("here we go");