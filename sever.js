// do cài express nên có thể sử dụng nó ở đây
const express = require("express");
const configViewEngine = require("./src/config/viewEngine");
const configStaticFile = require("./src/config/staticFile.js");
const webRouter = require("./src/routes/web.js");

// app express
const app = express();

// thư viện path giúp mk có thể lấy được đường dẫn hiện tại đang đứng . Hiện tại file mk đang đứng là file sever.js
var path = require("path");

// Kích hoạt middleware để xử lý dữ liệu JSON
app.use(express.json());
// Kích hoạt middleware để xử lý dữ liệu từ biểu mẫu
app.use(express.urlencoded({ extended: true }));

//Config dotenv nếu muốn truy cập file .env
require("dotenv").config();
//Sử dụng biến trong file .env
const Port = process.env.PORT;

//Config template engine
configViewEngine(app);

//Config static file
configStaticFile(app);

//Khai báo route <Điều hướng>
app.use("/", webRouter);

app.listen(Port, () => {
  console.log(`http://localhost:${Port}/`);
});
