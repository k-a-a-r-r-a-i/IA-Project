var mongoose=require('mongoose');

var MyModel= mongoose.model('testMe',{
    name:{
        type:String
    },
    phone:{
        type:Number
    },
    email:{
        type:String
    }
});
module.exports.MyModel=MyModel;