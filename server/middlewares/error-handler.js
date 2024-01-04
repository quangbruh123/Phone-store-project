const deleteCloudinaryImage = require("../utils/deleteCloudinaryImage");
const errorHandler = async (err, req, res, next) => {
	let customError = {
		msg: err.message || "Something wrong",
		statusCode: err.statusCode || 500,
	};

	if (err.errors) {
		customError.msg = Object.values(err.errors)
			.map((item) => item.message)
			.join(" ");
		customError.statusCode = 400;
	}

	if (req.files && typeof req.files === "object") {
		for (const key in req.files) {
			if (Array.isArray(req.files[key])) {
				for (const file of req.files[key]) {
					const imageUrl = file.path;
					await deleteCloudinaryImage(imageUrl);
				}
			}
		}
	}

	return res.status(customError.statusCode).json(customError);
};

module.exports = errorHandler;
