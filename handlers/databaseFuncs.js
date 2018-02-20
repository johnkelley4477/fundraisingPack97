'use strict';

const MongoClient = require('mongodb').MongoClient,
	ObjectId = require('mongodb').ObjectId,
	url = "mongodb://192.168.1.23:12001/workoutsDB",
	killMeToo = [
		{"exercise":"pullups","date":"2018-02-01","reps":"8","time":"1"},
		{"exercise":"pullups","date":"2018-02-02","reps":"8","time":"1"},
		{"exercise":"pullups","date":"2018-02-03","reps":"9","time":"1"},
		{"exercise":"pushups","date":"2018-02-01","reps":"28","time":"1"},
		{"exercise":"pushups","date":"2018-02-02","reps":"28","time":"1"},
		{"exercise":"pushups","date":"2018-02-03","reps":"29","time":"1"},
		{"exercise":"planks","date":"2018-02-01","reps":"1","time":"1.25"},
		{"exercise":"planks","date":"2018-02-02","reps":"1","time":"1.25"},
		{"exercise":"planks","date":"2018-02-03","reps":"1","time":"1.27"},
		{"exercise":"planks","date":"2018-02-04","reps":"1","time":"1.37"},
		{"exercise":"situps","date":"2018-02-01","reps":"28","time":"1"},
		{"exercise":"situps","date":"2018-02-02","reps":"28","time":"1"},
		{"exercise":"situps","date":"2018-02-03","reps":"29","time":"1"}
	],
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
		const killdata = databaseFuncs.normalizeResponce(killMeToo);
		callback(null,killdata);
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
	},
	normalizeResponce: (data)=>{
		let exercises = {"exercises":[]};
		let currentExercise = "";
		let exercise = {};
		let dat = [];
		data.forEach((value)=>{
			if (currentExercise !== value.exercise){
				if(currentExercise !== ""){
					exercise["data"] = dat;
					exercises.exercises.push(exercise);
					exercise = {};
					dat = [];
				}
				exercise["exercise"] = value.exercise;
				currentExercise = value.exercise;
			}
			var dataObj = {};
			dataObj["date"] = value.date;
			dataObj["reps"] = value.reps;
			dataObj["time"] = value.time;
			dat.push(dataObj);
		});
		exercise["data"] = dat;
		exercises.exercises.push(exercise);
		return exercises;
	}
}

exports.databaseFuncs = databaseFuncs;