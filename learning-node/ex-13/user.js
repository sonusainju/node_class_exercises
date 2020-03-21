// Create the express router to handle our home requests
var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
  res.send("Please log to get a user");
});

router.post("/", function(req, res) {
    res.send("Please log to create a user");
  });

router.put("/", function(req, res) {
    res.send("Please log to update a user");
  });

  router.delete("/", function(req, res) {
    res.send("Please delete to update a user");
  });
module.exports = router;