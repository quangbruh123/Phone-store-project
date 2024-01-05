const nodemailer = require("nodemailer");

const sendEmail = async (mailContent, email) => {
	const transporter = nodemailer.createTransport({
		host: "smtp.gmail.com",
		port: 465,
		secure: true,
		auth: {
			user: process.env.EMAIL,
			pass: process.env.EMAIL_APP_PASSWORD,
		},
	});

	const mainOptions = {
		// thiết lập đối tượng, nội dung gửi mail
		from: `"CuaHangDienThoaiDMT" <no-reply@cuahangdientu.com>`,
		to: email,
		...mailContent,
	};

	try {
		await transporter.sendMail(mainOptions);
		return true;
	} catch (error) {
		return false;
	}
};

module.exports = sendEmail;

//subject: "Test Nodemailer";
// text: "You recieved message from " + req.body.email,
//,
