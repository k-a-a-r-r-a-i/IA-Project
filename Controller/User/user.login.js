// importing db ops
const dbOps = require('../../DBOperation/User_OrderOperation');

//user object
var user = {
    email:'',
    password:''
}

//check for user existence
if (dbOps.DbOperation().FindUser(user.email)){
    console.log('successfully logged in!');
    //establish session
    
}
else{
    console.log('user is not registered!');
}
