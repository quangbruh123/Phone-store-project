const CustomAPIError = require("../error/customError");
const User = require("../models/user");
const asyncHandler = require("express-async-handler");

const getAllUser = asyncHandler(async (req, res) => {
	const queryObject = {};

	const { name, field } = req.query;

	// tìm các trường đơn giản cụ thể như là tìm tên, tìm hãng
	if (name) {
		queryObject["$or"] = [{ name: { $regex: name, $options: "i" } }, { email: { $regex: email, $options: "i" } }];
	}

	let result = User.find(queryObject);

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
	const users = await result;
	return res.status(200).json(users);
});

const getOneUser = asyncHandler(async (req, res) => {
	const { uid } = req.params;

	const user = await User.findById(uid).select("-password");

	if (!user) {
		throw new NotFoundError(`No user with id ${uid}`);
	}

	return res.status(200).json(user);
});

const deleteUser = asyncHandler(async (req, res) => {
	const { uid } = req.params;

	const user = await User.findByIdAndDelete(uid);

	if (!user) {
		throw new CustomAPIError(`No user with this id`, 400);
	}
	return res.status(204).send();
});

const updateUserByAdmin = asyncHandler(async (req, res) => {
	const { uid } = req.params;
	if (Object.keys(req.body) === 0 || !uid) {
		throw new CustomAPIError("Missing update info or user id", 400);
	}
	const updatedUser = await User.findByIdAndUpdate(uid, req.body, {
		runValidators: true,
		new: true,
	}).select("-password");

	if (!updatedUser) {
		throw new CustomAPIError(`No user with id: ${id}`, 400);
	}

	return res.status(204).send();
});

const updateUser = asyncHandler(async (req, res) => {
	const { _id } = req.user;

	if (!_id) {
		throw new CustomAPIError("Missing user id", 400);
	}
	if (Object.keys(req.body) === 0) {
		throw new CustomAPIError("Missing inputs", 400);
	}
	const updatedUser = await User.findByIdAndUpdate(_id, req.body, {
		runValidators: true,
		new: true,
	}).select("-password -role -refreshToken");

	if (!updatedUser) {
		throw new CustomAPIError(`No user with id: ${id}`, 400);
	}

	return res.status(200).json({
		success: true,
		updatedUser,
	});
});

const getCurrentUser = asyncHandler(async (req, res) => {
	const { _id } = req.user;

	if (!_id) {
		throw new CustomAPIError("Missing user id", 400);
	}
	const currentUser = await User.findById(_id).select("-password -role -refreshToken").populate("cart.product", "phoneName");

	if (!currentUser) {
		throw new CustomAPIError(`No user with id: ${id}`, 400);
	}

	return res.status(200).json(currentUser);
});

const updateCart = asyncHandler(async (req, res) => {
	const { _id } = req.user;
	const { pid, quantity = 1, phoneStorage, price, thumb } = req.body;

	if (!pid) {
		throw new CustomAPIError("Missing phone id", 400);
	}

	const user = await User.findById(_id).select("cart");
	const alreadyHave = user.cart.find((el) => el.product.toString() === pid);

	let updateCart;

	if (alreadyHave) {
		updateCart = await User.updateOne(
			{
				$and: [{ _id: _id }, { cart: { $elemMatch: alreadyHave } }],
			},
			{
				$set: {
					"cart.$.quantity": quantity,
					"cart.$.phoneStorage": phoneStorage,
				},
			},
			{ new: true, runValidators: true }
		);
	} else {
		updateCart = await User.findByIdAndUpdate(
			_id,
			{
				$push: { cart: { product: pid, quantity, phoneStorage, price, thumb } },
			},
			{ new: true, runValidators: true }
		);
	}

	return res.status(204).send();
});
const removeProductInCart = asyncHandler(async (req, res) => {
	const { _id } = req.user;
	const { pid } = req.body;

	if (!pid) {
		throw new CustomAPIError("Missing phone id", 400);
	}
	await User.findByIdAndUpdate(_id, { $pull: { cart: { product: pid } } }, { new: true, runValidators: true });

	return res.status(204).send();
});
const replaceNewCart = asyncHandler(async (req, res) => {
	const { _id } = req.user;
	const { newCart } = req.body;

	// if (!pid) {
	// 	throw new CustomAPIError("Missing phone id", 400);
	// }

	await User.findByIdAndUpdate(_id, { cart: newCart }, { new: true, runValidators: true });
	return res.status(204).send();
});

module.exports = {
	getAllUser,
	getOneUser,
	getCurrentUser,
	updateUser,
	deleteUser,
	updateUserByAdmin,
	updateCart,
	removeProductInCart,
	replaceNewCart,
};
