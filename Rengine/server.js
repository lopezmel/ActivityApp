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


var activities = express.Router();

activities.use(bodyParser.json());

activities.route('/')
    .all(function(req,res,next) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        next();
    })

    .get(function(req,res,next){
        res.end('All activities are being sent!');
    })

    .post(function(req, res, next){
        res.end('Adding the following activity' + req.body.name + ' with details: ' + req.body.description);
    })

    .delete(function(req, res, next){
        res.end('Deleting all actvities');
    });

activities.route('/:actId')
    .all(function(req,res,next) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        next();
    })

    .get(function(req,res,next){
        res.end('Will get the following activity details: ' + req.params.actId +' to you!');
    })

    .put(function(req, res, next){
        res.write('Updating the followingactiviy ' + req.params.actId + '\n');
        res.end('Will update the activity: ' + req.body.name +
            ' with details: ' + req.body.description);
    })

    .delete(function(req, res, next){
        res.end('Deleting activiity: ' + req.params.actId);
    });

app.use('/act',activities);

var agenda = express.Router();

agenda.use(bodyParser.json());

agenda.route('/')
    .all(function(req,res,next) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        next();
    })

    .get(function(req,res,next){
        res.end('All agendas are being sent!');
    })

// .post(function(req, res, next){
//     res.end('Adding the following activity' + req.body.name + ' with details: ' + req.body.description);
// })
//
// .delete(function(req, res, next){
//     res.end('Deleting all actvities');
// });

agenda.route('/:agendaId')
    .all(function(req,res,next) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        next();
    })

    .get(function(req,res,next){
        res.end('Will get the following activity details: ' + req.params.agendaId +' to you!');
    })

    .put(function(req, res, next){
        res.write('Updating the followingactiviy ' + req.params.agendaId + '\n');
        res.end('Will update the activity: ' + req.body.name +
            ' with details: ' + req.body.description);
    })

    .delete(function(req, res, next){
        res.end('Deleting activiity: ' + req.params.agendaId);
    });

app.use('/agendas', agenda);



// app.use(express.static(__dirname + '/public'));
//
// app.listen(port, hostname, function(){
//     console.log(`Server running at http://${hostname}:${port}/`);
// });

