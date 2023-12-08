const Phone = require("../models/phone");
const asyncHandler = require("express-async-handler");
const createSlug = require("../utils/createSlug");
const CustomAPIError = require("../error/customError");

const getAllPhone = asyncHandler(async (req, res) => {
	const phones = await Phone.find();
	return res.status(200).json(phones);
});

const createPhone = asyncHandler(async (req, res) => {
	const newPhone = await Phone.create({
		...req.body,
		slug: createSlug(req.body.phoneName),
	});

	return res.status(201).json(newPhone);
});

const getOnePhone = asyncHandler(async (req, res) => {
	const phone = await Phone.findById(req.params.pid);

	if (!phone) {
		throw new CustomAPIError(`Không có sản phẩm với id ${req.params.pid}`, 400);
	}

	return res.status(200).json(phone);
});

const updatePhone = asyncHandler(async (req, res) => {
	const { pid } = req.params;

	const updatedPhone = await Phone.findByIdAndUpdate(
		pid,
		{ ...req.body, slug: createSlug(req.body) },
		{
			runValidators: true,
			new: true,
		}
	);

	if (!updatedPhone) {
		throw new CustomAPIError("No Phone with that id to update", 400);
	}

	return res.status(204).send();
});

const deletePhone = asyncHandler(async (req, res) => {
	const { pid } = req.params;

	const deletedProduct = await Phone.findByIdAndDelete(pid);

	if (!deletedProduct) {
		throw new NotFoundError("No product with that pid to delete");
	}

	return res.status(204).send();
});

const getFilterProduct = asyncHandler(async (req, res) => {
	const queryObject = {};

	const { numberingFilter, phoneName, brand, sort, field } = req.query;

	// tìm các trường đơn giản cụ thể như là tìm tên, tìm hãng
	if (phoneName) {
		queryObject.phoneName = { $regex: phoneName, $options: "i" };
	}

	if (brand) {
		queryObject.brand = { $regex: brand, $options: "i" };
	}

	// filter các trường có thể filter
	if (numberingFilter) {
		const operatorMap = {
			">": "$gt",
			">=": "$gte",
			"=": "$eq",
			"<": "$lt",
			"<=": "$lte",
		};

		const regEx = /\b(<|>|>=|=|<|<=)\b/g;

		let filterString = numberingFilter.replace(regEx, (match) => `-${operatorMap[match]}-`);

		filterString.split(",").forEach((item) => {
			const [field, operator, value] = item.split("-");
			queryObject[field] = { [operator]: value };
		});
	}

	let result = Phone.find(queryObject);

	// sort (có trừ đằng trước là từ lớn tới bé, k trừ thì từ bé đến lớn) sort=abc,-def
	if (sort) {
		const sortList = sort.split(",").join(" ");
		result = result.sort(sortList);
	} else {
		result = result.sort("-createdAt");
	}

	// field limit (chọn trường để hiển thị)
	if (field) {
		const fieldSelect = field.split(",").join(" ");
		result = result.select(fieldSelect);
	}

	// phân chia trang
	const page = Number(req.query.page) || 1;
	const limit = Number(req.query.limit) || 10;
	const skip = (page - 1) * limit; // thí dụ mình muốn xem page thứ 2 tức là sản phẩm thứ 10 đến thứ 19 thì mình phải đếm skip tới số 10 bằng cách lấy page - 1 * limit

	result = result.skip(skip).limit(limit);

	const products = await result;
	return res.status(200).json({
		count: products.length,
		products,
	});
});

module.exports = { getAllPhone, getFilterProduct, getOnePhone, createPhone, updatePhone, deletePhone };
