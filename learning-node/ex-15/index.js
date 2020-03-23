const express = require("express");
const morgan = require("morgan");

// create express server
const app = express();

app.use(morgan('tiny'));

// Middleware to show time
const requestTime = (req, res, next)=>{
    const message = `Request: ${req.baseUrl} ${Date.now()}`;

    console.log(message);

    next();

};

app.use(requestTime);

app.get("/", function(req,res){
    res.json({
        "status":200,
        "message": "Este request/response está OK"
    });
});

app.listen(3000, function(){
    console.log("Listening on port 3000");
})