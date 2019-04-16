var mongoose=require('mongoose');
var user=mongoose.model("user",{
    email:{
        type:String,
        required:true ,
        trim:true,
        minlength:2
    },
    passs: {
        type:String,
        default:"omar"
    },
    name:{
        type:String,
        default:"gust"
    }
});
module.exports.user=user;