'use strict;'

const home = function(req, res) {
  res.render('index', { 
  	title: 'Camosun Inn',
  	pageInfo: {
  		info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet aliquet purus. Phasellus nec lectus sed massa suscipit accumsan. Vestibulum imperdiet ante vitae arcu mollis, quis scelerisque tellus tincidunt. Pellentesque sed diam a ante faucibus lacinia vel id nibh. Suspendisse ultrices dolor imperdiet, efficitur urna ac, venenatis nisl.',
  		image: './images/hotel.jpg'
  	}
  });
};

module.exports = {
    home
};