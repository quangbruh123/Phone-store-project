const express = require("express");

const router = express.Router();

const phoneRouter = require("./phone");
const userRouter = require("./user");
const insertingRouter = require("./insert");

router.use("/phone", phoneRouter);
router.use("/user", userRouter);
router.use("/insert", insertingRouter);

module.exports = router;
