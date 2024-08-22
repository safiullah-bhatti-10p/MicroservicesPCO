const axios = require('axios');

const orderUrl = 'http://localhost:3002/orders';

const orderData = {
    productId: '66c2efa008051bcdf8a3a3d9',
    quantity: 2,
    customerId: 'ccccccccccc'
};

const headers = {
    'Content-Type': 'application/json'
};  

axios.post(orderUrl, orderData, { headers })
    .then(res => {
        console.log('Status : ', res.status);
        console.log('data : ', res.data);
    })
    .catch(err => {
        console.error(err);
    });