const errorHandler = (err, req, res, next) => {
	let customError = {
		msg: err.message || "Something wrong",
		statusCode: err.statusCode || 500,
	};
	console.log(err);
	return res.status(customError.statusCode).json(err);
};

module.exports = errorHandler;
