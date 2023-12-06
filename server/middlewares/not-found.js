const notFound = (req, res) => {
	res.status(400).send(`Route ${req.originalUrl} không tồn tại`);
};

module.exports = notFound;
