const express = require("express"); // do cài express nên có thể sử dụng nó ở đây
const app = express(); // app express

var path = require("path"); // thư viện path giúp mk có thể lấy được đường dẫn hiện tại đang đứng . Hiện tại file mk đang đứng là file sever.js

app.set("view engine", "ejs"); // Khai báo sử dụng view engine ejs
app.set("views", path.join(__dirname, "./src/views")); // Tạo đường dẫn đến nơi lưu trữ các view engine
//Khai báo route <Điều hướng>
app.get("/", function (req, res) {
  res.render("Home.ejs"); // render ra view engine Home.ejs
});

app.get("login", function (req, res) {
  res.send("Check login !");
});

app.get("*", function (req, res) {
  res.send("Check ABC");
});

app.listen(3000, () => {
  console.log("Xin chào Nghiêm Hồng!");
});
