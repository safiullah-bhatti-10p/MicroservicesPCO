const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    made: String
});

module.exports = mongoose.model('Product', productSchema);
