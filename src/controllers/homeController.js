const { connection } = require("../config/connectDB");
const { getAllUsers } = require("../services/CRUDservices");

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
const createUser = async (req, res) => {
  let { email, name, city } = req.body;
  // ? : tượng trưng cho việc dữ liệu sẽ được lấy động . Và data sẽ được truyển động vào từ tham số thứ hai [email , name , city]
  let [results, fields] = await connection.query(
    `INSERT INTO  Users (email , name , city) VALUES (?,?,?)`,
    [email, name, city]
  );
  res.send("Create-user thành công !");
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
};
