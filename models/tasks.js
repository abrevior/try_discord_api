const mongoose = require('mongoose');

const schema = mongoose.Schema({
	title: String,
	createdBy: String,
	priority: Number
});

module.exports = mongoose.model('Tasks', schema);
