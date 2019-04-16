var {mongoose} =require("../Servers/ServerConnection");
var {Products_Categouries}=require("../Models/Products_Categouries");
var ObjectId = require('mongodb').ObjectID;


function DbOperation2(CatOrProd){
    this.CatOrProd=CatOrProd;
}

DbOperation2.prototype.AddCategoury=function(Callback){

    Products_Categouries.find({Categoury_name:this.CatOrProd.Categoury_name}).then((res)=>{
        if(res.length >0){
            return Callback(-1);
        }
else{

    var col=new Products_Categouries({
        Categoury_name:this.CatOrProd.Categoury_name,
        Categoury_Description:this.CatOrProd.Categoury_Description,
        Product:[]
    });
    col.save().then((res)=>{
        console.log(JSON.stringify(col,undefined,2));
        return Callback(1);
    },(err)=>{
        console.log("Can't insert right now " +err);
        return Callback(0);
    });
}
});
}

DbOperation2.prototype.FindCategouryAndporducts=function(CatName,Callback){
    Products_Categouries.find({Categoury_name:CatName}).then((res)=>{
        return Callback(res[0]);
    },(err)=>{
        return Callback(0);
    });
}

DbOperation2.prototype.AddProduct=function(CatName,Callback){
    Products_Categouries.find({Categoury_name:CatName}).then((res)=>{
        if(res.length <=0){
            return Callback(-1);
        }
else{
    res[0].Product.push(this.CatOrProd);
    Products_Categouries.findOneAndUpdate({_id:res[0]._id},{$set:
        {
            Product:res[0].Product
        }
    }).then((ress)=>{
        return Callback(1);
    },(err)=>{
        return Callback(0);
    });       

}
});
}
DbOperation2.prototype.UpdateProduct=function(catName,OldProductName,Callback){
    this.FindCategouryAndporducts(catName,(Categoury)=>{
        if(Categoury==0 || Categoury==null)
        return Callback(-1);
        else{
            var Products=[];
            Categoury.Product.forEach(element => {
                if(OldProductName === element.Product_Name){
                    Products.push(this.CatOrProd);
                }
                else{
                    Products.push(element);
                }
          
        });

        Products_Categouries.findOneAndUpdate({_id:Categoury._id},{$set:
            {
                Product:Products
            }
        }).then((ress)=>{
            return Callback(1);
        },(err)=>{
            return Callback(0);
        });
    }

    });
}

DbOperation2.prototype.UpdateCategoury=function(OldCatName,Callback){
    this.FindCategouryAndporducts(OldCatName,(res)=>{
        if(res==0 || res==null){
            return Callback(-1);
        }
        else{
            Products_Categouries.findOneAndUpdate({_id:res._id},{$set:{
                Categoury_name:this.CatOrProd.Categoury_name,
                Categoury_Description:this.CatOrProd.Categoury_Description,
                Product:res.Product
            }}).then((res)=>{return Callback(1)},(err)=>{return Callback(0)})
        }
    });
}
DbOperation2.prototype.DeleteProduct=function(CatOfTheProduct,Callback){
    this.FindCategouryAndporducts(CatOfTheProduct,(Categoury)=>{
        if(Categoury==0 || Categoury==null){
            return Callback(-1);
        }
    else{
        var Products=[];
            Categoury.Product.forEach(element => {
                if(this.CatOrProd.Product_Name === element.Product_Name){
                }
                else{
                    Products.push(element);
                }
     })
     Products_Categouries.findOneAndUpdate({_id:Categoury._id},{$set:
        {
            Product:Products
        }
    }).then((ress)=>{
        return Callback(1);
    },(err)=>{
        return Callback(0);
    });
    }
    });
}

module.exports.DbOperation2=DbOperation2;