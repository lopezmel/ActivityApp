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
//making get request
    .get(function(req, res, next) {
        mongoose.model('Restaurants').find({}, function (err, restaurants) {
            if (err) {
                return console.error(err);
            } else {
                res.format({
                    html: function(){
                        res.render('restaurants/index', {
                            title: 'All my Restaurants',
                            "restaurants" : restaurants
                        });
                    },
                    json: function(){
                        res.json(restaurants);
                    }
                });
            }
        });
    })

    //making post request
    .post(function(req, res) {
        var name = req.body.name;
        var address = req.body.address;
        var city =  req.body.city;
        var state = req.body.state;
        var zip = req.body.zip;
        var des = req.body.des;
        var rate = req.body.rate;

        mongoose.model('Restaurants').create({
            name : name,
            address : address,
            city: city,
            state: state,
            zip: zip,
            des: des,
            rate: rate

        }, function (err, restaurants) {
            if (err) {
                res.send("There was a problem adding the information to the database.");
            } else {
                console.log('POST creating new restaurants: ' + restaurants);
                res.format({
                    html: function(){
                        res.location("restaurants");
                        res.redirect("/restaurants");
                    },
                    json: function(){
                        res.json(restaurants);
                    }
                });
            }
        })
    });

router.get('/new', function(req, res) {
    res.render('restaurants/new', { title: 'Add New restaurants' });
});

router.param('id', function(req, res, next, id) {

    mongoose.model('Restaurants').findById(id, function (err, restaurants) {
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
        mongoose.model('Restaurants').findById(req.id, function (err, restaurants) {
            if (err) {
                console.log('GET Error: There was a problem retrieving: ' + err);
            } else {
                console.log('GET Retrieving ID: ' + restaurants._id);
                res.format({
                    html: function(){
                        res.render('restaurants/show', {
                            "restaurants" : restaurants
                        });
                    },
                    json: function(){
                        res.json(restaurants);
                    }
                });
            }
        });
    });

router.route('/:id/edit')
    .get(function(req, res) {
        mongoose.model('Restaurants').findById(req.id, function (err, restaurants) {
            if (err) {
                console.log('GET Error: There was a problem retrieving: ' + err);
            } else {
                console.log('GET Retrieving ID: ' + restaurants._id);

                res.format({
                    html: function(){
                        res.render('restaurants/edit', {
                            title: 'Restaurants' + restaurants._id,
                            "restaurants" : restaurants
                        });
                    },
                    json: function(){
                        res.json(restaurants);
                    }
                });
            }
        });
    })
    //PUT to update
    .put(function(req, res) {
        var name = req.body.name;
        var address = req.body.address;
        var city =  req.body.city;
        var state = req.body.state;
        var zip = req.body.zip;
        var des = req.body.des;
        var rate = req.body.rate;
        //find by id
        mongoose.model('Restaurants').findById(req.id, function (err, restaurants) {
            //update it
            restaurants.update({
                name : name,
                address : address,
                city: city,
                state: state,
                zip: zip,
                des: des,
                rate: rate

            }, function (err, restaurantsID) {
                if (err) {
                    res.send("There was a problem updating the information to the database: " + err);
                }
                else {
                    res.format({
                        html: function(){
                            res.redirect("/restaurants/" + restaurants._id);
                        },
                        json: function(){
                            res.json(restaurants);
                        }
                    });
                }
            })
        });
    })
    .delete(function (req, res){
        mongoose.model('Restaurants').findById(req.id, function (err, restaurants) {
            if (err) {
                return console.error(err);
            } else {
                restaurants.remove(function (err, restaurants) {
                    if (err) {
                        return console.error(err);
                    } else {
                        console.log('DELETE removing ID: ' + restaurants._id);
                        res.format({
                            html: function(){
                                res.redirect("/restaurants");
                            },
                            json: function(){
                                res.json({message : 'deleted',
                                    item : restaurants
                                });
                            }
                        });
                    }
                });
            }
        });
    });



module.exports = router;