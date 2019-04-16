var {monogoose}=require('./db/monogconnect');
var {user}=require('./modules/user');
var {test}=require('./modules/test');

var express=require('express');
var bodyParse=require('body-parser');

var app=express();

app.use(bodyParse.json());

app.post('/user',(req,res)=>{

    var col=new user({
        email : req.body.email
        });
    col.save().then((doc)=>{
        res.send(doc);
    },(err)=>{
        res.status(400).send(err)
    });

})


app.listen(3000,()=>{
    console.log("server start");
})

/****************************** */

//connect before go to quary 
/*
var newCol =new MyModel({
    name:"omarrasmy",
    phone:1123954535
});
newCol.save().then((res)=>{
    console.log(JSON.stringify(newCol,undefined,2));
},(err)=>{
    console.log("Can't insert right now " +err);
})

var col=new user({
    passs:"omarrasmy",
    email:'  omar '
});
col.save().then((res)=>{
    console.log(JSON.stringify(res,undefined,2));
},(err)=>{
    console.log(err);
});
*/

exports.modules={app};