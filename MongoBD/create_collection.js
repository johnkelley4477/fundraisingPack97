var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://192.168.1.23:27017/workoutsDB";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.createCollection("exercisetracker", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});