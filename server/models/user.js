const mongoose = require("mongoose"); // Erase if already required
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// Declare the Schema of the Mongo model
const userSchema = new mongoose.Schema({
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
	username: {
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

userSchema.pre("save", async function (next) {
	if (this.isModified("password")) {
		const salt = bcrypt.genSalt(10);
		this.password = await bcrypt.hash(this.password, salt);
	}
	next();
});

userSchema.methods.validatePassword = async function (password) {
	const res = await bcrypt.compare(password, this.password);
	return res;
};

userSchema.methods.createJWT = function (lifetime) {
	return jwt.sign({ _id: this._id, role: this.role }, process.env.SECRET_KEY, {
		expiresIn: lifetime,
	});
};

userSchema.methods.createPasswordResetToken = async function () {
	const randomKey = Math.floor(100000 + Math.random() * 900000);
	this.passwordResetToken = randomKey.toString();
	this.passwordResetExpired = Date.now() + 30 * 60 * 1000;
	await this.save();
	return randomKey;
};

//Export the model
module.exports = mongoose.model("User", userSchema);
