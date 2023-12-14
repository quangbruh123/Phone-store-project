const jwt = require("jsonwebtoken");
const CustomAPIError = require("../error/customError");

const verifyAccessToken = async (req, res, next) => {
	const authToken = req.headers.authorization;

	if (!authToken || !authToken.startsWith("Bearer ")) {
		throw new CustomAPIError("Không thể lấy access token", 401);
	}

	const accessToken = authToken.split(" ")[1];

	try {
		const decode = jwt.verify(accessToken, process.env.SECRET_KEY);
		req.user = { uid: decode._id, roleId: decode._roleId };
		next();
	} catch (error) {
		throw new CustomAPIError("Access token đã hết hạn", 401);
	}
};

const verifyRefreshToken = async (req, res, next) => {
	const refreshToken = req.headers.authorization;

	if (!refreshToken) {
		throw new CustomAPIError("Không thể lấy refresh token", 401);
	}

	try {
		const decode = jwt.verify(refreshToken, process.env.SECRET_KEY);
		req.user = { uid: decode._id, roleId: decode._roleId, refreshToken };
		next();
	} catch (error) {
		throw new CustomAPIError("Refresh token hết hạn", 401);
	}
};

module.exports = { verifyAccessToken, verifyRefreshToken };
