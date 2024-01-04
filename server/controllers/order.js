const Order = require("../models/order");
const User = require("../models/user");
const Coupon = require("../models/coupon");
const asyncHandler = require("express-async-handler");

const createOrder = asyncHandler(async (req, res) => {
	const { _id } = req.user;
	const { couponId } = req.body;
	const user = await User.findById(_id).select("cart").populate("cart.product", "phoneName price");
	const products = user.cart.map((obj) => {
		console.log(obj);
		return {
			productId: obj.product._id.toString(),
			quantity: obj.quantity,
			phoneStorage: obj.phoneStorage,
		};
	});
	let totalCost = user.cart.reduce((prev, current) => {
		return current.price * current.quantity + prev;
	}, 0);

	let coupon = null;
	if (couponId) {
		coupon = await Coupon.findById(couponId);
		if (coupon) {
			totalCost = Math.round((totalCost * (1 - coupon.discount / 100)) / 1000) * 1000;
		}
	}

	const newOrder = await Order.create({
		products,
		total: totalCost,
		coupon: coupon?._id,
		orderBy: _id,
	});
	return res.status(201).json({
		newOrder,
	});
});

const updateStatus = asyncHandler(async (req, res) => {
	const { oid } = req.params;
	const { status } = req.body;

	const order = await Order.findByIdAndUpdate(oid, { status }, { new: true });

	return res.status(201).json({
		order,
	});
});

const getUserOrder = asyncHandler(async (req, res) => {
	const { _id } = req.user;

	const order = await Order.find({ orderBy: _id });

	return res.status(200).json({
		order,
	});
});

const getAllOrder = asyncHandler(async (req, res) => {
	const orders = await Order.find().populate("coupon").populate("orderBy", "firstName lastName");

	return res.status(200).json({
		orders,
	});
});

module.exports = {
	createOrder,
	updateStatus,
	getUserOrder,
	getAllOrder,
};
