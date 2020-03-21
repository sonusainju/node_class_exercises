const express = require("express");
const app = express();

const path = require("path");

app.get("/", function(req, res) {
    res.status(200).sendFile(path.join(__dirname, "index.html"));
});

app.use("/assets", express.static("public"));


// for any page request that not above
app.use(function(req, res,next){
    res.status(404).send("Not found");

});

  app.listen(3000, function() {
    console.log("Example app listening on port 3000!");
  });