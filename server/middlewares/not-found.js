const notFound = (req, res) => {
	console.log("notfound");
	res.status(400).send(`Route ${req.originalUrl} không tồn tại`);
};

module.exports = notFound;
