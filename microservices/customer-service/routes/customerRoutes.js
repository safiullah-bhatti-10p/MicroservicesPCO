const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer');

// Get all customers
router.get('/', async (req, res) => {
    const customers = await Customer.find().then(customers => {
    res.json(customers);
    }).catch (err => {
        res.status(500).json({ message: err.message });
    });
});

router.get('/:id', async (req, res) => {
    try {
        const customer = await Customer.findById(req.params.id);
        console.log(customer);
        if (!customer) 
            res.status(404).json({ message: 'Customer not found.' });
        res.json(customer);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving customer.' });
    }
});

// Create a new customer
router.post('/', async (req, res) => {
    const newCustomer = new Customer(req.body);
    await newCustomer.save();
    res.status(201).json(newCustomer);
});

module.exports = router;
