const {MongoClient,ObjectID} = require('mongodb');
host="mongodb://localhost:27017/Testme";
MongoClient.connect(host,(err,db)=>{
if(err){
    return console.log("not have connect");
}
console.log("connect");
/*db.collection('tdos').find().toArray().then((docs)=>{
    console.log(JSON.stringify(docs,undefined,2));
    
},(err)=>{
    return console.log("not have connect");
});*/
db.collection('tdos').find().toArray((err,docs)=>{
    if(err){
        return console.log("not have connect");
    }
    
    console.log(JSON.stringify(docs,undefined,2));
});
db.collection('tdos').find({_id:new  ObjectID("5ca8f978309f933ce0cde066")}).count().then((count)=>{
    console.log(`the count is : ${count}`);
},(err)=>{
    console.log(err);
})
db.close();
});