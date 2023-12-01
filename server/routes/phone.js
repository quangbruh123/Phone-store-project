const express = require("express");
const router = express.Router();
const { getAllPhone, getFilterProduct, getOnePhone, createPhone, updatePhone, deletePhone } = require("../controllers/phone");

router.route("/").get(getAllPhone).post(createPhone);
router.route("/filter").get(getFilterProduct);
router.route("/:pid").get(getOnePhone).put(updatePhone).delete(deletePhone);

module.exports = router;
