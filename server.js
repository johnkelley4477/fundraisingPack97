'use strict';

const Hapi = require('hapi'),
	db = require('./handlers/databaseFuncs');

const server = new Hapi.Server();

server.register([require('vision'),require('inert')], (err) => {

    server.views({
        engines: {
            html: require('handlebars')
        },
        path: './views',
	    layoutPath: './views/layout',
	    partialsPath: './views/partials',
	    helpersPath: './views/helpers',
	    layout: 'default'
    });
});

server.connection({ port: 3003, host: '0.0.0.0' });

//route to new entry
server.route({
	method:"GET",
	path:"/exercisetracker/newentry",
	handler: (request,reply) => {
		const data = {"start":true};
		return reply.view('exercise_input',data);
	}
});

//route to progress
server.route({
	method:"POST",
	path:"/exercisetracker/newentry",
	handler: (request,reply) => {
		db.databaseFuncs.postWorkoutData(request.payload,function(err,msg){
			let data = {"successful":true};
			if(err){
				data = {"successful":false};
			}
			return reply.view('exercise_input',data);
		});
	}
});

//route to progress
server.route({
	method:"GET",
	path:"/exercisetracker/progress",
	handler: (request,reply) => {
		db.databaseFuncs.getAllExercisesSorted(function(err,msg){
			return reply.view('progress',msg);
		});
	}
});

// //route to progress
// server.route({
// 	method:"POST",
// 	path:"/exercisetracker/progress",
// 	handler: (request,reply) => {
// 		db.databaseFuncs.postWorkoutData(request.payload,function(err,msg){
// 			return reply.view('progress',msg);
// 		});
// 	}
// });

//route to css
server.route({
	method:'GET',
	path:'/css/{css}',
	handler:(request,reply)=>{
		return reply.file(`./css/${request.params.css}`);
	}
});

//route to js
server.route({
	method:'GET',
	path:'/js/{js}',
	handler:(request,reply)=>{
		return reply.file(`./js/${request.params.js}`);
	}
});

server.start((err) => {
    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});