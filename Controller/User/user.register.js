// importing user model
const userModel = require('../../Models/Users_Orders');

// importing db ops
const dbOps = require('../../DBOperation/User_OrderOperation');

// user 
var user = {
    email : 'ahmedashraf1705@gmail.com',
    password : '123456'
}

// establish connection and register user
dbOps.DbOperation(userModel,user.email).Adduser(userModel);
