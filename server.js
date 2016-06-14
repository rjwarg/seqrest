/**
 * Created by richardwarg on 5/31/2016.
 */
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

mongoose.connect('mongodb://localhost/rest_test');

var app = express();
app.use(bodyParser.urlencoded({ extended:true}));
app.use(bodyParser.json());


//routes
app.use('/api', require('./routes/api'));

app.get('/', function(req,res){
    res.send("It's working");
});

app.listen(4000);
console.log('Listening on port 4000');