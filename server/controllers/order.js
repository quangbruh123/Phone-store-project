const Order = require("../models/order");
const User = require("../models/user");
const Coupon = require("../models/coupon");
const asyncHandler = require("express-async-handler");
const CustomAPIError = require("../error/customError");

const createOrder = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { couponId } = req.body;
  const user = await User.findById(_id)
    .select("cart")
    .populate("cart.product", "phoneName price");
  const products = user.cart.map((obj) => {
    return {
      productId: obj.product._id.toString(),
      quantity: obj.quantity,
      phoneStorage: obj.phoneStorage,
    };
  });
  let totalCost = user.cart.reduce((prev, current) => {
    return current.price * current.quantity + prev;
  }, 0);

  let coupon = null;
  if (couponId) {
    coupon = await Coupon.findById(couponId);
    if (coupon) {
      totalCost =
        Math.round((totalCost * (1 - coupon.discount / 100)) / 1000) * 1000;
    }
  }

  const newOrder = await Order.create({
    products,
    total: totalCost,
    coupon: coupon?._id,
    orderBy: _id,
  });
  return res.status(201).json({
    newOrder,
  });
});

const updateStatus = asyncHandler(async (req, res) => {
  const { status, oid } = req.body;

  const updated = await Order.findByIdAndUpdate(
    oid,
    { status, dateProceeded: Date.now() },
    { new: true }
  )
    .populate("orderBy", "name")
    .populate("products.productId", "phoneName price");

  if (!updated) {
    throw new CustomAPIError("No order with that id", 400);
  }

  if (updated.status === "Accepted") {
  }

  return res.status(204).send();
});

const getUserOrder = asyncHandler(async (req, res) => {
  const { _id } = req.user;

  const order = await Order.find({ orderBy: _id });

  return res.status(200).json({
    order,
  });
});

const getAllOrder = asyncHandler(async (req, res) => {
  const { status = "Pending" } = req.query;
  const orders = await Order.find({ status })
    .populate("coupon")
    .populate("orderBy", "name");

  return res.status(200).json(orders);
});

module.exports = {
  createOrder,
  updateStatus,
  getUserOrder,
  getAllOrder,
};
