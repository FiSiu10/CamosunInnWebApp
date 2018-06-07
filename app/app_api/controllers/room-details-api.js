'use strict';

const mongoose = require('mongoose'); 
const roomModel = mongoose.model('room'); 


const roomDetailsReadOne = function(req, res){
	if (req.params && req.params.flightid && req.params.roomdetailsid){	
		const roomDetails = room.roomDetails.id(req.params.roomdetailsid);

		if (!room) {
			res
				.status(404)
				.json({
					"message": "roomdetailsid not found"
				});
			return;
		}

		res
			.status(404)
			.json(roomDetails);
	}
	
};

const roomDetailsChangeOne = function(req, res){
	res
		.status(200)
		.json({"status": "success"});
};
const roomDetailsRemoveOne = function(req, res){
	res
		.status(200)
		.json({"status": "success"});
};

module.exports = {
	roomDetailsReadOne,
	roomDetailsChangeOne,
	roomDetailsRemoveOne
};