'use strict';

const express = require('express');
const router = express.Router();

const roomsAPIController = require('../controllers/rooms-api');
//const roomDetailsAPIController = require('../controllers/room-details-api');

/* -- rooms -- */
router
	.route('/rooms')
	.get(roomsAPIController.roomsListByOrigin)
	.post(roomsAPIController.roomsCreate);

router
	.route('/rooms/details/:roomid')
	.get(roomsAPIController.roomsReadOne)
	.post(roomsAPIController.roomsCreate);


module.exports = router;