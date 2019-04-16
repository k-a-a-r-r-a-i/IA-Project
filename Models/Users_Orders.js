var mongoose =require('mongoose');

var Users_Orders= mongoose.model('Users_Orders',{
   Username: {
       type:String,
       required:true,
       minlength:2,
       maxlength:50,
       trim:true
   },
   Email:{
       type:String,
       required:true,
       minlength:2,
       maxlength:100,
       trim:true,
   },
   Password:{
    type:String,
    required:true,
    minlength:2,
    maxlength:100,
    trim:true, 
   },
   PhoneNo:{
    type:Number
   },
   Address:{
       type:String,
       default:"----"
   }
   ,

        Items:[
            {
                Product_ID:{
                    type:String
                },
                Product_Quantaty:{
                    type:Number,
                    default:1
                },
                Total_Price:{
                    type:Number
                }
            }
        ]
    
   
   ,
   Orders:[
       {
        Order_Prices:{
            type:Number,
            required:true
        },
        Order_Date:{
            type : Date, 
            default: Date.now
        },
       }
   ]
});

module.exports.Users_Orders=Users_Orders;