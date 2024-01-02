const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
const phoneSchema = new mongoose.Schema(
	{
		phoneName: {
			type: String,
			required: true,
			index: true,
		},
		brand: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		slug: {
			type: String,
			required: true,
			unique: true,
		},
		phoneStorage: [
			{
				type: String,
			},
		],
		thumb: {
			type: String,
		},
		imageLinks: [
			{
				type: String,
			},
		],
		description: {
			type: String,
			required: true,
		},
		technicalSpecifications: {
			type: Map,
			of: String,
			required: true,
		},
		avgRating: {
			type: Number,
			default: 0,
		},
		totalRating: {
			type: Number,
			default: 0,
		},
		ratings: [
			{
				star: { type: Number },
				postedBy: { type: mongoose.Types.ObjectId, ref: "User" },
				comment: String,
			},
		],
		quantity: {
			type: Number,
			default: 0,
		},
		soldQuantity: {
			type: Number,
			default: 0,
		},
	},
	{ timestamps: true }
);

//Export the model
module.exports = mongoose.model("Phone", phoneSchema);
