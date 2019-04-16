const {MongoClient,ObjectID} = require('mongodb');

host="mongodb://localhost:27017/Testme";
MongoClient.connect(host).then((db)=>{
   /* db.collection('tdos').deleteMany({text:"omarrasmyy"}).then((result=>{
        console.log(result);
    }));*/
   // db.collection('tdos').deleteOne({text:"omarrasmy"}).then((result)=>{
    //    console.log(result);    
   // });
   db.collection('tdos').findOneAndDelete({text:"omarrasmy"}).then((result)=>{
    console.log(JSON.stringify(result,undefined,2));    
   });
},(err)=>{
    console.log("connect error" +err);
})
