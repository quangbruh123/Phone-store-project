const slugify = require("slugify");
const uniqueSlug = require("unique-slug");

const createSlug = (str) => {
	if (!str) return null;
	const output = slugify(str) + "-" + uniqueSlug();
	return output;
};

module.exports = createSlug;
