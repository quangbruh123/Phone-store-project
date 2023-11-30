const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
const userInformation = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true,
		index: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	phoneNumber: {
		type: String,
		required: true,
		unique: true,
		match: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
		validate: {
			validator: function (value) {
				return value && value.length === 10;
			},
			message: "Số điện thoại phải có 10 chữ số",
		},
	},
	refreshToken: {
		type: String,
	},
	passwordResetToken: {
		type: String,
	},
	resetTokenExpried: {
		type: Date,
	},
});

//Export the model
module.exports = mongoose.model("User", userSchema);
