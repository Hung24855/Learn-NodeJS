const express = require("express");
const router = express.Router();

const {
  getHomePage,
  getLoginPage,
  get404Page,
} = require("../controllers/homeController");

//router.Method("/router" , handle) handle sẽ được express truyền cho 2 biến req và res

router.get("/", getHomePage);

router.get("login", getLoginPage);

router.get("*", get404Page);

module.exports = router;