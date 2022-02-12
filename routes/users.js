const express = require("express");
const app = express.Router();

const Users = {
  loki: "Lokesh Venkatesan",
  praveen: "Praveen Kumar Purushothaman",
  sridhu: "Sridhar Kasukurthy",
  jo: "Joshua Poddoku",
  ved001: "Vedant Khairnar"
};

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
