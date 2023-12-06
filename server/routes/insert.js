const express = require("express");

const router = express.Router();
const { insertPhones } = require("../controllers/insert");
router.route("/phone").get(insertPhones);

module.exports = router;
