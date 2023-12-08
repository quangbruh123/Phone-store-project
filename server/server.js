const express = require("express");
require("dotenv").config();
const cors = require("cors");
const connect = require("./config/connect");
const notFound = require("./middlewares/not-found");
const errorHandler = require("./middlewares/error-handler");

const app = express();
const port = process.env.PORT || 8000;

const mainRouter = require("./routes");
const handlingResponse = require("./middlewares/handlingResponse");
// Middlewares
app.use(
	cors({
		credentials: true,
	})
);
app.use(express.json());
app.use(
	express.urlencoded({
		extended: true,
	})
);

app.use("/api/v1", mainRouter);
app.use(handlingResponse);

app.use(notFound);
app.use(errorHandler);

const start = async () => {
	try {
		await connect(process.env.MONGO_URL);
		console.log("Connected to mongodb");
		app.listen(port, () => {
			console.log(`Listening on http://localhost:${port}`);
		});
	} catch (error) {
		console.log(error);
	}
};

start();
