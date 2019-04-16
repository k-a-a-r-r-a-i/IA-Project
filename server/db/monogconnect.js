var mongoose = require('mongoose');
host="mongodb://localhost:27017/Testme";

mongoose.Promise=global.Promise;
mongoose.connect(host);

module.exports={mongoose};