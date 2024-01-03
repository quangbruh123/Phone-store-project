const errorHandler = (err, req, res, next) => {
	let customError = {
		msg: err.message || "Something wrong",
		statusCode: err.statusCode || 500,
	};
	console.log(err);
	if (err.errors) {
		customError.msg = Object.values(err.errors)
			.map((item) => item.message)
			.join(" ");
		customError.statusCode = 400;
	}
	return res.status(customError.statusCode).json(customError);
};

module.exports = errorHandler;
