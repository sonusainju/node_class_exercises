
const express = require("express");
const app = express();

// Routers
const home = require("./home.js");
const users = require("./user.js");

app.use("/", home);
app.use("/users", users);

app.listen(3000, function() {
    console.log("Example app listening on port 3000!");
  });