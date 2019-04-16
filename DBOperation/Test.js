var DbOperation=require("../DBOperation/User_OrderOperation");
var Users_Orders=require("../Models/Users_Orders")
var ObjectId = require('mongodb').ObjectID;
var DbOperation2=require("../DBOperation/Products-Categouries");

var x =/* {
    Username:"omarrasmy",
    Email:"omarrasmy2@yahoo.com",
    Password:"13213213",
    PhoneNo:23123123,
    Cart:{Items: [{_id:ObjectId(10),Product_Quantaty:10,Total_Cost:2131231,Product_ID:10}, {_id:ObjectId(11),Product_Quantaty:9,Total_Cost:21231,Product_ID:12}] },
    Orders:[{Order_Prices:12312},{Order_Prices:123121}]
    };*/
    /*{
      Order_Prices:123123,
    }*/
    {_id:ObjectId(10),Product_Quantaty:10,Total_Cost:2131231,Product_ID:101}
var m =new DbOperation.DbOperation(x,"omarrasmy@yahoo.com"); 
  /*  console.log(x.Username);
    m.Adduser(m.User,(l)=>{
      console.log(l);     
    });*/

    
  //m.FindUser("omarasmy@yahoo.com",(l)=>{
  //  console.log(l);
  //});
/*
  m.AddOrder((res)=>{
    console.log(res);
  });
  */
/*
  m.AddItemsCart((res)=>{
    console.log(res);
  })
  */
/*
  m.DeleteItemsFromCart(102,(res)=>{
    console.log(res);
  })
  */
/*
  m.DeleteUser("omarrasmy2@yahoo.com",(res)=>{
    console.log(res);
  })
  */

  /*********************************************************************** Product Test*/

  var temp={Product_Name:"product2"}
  //{Categoury_name:"MyCategoury2",Categoury_Description:"MyDescription2"}
  /*{
    Product_Name:"product2",
    Quantaty_Of_Product:11,
    Price_Of_Product:1230,
    Product_Image:"sdadsadas",
    Product_Description:"asddasdsa"
  };*/
  var classy=new DbOperation2.DbOperation2(temp);
/*
  classy.AddCategoury((res)=>{
    console.log(res);
  });

  classy.FindCategouryAndporducts("MyCategoury",(l)=>{
    console.log(JSON.stringify(l,undefined,2));
  })
*/
/*
classy.AddProduct("MyCategoury",(l)=>{
  console.log(l);
})*/
/*
classy.UpdateProduct("MyCategoury","product3",(l)=>{
  console.log(l);
})*/
/*
classy.UpdateCategoury("MyCategoury",(l)=>{
  console.log(l);
})*/
classy.DeleteProduct("MyCategoury2",(l)=>{
  console.log(l);
})