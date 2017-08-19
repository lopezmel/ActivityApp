/**
 * Created by melissalopez
 */
var mongoose = require('mongoose');
var agendasSchema = new mongoose.Schema({
    name: String,
    description: String

});
mongoose.model('Agendas', agendasSchema);