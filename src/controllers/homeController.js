const getHomePage = (req, res) => {
  res.render("Home.ejs"); // render ra view engine Home.ejs
};

const getLoginPage = (req, res) => {
  res.send("Check login !");
};

const get404Page = (req, res) => {
  res.send("Page 404!");
};

module.exports = {
  getHomePage,
  getLoginPage,
  get404Page,
};
