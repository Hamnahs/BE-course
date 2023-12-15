let express = require('express');
let app = express();

console.log("Hello World");

app.get("/json", (req,res)=>{
    res.json({"message": "Hello json"})
});


// app should not serve files from any other folders except from /public directory
// app.use("/public", express.static(__dirname + "/public"))


module.exports = app;
