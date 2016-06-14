/**
 * Created by richardwarg on 5/31/2016.
 */
// dependencies
var restful = require ('node-restful');
var mongoose = restful.mongoose;

//schema
var productSchema = new mongoose.Schema({
    name: String,
    sku: String,
    price: Number
});

// return the model

module.exports = restful.model('Products', productSchema);