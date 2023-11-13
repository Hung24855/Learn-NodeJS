const { connection } = require("../config/connectDB");

const getHomePage = (req, res) => {
  // execute will internally call prepare and query
  connection.execute("SELECT * FROM Users", function (err, results) {
    //console.log(results); // results contains rows returned by server
    res.render("Home.ejs"); // render ra view engine Home.ejs
  });
};

const getLoginPage = (req, res) => {
  res.send("Check login !");
};
const createUser = (req, res) => {
  console.log("Check req.body : ", req.body);
  res.send("Create User");
};

const get404Page = (req, res) => {
  res.send("Page 404!");
};

module.exports = {
  getHomePage,
  getLoginPage,
  get404Page,
  createUser,
};
