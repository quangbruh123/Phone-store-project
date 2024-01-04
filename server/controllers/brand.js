const Brand = require("../models/brand");
const asyncHandler = require("express-async-handler");
const CustomAPIError = require("../error/customError");

const getAllBrands = asyncHandler(async (req, res) => {
	const brands = await Brand.find();

	return res.status(200).json(brands);
});

const createBrand = asyncHandler(async (req, res) => {
	const newBrand = await Brand.create({
		name: req.body.name,
	});

	return res.status(201).json(newBrand);
});

const updateBrand = asyncHandler(async (req, res) => {
	const { bid, name } = req.params;

	if (!bid || !name) {
		throw new CustomAPIError("Missing inputs", 400);
	}

	const updatedBrand = await Brand.findByIdAndUpdate(
		bid,
		{
			name,
		},
		{
			runValidators: true,
			new: true,
		}
	);

	if (!updatedBrand) {
		throw new CustomAPIError("No product category with that id to update", 400);
	}

	return res.status(204).send();
});

const deleteBrand = asyncHandler(async (req, res) => {
	const { bid } = req.params;

	const deletedBrand = await Brand.findByIdAndDelete(bid);

	if (!deletedBrand) {
		throw new NotFoundError("No product category with that id to delete");
	}

	return res.status(204).send();
});

module.exports = {
	createBrand,
	getAllBrands,
	updateBrand,
	deleteBrand,
};
