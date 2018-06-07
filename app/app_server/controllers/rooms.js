'use strict;'

const roomsList = function(req, res) {
  res.render('rooms-list', { 
  		title: 'Available Rooms',
  		rooms: [{
  			title: 'Traditional 1 King Bedroom',
  			details: 'Detailed information regarding the room king bed',
  			image: '../images/hotel.jpg'
  		},{
  			title: 'Traditional 2 Queen Bedroom',
  			details: 'Detailed information regarding the room queen bed',
  			image: '../images/hotel.jpg'
  		},{
  			title: 'Luxury 1 King Bedroom',
  			details: 'Detailed information regarding the room lux king bed',
  			image: '../images/hotel.jpg'
  		}],
  		rooms2: [{
  			title: 'Luxury 2 Queen Bedroom',
  			details: 'Detailed information regarding the room lux queen bed',
  			image: '../images/hotel.jpg'
  		},{
  			title: '2 Bedroom Suite',
  			details: 'Detailed information regarding the room 2 bed',
  			image: '../images/hotel.jpg'
  		},{
  			title: 'Kitchenette Suite',
  			details: 'Detailed information regarding the room Kitchenette',
  			image: '../images/hotel.jpg'
  		}] 
  	});
};

const roomDetails = function(req, res) {
  res.render('room-details', { 
  	title: 'Room Details',
  	rooms: {
  			title: 'Traditional 2 Queen Bedroom',
        button: 'Reserve This Room',
  			image: '../../images/2queen.jpg',
  			amenities: ['Wireless Internet',
  			'Air Conditioning', 
  			'Complimentary Coffee and Tea', 
  			'In-room safe',
  			'Phone'],
  			features: ['2 queen beds with plush mattress, luxe white linens and a cozy duvet',
            '55" LCD Flat screen television',
            'Modern work desk',
            'Large bathroom with bathtub and shower'],
  		}
  });
};

const reserveRoom = function(req, res) {
  res.render('reserve-room', { 
  	title: 'Reserve a Room',
  	rooms: {
  			title: 'Traditional 2 Queen Bedroom',
  			image: '../../images/2queen.jpg'
  		}
   });
};

const roomConfirmation = function(req, res) {
  res.render('confirmation', { 
  	title: 'Reservation Confirmation',
  	message: {
        title: 'Thank you for reserving!',
  			details: 'We look forward to hosting you.',
  			info: 'Please see your email for more information. '
  		}
  });
};

module.exports = {
    roomsList,
    roomDetails,
    reserveRoom,
    roomConfirmation
};
