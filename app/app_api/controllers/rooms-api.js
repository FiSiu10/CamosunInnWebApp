'use strict';

const mongoose = require('mongoose'); 
const roomModel = mongoose.model('room'); 

const roomsListByOrigin = function(req, res){
	roomModel
		.find({}, {title: 1, details: 1, image: 1 })
		.sort({'title': 1})
		.exec( function(err, rooms){
			if (err){
				res
					.status(404)
					.json(err);
			} else {
				res
					.status(200)
					.json(rooms);
			}
		});
};

const roomsCreate = function(req, res){
	res
		.status(200)
		.json({"status": "success Rooms Create "});
};

const roomsReadOne = function(req, res){

	if (req.params && req.params.roomid){
		roomModel
			.findById(req.params.roomid)
			.exec( function(err, room){
				if (!room) {
					res
					.status(404)
					.json({
						"message": "roomid not found"
					});
					return;
				}

				if (err){
					res
						.status(404)
						.json(err);
					return;
				}

				res   
					.status(200)   
					.json(room);
			});
	} else {
		res
			.status(404)
			.jason({
				"message": "No roomid in request"
			});
	}
	
	
};

module.exports = {
	roomsListByOrigin,
	roomsCreate,
	roomsReadOne
};