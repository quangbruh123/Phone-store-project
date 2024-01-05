const nodemailer = require("nodemailer");

const sendEmail = async (mailContent, email) => {
	const transporter = nodemailer.createTransport({
		// config mail server
		service: "Gmail",
		auth: {
			user: process.env.EMAIL,
			pass: process.env.EMAIL_APP_PASSWORD,
		},
	});

	const mainOptions = {
		// thiết lập đối tượng, nội dung gửi mail
		from: "Cửa hàng điện thoại DMT",
		to: email,
		...mailContent,
	};

	try {
		await transporter.sendMail(mainOptions);
		return true;
	} catch (error) {
		return error;
	}
};

module.exports = sendEmail;

//subject: "Test Nodemailer";
// text: "You recieved message from " + req.body.email,
// 		html: `<h2>Xác Nhận Đơn Đặt Hàng</h2>
//         <p>Kính gửi quý khách ${order.orderBy.name},</p>
//         <p>Cảm ơn quý khách đã đặt hàng từ chúng tôi. Chúng tôi xin thông báo rằng đơn đặt hàng của quý khách đã được xác nhận thành công.</p>
//         <p><strong>Chi Tiết Đơn Hàng:</strong></p>
//         <ul>
//             <li><strong>Mã Đơn Hàng:</strong> ${order._id}</li>
//             <li><strong>Sản Phẩm:</strong> ${order.products
// 				.reduce((prev, cur) => {
// 					return prev + `${cur.productId.phoneName} (SL: ${cur.quantity}, ${cur.phoneStorage}), `;
// 				}, "")
// 				.slice(0, -1)}</li>
//             <li><strong>Tổng Giá Tiền:</strong> ${order.total}</li>
//         </ul>
//         <p>Đơn đặt hàng của quý khách sẽ được xử lý sớm, và quý khách sẽ nhận được xác nhận khi hàng được gửi đi.</p>
//         <p>Cảm ơn quý khách đã lựa chọn dịch vụ của chúng tôi!</p>
//         <p>Trân trọng,<br> [Tên Công Ty Của Bạn]</p>`,
