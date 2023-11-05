//Khoi tao bien mysql sử dụng thư viện mysql2
const mysql = require("mysql2");

require("dotenv").config();

// init connection
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

module.exports = {
  connection,
};