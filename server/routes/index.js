const express = require("express");

const router = express.Router();

const phoneRouter = require("./phone");
const userRouter = require("./user");
const insertingRouter = require("./insert");
const authRouter = require("./auth");
const orderRouter = require("./order");
router.use("/phone", phoneRouter);
router.use("/user", userRouter);
router.use("/insert", insertingRouter);
router.use("/auth", authRouter);
router.use("/order", orderRouter);
module.exports = router;
