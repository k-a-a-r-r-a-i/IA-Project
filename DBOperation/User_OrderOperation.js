var {mongoose} =require("../Servers/ServerConnection");
var {Users_Orders}=require("../Models/Users_Orders");
var ObjectId = require('mongodb').ObjectID;

function DbOperation(Users_Orders,Email){
    this.User=Users_Orders;
    this.Email=Email;
}

DbOperation.prototype.Adduser=function(User,Callback){
/* for only Know Items Added*/
   
Users_Orders.find({Email:User.Email}).then((res)=>{
        if(res.length >0){
            return Callback(-1);
        }
        else{
       var col = new Users_Orders({
        Username:User.Username,
        Email:User.Email,
        Password:User.Password,
        PhoneNo:User.PhoneNo,
        Address:User.Address,
        Items: [] ,
        Orders:[]
        });
    col.save().then((res)=>{
        console.log(JSON.stringify(col,undefined,2));
        return Callback(1);
    },(err)=>{
        console.log("Can't insert right now " +err);
        return Callback(0);
    });
}
},(err)=>{
    console.log(err);
    check=1;
    return Callback(0);
});

}

DbOperation.prototype.FindUser=function(Email,Callback){
     Users_Orders.find({Email:Email}).then((user)=>{
        if(user.length == 0)
        return Callback(-1);
        return Callback(user[0]);
    },(err)=>{
    return Callback(-1);
    });
}
DbOperation.prototype.DeleteUser=function(Email,Callback){
     Users_Orders.findOneAndRemove({Email:Email}).then((res)=>{
        return Callback(1);
    },(err)=>{
        return Callback(0);
    });
}

DbOperation.prototype.AddOrder=function(Callback){
    Users_Orders.find({Email:this.Email}).then((res)=>{
        if(res.length <= 0){
            return Callback(-1);
        }
        else{
            res[0].Orders.push(this.User);
            Users_Orders.findOneAndUpdate({_id:res[0]._id},{$set:
                {
                     Orders:res[0].Orders
                }
            }).then((ress)=>{
                return Callback(1);
            },(err)=>{
                return Callback(0);
            });       
        }
    },(err)=>{
        console.log(err);
        return Callback(0);
    });
}
DbOperation.prototype.AddItemsCart=function(Callback){
    Users_Orders.find({Email:this.Email}).then((res)=>{
        if(res.length<0){
            return Callback(-1);
        }
        else{
            res[0].Items.push(this.User);
            Users_Orders.findOneAndUpdate({_id:res[0]._id},{$set:
                {
                    Items:res[0].Items
                }
            }).then((ress)=>{
                return Callback(1);
            },(err)=>{
                return Callback(0);
            });       
        }
    },(err)=>{
        console.log(err);
        return Callback(0);
    });
}

DbOperation.prototype.UpdateUser=function(Callback){
    Users_Orders.find({Email:this.Email}).then((res)=>{
        if(res.length<=0){
            return Callback(-1);
        }
        else{
            Users_Orders.findOneAndUpdate({_id:res[0]._id},{$set:
                {
                    Username:this.Username,
                    Password:this.Password,
                    PhoneNo:this.PhoneNo,
                    Address:this.Address,
                              }
            }).then((ress)=>{
                return Callback(1);
            },(err)=>{
                return Callback(0);
            });       
        }
    },(err)=>{
        console.log(err);
        return Callback(0);
    });
}

DbOperation.prototype.DeleteItemsFromCart=function(Product_ID , Callback){

    this.FindUser(this.Email,(user)=>{
        if(user.length <=0)
            return Callback(-1);
        else{
            var item2=[];
    console.log(user);
    user.Items.forEach(element => {
        if(Product_ID==element.Product_ID){

        }
        else{
            item2.push(element);
        }
    });
    Users_Orders.findOneAndUpdate({_id:user._id},{$set:
        {
            Items:item2
        }
    }).then((ress)=>{
        return Callback(1);
    },(err)=>{
        return Callback(0);
    });
        }
    });
              
}

module.exports.DbOperation=DbOperation;

