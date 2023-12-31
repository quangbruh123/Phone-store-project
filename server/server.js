const express = require('express');
require('dotenv').config();
const cors = require('cors');
const connect = require('./config/connect');
const notFound = require('./middlewares/not-found');
const errorHandler = require('./middlewares/error-handler');

const app = express();
const port = process.env.PORT || 8000;

const mainRouter = require('./routes');
const handlingResponse = require('./middlewares/handlingResponse');
const cookieParser = require('cookie-parser');
// Middlewares
app.use(cookieParser());
app.use(
  cors({
    origin: 'http://localhost:5000',
    credentials: true,
  })
);
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use('/api/v1', mainRouter);

app.use(notFound);
app.use(errorHandler);

const start = async () => {
  try {
    await connect(process.env.MONGO_URL);
    console.log('Connected to mongodb');
    app.listen(port, () => {
      console.log(`Listening on http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
