const express = require("express");
const { getAllPhone, getFilterProduct, getOnePhone, createPhone, updatePhone, deletePhone } = require("../controllers/phone");
const { verifyAccessToken, checkIsStaffOrAdmin } = require("../middlewares/verifyToken");
const uploadCloud = require("../config/cloudinary");
const router = express.Router();

router
	.route("/")
	.get(verifyAccessToken, checkIsStaffOrAdmin, getAllPhone)
	.post(
		verifyAccessToken,
		checkIsStaffOrAdmin,
		uploadCloud.fields([
			{ name: "thumb", maxCount: 1 },
			{ name: "imageLinks", maxCount: 10 },
		]),
		createPhone
	);
router.route("/filter").get(getFilterProduct);
router
	.route("/:pid")
	.get(verifyAccessToken, getOnePhone)
	.put(verifyAccessToken, checkIsStaffOrAdmin, updatePhone)
	.delete(verifyAccessToken, checkIsStaffOrAdmin, deletePhone);

module.exports = router;
