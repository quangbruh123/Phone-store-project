const express = require("express");

const router = express.Router();

const phoneRouter = require("./phone");
const userRouter = require("./user");
const insertingRouter = require("./insert");
const authRouter = require("./auth");
router.use("/phone", phoneRouter);
router.use("/user", userRouter);
router.use("/insert", insertingRouter);
router.use("/auth", authRouter);

module.exports = router;
