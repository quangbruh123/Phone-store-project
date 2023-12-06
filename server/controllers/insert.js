const Phone = require("../models/phone");

const phoneJson = require("../data/phones.json");
const asyncHandler = require("express-async-handler");
const createSlug = require("../utils/createSlug");
const insertPhones = asyncHandler(async (req, res) => {
	for (phone of phoneJson) {
		if (phone) {
			await Phone.create({ ...phone, slug: createSlug(phone.phoneName), price: parseInt(phone.price.replace(".", "")) });
		}
	}

	return res.status(201).json("Inserted");
});

module.exports = { insertPhones };
