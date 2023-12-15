let express = require('express');
let app = express();

console.log("Hello World");

app.get("/", (req, res) => {
    res.json({"message": "Hello json"})
});

app.get("/json", (req, res) => {
    let response;
        if(process.env.MESSAGE_STYLE === "allCaps")
        {
            response = "Hello World!".toUpperCase();
        }
        else{
            response = "Hello World!";
        }
        res.json({message:response})
    }
)


// app should not serve files from any other folders except from /public directory
// app.use("/public", express.static(__dirname + "/public"))


module.exports = app;
