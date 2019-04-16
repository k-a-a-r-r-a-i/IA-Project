var mongoose =require('mongoose');

var Products_Categouries= mongoose.model('Products_Categouries',{
   Categoury_name: {
       type:String,
       required:true,
       minlength:2,
       maxlength:50
   },
   Categoury_Description:{
    type:String
   },
   Product:[
       {
           Product_Name:{
            required:true,
            type:String
           },
           Quantaty_Of_Product :{
            type:Number
           },
           Price_Of_Product:{
                required:true,
               type:Number
           },
           Product_Image:{
            required:true,
               type:String
           },
           Product_Description:{
               type:String
           }
         
       }
   ]
});
module.exports.Products_Categouries=Products_Categouries;