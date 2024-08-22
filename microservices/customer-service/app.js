const express = require('express');
const mongoose = require('mongoose');
const customerRoutes = require('./routes/customerRoutes');

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://safiullah:MongoDBUser786@cluster0.yntmw.mongodb.net/customerdb')
    .then(() => console.log('Connected to Customer Database'))
    .catch((err) => console.error('Could not connect to MongoDB', err));

// Routes
app.use('/customers', customerRoutes);

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
    console.log(`Customer Service running on port ${PORT}`);
});
