const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'express-101';

export default function insertUser (user) {
  // Use connect method to connect to the server
  MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    // db.createCollection("users", function(err, res) {
    //   if (err) throw err;
    //   console.log("Collection created!");
    //   db.close();
    // });

    db.collection('users').insert({ name: 'Jeremi'}, {}, function(err, result) {
      assert.equal(null, err);
      // Get another db and do an update document on it
      // var db2 = mongoclient.db("integration_tests2");
      // db2.collection('mongoclient_test').update({a:1}, {b:1}, {upsert:true}, function(err, result) {
      //   assert.equal(null, err);
      //   assert.equal(1, result);

      //   // Close the connection
      //   mongoclient.close();
      // });
    });

    client.close();
  });

}

