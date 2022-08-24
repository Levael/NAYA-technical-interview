// const mongoose = require('mongoose');
const {MongoClient} = require('mongodb');
const configs       = require('../config.js');

const db_url = configs.db_url;

const client = new MongoClient(db_url, {useNewUrlParser: true, useUnifiedTopology: true});

client.connect(async (err) => {
  const users = await client.db().collection("users");

  await users.insertOne({
      name: "test",
      age: 120
  });

  let answer = await users.findOne({name: 'test'});
  console.log(answer);

  client.close();
});

// mongoose.connect(db_url, {
//     useNewUrlParser: true, useUnifiedTopology: true
// });
//
// const db_schema = new mongoose.Schema({
//     id          : {type: Number, required: true},
//     email       : {type: String, required: true},
//     first_name  : {type: String, required: true},
//     last_name   : {type: String, required: true},
//     address     : {type: String, required: true},
// });
//
// module.exports = mongoose.model('local_db', db_schema);



const uri = "mongodb+srv://Levael:<password>@testcluster.mj0cq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
