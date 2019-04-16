const {MongoClient,ObjectID} = require('mongodb');

host="mongodb://localhost:27017/Testme";
MongoClient.connect(host).then((db)=>{
    db.collection('tdos').findOneAndUpdate({_id:new ObjectID("5ca911984343020c84378c32")},
    {
        $set:{
            text:"ahmed",
            connect:false
    },
    $inc:{
        age:1
    }
},
{
    returnOriginal:false
}
        ).then((result)=>{
            console.log(JSON.stringify(result,undefined,2));
        },(err)=>{
            console.log("no update");
        });
},(err)=>{
    console.log("can't connect"+err)
});