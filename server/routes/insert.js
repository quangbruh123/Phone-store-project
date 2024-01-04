const express = require("express");

const router = express.Router();
const { insertPhones, insertAccount, insertOrder, change, insertBrand } = require("../controllers/insert");
router.route("/phone").get(insertPhones);
router.route("/account").get(insertAccount);
router.route("/order").get(insertOrder);
router.route("/change").get(change);
router.route("/brand").get(insertBrand);
module.exports = router;
