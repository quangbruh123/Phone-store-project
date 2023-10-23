const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8000;

// Middlewares
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

try {
  app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}/`);
  });
} catch (error) {
  console.log(error);
}
