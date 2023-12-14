const asyncHandler = require("express-async-handler");

const handlingResponse = asyncHandler(async (req, res, next) => {
	console.log("đang đây");
	const { statusCode, ...data } = res.locals;

	if (statusCode && data) {
		return res.status(statusCode).json(data);
	} else {
		next();
	}
});

module.exports = handlingResponse;
