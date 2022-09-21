
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://james123:james123@cluster0.u7qiil6.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  if (err) throw err;
});
const collection = client.db("ratdb").collection("ratcollection");
module.exports = {collection, ObjectId}