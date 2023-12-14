const express = require("express");
const router = express.Router();
const { getAllPhone, getFilterProduct, getOnePhone, createPhone, updatePhone, deletePhone } = require("../controllers/phone");
const { verifyToken, checkingAdmin } = require("../middlewares/verifyToken");

router.route("/").get(verifyToken, checkingAdmin, getAllPhone).post(createPhone);
router.route("/filter").get(getFilterProduct);
router.route("/:pid").get(verifyToken, getOnePhone).put(verifyToken, checkingAdmin, updatePhone).delete(verifyToken, checkingAdmin, deletePhone);

module.exports = router;
