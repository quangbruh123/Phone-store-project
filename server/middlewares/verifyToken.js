const jwt = require("jsonwebtoken");
const CustomAPIError = require("../error/customError");

const verifyAccessToken = async (req, res, next) => {
	const authToken = req.headers.authorization;

	try {
		if (!authToken || !authToken.startsWith("Bearer ")) {
			next(new CustomAPIError("Không thể lấy access token", 401));
		}

		const accessToken = authToken.split(" ")[1];

		const decode = jwt.verify(accessToken, process.env.SECRET_KEY);
		req.user = { uid: decode._id, role: decode.role };
		next();
	} catch (error) {
		next(new CustomAPIError("Access token đã hết hạn", 401));
	}
};

const verifyRefreshToken = async (req, res, next) => {
	const refreshToken = req.headers.authorization;

	try {
		if (!refreshToken) {
			next(new CustomAPIError("Không thể lấy refresh token", 401));
		}

		const decode = jwt.verify(refreshToken, process.env.SECRET_KEY);
		req.user = { uid: decode._id, role: decode.role, refreshToken };
		next();
	} catch (error) {
		throw new CustomAPIError("Refresh token hết hạn", 401);
	}
};

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

module.exports = { verifyAccessToken, verifyRefreshToken, checkIsUser, checkIsStaff, checkIsStaffOrAdmin };
