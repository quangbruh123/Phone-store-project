const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
const orderSchema = new mongoose.Schema({
	products: [
		{
			productId: { type: mongoose.Types.ObjectId, ref: "Phone" },
			quantity: Number,
			phoneStorage: String,
		},
	],
	status: {
		type: String,
		default: "Pending",
		enum: ["Rejected", "Pending", "Accepted"],
	},
	paymentIntent: {},
	total: Number,
	coupon: {
		type: mongoose.Types.ObjectId,
		ref: "Coupon",
	},
	orderBy: {
		type: mongoose.Types.ObjectId,
		ref: "User",
	},
});

//Export the model
module.exports = mongoose.model("Order", orderSchema);
