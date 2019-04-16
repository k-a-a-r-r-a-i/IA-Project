const MongoClient= require('mongodb').MongoClient;
host="mongodb://localhost:27017/Testme";
MongoClient.connect(host,(err,db)=>{
if(err){
    return console.log("unable to connect" +err);
}
console.log("connect successfully");
db.collection('tdos').insertOne({
text:"omarrasmyy",
connect:true,
age:26
},(err,result)=>{
if(err){
  return  console.log("can't add right now "+err);
}
console.log(JSON.stringify(result.ops,undefined,2));
});

db.close();
});