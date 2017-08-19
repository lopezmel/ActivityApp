/**
 * Created by melissalopez
 */
var mongoose = require('mongoose');
var restaurantsSchema = new mongoose.Schema({
    name: String,
    address: String,
    city: String,
    state: String,
    zip: String,
    rate: Number,
    des: String
});
mongoose.model('Restaurants', restaurantsSchema);