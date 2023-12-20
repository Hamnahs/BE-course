let express = require('express');
let app = express();


// app should not serve files from any other folders except from /public directory
app.use("/public", express.static(__dirname + "/public"))

app.use((req, res,next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
});



// app.get("/", (req, res) => {
//     res.json({"message": "Hello json"})
// });

// app.get("/json", (req, res) => {
//         let response;
//         if (process.env.VAR_NAME === "allCaps") {
//             response = "Hello World".toUpperCase();
//         } else {
//             response = "Hello World";
//         }
//         res.json({message: response})
//     }
// )

module.exports = app;
