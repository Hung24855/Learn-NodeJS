const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.render("Home.ejs"); // render ra view engine Home.ejs
});

router.get("login", function (req, res) {
  res.send("Check login !");
});

router.get("*", function (req, res) {
  res.send("Check ABC");
});

module.exports = router;
