const express = require("express"); // do cài express nên có thể sử dụng nó ở đây
const app = express(); // app express

//Khai báo route <Điều hướng>
app.get("/", function (req, res) {
  res.send("Home page");
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
