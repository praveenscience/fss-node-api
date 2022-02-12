const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.json("Hello FSS! 👋🏻");
});

app.get("/chintan357", (req, res) => {
  res.json("Hello Chintan! 👋🏻");
});
app.get("/loki", (req, res) => {
  res.json("Hello Lokesh V! 👋🏻");
});

app.listen(port, () => {
  console.log(`Server started in port ${port}.`);
});
