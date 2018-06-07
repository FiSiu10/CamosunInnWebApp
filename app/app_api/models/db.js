const mongoose = require('mongoose'); 
let dbURI = 'mongodb://mongo/camosun-inn'; 

if (process.env.NODE_ENV === 'production'){
	dbURI = process.env.MONGO_URL;
}

mongoose.connect(dbURI, { useMongoClient: true }); 

mongoose.connection.on('connected', function() {
	console.log('Mongoose connected to ' + dbURI); 
}); 

mongoose.connection.on('error', function(err) {     
	console.log('Mongoose connection error:' + err); 
});  
mongoose.connection.on('disconnected', function() {     
	console.log('Mongoose disconnected'); 
}); 
require('./room_schema');