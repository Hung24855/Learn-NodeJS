const { connection } = require("../config/connectDB");
const {
  getAllUsers,
  getUserByID,
  createNewUser,
  updateUserByID,
} = require("../services/CRUDservices");

const getHomePage = async (req, res) => {
  let listUser = await getAllUsers();
  res.render("Home.ejs", { data: listUser });
};

const getLoginPage = (req, res) => {
  res.send("Check login !");
};

const getCreatePage = (req, res) => {
  res.render("CreateUser.ejs");
};
const getEditPage = async (req, res) => {
  const userID = req.params.id;
  let User = await getUserByID(userID);
  const result = User && User.length > 0 ? User[0] : {};
  res.render("UpdateUser.ejs", { data: result });
};
const createUser = async (req, res) => {
  let { email, name, city } = req.body;
  await createNewUser(email, name, city);
  res.send("Create-user thành công !");
};

const updateUser = async (req, res) => {
  let { email, name, city, id } = req.body;
  await updateUserByID(email, name, city, id);
  res.redirect("/");
};

const get404Page = (req, res) => {
  res.send("Page 404!");
};

module.exports = {
  getHomePage,
  getLoginPage,
  get404Page,
  createUser,
  getCreatePage,
  getEditPage,
  updateUser,
};
