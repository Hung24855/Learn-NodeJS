// do cài express nên có thể sử dụng nó ở đây
const express = require("express");
const configViewEngine = require("./src/config/viewEngine");
const configStaticFile = require("./src/config/staticFile.js");
const webRouter = require("./src/routes/web.js");
const mysql = require("mysql2");

// app express
const app = express();

//Config dotenv nếu muốn truy cập file .env
require("dotenv").config();

// thư viện path giúp mk có thể lấy được đường dẫn hiện tại đang đứng . Hiện tại file mk đang đứng là file sever.js
var path = require("path");

//Sử dụng biến trong file .env
const Port = process.env.PORT;

//Config template engine
configViewEngine(app);

//Config static file
configStaticFile(app);

//Khai báo route <Điều hướng>
app.use("/", webRouter);

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: 3307,
  password: "123456",
  database: "NghiemHongDB",
});

// execute will internally call prepare and query
connection.execute(
  "SELECT * FROM Users",
  ["Rick C-137", 53],
  function (err, results) {
    console.log(results); // results contains rows returned by server
  }
);

app.listen(Port, () => {
  console.log("Xin chào Nghiêm Hồng!");
  console.log("Port : ", Port);
});
