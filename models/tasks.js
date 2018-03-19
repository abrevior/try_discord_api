const mongoose = require('mongoose');

const schema = mongoose.Schema({
	title: String,
	createdBy: String
});

module.exports = mongoose.model('Tasks', schema);
