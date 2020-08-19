const express = require("express");
const router = express.Router();
const axios = require("axios");
const { updateSheet } = require("./updateSheet");
router.post("/", Submit);
const schema = require("../utils/public.yup.schema");
const secret_key = process.env.RECAPTCHA_SECRET_KEY;

function Submit(req, res, next) {
  const { data, token } = req.body;
  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${token}`;

  axios(url, {
    method: "post",
  })
    .then((response) => {
      return response.data;
    })
    .then((response) => {
      if (response.success !== true) throw new Error("captcha failed");
    })
    .then(() => {
      schema.isValid(data).then(() => {
        updateSheet(data)
          .then(() => {
            res.json("Form submitted successfully");
          })
          .catch((err) => {
            res.status(504).send("error with submission");
          });
      });
    })
    .catch((err) => {
      res.status(504).send("error with form input or captcha");
    });
}

module.exports = router;
