const Order = require("../models/order");
const User = require("../models/user");
const Coupon = require("../models/coupon");
const asyncHandler = require("express-async-handler");
const CustomAPIError = require("../error/customError");
const sendEmail = require("../utils/sendEmail");

const createOrder = asyncHandler(async (req, res) => {
	const { _id } = req.user;
	const { couponId } = req.body;
	const user = await User.findById(_id).select("cart").populate("cart.product", "phoneName price");
	const products = user.cart.map((obj) => {
		console.log(obj);
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
			totalCost = Math.round((totalCost * (1 - coupon.discount / 100)) / 1000) * 1000;
		}
	}

	await User.findByIdAndUpdate(_id, { cart: [] }, { new: true, runValidators: true });

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

	const updated = await Order.findByIdAndUpdate(oid, { status, dateProceeded: Date.now() }, { new: true })
		.populate("orderBy", "name email")
		.populate("products.productId", "phoneName price");

	if (!updated) {
		throw new CustomAPIError("No order with that id", 400);
	}

	const mailContent = {
		subject: "Thông báo tình trạng đặt hàng",
		html: `<h2>Xác Nhận Đơn Đặt Hàng</h2>
        <p>Kính gửi quý khách ${updated.orderBy.name},</p>
        <p>Cảm ơn quý khách đã đặt hàng từ chúng tôi. Chúng tôi xin thông báo rằng đơn đặt hàng của quý khách đã được xác nhận thành công.</p>
        <p><strong>Chi Tiết Đơn Hàng:</strong></p>
        <ul>
            <li><strong>Mã Đơn Hàng:</strong> ${updated._id}</li>
            <li><strong>Sản Phẩm:</strong> ${updated.products
				.reduce((prev, cur) => {
					return prev + `${cur.productId.phoneName} (SL: ${cur.quantity}, ${cur.phoneStorage}), `;
				}, "")
				.slice(0, -1)}</li>
            <li><strong>Tổng Giá Tiền:</strong> ${updated.total}</li>
        </ul>
        <p>Đơn đặt hàng của quý khách sẽ được xử lý sớm, và quý khách sẽ nhận được xác nhận khi hàng được gửi đi.</p>
        <p>Cảm ơn quý khách đã lựa chọn dịch vụ của chúng tôi!</p>
        <p>Trân trọng,<br> [Tên Công Ty Của Bạn]</p>`,
	};

	const rs = await sendEmail(mailContent, updated.orderBy.email);

	return res.status(rs ? 204 : 500).send();
});

const getUserOrder = asyncHandler(async (req, res) => {
	const { _id } = req.user;
	const { status = "Pending" } = req.query;
	const order = await Order.find({ orderBy: _id, status });

	return res.status(200).json(order);
});

const getAllOrder = asyncHandler(async (req, res) => {
	const { status = "Pending" } = req.query;
	const orders = await Order.find({ status }).populate("coupon").populate("orderBy", "name");
	return res.status(200).json(orders);
});

module.exports = {
	createOrder,
	updateStatus,
	getUserOrder,
	getAllOrder,
};
