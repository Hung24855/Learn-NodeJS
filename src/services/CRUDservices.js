const { connection } = require("../config/connectDB");

const getAllUsers = async () => {
  let [listUser, filed] = await connection.query("SELECT * FROM Users");
  return listUser;
};

const getUserByID = async (userID) => {
  let [User, fields] = await connection.query(
    `
    select * from Users where id = ?
  `,
    [userID]
  );
  return User;
};

const createNewUser = async (email, name, city) => {
  // ? : tượng trưng cho việc dữ liệu sẽ được lấy động . Và data sẽ được truyển động vào từ tham số thứ hai [email , name , city]
  let [results, fields] = await connection.query(
    `INSERT INTO  Users (email , name , city) VALUES (?,?,?)`,
    [email, name, city]
  );
};

const updateUserByID = async (email, name, city, id) => {
  let [results, fields] = await connection.query(
    `UPDATE  Users SET email = ? , name = ? , city = ? WHERE id = ? `,
    [email, name, city, id]
  );
};

module.exports = {
  getAllUsers,
  getUserByID,
  createNewUser,
  updateUserByID,
};
