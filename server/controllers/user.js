const User = require("../models/user");
const asyncHandler = require("express-async-handler");

const getAllUser = asyncHandler(async (req, res) => {
	const users = await User.find();
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
		throw new NotFoundError(`No user with this id`);
	}
	return res.status(204).send();
});

const updateUserByAdmin = asyncHandler(async (req, res) => {
	const { uid } = req.params;
	if (Object.keys(req.body) === 0 || !uid) {
		throw new BadRequestError("Missing update info or user id");
	}
	const updatedUser = await User.findByIdAndUpdate(uid, req.body, {
		runValidators: true,
		new: true,
	}).select("-password");

	if (!updatedUser) {
		throw new NotFoundError(`No user with id: ${id}`);
	}

	return res.status(204).send();
});

const updateUser = asyncHandler(async (req, res) => {
	const { _id } = req.user;

	if (!_id) {
		throw new BadRequestError("Missing user id");
	}
	if (Object.keys(req.body) === 0) {
		throw new BadRequestError("Missing inputs");
	}
	const updatedUser = await User.findByIdAndUpdate(id, req.body, {
		runValidators: true,
		new: true,
	}).select("-password -role -refreshToken");

	if (!updatedUser) {
		throw new NotFoundError(`No user with id: ${id}`);
	}

	return res.status(200).json({
		success: true,
		updatedUser,
	});
});

const getCurrentUser = asyncHandler(async (req, res) => {
	const { _id } = req.user;

	if (!_id) {
		throw new BadRequestError("Missing user id");
	}
	const currentUser = await User.findById(_id).select("-password -role -refreshToken");

	if (!currentUser) {
		throw new NotFoundError(`No user with id: ${id}`);
	}

	return res.status(200).json({
		success: true,
		currentUser,
	});
});

module.exports = { getAllUser, getOneUser, getCurrentUser, updateUser, deleteUser };
