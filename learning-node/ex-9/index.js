const express = require("express");
const port = 3000;
const app = express();

app.get("/", function(request, response){
    response.end("Congrats you're using your first Node.js and Express as Web Server");
} );

app.listen(port, ()=>{
    console.log("This HTTP server is running on port " + port);
});

