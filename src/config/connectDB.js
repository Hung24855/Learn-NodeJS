//Khoi tao bien mysql sử dụng thư viện mysql2
const mysql = require("mysql2");

require("dotenv").config();

// init connection  - conection pool giúp giới hạn số lượng connection cũng như tái sử dụng các
// connection thay vì đóng lại
const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
});

module.exports = {
  connection,
};
