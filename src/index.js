const express = require('express');
const paymentRoutes = require('./routes/paymentRoutes');
const bodyparser = require('body-parser')

const app = express();

const PORT = 3000;

app.use(bodyparser.json())

app.use('/payments',paymentRoutes);

app.listen(PORT, ()=>{
    console.log('listening port 0', PORT);
})