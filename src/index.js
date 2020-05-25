require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const PORT = process.env.APP_PORT;
const HOST = process.env.APP_HOST;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const submitRoute = require("./controls/submit.routes");
app.use("/submit", submitRoute);

app.listen(PORT || 4200);
console.log(`Sheets server listening at ${HOST || "http://localhost"}:${PORT}`);
