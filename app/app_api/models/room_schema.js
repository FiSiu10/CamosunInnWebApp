const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
	title: { 
		type: String,
		required: true
	}, 
	details: String, 
	image: {
		type: String, 
		required: true
	},
	amenities: [String], 
	features: [String]
});

mongoose.model('room', roomSchema);
