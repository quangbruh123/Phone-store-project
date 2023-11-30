const notFound = (req, res) => {
	res.status(400).send(`Route ${req.originalURL} không tồn tại`);
};

module.exports = notFound;
