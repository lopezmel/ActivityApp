/**
 * Created by melissalopez
 */

    //1. get a list of activities
    //2. edit and update activity
    //3. create a new activity
    //4. Delete activity
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
//get request to get list of activities
router.route('/')
    .get(function(req, res, next) {
        mongoose.model('Restaurants').find({}, function (err, restaurants) {
            if (err) {
                console.log('Error ' + restaurants._id);
                return console.error(err);
            } else {
                res.format({
                    html: function(){
                        //display title
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
    //following info is displayed in the form to edit and add new
    .post(function(req, res) {
        var name = req.body.name;
        var address = req.body.address;
        var city =  req.body.city;
        var state = req.body.state;
        var zip = req.body.zip;
        var des = req.body.des;
        var rate = req.body.rate;

        //mongoose schemas
        mongoose.model('Restaurants').create({
            name : name,
            address : address,
            city: city,
            state: state,
            zip: zip,
            des: des,
            rate: rate

            //post request when a new activity is added
        }, function (err, restaurants) {
            if (err) {
                res.send("Error: Did not work!");
            } else {
                console.log('Msg: adding activity' + restaurants);
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

//get request when adding a new activity
router.get('/new', function(req, res) {
    res.render('restaurants/new', { title: 'New Activity' });
});

router.param('id', function(req, res, next, id) {

    mongoose.model('Restaurants').findById(id, function (err, restaurants) {
        if (err) {
            console.log(id + ' Error');
            res.status(404)
            var err = new Error('Fix! 404');
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


//edit activity
router.route('/:id/edit')
    .get(function(req, res) {
        mongoose.model('Restaurants').findById(req.id, function (err, restaurants) {
            if (err) {
                console.log('Error' + err);
            } else {
                console.log('Success' + restaurants._id);

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

    ///delete actiivty
    .delete(function (req, res){
        mongoose.model('Restaurants').findById(req.id, function (err, restaurants) {
            if (err) {
                return console.error(err);
            } else {
                restaurants.remove(function (err, restaurants) {
                    if (err) {
                        console.log('Error' + restaurants._id);
                        return console.error(err);
                    } else {
                        console.log('Success ' + restaurants._id);
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
    })

    //PUT to update actiivty
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
                    res.send("Error" + err);
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
    });

//show activity details
router.route('/:id')
    .get(function(req, res) {
        mongoose.model('Restaurants').findById(req.id, function (err, restaurants) {
            if (err) {
                console.log('Error: Fix!' + err);
            } else {
                console.log('Success ' + restaurants._id);
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



module.exports = router;