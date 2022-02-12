const express = require("express");
const app = express();
const port = 5000;
const Users = require("./routes/users");

app.get("/", (req, res) => {
  res.json("Hello FSS! 👋🏻");
});

app.use("/users", Users);

app.listen(port, () => {
  console.log(`Server started in port ${port}.`);
});
