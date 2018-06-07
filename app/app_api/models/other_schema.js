const mongoose = require('mongoose');

const otherSchema = new mongoose.otherSchema({
	title: String,
	pageInfo: {info: String, image: String}
});

mongoose.model('other', otherSchema);