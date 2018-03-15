'use strict';

const MongoClient = require('mongodb').MongoClient,
	mongodb = require('mongodb'),
	url = "mongodb://192.168.1.23:27017/workoutsDB";

const databaseFuncs = {
	postWorkoutData: (data,callback)=>{
		MongoClient.connect(url, function(err, db) {
		  if (err) throw err;

		  db.collection("exercisetracker").insertOne(data, function(err, res) {
		    if (err) throw err;
		    if(res.result.ok === 1){
		    	callback(null,res.ops[0]);
		    }
		    db.close();
		  });
		});
	},
	getAllExercisesSorted: (callback)=>{
		MongoClient.connect(url, function(err, db) {
		  if (err) throw err;
		  db.collection("exercisetracker").find({}).sort({ttext:1}).toArray(function(err, result) {
		    if (err) throw err;
		    callback(null,databaseFuncs.normalizeResponce(result));
		    db.close();
		  });
		});
	},
	removeCollection: (id,callback)=>{
		MongoClient.connect(url, function(err, db) {
			db.collection("exercisetracker", function(err, collection){
				if (err) callback(err);
				collection.deleteOne({_id: new mongodb.ObjectId(id)});
				callback(null,'success');
			});
		});
	},
	getUniqueRoutes: (callback)=>{
		var result = "failed"
		MongoClient.connect(url, function(err, db) {
		 	if (err) throw err;
		 	
		 	db.collection("exercisetracker").distinct("ttext",{},(function(err, docs){
		        if(err){
		            callback(err);
		        }
		        if(docs){  
		        	callback(null,docs);
		        }
	   		}));
		});
	},
	normalizeResponce: (data)=>{
		let exercises = {"exercises":[]};
		let currentExercise = "";
		let exercise = {};
		let dat = [];
		data.forEach((value)=>{
			if (currentExercise !== value.ttext){
				if(currentExercise !== ""){
					exercise["data"] = dat;
					exercises.exercises.push(exercise);
					exercise = {};
					dat = [];
				}
				exercise["exercise"] = value.ttext;
				currentExercise = value.ttext;
			}
			var dataObj = {};
			dataObj["date"] = value.edate;
			dataObj["reps"] = value.reps;
			dataObj["time"] = value.dur;
			dataObj["id"] = value._id;
			dat.push(dataObj);
		});
		exercise["data"] = dat;
		exercises.exercises.push(exercise);
		return exercises;
	}
}

exports.databaseFuncs = databaseFuncs;