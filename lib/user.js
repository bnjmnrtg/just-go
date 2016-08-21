var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	username: {
		type: String, 
		unique: true
	},
	password: {
		type: String
	},
	email: {
		type: String,
	},
	firstName: {
		type: String
	},
	lastName: {
		type: String
	}
});

var User = mongoose.model('myuser', userSchema);

module.exports = User;