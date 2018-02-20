'use strict';

const MongoClient = require('mongodb').MongoClient,
	ObjectId = require('mongodb').ObjectId,
	url = "mongodb://192.168.1.23:12001/workoutsDB",
	kill = {"exercises":[
	{"exercise":"pullups",
	"data":[
		{"date":"2018-02-01","reps":"8","time":"1"},
		{"date":"2018-02-02","reps":"8","time":"1"},
		{"date":"2018-02-03","reps":"9","time":"1"}
	]},
	{"exercise":"pushups",
	"data":[
		{"date":"2018-02-01","reps":"28","time":"1"},
		{"date":"2018-02-02","reps":"28","time":"1"},
		{"date":"2018-02-03","reps":"29","time":"1"}
	]},
	{"exercise":"planks",
	"data":[
		{"date":"2018-02-01","reps":"1","time":"1.25"},
		{"date":"2018-02-02","reps":"1","time":"1.25"},
		{"date":"2018-02-03","reps":"1","time":"1.27"}
	]},
	{"exercise":"situps",
	"data":[
		{"date":"2018-02-01","reps":"28","time":"1"},
		{"date":"2018-02-02","reps":"28","time":"1"},
		{"date":"2018-02-03","reps":"29","time":"1"}
	]}
]};

const databaseFuncs = {
	postWorkoutData: (data,callback)=>{
		callback(null,kill);
		// MongoClient.connect(url, function(err, db) {
		//   if (err) throw err;

		//   db.collection("exercisetracker").insertOne(data, function(err, res) {
		//     if (err) throw err;
		//     if(res.result.ok === 1){
		    	
		//     	callback(null,res.ops[0]);
		//     }
		//     db.close();
		//   });
		// });
	}
}

exports.databaseFuncs = databaseFuncs;