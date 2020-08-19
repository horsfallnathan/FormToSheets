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

const submitRoute = require("./controls/submit.routes");
app.use("/submit", submitRoute);

app.listen(PORT);
console.log(`Sheets server listening at ${HOST}:${PORT}`);
