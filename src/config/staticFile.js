const express = require("express");
const path = require("path");

const staticFile = (app) => {
  app.use(express.static(path.join("./src", "public")));
};

module.exports = staticFile;
