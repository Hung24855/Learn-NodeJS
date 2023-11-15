const express = require("express");
const router = express.Router();

const {
  getHomePage,
  getLoginPage,
  get404Page,
  createUser,
  getCreatePage,
  getEditPage,
  updateUser,
  confirmDeleteUser,
  deleteUser,
} = require("../controllers/homeController");

//router.Method("/router" , handle) handle sẽ được express truyền cho 2 biến req và res

router.get("/", getHomePage);
router.get("/login", getLoginPage);
router.get("/create", getCreatePage);
router.get("/edit/:id", getEditPage);
router.post("/create-user", createUser);
router.post("/update-user", updateUser);
router.post("/confirm-delete/:id", confirmDeleteUser);
router.post("/delete-user", deleteUser);

module.exports = router;
