const express = require("express");
const path = require("path");
const fs = require("fs");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});

/* GET cors test page. */
router.get("/cors", function (req, res, next) {
  res.render("cors");
});

router.post("/test", function (req, res, next) {
  console.log('호출 성공');
  return res.status(200).json({"data": "Success"});
});

module.exports = router;
