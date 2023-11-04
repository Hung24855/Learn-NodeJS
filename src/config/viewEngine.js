const path = require("path");

const configViewEngine = (app) => {
  app.set("view engine", "ejs"); // Khai báo sử dụng view engine ejs
  //Tham số thứ nhaasrt của path.join() là __dirname : Thư mục cha lưu trữ mã
  //console.log(__dirname);
  app.set("views", path.join("./src", "views")); // Tạo đường dẫn đến nơi lưu trữ các view engine
};

module.exports = configViewEngine;
