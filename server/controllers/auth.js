const CustomAPIError = require("../error/customError");
const User = require("../models/user");
const asyncHandler = require("express-async-handler");
const sendEmail = require("../utils/sendEmail");

const register = asyncHandler(async (req, res) => {
	const newUser = await User.create(req.body);
	return res.status(201).json(newUser);
});

const login = asyncHandler(async (req, res) => {
	const { email, password: pass } = req.body;

	const user = await User.findOne({ email });

	if (!user) {
		throw new CustomAPIError(`Dont have this user with email ${email}`, 400);
	}

	if (!user.validatePassword(pass)) {
		throw new CustomAPIError(`Password is not correct`, 400);
	}

	const accessToken = user.createJWT(process.env.ACCESS_TOKEN_LT);
	const refreshToken = user.createJWT(process.env.REFRESH_TOKEN_LT);

	// save refresh token to cookie
	await User.findByIdAndUpdate(user._id, { refreshToken }, { runValidators: true, new: true });

	// save refresh token into cookie
	res.cookie("refreshToken", refreshToken, {
		httpOnly: true,
		maxAge: 3 * 1000 * 60 * 60 * 24,
	});

	const { password, role, ...userData } = user.toObject();

	return res.status(200).json({
		accessToken,
		refreshToken,
		userData,
	});
});

const logout = asyncHandler(async (req, res) => {
	const cookie = req.cookies;
	if (!cookie || !cookie.refreshToken) {
		throw new CustomAPIError("No refresh token in cookies");
	}

	const user = await User.findOneAndUpdate({ refreshToken: cookie.refreshToken }, { refreshToken: "" }, { new: true, runValidators: true });

	if (!user) {
		throw new BadRequestError("No user found");
	}

	res.clearCookie("refreshToken", {
		httpOnly: true,
		secure: true,
	});

	res.status(204).send();
});

const renewAccessToken = asyncHandler(async (req, res) => {
	const user = await User.findOne(req.user);

	if (!user) {
		throw new CustomAPIError("Refresh token does not match with user, but when sign we sign id. PLEASE CHECK", 400);
	}

	const newAccessToken = user.createJWT(process.env.ACCESS_TOKEN_LT);

	return res.status(200).json({
		newAccessToken,
	});
});

const forgotPassword = asyncHandler(async (req, res) => {
	const { email } = req.query;
	if (!email) {
		throw new CustomAPIError("Missing Email", 400);
	}

	const user = await User.findOne({ email });

	if (!user) {
		throw new CustomAPIError("No user has registered with this email", 400);
	}

	const resetToken = await user.createPasswordResetToken();

	const mailContent = {
		subject: "Khôi phục mật khẩu",
		html: `Xin vui lòng click vào link này để thay đổi mật khẩu, link có hiệu lực 30 phút: <a href=
${process.env.CLIENT_URL}/resetPassword?email=${email}&resetToken=${resetToken}>Nhấn vào đây</a>`,
	};

	const rs = await sendEmail(email, mailContent, email);

	return res.status(200).json({
		success: true,
		rs,
	});
});

const checkResetToken = asyncHandler(async (req, res) => {
	const { resetToken, email, password } = req.body;

	if (!resetToken || !email || !password) {
		throw new CustomAPIError("Please provide full reset token, email, password", 400);
	}

	const user = await User.findOne({
		email,
		passwordResetToken: resetToken,
		passwordResetExpired: { $gt: Date.now() },
	});
	if (!user) {
		throw new CustomAPIError("Invalid reset token", 400);
	}

	user.password = password;
	user.passwordResetToken = undefined;
	user.passwordChangedAt = Date.now();
	user.passwordResetExpired = undefined;

	await user.save();
	return res.status(200).json({
		success: true,
		msg: "Reset password oke",
	});
});

module.exports = {
	register,
	login,
	renewAccessToken,
	logout,
	forgotPassword,
	checkResetToken,
};
