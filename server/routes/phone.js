const express = require("express");
const router = express.Router();
const { getAllPhone, getFilterProduct, getOnePhone, createPhone, updatePhone, deletePhone } = require("../controllers/phone");
const { verifyAccessToken, checkIsStaffOrAdmin } = require("../middlewares/verifyToken");

router.route("/").get(verifyAccessToken, checkIsStaffOrAdmin, getAllPhone).post(createPhone);
router.route("/filter").get(getFilterProduct);
router.route("/:pid").get(getOnePhone).put(verifyAccessToken, checkIsStaffOrAdmin, updatePhone).delete(verifyAccessToken, checkIsStaffOrAdmin, deletePhone);

module.exports = router;
