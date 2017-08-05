/**
 * Created by melissalopez
 */

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var hostname = 'localhost';
var port = 3000;

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.all('/activities', function(req,res,next) {
    res.writeHead(200, { 'Content-Type': 'text/plain'}
        next();
});

    app.get('/activities', function(req,res,next){
        res.end('Will send all the dishes to you!');
    });

