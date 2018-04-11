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

//route to main page
server.route({
    method:'GET',
    path:'/fundraising',
    handler:(request,reply)=>{
        const data = {};
        return reply.view('main',data);
    }
});

//route to place order page
server.route({
    method:'GET',
    path:'/fundraising/placeorder',
    handler:(request,reply)=>{
        const data = {"scouts":tempData.data.scouts,"items":tempData.data.items};
        return reply.view('placeorder',data);
    }
});

//route to bulk order
server.route({
    method:'GET',
    path:'/fundraising/bulkorder',
    handler:(request,reply)=>{
        const data = {"items":tempData.data.items};
        return reply.view('bulkorder',data);
    }
});

//route to item management page
server.route({
	method:'GET',
	path:'/fundraising/items',
	handler:(request,reply)=>{
		const data = {"items":tempData.data.items};
		return reply.view('items',data);
	}
});

//route to inventory management page
server.route({
    method:'GET',
    path:'/fundraising/inventory',
    handler:(request,reply)=>{
        const data = {"inventory":tempData.data.inventory};
        return reply.view('inventory',data);
    }
});

//route to intake page
server.route({
    method:'GET',
    path:'/fundraising/intake',
    handler:(request,reply)=>{
        const data = {"items":tempData.data.items};
        return reply.view('intake',data);
    }
});

//ad new item
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