const express = require("express");
const router = express.Router();
const { getAllUser, getCurrentUser, getOneUser, updateUser, deleteUser } = require("../controllers/user");

router.route("/").get(getAllUser);
router.route("/current").get(getCurrentUser);
router.route("/:uid").get(getOneUser).put(updateUser).delete(deleteUser);

module.exports = router;
