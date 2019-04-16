// importing db ops
const dbOps = require('../../DBOperation/User_OrderOperation');

// importing user model
const userModel = require('../../Models/Users_Orders');

// current user,will be replaced with session
var currentUser = {
    name : '',
    password : '',
    email: ' ',
    address:'',
    phone: ''
}

// db update ops
dbOps.DbOperation().UpdateUser()
