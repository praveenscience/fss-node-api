const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.json("Hello FSS! 👋🏻");
});

app.get("/:User", (req, res) => {
  res.json(`Hello ${req.params.User}! 👋🏻`);
});

app.listen(port, () => {
  console.log(`Server started in port ${port}.`);
});
