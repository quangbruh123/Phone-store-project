const express = require("express");

const router = express.Router();

const phoneRouter = require("./phone");
const userRouter = require("./user");

router.use("/phone", phoneRouter);
router.use("/user", userRouter);

module.exports = router;
