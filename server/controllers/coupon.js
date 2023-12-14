const Coupon = require("../models/coupon");
const asyncHandler = require("express-async-handler");
const CustomAPIError = require("../error/customError");

const getAllCoupon = asyncHandler(async (req, res) => {
	const coupons = await Coupon.find();

	return res.status(StatusCodes.OK).json(coupons);
});

const createCoupon = asyncHandler(async (req, res) => {
	const coupon = await Coupon.create({
		...req.body,
		expire: Date.now() + Number(req.body.expire) * 24 * 60 * 60 * 1000,
	});

	return res.status(200).json({
		coupon,
	});
});

const getCoupon = asyncHandler(async (req, res) => {
	const { cid } = req.params;
	const category = await Coupon.findById(cid);

	if (!category) {
		throw new CustomAPIError("No product category with that id", 400);
	}

	return res.status(200).json({
		category,
	});
});

const updateCoupon = asyncHandler(async (req, res) => {
	const { cid } = req.params;

	if (Object.keys(req.body).length === 0) {
		throw new CustomAPIError("Missing inputs", 400);
	}

	const updatedCoupon = await Coupon.findByIdAndUpdate(
		cid,
		{
			...req.body,
			expire: Date.now() + Number(req.body.expire) * 24 * 60 * 60 * 1000,
		},
		{
			runValidators: true,
			new: true,
		}
	);

	if (!updatedCoupon) {
		throw new CustomAPIError("No product category with that id to update", 400);
	}

	return res.status(204).send();
});

const deleteCoupon = asyncHandler(async (req, res) => {
	const { cid } = req.params;

	const deletedCoupon = await Coupon.findByIdAndDelete(cid, req.body, {
		runValidators: true,
		new: true,
	});

	if (!deletedCoupon) {
		throw new NotFoundError("No product category with that id to delete");
	}

	return res.status(204).send();
});

module.exports = {
	createCoupon,
	getAllCoupon,
	getCoupon,
	updateCoupon,
	deleteCoupon,
};
