const jwt = require("jsonwebtoken");
const CustomAPIError = require("../error/customError");
const asyncHandler = require("express-async-handler");

const verifyAccessToken = asyncHandler(async (req, res, next) => {
	const authToken = req.headers.authorization;
	if (!authToken || !authToken.startsWith("Bearer ")) {
		throw new CustomAPIError("Không thể lấy access token", 401);
	}

	try {
		const accessToken = authToken.split(" ")[1];

		const decode = jwt.verify(accessToken, process.env.SECRET_KEY);
		req.user = { _id: decode._id, role: decode.role };
		next();
	} catch (error) {
		throw new CustomAPIError("Access token đã hết hạn", 401);
	}
});

const verifyRefreshToken = asyncHandler(async (req, res, next) => {
	const refreshToken = req.headers.authorization;
	if (!refreshToken) {
		throw new CustomAPIError("Không thể lấy refresh token", 401);
	}

	try {
		const decode = jwt.verify(refreshToken, process.env.SECRET_KEY);
		req.user = { _id: decode._id, role: decode.role, refreshToken };
		next();
	} catch (error) {
		throw new CustomAPIError("Refresh token hết hạn", 401);
	}
});

const checkRole = (allowedRoles) => async (req, res, next) => {
	try {
		const { role } = req.user;
		if (!allowedRoles.includes(role)) {
			throw new CustomAPIError("Không đúng role cần vào", 401);
		}
		next();
	} catch (error) {
		next(error);
	}
};

const checkIsAdmin = checkRole(["admin"]);
const checkIsStaff = checkRole(["staff"]);
const checkIsUser = checkRole(["user"]);
const checkIsStaffOrAdmin = checkRole(["admin", "staff"]);

module.exports = {
	verifyAccessToken,
	verifyRefreshToken,
	checkIsUser,
	checkIsStaff,
	checkIsStaffOrAdmin,
};
