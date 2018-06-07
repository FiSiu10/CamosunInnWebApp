'use strict';

const express = require('express');
const router = express.Router();
const othersController = require('../controllers/others');
const roomsController = require('../controllers/rooms');

/* GET home page. */
router.get('/', othersController.home);

/* -- Rooms Pages -- */
/* GET list of rooms */
router.get('/rooms', roomsController.roomsList);

/* GET room details */
router.get('/rooms/details', roomsController.roomDetails);

/* GET room reservation page */
router.get('/rooms/reservation', roomsController.reserveRoom);

/* GET confirmation page */
router.get('/rooms/confirmation', roomsController.roomConfirmation);

module.exports = router;
