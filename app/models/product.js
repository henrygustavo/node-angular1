var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var productSchema = new Schema({

    title: String,
    description: String,
    pricing: Number
    
});

module.exports = mongoose.model('product', productSchema);