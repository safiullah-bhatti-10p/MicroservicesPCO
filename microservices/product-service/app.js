const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');
const dotenv = require('dotenv').config();

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://safiullah:MongoDBUser786@cluster0.yntmw.mongodb.net/productdb')
    .then(() => console.log('Connected to Product Database'))
    .catch((err) => console.error('Could not connect to MongoDB', err));

// Routes
app.use('/products', productRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Product Service running on port ${PORT}`);
});
