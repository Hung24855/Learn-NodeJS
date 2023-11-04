// do cài express nên có thể sử dụng nó ở đây
const express = require("express");

// app express
const app = express();

//Config dotenv nếu muốn truy cập file .env
require("dotenv").config();

// thư viện path giúp mk có thể lấy được đường dẫn hiện tại đang đứng . Hiện tại file mk đang đứng là file sever.js
var path = require("path");

//Sử dụng biến trong file .env
const Port = process.env.PORT;

//Config template engine
app.set("view engine", "ejs"); // Khai báo sử dụng view engine ejs
app.set("views", path.join(__dirname, "./src/views")); // Tạo đường dẫn đến nơi lưu trữ các view engine

//Config static file
app.use(express.static(path.join(__dirname, "./src/public")));

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

app.listen(Port, () => {
  console.log("Xin chào Nghiêm Hồng!");
  console.log("Port : ", Port);
});
