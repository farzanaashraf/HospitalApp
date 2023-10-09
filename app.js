
const express = require('express');
const morgan = require('morgan');

const app = new express();

app.use(morgan('dev'));
require('dotenv').config();

const router = require('./route/hospitals');

app.use(express.static('./public'));
app.use("/hospitals", router);

const PORT = process.env.PORT;
app.listen(PORT,() => {
    console.log(`server is running in port ${PORT}`);
})