const express = require('express');
const router = express.Router();
const Product = require('../models/Product');


// Get all products
router.get('/', async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        console.log(product);
        if (!product) 
            res.status(404).json({ message: 'Product not found.' });
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving product.' });
    }
});

// Create a new product
router.post('/', async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json(newProduct);
});

module.exports = router;