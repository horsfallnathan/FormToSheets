require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const PORT = process.env.APP_PORT || 4200;
const HOST = process.env.APP_HOST || "http://localhost";
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get("/test", (req, res) => {
  res.status(200).send("Hello World!");
});

const { router: submitRoute } = require("./controls/submit.routes");
app.use("/submit", submitRoute);

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT);
  console.log(`Sheets server listening at ${HOST}:${PORT}`);
}

export { app };
