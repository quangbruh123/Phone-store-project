const jwt = require("jsonwebtoken");
const asnycHandler = require("express-async-handler");
const CustomAPIError = require("../error/customError");

const verifyToken = async (req, res, next) => {
	const authToken = req.headers.authorization;

	if (!authToken || !authToken.startWith("Bearer ")) {
		throw new CustomAPIError("Không tìm thấy access token", 404);
	}

	const accessToken = authToken.split(" ")[1];

	try {
		const decode = jwt.verify(accessToken, process.env.SECRET_KEY);
		req.user = { id: decode._id, role: decode.role };
		next();
	} catch (error) {
		// lấy acess
		throw new CustomAPIError("Access token hết hạn", 404);
	}
};

const verifyRefreshToken = async (req, res, next) => {
	const refreshToken = req.cookies.refreshToken;

	if (!refreshToken) {
		throw new CustomAPIError("Không tìm thấy refresh", 404);
	}

	try {
		const decode = jwt.verify(refreshToken, process.env.SECRET_KEY);
		req.user = { id: decode._id, refreshToken };
		next();
	} catch (error) {
		throw new CustomAPIError("Refresh token hết hạn", 404);
	}
};

const checkingRoles = (allowRoles) => async (req, res, next) => {
	const { role } = req.user;

	if (!allowRoles.includes(role)) {
		throw new CustomAPIError("Không có quyền hạn", 401);
	}

	next();
};

const checkingAdmin = checkingRoles(["admin"]);
const checkingUser = checkingRoles(["user"]);

module.exports = { verifyToken, verifyRefreshToken, checkingAdmin, checkingUser };
