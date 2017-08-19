/**
 * Created by melissalopez
 */


var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');


router.use(bodyParser.urlencoded({ extended: true }))
router.use(methodOverride(function(req, res){
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        var method = req.body._method
        delete req.body._method
        return method
    }
}))

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

router.get('/new', function(req, res) {
    res.render('agendas/new', { title: 'Add New agendas' });
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

router.route('/:id')
    .get(function(req, res) {
        mongoose.model('Agendas').findById(req.id, function (err, agendas) {
            if (err) {
                console.log('GET Error: There was a problem retrieving: ' + err);
            } else {
                console.log('GET Retrieving ID: ' + agendas._id);
                res.format({
                    html: function(){
                        res.render('agendas/show', {
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

router.route('/:id/edit')
    .get(function(req, res) {
        mongoose.model('Agendas').findById(req.id, function (err, agendas) {
            if (err) {
                console.log('GET Error: There was a problem retrieving: ' + err);
            } else {
                console.log('GET Retrieving ID: ' + agendas._id);
                res.format({
                    html: function(){
                        res.render('agendas/edit', {
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
    //Delete
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