const express = require("express");

const router = express.Router();
const { createBrand, getAllBrands, updateBrand, deleteBrand } = require("../controllers/brand");
const { verifyAccessToken, checkIsStaffOrAdmin } = require("../middlewares/verifyToken");

router.use(verifyAccessToken, checkIsStaffOrAdmin);
router.route("/").get(getAllBrands).post(createBrand);
router.route("/:bid").put(updateBrand).delete(deleteBrand);

module.exports = router;
