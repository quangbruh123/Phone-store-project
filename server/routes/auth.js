const express = require("express");

const router = express.Router();
const { register, login, forgotPassword, renewAccessToken, checkResetToken } = require("../controllers/auth");
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/forget-password").post(forgotPassword);
router.route("/refresh-token").get(renewAccessToken);
router.route("/reset-token").post(checkResetToken);

module.exports = router;
