const express = require("express");

const router = express.Router();
const { insertPhones, insertAccount, insertOrder } = require("../controllers/insert");
router.route("/phone").get(insertPhones);
router.route("/account").get(insertAccount);
router.route("/order").get(insertOrder);
module.exports = router;
