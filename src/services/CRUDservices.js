const { connection } = require("../config/connectDB");

const getAllUsers = async () => {
  let [listUser, filed] = await connection.query("SELECT * FROM Users");
  return listUser;
};

module.exports = {
  getAllUsers,
};
