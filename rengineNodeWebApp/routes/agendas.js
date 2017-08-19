/**
 * Created by melissalopez
 */

    //1. get a list agendas
    //2. edit a agenda
    //3. create a new agenda
    //4. delete a agenda
    //TODO: Add activities to agendas

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose'); //for schema
var bodyParser = require('body-parser'); //helper for post
var methodOverride = require('method-override'); //helper for post


router.use(bodyParser.urlencoded({ extended: true }))
router.use(methodOverride(function(req, res){
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        var method = req.body._method
        delete req.body._method
        return method
    }
}))

//get list of agendas
router.route('/')
    .get(function(req, res, next) {
        mongoose.model('Agendas').find({}, function (err, agendas) {
            if (err) {
                return console.error(err);
            } else {
                res.format({
                    html: function(){
                        res.render('agendas/index', {
                            title: 'All my Agendas',
                            "agendas" : agendas
                        });
                    },
                    json: function(){
                        res.json(agendas);
                    }
                });
            }
        });
    })

    //post agenda when created
    .post(function(req, res) {
        var name = req.body.name;
        var description = req.body.description;

        mongoose.model('Agendas').create({
            name : name,
            description : description
        }, function (err, agendas) {
            if (err) {
                res.send("There was a problem adding the information to the database.");
            } else {
                console.log('POST creating new agenda: ' + agendas);
                res.format({
                    html: function(){
                        res.location("agendas");
                        res.redirect("/agendas");
                    },
                    json: function(){
                        res.json(agendas);
                    }
                });
            }
        })
    });

//create a new agenda
router.get('/newAgenda', function(req, res) {
    res.render('agendas/newAgenda', { title: 'Add New agendas' });
});

router.param('id', function(req, res, next, id) {
    mongoose.model('Agendas').findById(id, function (err, agendas) {
        if (err) {
            console.log(id + ' was not found');
            res.status(404)
            var err = new Error('Not Found');
            err.status = 404;
            res.format({
                html: function(){
                    next(err);
                },
                json: function(){
                    res.json({message : err.status  + ' ' + err});
                }
            });
        } else {
            req.id = id;
            next();
        }
    });
});

//show details of agenda
router.route('/:id')
    .get(function(req, res) {
        mongoose.model('Agendas').findById(req.id, function (err, agendas) {
            if (err) {
                console.log('GET Error: There was a problem retrieving: ' + err);
            } else {
                console.log('GET Retrieving ID: ' + agendas._id);
                res.format({
                    html: function(){
                        res.render('agendas/details', {
                            "agendas" : agendas
                        });
                    },
                    json: function(){
                        res.json(agendas);
                    }
                });
            }
        });
    });

//edit a new agenda
router.route('/:id/editActivity')
    .get(function(req, res) {
        mongoose.model('Agendas').findById(req.id, function (err, agendas) {
            if (err) {
                console.log('GET Error: There was a problem retrieving: ' + err);
            } else {
                console.log('GET Retrieving ID: ' + agendas._id);
                res.format({
                    html: function(){
                        res.render('agendas/editActivity', {
                            title: 'Agendas' + agendas._id,
                            "agendas" : agendas
                        });
                    },
                    json: function(){
                        res.json(agendas);
                    }
                });
            }
        });
    })
    .put(function(req, res) {
        var name = req.body.name;
        var description = req.body.description;

        mongoose.model('Agendas').findById(req.id, function (err, agendas) {
            //update it
            agendas.update({
                name : name,
                description : description
            }, function (err, agendasID) {
                if (err) {
                    res.send("There was a problem updating the information to the database: " + err);
                }
                else {
                    res.format({
                        html: function(){
                            res.redirect("/agendas/" + agendas._id);
                        },
                        json: function(){
                            res.json(agendas);
                        }
                    });
                }
            })
        });
    })
    //Delete agenda
    .delete(function (req, res){
        mongoose.model('Agendas').findById(req.id, function (err, agendas) {
            if (err) {
                return console.error(err);
            } else {
                agendas.remove(function (err, agendas) {
                    if (err) {
                        return console.error(err);
                    } else {
                        console.log('DELETE removing ID: ' + agendas._id);
                        res.format({
                            html: function(){
                                res.redirect("/agendas");
                            },
                            json: function(){
                                res.json({message : 'deleted',
                                    item : agendas
                                });
                            }
                        });
                    }
                });
            }
        });
    });



module.exports = router;