const errorHandler = (err, req, res, next) => {
	let customError = {
		msg: err.message || "Something wrong",
		statusCode: err.statusCode || 500,
	};
	return res.status(customError.statusCode).json(customError);
};

module.exports = errorHandler;
