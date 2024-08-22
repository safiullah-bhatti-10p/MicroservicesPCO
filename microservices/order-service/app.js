const express = require('express');
const mongoose = require('mongoose');
const orderRoutes = require('./routes/orderRoutes');

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://safiullah:MongoDBUser786@cluster0.yntmw.mongodb.net/orderdb')
    .then(() => console.log('Connected to Order Database'))
    .catch((err) => console.error('Could not connect to MongoDB', err));

// Routes
app.use('/orders', orderRoutes);

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Order Service running on port ${PORT}`);
});
