const express = require("express");
const router = express.Router();

const {
  getHomePage,
  getLoginPage,
  get404Page,
  createUser,
} = require("../controllers/homeController");

//router.Method("/router" , handle) handle sẽ được express truyền cho 2 biến req và res

router.get("/", getHomePage);

router.get("/login", getLoginPage);
router.post("/create-user", createUser);

module.exports = router;
