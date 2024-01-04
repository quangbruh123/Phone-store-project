const express = require("express");

const router = express.Router();
const { createOrder, getAllOrder, getUserOrder, updateStatus } = require("../controllers/order");
const { verifyAccessToken, checkIsUser, checkIsStaffOrAdmin } = require("../middlewares/verifyToken");

router.route("/").post(verifyAccessToken, createOrder).get(verifyAccessToken, getUserOrder);
router.route("/get-all").get(verifyAccessToken, checkIsStaffOrAdmin, getAllOrder);
router.route("/update-status").put(updateStatus);

module.exports = router;
