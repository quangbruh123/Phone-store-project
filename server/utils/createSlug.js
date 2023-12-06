const slugify = require("slugify");
const uniqueSlug = require("unique-slug");

const createSlug = (str) => {
	if (!str) return null;
	const output =
		slugify(str, {
			lower: true, // convert to lower case, defaults to `false`
			strict: false, // strip special characters except replacement, defaults to `false`
			locale: "vi", // language code of the locale to use
			trim: true,
		}) +
		"-" +
		uniqueSlug();
	return output;
};

module.exports = createSlug;
