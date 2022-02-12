const express = require("express");
const app = express.Router();
const Users = require("../constants/Users");

app.get("/", (req, res) => {
  res.json(Users);
});
app.get("/:User", (req, res) => {
  if (Users[req.params.User]) {
    res.json(Users[req.params.User]);
  } else {
    res.status(404).json("Dei poda!");
  }
});

module.exports = app;
