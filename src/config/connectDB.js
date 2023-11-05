//Khoi tao bien mysql sử dụng thư viện mysql2
const mysql = require("mysql2");

// init connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: 3307,
  password: "123456",
  database: "NghiemHongDB",
});

module.exports = {
  connection,
};
