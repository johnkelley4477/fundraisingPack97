'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();
const tempData = require('./handlers/tempdata');

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

server.connection({ port: 3001, host: '0.0.0.0' });

server.route({
	method:'GET',
	path:'/fundraising/items',
	handler:(request,reply)=>{
		const data = {"items":tempData.data.items};
		return reply.view('items',data);
	}
});

server.route({
	method:'POST',
	path:'/fundraising/items/new',
	handler:(request,reply)=>{
		const data = {"items":tempData.data.items};
		return reply.view('items',data);
	}
});

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