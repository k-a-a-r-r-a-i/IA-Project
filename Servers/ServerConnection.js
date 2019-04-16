var mongoose = require('mongoose');
const express = require('express');
host="mongodb://localhost:27017/OnlineShopping";

mongoose.Promise=global.Promise;
mongoose.connect(host);
module.exports={mongoose};
