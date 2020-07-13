import mongoose from "mongoose";

const connectDb = (handler) => async (req, res) => {
  if (mongoose.connections[0].readyState !== 1) {
    await mongoose.connect(encodeURI(process.env.MONGO_URL), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
  return handler(req, res);
};

const db = mongoose.connection;
db.once("open", () => {
  console.log("Connected to mongo");
});

// const MongoClient = require('mongodb').MongoClient;
// const uri = process.env.MONGO_URL
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

export default connectDb;
