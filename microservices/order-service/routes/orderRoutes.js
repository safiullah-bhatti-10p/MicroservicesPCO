const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const axios = require('axios');

// Get all orders
router.get('/', async (req, res) => {
    const orders = await Order.find();
    res.json(orders);
});

// Create a new order
router.post('/', async (req, res) => {

    try {
        const { productId, quantity, customerId } = req.body;

        const productRes = await axios.get(`http://localhost:3001/products/${productId}`);
        console.log('product found');
        if (!productRes) {
            return res.status(404).json({ message: 'Product not found.' });
        }
        
        const customerRes = await axios.get(`http://localhost:3003/customers/${customerId}`);
        console.log(customerRes);
        console.log('customer found');
        if (!customerRes) {
            return res.status(404).json({ message: 'Customer not found.' });
        }

        console.log(productId);
        console.log(quantity);
        console.log(customerId);


        const newOrder = new Order({ productId, quantity, customerId });
        await newOrder.save();

        res.status(201).json({
            order: newOrder,
            productId,
            customerId
        });

    } catch (error) {     
        res.status(500).json({ message: 'Error creating order.' + error.message });
    }      
});

module.exports = router;
