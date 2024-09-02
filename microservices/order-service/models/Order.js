const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    productId: String,

    quantity: Number,
    
    customerId: String,
});

module.exports = mongoose.model('Order', orderSchema);
